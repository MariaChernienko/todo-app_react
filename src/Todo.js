import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.js";
import TodoFooter from "./components/TodoFooter";

class Todo extends React.Component {
  state = {
    todos: [],
    active: [],
    completed: [],
    value: 0,
    text: null,
    itemsLeft: 0,
    btnAll: true,
    btnActive: false,
    btnCompleted: false,
    footer: false,
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  addNewItem = event => {
    const todos = [...this.state.todos];
    const active = [...this.state.active];
    const { value, text } = this.state;

    if (event.key === "Enter") {
      event.target.value = null;
      if (text === null) return;

      this.setState(prevState => {
        return {
          value: prevState.value + 1,
          todos: [...todos, { id: value, text: text, done: false }],
          active: [...active, { id: value, text: text, done: false }],
          text: null,
          itemsLeft: prevState.itemsLeft + 1,
          footer: true,
        };
      });
    }
  };

  removeItem = id => {
    const todos = [...this.state.todos];
    const active = [...this.state.active];
    const completed = [...this.state.completed];

    this.setState(prevState => {
      return {
        todos: todos.filter(todo => todo.id !== id),
        active: active.filter(todo => todo.id !== id),
        completed: completed.filter(todo => todo.id !== id),
        itemsLeft: todos[id].done
          ? prevState.itemsLeft
          : prevState.itemsLeft - 1,
      };
    });
  };

  setItemStatus = id => {
    const todos = [...this.state.todos];
    const active = [...this.state.active];
    const completed = [...this.state.completed];

    this.setState(prevState => {
      return {
        todos: todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !todos[id].done ? true : false
            };
          }
          return todo;
        }),
        itemsLeft: todos[id].done
          ? prevState.itemsLeft + 1
          : prevState.itemsLeft - 1,
        active: !todos[id].done
          ? active.filter(todo => todo.id !== id)
          : active,
        completed: !todos[id].done
          ? [...completed, { ...todos[id], done: true }]
          : completed
      };
    });
  };

  showAll = () => {
    const { active } = this.state;
    const { completed } = this.state;

    this.setState({
      todos: [...active, ...completed].sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0),

      btnAll: true,
      btnActive: false,
      btnCompleted: false
    });
  };

  showActive = () => {
    const { active } = this.state;

    this.setState({
      todos: active,
      btnAll: false,
      btnActive: true,
      btnCompleted: false

    });
  };

  showCompleted = () => {
    const { completed } = this.state;

    this.setState({
      todos: completed.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0)),
      btnAll: false,
      btnActive: false,
      btnCompleted: true,
    });
  };

  clearCompleted = () => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => !todo.done),
      completed: [],
    });
  };

  render() {
    const { placeholder } = this.props;
    const { todos } = this.state;
    const { itemsLeft } = this.state;
    const { footer } = this.state;
    const { btnAll, btnActive, btnCompleted } = this.state;

    return (
      <div className="Todo">
        <input
          className="Input-field"
          placeholder={placeholder}
          onKeyPress={event => this.addNewItem(event)}
          onChange={event => this.handleChange(event)}
        />
        <ul className="Todo_list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              setItemStatus={this.setItemStatus}
              removeItem={this.removeItem}
            />
          ))}
        </ul>
        <TodoFooter
          itemsLeft={itemsLeft}
          footer={footer}
          showAll={this.showAll}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
          clearCompleted={this.clearCompleted}
          btnAll={btnAll}
          btnActive={btnActive}
          btnCompleted={btnCompleted}
        />
      </div>
    );
  }
}

export default Todo;
