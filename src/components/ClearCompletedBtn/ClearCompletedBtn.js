import React from "react";
import "./ClearCompletedBtn.css";

const ClearCompletedBtn = ({ clearCompletedItems }) => {
  return (
    <button
      className="btn btn-outline-danger clear-btn"
      onClick={() => clearCompletedItems()}
    >
      Clear Completed
    </button>
  );
};
export default ClearCompletedBtn;
