'use strict';

import React from 'react';
import actions from '../actions/index';
import Table from './Table';

// [['', 'hi', 'lol'],['', 'moo', 'cans'],['happiness', 'trout', 'lol']]

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.addColumn = actions.addColumn.bind(this);
    this.addRow = actions.addRow.bind(this);
    this.removeColumn = actions.removeColumn.bind(this);
    this.removeRow = actions.removeRow.bind(this);
    this.changeCell = actions.changeCell.bind(this);
    this.focusCell = actions.focusCell.bind(this);
    this.blurCell = actions.blurCell.bind(this);
    this.state = {
      table: [['']],
      focused: null
    };

  }
  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.addColumn}>Add Column</button>
          {' '}
          <button onClick={this.addRow}>Add Row</button>
          {' '}
          <button onClick={this.removeColumn}>Remove Column</button>
          {' '}
          <button onClick={this.removeRow}>Remove Row</button>
        </div>

        <Table changeCell={this.changeCell} focusCell={this.focusCell} blurCell={this.blurCell} table={this.state.table}/>

        <div className='spreadsheet__focused'>
          {this.state.focused}
        </div>
      </div>
    );
  }
}
