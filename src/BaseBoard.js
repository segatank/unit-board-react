import React, { Component } from 'react';
import './BaseBoard.css';
import BoardSwitcher from './switcher/BoardSwitcher';
import BoardMatrix from './board_matrix/BoardMatrix';
import UnitPanel from './unit_panel/UnitPanel';

class BaseBoard extends Component {

  renderSwitcher(i) {
    return (
      <BoardSwitcher/>
    );
  }

  renderUnitPanel () {
    return(
      <UnitPanel/>
    );
  }

  renderMatrix() {
    return( <div>
      {BoardMatrix}
      </div>
    );
  }

  render() {
    return (
      <div className="BoardTable">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="TogglerWrapper">
                  {this.renderSwitcher (0)}
                </div>
                <div className="UnitPanelWrapper">
                  {this.renderUnitPanel ()}
                </div>
              </td>
              <td>
                <div className="MatrixWrapper">
                  {this.renderMatrix ()}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BaseBoard;
