import React, { Component } from "react";

import AppHeader from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm";
import ClearCompletedBtn from "../ClearCompletedBtn";

import "./App.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink coffe"),
      this.createTodoItem("Learn React"),
      this.createTodoItem("Learn Redux")
    ],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArr = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return {
        todoData: newArr
      };
    });
  };

  addItem = text => {
    if (text.length === 0) return;
    this.setState(({ todoData }) => {
      const newArr = [...todoData, this.createTodoItem(text)];

      return {
        todoData: newArr
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const newItem = { ...arr[index], [propName]: !arr[index][propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  onSearchChange = term => {
    this.setState({
      term
    });
  };

  onFilterChange = filter => {
    this.setState({
      filter
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(el =>
      el.label.toLowerCase().includes(term.toLowerCase())
    );
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(el => !el.done);
      case "done":
        return items.filter(el => el.done);
      case "important":
        return items.filter(el => el.important);
      default:
        return items;
    }
  }

  clearCompletedItems = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData];

      return {
        todoData: newArr.filter(el => !el.done)
      };
    });
  };
  render() {
    const { todoData, term, filter } = this.state;
    const visibleTodos = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel
            value={this.state.search}
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleted={this.deleteItem}
          addItem={this.addItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <div className="bottom-panel d-flex">
          <ItemAddForm addItem={this.addItem} />
          <ClearCompletedBtn clearCompletedItems={this.clearCompletedItems} />
        </div>
      </div>
    );
  }
}
