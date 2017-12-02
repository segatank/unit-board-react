import React, { Component } from 'react';
import './BoardMatrix.css';
import CellUnit from './BoardCell';

const MatrixSize = {
  defWidth : 10,
  defHeight : 10
}

let positionX = 0;
let positionY = 0;

class BoardMatrix extends Component {

  renderCell(i) {
    return (
      <CellUnit
        value={this.props[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }


  render() {
    return (
      <div className="square">
         <div className="board-row">
           {this.renderCell(0)}
           {this.renderCell(1)}
           {this.renderCell(2)}
         </div>
         
           {this.renderCell(3)}
           {this.renderCell(4)}
           {this.renderCell(5)}


      </div>
    )
  }
}

export default BoardMatrix;
