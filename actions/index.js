'use strict';

function addColumn (ev) {
  ev.preventDefault();
  
  this.setState({
    table: this.state.table.map(row => [...row, ''])
  })
}

function addRow (ev) {
  ev.preventDefault();

  const width = this.state.table[0].length;

  this.setState({
    table: [...this.state.table, new Array(width).fill('')]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedTable = this.state.table;
  updatedTable[rowIndex][columnIndex] = ev.target.value;
  
  this.setState({
    table: updatedTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
}

function removeColumn (ev) {
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
