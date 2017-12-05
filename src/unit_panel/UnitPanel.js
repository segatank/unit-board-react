import React, { Component } from 'react';
import './UnitPanel.css';
import Unit from './Unit';

const unitsArr = [
  "Player",
  "Enemy",
  "Terrain",
  "Item",
  "Building",
  "Trap",
  "PointOfInterest",
  "Plant",
  "Critter"
]

class UnitPanel extends Component {

  /*renderUnit (type) {
    return (
      <Unit
        unitType={type}
      />
    );
  }*/

  render() {
    return (
      <div>"test"

      </div>
    );
  }
}

export default UnitPanel;
