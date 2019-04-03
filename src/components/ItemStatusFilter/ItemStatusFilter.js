import React, { Component } from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "To do" },
    { name: "done", label: "Done" },
    { name: "important", label: "Important" },
  ];
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      return (
        <button
          key={name}
          type="button"
          className={`btn ${isActive ? "btn-secondary" : "btn-outline-dark"}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
