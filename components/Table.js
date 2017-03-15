'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {this.props.table.map((row, column) => <Row
            row={row}
            key={column}
            onChange={this.props.onChange.bind(null, column)}
            onFocus={this.props.onFocus.bind(null, column)} />
          )}
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
