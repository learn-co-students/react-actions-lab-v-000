'use strict';

function addColumn (ev) {
  ev.preventDefault();
  const newTable = this.state.table.map((row) => {
    row.push("");
    return row;
  })
  this.setState({
    table: newTable
  })
}

function addRow (ev) {
  ev.preventDefault();
  const newTable = this.state.table;
  const newRow = newTable[0].map(() => "");
  newTable.push(newRow);
  this.setState({
    table: newTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const cellVal = ev.target.value
  const newRow = this.state.table[rowIndex].slice()
  newRow.splice(columnIndex, 1, cellVal);

  const newTable = this.state.table.slice();
  newTable.splice(rowIndex, 1, newRow);

  this.setState({
    table: newTable
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
  ev.preventDefault();

  if (this.state.table.length > 1) {
    const newTable = this.state.table.slice(0, -1)

    this.setState({
      table: newTable
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();

  if (this.state.table[0].length > 1) {
    const newTable = this.state.table.map((row) => row.slice(0, -1));

    this.setState({
      table: newTable
    })
  }
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
