const h = require('./h.js');
const Section = require('./Section.js');
const Card = require('./Card.js');
const text = require('./text.js');

module.exports = class Cards extends React.Component {
  render() {
    const makeCard = (key, value, title, description) => {
      return h(Card, {
        title,
        description,
        checked: this.props.value[key] === value,
        onClick: () => {
          const obj = Object.assign(
            {},
            this.props.value,
            {[key]: value}
          );
          this.props.onChange(obj);
        }
      });
    };

    return h('div', {className: 'Cards'},
      h(Section, {title: 'Build tool', description: text.buildToolDescription},
        makeCard('buildTool', 'webpack', 'Webpack', text.webpackDescription),
        makeCard('buildTool', 'rollup', 'Rollup', text.rollupDescription)
      )
    );
  }
};

module.exports.propTypes = {
  value: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
