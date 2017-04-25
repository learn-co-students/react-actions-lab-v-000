'use strict';

function addColumn (ev) {
  ev.preventDefault(); 
  const table = this.state.table; 
  for (var i = 0; i < table.length; i++) {
    table[i].push('');  
  }
  this.setState({
    table: table,  
  });  
  return; 
}

function addRow (ev) {
  ev.preventDefault(); 
  const table = this.state.table; 
  var length = table[0].length; 
  var array = Array(length).fill(''); 
  table.push(array); 
  this.setState({
    table: table,  
  }); 
  return; 
}

function changeCell (rowIndex, columnIndex, ev) {  
  var newValue = ev.target.value; 
  const table = this.state.table; 
  table[rowIndex][columnIndex] = newValue; 
  this.setState({
    table: table,  
  }); 
  return; 
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex],  
  }); 
  return; 
}

function blurCell () {
  this.setState({
    focused: null,  
  }); 
  return; 
}

function removeRow (ev) {
  ev.preventDefault(); 
  const table = this.state.table; 
  if (table.length > 1) {
    table.pop(); 
    this.setState({
      table: table,  
    }); 
  } 
  return; 
}

function removeColumn (ev) {
  ev.preventDefault(); 
  const table = this.state.table; 
  if (table[0].length <= 1) {
    return;  
  }
  for (var i = 0; i < table.length; i++) {
    table[i].pop();  
  }
  this.setState({
    table: table,  
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
