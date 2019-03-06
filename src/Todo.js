import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.js";
import TodoFooter from "./components/TodoFooter";
import randomstring from "randomstring";

class Todo extends React.Component {
  state = {
    todos: [],
    id: 0,
    text: "",
    itemsLeft: 0,
    footer: false,
    btns:["all", "active", "completed", "clear"],
    activeBtn: "all",
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  addNewItem = event => {
    
    const todos = [...this.state.todos];
    const { id, text } = this.state;
      if (!text) {
        event.preventDefault();
        return;
      }

      this.setState(prevState => {
        event.preventDefault();
        return {
          id: prevState.id + 1,
          todos: [...todos, { id: id, text: text, done: false }],
          text: "",
          itemsLeft: prevState.itemsLeft + 1,
          footer: true,
        };
      });
      event.persist();
  };

  removeItem = id => {
    const todos = [...this.state.todos]
      .filter(todo => todo.id !== id);

    this.setState(() => {
      return {
        todos: todos,
        itemsLeft: todos.filter(todo => !todo.done).length,
      };
    });
  };

  setItemStatus = id => {
    const todos = [...this.state.todos].map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !this.state.todos[id].done
        };
      }
      return todo;
    });
    
    this.setState(() => {
      return {
        todos: todos,
        itemsLeft: todos.filter(el => !el.done).length,
      };
    });
  };

  showAll = (arr) => {
    return arr;
  };

  showActive = (arr) => {
    return arr.filter(el => !el.done);
  };

  showCompleted = (arr) => {
    return arr.filter(el => el.done);
  };

  handleBtn = (btn) => {
    const todos = [...this.state.todos];
    this.setState({
      activeBtn:btn,
      todos: btn==="clear" ? todos.filter(el => !el.done) : todos, 
    });
  }

  filter = (activeBtn) => {
    const todos = [...this.state.todos];

    if (activeBtn === "all") {
      return this.showAll(todos); 
    } else if (activeBtn === "active") {
      return this.showActive(todos);
    } else if (activeBtn === "completed") {
      return this.showCompleted(todos);
    } else {
      return todos;
    }
  }

  render() {
    const { placeholder } = this.props;
    const { itemsLeft } = this.state;
    const { footer } = this.state;
    const { btns, activeBtn } = this.state;

    const items = this.filter(activeBtn);

    return (
      <div className="Todo">
      <form onSubmit={event => this.addNewItem(event)}>
        <input
          className="Input-field"
          placeholder={placeholder}
          value={this.state.text}
          onChange={event => this.handleChange(event)}
        />
      </form>
        <ul className="Todo_list">
          {items.map(todo => (
            <TodoItem
              key={randomstring.generate(5)}
              todo={todo}
              setItemStatus={this.setItemStatus}
              removeItem={this.removeItem}
            />
          ))}
        </ul>
        <TodoFooter
          itemsLeft={itemsLeft}
          footer={footer}
          handleBtn={this.handleBtn}
          btns={btns}
          activeBtn={activeBtn}
        />
      </div>
    );
  }
}

export default Todo;
