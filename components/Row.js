'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    return (
      <tr className='row'>
        {
          this.props.row.map((cell, colIndex) =>
            <Cell key={colIndex} cell={cell} onChange={this.props.onChange.bind(null, colIndex)} onFocus={this.props.onFocus.bind(null, colIndex)} />
          )
        }
      </tr>
    )
  }
}

module.exports = Row;
