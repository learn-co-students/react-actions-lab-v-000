'use strict';

import React from 'react';
import Row from './Row'; 
export default class Table extends React.Component {
  render () {
    const { table, onBlur, onChange, onFocus } = this.props; 
    return(
      <table className='table' onBlur={onBlur} >
        <tbody>
          {
            table.map( (row, index) =>
               <Row key={index} row={row} onChange={onChange.bind(null, index)} onFocus={onFocus.bind(null, index)} />  
                ) 
          } 
        </tbody> 
      </table> 
        )
  }
}
