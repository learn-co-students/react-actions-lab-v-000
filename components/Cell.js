'use strict';

import React from 'react';

export default class Cell extends React.Component {
  render () {
    return <td className="cell">
      <input value={this.props.cell}
      onFocus={this.props.onFocus}
      onChange={this.props.onChange}/>
    </td>
  }
}
