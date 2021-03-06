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

  renderCell(props) {
    return (
      <CellUnit
        key = {props.iVal+props.jVal}
        value={props.iVal}
      />
    );
  }

  render() {
    const bg = this.props.edit ? "green" : ""
    return (
      <table style={{backgroundColor: bg}}>
        <tr>
          <td>{this.renderCell({iVal: 0, jVal:1})}</td>
          <td>{this.renderCell({iVal: 1, jVal:1})}</td>
          <td>{this.renderCell({iVal: 2, jVal:1})}</td>
        </tr>
      </table>
    );
    //let matrix = [];
    /*for (let x = 0; x < MatrixSize.defWidth; x++) {
      for (let y = 0; y < MatrixSize.defHeight; y++) {
        matrix.push(this.renderCell(x, y));
      }
    }*/


      /*for (let x = 0; x < MatrixSize.defWidth; x++) {
        matrix.push(<tr>)
        for (let y = 0; y < MatrixSize.defHeight; y++) {
          matrix.push(<td>);
          matrix.push(this.renderCell(x, y));
          matrix.push(</td>);
        }
        matrix.push(</tr>);
      }*/


    /*return (
      <div className="square">
         {matrix}
         <table>
         </table>
      </div>
    )*/
  }
}

export default BoardMatrix;
