import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h2 className="App-title">todos</h2>
        <Todo placeholder="what needs to be done?"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
