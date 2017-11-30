import React, { Component } from 'react';
import './BoardSwitcher.css';
import Checkbox from './Checkbox';

const togglerItems = [
  'Move',
  'Edit'
];


class BoardSwitcher extends Component {

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    togglerItems.map(this.createCheckbox)
  )

  /*handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, ' is selected.');
    }
  }*/

  render() {
    return (
      <div className="BoardSwitcher">

      </div>
    )
  }
}

export default BoardSwitcher;
