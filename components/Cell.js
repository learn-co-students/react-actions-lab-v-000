'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
    return (
      <td className="cell">
        <input 
          value={this.props.cell} 
          onChange={this.props.onChange} 
          onFocus={this.props.onFocus} />
      </td>
    );
  }
}

Cell.proptypes = {
  cell: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func
}

module.exports = Cell;
