import React, { Component } from 'react';
import './BoardCell.css';

class CellUnit extends Component {

  render() {
    return (
      <button className="CellSkin">
        {this.props.value}
      </button>
    );
  }
}

export default CellUnit;
