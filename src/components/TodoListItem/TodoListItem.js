import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done
}) => {
  let classNames = "todo-list-item";
  if (done) classNames += " done";
  if (important) classNames += " important";

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        <span className="btn btn-light btn-sm circle">
          <i className={`fa fa-check${done ? "" : "none"}`} />
        </span>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right circle"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right circle"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
export default TodoListItem;
