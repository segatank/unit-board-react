import React, { Component } from 'react';
import './BoardMatrix.css';
import CellUnit from './BoardCell';

const MatrixSize = {
  defWidth : 10,
  defHeight : 10
}

let positionX = 0;
let positionY = 0;

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class BoardMatrix extends Component {

  renderCell(i) {
    return (
      <Square
        value={this.props[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }


  render() {
    return (
      <div >
         <div className="board-row">
           {this.renderCell(0)}
           {this.renderCell(1)}
           {this.renderCell(2)}
         </div>
         <div className="board-row">
           {this.renderCell(3)}
           {this.renderCell(4)}
           {this.renderCell(5)}
         </div>
         <div className="board-row">
           {this.renderCell(6)}
           {this.renderCell(7)}
           {this.renderCell(8)}
         </div>
      </div>
    )
  }
}

export default BoardMatrix;
