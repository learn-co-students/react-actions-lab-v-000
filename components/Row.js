'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const { row, onChange, onFocus } = this.props; 
    return(
      <tr className='row'>
        {
          row.map( (cell, index) => 
            <Cell key={index} cell={cell} onChange={onChange.bind(null, index)} onFocus={onFocus.bind(null, index)} />  
          )
        }
      </tr> 
    ) 
  }
}
