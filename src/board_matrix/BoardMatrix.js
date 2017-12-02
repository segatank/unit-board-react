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

  renderCell(i, j) {
    return (
      <CellUnit
        key = {i.toString()+ j.toString()}
        value={this.props[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }


  render() {
    let matrix = [];
    for (let x = 0; x < MatrixSize.defWidth; x++) {
      for (let y = 0; y < MatrixSize.defHeight; y++) {
        matrix.push(this.renderCell(x, y));
      }
    }
    return (
      <div className="square">
         {matrix}
      </div>
    )
  }
}

export default BoardMatrix;
