const h = (selector, props, ...children) => {
  if (typeof selector !== 'string') {
    return React.createElement(selector, props, ...children);
  }

  const classNames = [];
  const tagName = selector.replace(/\.([^.]+)/, (match, className) => {
    classNames.push(className);
    return '';
  });
  let newProps = props;

  if (props && props.className) {
    classNames.push(props.className);
  }

  if (classNames.length) {
    if (!newProps) newProps = {};

    newProps = Object.assign({}, props, {className: classNames.join(' ')})
  }
  return React.createElement(tagName, newProps, ...children);
};

module.exports = h;
