'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {
  render () {
    const { row, onFocus, onChange } = this.props
    const cells = row.map((e, i) =>
        <Cell
          onChange={onChange.bind(null, i)}
          onFocus={onFocus.bind(null, i)}
          cell={e}
          key={i}
        />
    );

    return (
      <tr className="row" >
        { cells }
      </tr>
    )
  }
}

module.exports = Row;
