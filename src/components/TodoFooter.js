import React from "react";

const TodoFooter = ({ itemsLeft, showAll, showActive, showCompleted, clearCompleted, footer, btnAll, btnActive, btnCompleted }) => {
  return (
    <div className={footer ? "Todo-footer active-footer" : "Todo-footer"}>
      <div className="Todo-footer_counter">
        <span>{itemsLeft}</span>item left
      </div>
      <nav className="Todo-footer_btns">
        <div className={btnAll ? "btn btn-active" : "btn"} onClick={() => showAll()}>
          all
        </div>
        <div className={btnActive ? "btn btn-active" : "btn"} onClick={() => showActive()}>
          active
        </div>
        <div className={btnCompleted ? "btn btn-active" : "btn"} onClick={() => showCompleted()}>
          completed
        </div>
      </nav>
      <button onClick={() => clearCompleted()}>clear completed</button>
    </div>
  );
};
export default TodoFooter;
