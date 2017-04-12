'use strict';

function addColumn (ev) {
  ev.preventDefault();

  const returnTable = this.state.table
  returnTable.map( (row) => row.push('') );
  this.setState({
    table: returnTable
  })
}

function addRow (ev) {
  ev.preventDefault();

  this.setState({
    table: [...this.state.table, this.state.table[0].map( ()=>'' )]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  let returnTable = this.state.table;
  returnTable[rowIndex][columnIndex] = ev.target.value;
  this.setState({
    table: returnTable
  });
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
  let returnTable = this.state.table
  if(this.state.table.length > 1) {
    this.setState({
      table: this.state.table.slice(0, -1)
    });
  }
  
  
}

function removeColumn (ev) {
  ev.preventDefault();

  if(this.state.table[0].length > 1) {
    this.setState({
      table: this.state.table.map( row => row.slice(0, -1) )
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
