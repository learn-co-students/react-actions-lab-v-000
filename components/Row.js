'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const cells = this.props.row.map((cell, columnIndex) => (
        <Cell cell={cell} key={columnIndex} onChange={this.props.onChange.bind(null, columnIndex)} onFocus={this.props.onFocus.bind(null, columnIndex)} onBlur={this.props.onBlur} />
      )
    )
    return (
      <tr className="row">
        {cells}
      </tr>
    )
  }
}
