'use strict';

const React = require('react');
const actions = require('../actions');
const Table = require('./Table');

class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      focused: null,
      table: [['']]
    };

    this.handleAddColumn = actions.addColumn.bind(this);
    this.handleAddRow = actions.addRow.bind(this);
    this.handleRemoveColumn = actions.removeColumn.bind(this);
    this.handleRemoveRow = actions.removeRow.bind(this);
    this.handleChange = actions.changeCell.bind(this);
    this.handleFocus = actions.focusCell.bind(this);
    this.handleBlur = actions.blurCell.bind(this);

  }
  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button>Add Column</button>
          {' '}
          <button>Add Row</button>
          {' '}
          <button>Remove Column</button>
          {' '}
          <button>Remove Row</button>
        </div>

        <Table />

        <div className='spreadsheet__focused'>
        </div>
      </div>
    );
  }
}

module.exports = Spreadsheet;
