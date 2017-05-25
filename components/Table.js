'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render () {
    const { changeCell, focusCell, blurCell, table }  = this.props;

    return (
      <table className="table"><tbody>
        {
          table.map(function(row, i){
            return <Row changeCell={changeCell} focusCell={focusCell} blurCell={blurCell} row={row} rowId={i} key={i} />
          })
        }
      </tbody></table>
    )
  }
}
