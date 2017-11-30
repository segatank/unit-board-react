import React, { Component } from 'react';
import './BaseBoard.css';
import BoardSwitcher from './switcher/BoardSwitcher';

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
