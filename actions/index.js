'use strict';

function addColumn (ev) {
  ev.preventDefault()
  var table = this.state.table
  table.map(row => row.push(''))
  this.setState({
    table: table
  })
}

function addRow (ev) {
  ev.preventDefault()
  var table = this.state.table
  var columns = table[0].length
  var newRow = []
  for (var i = 0; i < columns; i++) {
    newRow.push('')
  }
  table.push(newRow)
  this.setState({
    table: table
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  var table = this.state.table
  table[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: table
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({focused: [rowIndex, columnIndex]})
}

function blurCell () {
  this.setState({focused: null})
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length > 1) {
    this.setState({table: this.state.table.slice(0, this.state.table.length -1)})
  }
}

function removeColumn (ev) {
  ev.preventDefault()
  var table = this.state.table
  if (table[0].length > 1) {
    table = table.map(row => row.slice(0, row.length -1))
    this.setState({
      table: table
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
