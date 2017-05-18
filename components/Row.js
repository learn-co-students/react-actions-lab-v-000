'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const { row, onChange, onFocus } = this.props
    return(
      <tr className='row'>
        {
          row.map((cell, columnIndex) =>
            <Cell key={columnIndex}
              cell={cell}
              onChange={onChange.bind(null, columnIndex)}
              onFocus={onFocus.bind(null, columnIndex)}/>
          )
        }
      </tr>
    )
  }
}
