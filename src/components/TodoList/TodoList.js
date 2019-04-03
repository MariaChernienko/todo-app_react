import React from "react";
import TodoListItem from "../TodoListItem";

import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(element => {
    const { id, ...itemProps } = element;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps} 
          onDeleted={() => onDeleted(id)} 
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
