const handlebars = require('handlebars');

module.exports = function runTemplate(template, config) {
  if (/[^{]\{\{[^{]/.test(template)) {
    throw new Error(
      'Template contains a html escape interpolation: ' // eslint-disable-line prefer-template
      + template.slice(0, 250)
      + (template.length > 250 ? '...' : '')
    );
  }
  return handlebars.compile(template)(config);
};
