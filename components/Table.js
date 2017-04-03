'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {
  render () {
    const { onBlur, onFocus, onChange, table } = this.props;
    const rows = table.map((r, i) =>
      < Row
        key={i}
        row={r}
        onFocus={onFocus.bind(null, i)}
        onChange={onChange.bind(null, i)}
      />
    );

    return (
      <table className="table" onBlur={onBlur}>
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }
}

module.exports = Table;
