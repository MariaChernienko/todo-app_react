import React from "react";
import randomstring from "randomstring";

const TodoFooter = ({ itemsLeft, footer, handleBtn, btns, activeBtn }) => {
  return (
    <div className={footer ? "Todo-footer active-footer" : "Todo-footer"}>
      <div className="Todo-footer_counter">
        <span>{itemsLeft}</span>item left
      </div>
      <nav className="Todo-footer_btns">
        {btns.map(btn => (
          btn==="clear" ? 
            <button key={randomstring.generate(5)} onClick={() => handleBtn(btn)}>{btn} completed</button> :
            <div key={randomstring.generate(5)} className={btn === activeBtn ? "btn btn-active" : "btn"} onClick={() => handleBtn(btn)}>
              {btn}
            </div>
        ))}
      </nav>
    </div>
  );
};
export default TodoFooter;
