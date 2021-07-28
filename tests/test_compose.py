# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
# SPDX-License-Identifier: MIT

import flowtorch
import flowtorch.bijectors
import flowtorch.params
import torch
import torch.distributions as dist
import torch.optim


def test_compose():
    flow = flowtorch.bijectors.Compose(
        [
            flowtorch.bijectors.AffineAutoregressive(
                flowtorch.params.DenseAutoregressive(),
            ),
            flowtorch.bijectors.AffineAutoregressive(
                flowtorch.params.DenseAutoregressive(),
            ),
            flowtorch.bijectors.AffineAutoregressive(
                flowtorch.params.DenseAutoregressive(),
            ),
        ]
    )

    event_shape = (5,)
    base_dist = dist.Normal(loc=torch.zeros(event_shape), scale=torch.ones(event_shape))
    new_dist = flow(base_dist)
    flow = new_dist.bijector

    optimizer = torch.optim.Adam(flow.params.parameters())
    assert optimizer.param_groups[0]["params"][0].grad is None
    new_dist.log_prob(torch.randn((100,) + event_shape)).sum().backward()
    assert optimizer.param_groups[0]["params"][0].grad.abs().sum().item() > 1e-3
    optimizer.zero_grad()
    assert optimizer.param_groups[0]["params"][0].grad.abs().sum().item() < 1e-3