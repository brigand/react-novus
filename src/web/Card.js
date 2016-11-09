const h = require('./h.js');
const constants = require('./constants.js');

module.exports = class Card extends React.Component {
  render() {
    const onClick = () => {
      this.props.onClick();
    };

    return h('div.Card', {onClick},
      h('div.CardHeader', null,
        h('div.CardHeaderCheckbox', null, this.renderCheckboxContent()),
        h('div.CardHeaderTitle', null, this.props.title)
      ),
      h('div.CardBody', null,
        h('img.CardLogo', {src: constants.logos[this.props.id]}),
        this.props.description
      )
    );
  }

  renderCheckboxContent() {
    return this.props.checked
      ? h('div.CardHeaderCheckboxSelected', null)
      : h('div.CardHeaderCheckboxEmpty', null);
  }
};

module.exports.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
