'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    const {table, onBlur, onChange, onFocus } = this.props
    return(
      <table className='table' onBlur={onBlur}>
        <tbody>
          {
            table.map((row, rowIndex) =>
              <Row key={rowIndex}
                row={row}
                onChange={onChange.bind(null, rowIndex)}
                onFocus={onFocus.bind(null, rowIndex)} />
            )
          }
        </tbody>
      </table>
    )
  }
}
