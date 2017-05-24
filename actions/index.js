'use strict';

// done
function addColumn (ev) {
  ev.preventDefault();
  this.state.table.map(function(row){
    return row.push("")
  });
  this.setState({
    table: this.state.table
  })
}

// done
function addRow (ev) {
  ev.preventDefault();
  var columnCount = this.state.table[0].length;
  var newRow = [];
  for (var i = columnCount; i > 0; i--){
    newRow.push("")
  };
  this.state.table.push(newRow);
  this.setState({
    table: this.state.table
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  var cellValue = ev.target.value;
  this.state.table[rowIndex][columnIndex] = cellValue;
  this.setState({
    table: this.state.table
  })
}

function focusCell (rowIndex, columnIndex) {
  var cellValue = this.state.table[rowIndex][columnIndex];
  this.setState({
    focused: cellValue
  })
}

// done
function blurCell () {
  this.setState({
    focused: null
  })
}

// done
function removeRow (ev) {
  ev.preventDefault();
  if (this.state.table.length > 1) {
    this.state.table.pop();

    this.setState({
      table: this.state.table
    })
  }
}

// done
function removeColumn (ev) {
  ev.preventDefault();
  if (this.state.table[0].length > 1) {
    this.state.table.map(function(row){
      return row.pop();
    })

    this.setState({
      table: this.state.table
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
