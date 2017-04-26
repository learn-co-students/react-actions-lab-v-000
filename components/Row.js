'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const cells = this.props.row
    return (
      <tr className='row'>
        {
        cells.map((cell, index) => (
          <Cell key={index}
          onFocus={this.props.onFocus.bind(null, index)}
          onChange={this.props.onChange.bind(null, index)}
          cell={cell} />
        ))
        }
      </tr>
    )
  }
}
