'use strict';

import React from 'react';

export default class Cell extends React.Component {
  constructor(props){
    super(props);
    this.blurCell = this.props.blurCell;
    this.state = {
      value: this.props.cell
    }
  }

  render () {
    const { changeCell, focusCell, blurCell, cell, rowId, cellId } = this.props;
    const cellValue = this.state.value

    return (
      <td className="cell" id={rowId + "-" + cellId}>
        <input value={cell} onChange={changeCell.bind(null, event)} onFocus={focusCell} onBlur={blurCell} />
      </td>
    )
  }
}
