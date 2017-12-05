import React, { Component } from 'react';
import './BoardSwitcher.css';
import Checkbox from './Checkbox';

const togglerItems = [
  'Move',
  'Edit'
];


class BoardSwitcher extends Component {



  render() {
    return (
      <div className="BoardSwitcher">
        <Checkbox
          label={"edit"}
          handleCheckboxChange={this.props.editToggler}
          checked={this.props.edit}
        />
      </div>
    )
  }
}

export default BoardSwitcher;
