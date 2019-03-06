import React from "react";
import checked from "../images/checked.svg";
import unchecked from "../images/unchecked.svg";

const TodoItem = ({ todo, setItemStatus, removeItem }) => {
  return (
    <li className="Todo_list-item">
      <img
        className="Status-icon"
        src={!todo.done ? unchecked : checked}
        alt={!todo.done ? "unchecked" : "checked"}
        onClick={() => setItemStatus(todo.id)}
      />
      {todo.text}
      <div className="Item-close" onClick={() => removeItem(todo.id)} />
    </li>
  );
};
export default TodoItem;
