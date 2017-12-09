import React, { Component } from 'react';
import './UnitPanel.css';
import Unit from './Unit';

const boardUnits = [
  "Player",
  "Enemy",
  "Terrain"
]
/*  "Item",
  "Building",
  "Trap",
  "PointOfInterest",
  "Plant",
  "Critter"
]*/

class UnitPanel extends Component {

  /*renderUnit (type) {
    return (
      <Unit
        unitType={type}
      />
    );
  }*/
  //<div>{typeOfUnit}</div>
  createSingleUnit = typeOfUnit => (
    <div>{typeOfUnit}</div>
  )

  fillPanelWithUnits = () => (
    boardUnits.map(this.createSingleUnit)
  )

  render() {
    return (
      <div>
        {this.fillPanelWithUnits()}
      </div>
    );
  }
}

export default UnitPanel;
