module.exports = [
'api/overview',
{
  type: 'category',
  label: 'flowtorch',
  collapsed: false,  items: [{
  type: 'category',
  label: 'flowtorch.bijectors',
  collapsed: true,  items: ["api/flowtorch.bijectors", "api/flowtorch.bijectors.AffineAutoregressive", "api/flowtorch.bijectors.AffineFixed", "api/flowtorch.bijectors.Bijector", "api/flowtorch.bijectors.Compose", "api/flowtorch.bijectors.ELU", "api/flowtorch.bijectors.Exp", "api/flowtorch.bijectors.Fixed", "api/flowtorch.bijectors.LeakyReLU", "api/flowtorch.bijectors.Power", "api/flowtorch.bijectors.Sigmoid", "api/flowtorch.bijectors.Softplus", "api/flowtorch.bijectors.Tanh", "api/flowtorch.bijectors.VolumePreserving"],
}, {
  type: 'category',
  label: 'flowtorch.distributions',
  collapsed: true,  items: ["api/flowtorch.distributions", "api/flowtorch.distributions.TransformedDistribution"],
}, {
  type: 'category',
  label: 'flowtorch.experimental',
  collapsed: true,  items: [{
  type: 'category',
  label: 'flowtorch.experimental.params',
  collapsed: true,  items: ["api/flowtorch.experimental.params", "api/flowtorch.experimental.params.DenseAutoregressive"],
}],
}, {
  type: 'category',
  label: 'flowtorch.params',
  collapsed: true,  items: ["api/flowtorch.params", "api/flowtorch.params.DenseAutoregressive", "api/flowtorch.params.Empty", "api/flowtorch.params.Params", "api/flowtorch.params.ParamsModule", "api/flowtorch.params.ParamsModuleList", "api/flowtorch.params.Tensor"],
}, {
  type: 'category',
  label: 'flowtorch.utils',
  collapsed: true,  items: ["api/flowtorch.utils", "api/flowtorch.utils.InterfaceError", "api/flowtorch.ops.clamp_preserve_gradients", "api/flowtorch.ops.clipped_sigmoid"],
}],
}
];
