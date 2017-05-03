'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {
            this.props.table.map((row, rowIndex) => (
                <Row row={row} key={rowIndex} onChange={this.props.onChange.bind(null, rowIndex)} onFocus={this.props.onFocus.bind(null, rowIndex)} onBlur={this.props.onBlur} />
              )
            )
          }
        </tbody>
      </table>
    )
  }
}
