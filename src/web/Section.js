const h = require('./h.js');

module.exports = class Section extends React.Component {
  render() {
    return h('div.Section', null,
      h('div.SectionTitle', null,
        h('h2', null, this.props.title)
      ),
      h('div.SectionDescription', null, this.props.description),
      h('div.SectionCards', null, React.Children.map(this.props.children, (child, key) => (
        h('div.SectionCardWrapper', {key}, child)
      )))
    );
  }
};

module.exports.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
};
