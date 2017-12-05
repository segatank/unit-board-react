import React, { Component } from 'react';
import './BaseBoard.css';
import BoardSwitcher from './switcher/BoardSwitcher';
import BoardMatrix from './board_matrix/BoardMatrix';
import UnitPanel from './unit_panel/UnitPanel';

class BaseBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "edit" : false
    }
  }

  editToggler = () => {
    this.setState({edit : !this.state.edit});
  }


  render() {
    return (
      <div className="BoardTable">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="TogglerWrapper">
                    <BoardSwitcher
                      editToggler = {this.editToggler}
                      edit = {this.state.edit}
                     />
                </div>
                <div className="UnitPanelWrapper">
                  <UnitPanel/>
                </div>
              </td>
              <td>
                <div className="MatrixWrapper">
                  <BoardMatrix
                    edit = {this.state.edit}
                  />
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
