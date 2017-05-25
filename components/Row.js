'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    const { changeCell, focusCell, blurCell, row, rowId } = this.props;

    return (
      <tr id={"row-" + rowId} className="row">
        {
          row.map(function(cell, i){
            return <Cell changeCell={changeCell.bind(null, rowId, i)} focusCell={focusCell.bind(null, rowId, i)} blurCell={blurCell} cell={cell} rowId={rowId} cellId={i} key={rowId + '-' + i}  />
          })
        }
      </tr>
    )
  }
}
