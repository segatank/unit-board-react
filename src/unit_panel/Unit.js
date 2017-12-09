import React, { Component } from 'react';
import './Unit.css';


class Unit extends Component {

  render (props) {
    const classImg = this.props.unitType;
    return (
      <div className={`Miniature ${classImg}`}>
        <div>{this.props.unitType}</div>
      </div>
    )
  }
}

export default Unit;
