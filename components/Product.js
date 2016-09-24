const React = require('react');
const ReactDOM = require('react-dom');

class Product extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightRange(props, propName, componentName){
  componentName = componentName || 'ANONYMOUS' ;

  if (props[propName] ) {
    let value = props[propName];
    if (typeof value === 'number') {
      if (value < 80 || value > 300) {
        return new Error(propName + 'in' + componentName + 'is not between 80 and 300');
      }
    } else {
      return new Error(propName + 'in' + componentName + 'must be number');
    }
  } else {
    return new Error(propName + 'in' + componentName + 'is required');
  }
  return null;
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

module.exports = Product
