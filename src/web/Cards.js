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
        id: value,
        checked: this.props.value[key] === value,
        onClick: () => {
          const obj = Object.assign(
            {},
            this.props.value,
            {[key]: value}
          );
          this.props.onChange(obj);
        },
      });
    };

    return h('div', {className: 'Cards'},
      h(Section, {title: 'Build tool', description: text.buildTool},
        makeCard('buildTool', 'webpack', 'Webpack', text.webpack),
        makeCard('buildTool', 'rollup', 'Rollup', text.rollup)
      ),
      h(Section, {title: 'State manager', description: text.stateManager},
        makeCard('stateTool', 'redux', 'Redux', text.redux),
        makeCard('stateTool', 'mobx', 'Mobx', text.mobx),
        makeCard('stateTool', 'none', 'None', text.noStateManager)
      ),
      h(Section, {title: 'Component Style', description: text.componentStyle},
        makeCard('componentStyle', 'class', 'ES6 Classes', text.classStyle),
        makeCard('componentStyle', 'function', 'Functions', text.functionStyle),
        makeCard('componentStyle', 'recompose', 'Functions with Recompose', text.recomposeStyle)
      ),
      h(Section, {title: 'Unit Tests', description: text.unitTests},
        makeCard('testTool', 'jest', 'Jest', text.jest),
        makeCard('testTool', 'mocha', 'Mocha', text.mocha),
        makeCard('testTool', 'none', 'None', text.noTests)
      ),
      h(Section, {title: 'Type System', description: text.typeSystem},
        makeCard('typeSystem', 'typescript', 'TypeScript', text.typescript),
        makeCard('typeSystem', 'flow', 'FlowType', text.flow),
        makeCard('typeSystem', 'none', 'None', text.noTypeSystem)
      ),
      h(Section, {title: 'Immutable Tool', description: text.immutableTool},
        makeCard('immutableTool', 'immutablejs', 'Immutable.js', text.immutablejs),
        makeCard('immutableTool', 'none', 'Plain JS', text.noImmutableTool)
      ),
      h(Section, {title: 'Server Rendering', description: text.serverRender},
        makeCard('serverRenderEnabled', 'yes', 'Yes', text.yesServerRendering),
        makeCard('serverRenderEnabled', 'none', 'No', text.noServerRendering)
      )
    );
  }
};

module.exports.propTypes = {
  value: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
