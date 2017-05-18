'use strict';

function addColumn (ev) {
  ev.preventDefault()

  const updatedTable = this.state.table.map(row => [...row, ''])
  this.setState({
    table: updatedTable
  })
}

function addRow (ev) {
  ev.preventDefault()

  const newRow = this.state.table[0].slice().fill('')
  const updatedTable = [...this.state.table, newRow]
  this.setState({
    table: updatedTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const table = this.state.table.slice()
  table[rowIndex].splice(columnIndex, 1, ev.target.value)
  this.setState({
    table: table
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

  const table = this.state.table.slice()
  if (table.length === 1) {
    return
  }
  table.splice(-1, 1)
  this.setState({
    table: table
  })
}

function removeColumn (ev) {
  ev.preventDefault()

  const table = this.state.table.slice()
  if (table[0].length === 1) {
    return
  }
  const updatedTable = this.state.table.map(row => {
      const rowCopy = row.slice()
      rowCopy.splice(-1, 1)
      return rowCopy
    }
  )
  this.setState({
    table: updatedTable
  })
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
