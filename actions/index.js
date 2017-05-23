'use strict';

function addColumn (ev) {
	ev.preventDefault();
	this.setState({
		table: this.state.table.map(row => [...row, ""])
	})

}

function addRow (ev) {
	ev.preventDefault();
	this.setState({
		table: [...this.state.table, (this.state.table[0].map(() => ""))]
	})
}

function changeCell (rowIndex, columnIndex, ev) {
	var content = ev.target.value
	var updatedTable = this.state.table 
	updatedTable[rowIndex][columnIndex] = content
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
	ev.preventDefault();
	var table = this.state.table.slice()
	table.pop()
	if(this.state.table.length > 1){
	this.setState({
		table: table
	})
	}
}

function removeColumn (ev) {
	ev.preventDefault();
	debugger
	var table = this.state.table.slice()
	table.map(row => {
		if (row.length > 1){
			row.pop()
			this.setState({
				table: table
			})
		}
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
