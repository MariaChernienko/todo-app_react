import React, { Component } from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="what needs to be done"
        />
        <button className="btn btn-success">Add Item</button>
      </form>
    );
  }
}
