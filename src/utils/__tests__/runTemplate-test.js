const runTemplate = require('../runTemplate');

it('runTemplate works', () => {
  const template = 'a{{{b}}}c';
  const config = {b: '<div>'};
  expect(runTemplate(template, config)).toBe('a<div>c');
});

it('runTemplate errors on html interpolation', () => {
  const template = 'a{{b}}c';
  const config = {b: '<div>'};
  expect(() => runTemplate(template, config))
    .toThrow(`Template contains a html escape interpolation: ${template}`);
});
