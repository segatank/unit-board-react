import React, { Component } from 'react';
import './BaseBoard.css';
import BoardSwitcher from './switcher/BoardSwitcher';
import BoardMatrix from './board_matrix/BoardMatrix';
//import UnitPanel from './unit_panel/UnitPanel';
class BaseBoard extends Component {

  renderSwitcher(i) {
    return (
      <label> toggler placeholder
      </label>
    );
  }

  render() {
    return (
      <div className="BaseBoard">
        <div>
          {this.renderSwitcher(0)}
        </div>
      </div>
    );
  }
}

export default BaseBoard;
