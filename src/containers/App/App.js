import React, { Component } from 'react';

import Todos from '../../components/Todos';
import TodoInputWrapper from '../TodoInputWrapper';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {text: 'Do this', completed: false},
      {text: 'Do that', completed: true},
      {text: 'Do something', completed: true},
      {text: 'Do nothing', completed: false},
    ]
  };


  addTodo = todo => {
    if(todo === '') return;

    let newTodo = { text:todo, completed: false };
    let updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos
    });
  }

  deleteTodo = id => {
    let todos = [...this.state.todos];
    todos.splice(id, 1);

    this.setState({
      todos: todos
    });
  }

  toggleStatus = todoIndex => {
    let todos = [...this.state.todos];
    let todo = todos[todoIndex];

    todo.completed = !todo.completed;
    todos[todoIndex] = todo;

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-container">
          <TodoInputWrapper
            addTodo={this.addTodo} 
          />

          <Todos 
            todos={this.state.todos}
            toggleStatus={this.toggleStatus}
            deleteTodo={this.deleteTodo}
          />
        </header>
      </div>
    );
  }
}

export default App;
