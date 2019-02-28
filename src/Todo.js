import React from 'react';
import './App.css';

class Todo extends React.Component {

  state= {
    todos: [],
    value: 0,
    text: null,
  }

  handleCange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }
  onEnter = (event) => {

    const todos = [...this.state.todos];
    const { value, text } = this.state;

    if (event.key === "Enter") {

      this.setState(prevState => {
        return {
          value: prevState.value + 1,
          todos: [...todos, { id: value, text: text, done:false}]
        }
      })
    }
  } 

  render() {
    const { placeholder } = this.props;
    const { todos } = this.state;

    return (
      <div className="Todo">
        <input 
          className="Input-field"  
          placeholder={ placeholder }
          onKeyPress={(event) => this.onEnter(event)}
          onChange={(event) => this.handleCange(event)}

        />
        <ul className="Todo_list">
          {todos.map(todo => (
            <li 
              key={todo.id} 
              className="Todo_list-item"
              onClick={() => this.handleItemSection(todo.value)}
            >{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todo;
