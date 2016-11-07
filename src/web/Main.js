const h = require('./h.js');
const constants = require('./constants.js');
const Cards = require('./Cards.js');

module.exports = class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: constants.presets.default,
    };
  }

  handleChange(value) {
    this.setState({value});
  }

  render() {
    return h('div', null,
      h('h1', null, 'react-novus'),
      h(Cards, {
        value: this.state.value,
        onChange: this.handleChange.bind(this),
      })
    );
  }
};
