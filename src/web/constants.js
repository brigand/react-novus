
exports.presets = {};

exports.presets.default = {
  buildTool: 'webpack',
  stateTool: 'redux',
  componentStyle: 'class',
  cssTool: 'scss',
  cssModulesEnabled: 'none',
  testTool: 'jest',
  typeSystem: 'none',
  immutableTool: 'none',
  serverRenderEnabled: 'none',
  reduxMiddleware: 'thunk',
};

const makeLogo = filename => `src/web/logos/${filename}`;

exports.logos = {
  webpack: makeLogo('webpack.png'),
  rollup: makeLogo('rollup.jpg'),
  redux: makeLogo('redux.svg'),
};
