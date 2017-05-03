'use strict';

function addColumn (ev) {
  ev.preventDefault()
  this.setState({
    table: this.state.table.map((row) => [...row, ''])
  })
}

function addRow (ev) {
  ev.preventDefault()
  this.setState({
    table: [...this.state.table, (this.state.table[0].map(() => ''))]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const value = ev.target.value
  const newTable = this.state.table.slice()
  newTable[rowIndex][columnIndex] = value

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
  ev.preventDefault()
  if(this.state.table.length > 1) {
    this.setState({
      table: this.state.table.slice(0, -1)
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  if(this.state.table[0].length > 1) {
    this.setState({
      table: this.state.table.map((row) => row.slice(0, -1))
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
