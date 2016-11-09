
exports.presets = {};

exports.presets.default = {
  buildTool: 'webpack',
  stateTool: 'redux',
  componentStyle: 'class',
  testTool: 'jest',
  typeSystem: 'none',
  immutableTool: 'none',
  serverRenderEnabled: 'none',
};

const makeLogo = filename => `src/web/logos/${filename}`;

exports.logos = {
  webpack: makeLogo('webpack.png'),
  rollup: makeLogo('rollup.jpg'),
};
