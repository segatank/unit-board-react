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

  createSingleUnit = typeOfUnit => (
    <Unit
      unitType={typeOfUnit}
    />
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
