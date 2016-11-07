
exports.presets = {};

exports.presets.default = {

};

const makeLogo = (filename) => `src/web/logos/${filename}`;

exports.logos = {
  webpack: makeLogo('webpack.png'),
  rollup: makeLogo('rollup.jpg'),
};
