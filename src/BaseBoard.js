import React, { Component } from 'react';
import './BaseBoard.css';
import BoardSwitcher from './switcher/BoardSwitcher';
import BoardMatrix from './board_matrix/BoardMatrix';
//import UnitPanel from './unit_panel/UnitPanel';

class BaseBoard extends Component {

  renderSwitcher(i) {
    return (
      <BoardSwitcher/>
    );
  }

  renderMatrix() {
    return( <div> mm</div>
      //{BoardMatrix}
    );
  }

  render() {
    return (
      <div className="BoardTable">
        <table>
          <tr>
            <td>
              <div className="TogglerWrapper">
                {this.renderSwitcher(0)}
              </div>
              <div className="UnitPanelWrapper">
                place holder unit
              </div>
            </td>
            <td>
              <div className="MatrixWrapper">
                {this.renderMatrix()}
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default BaseBoard;
