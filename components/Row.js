'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    return (
      <tr className="row">
        {
          this.props.row.map((cell, index) =>
            <Cell 
              key={index}
              cell={cell}
              onChange={this.props.onChange.bind(null,index)}
              onFocus={this.props.onFocus.bind(null,index)} />
          )
        }
      </tr>
    )
  }
}

Row.propTypes = {
  row: React.PropTypes.array,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func
}

module.exports = Row;
