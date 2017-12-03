import React, { Component } from 'react';
import './UnitPanel.css';
import Unit from './Unit';

const unitsArr = [
  "Player",
  "Enemy",
  "Item",
  "Building",
  "Trap",
  "PointOfInterest",
  "Terrain",
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
