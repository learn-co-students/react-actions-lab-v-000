'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
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
