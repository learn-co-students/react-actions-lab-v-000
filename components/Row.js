'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return (
      <tr className="row">
        {this.props.row.map((cell, column) => <Cell
          cell={cell}
          key={column}
          onChange={this.props.onChange.bind(null, column)}
          onFocus={this.props.onFocus.bind(null, column)}
          />
        )}
      </tr>
    )
  }
}
