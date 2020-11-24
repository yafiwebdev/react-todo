import React, { Component } from 'react';

import Todos from '../../components/Todos';
import TodoInputWrapper from '../TodoInputWrapper';

import './App.css';

class App extends Component {

  state = {
    todos: []
  };

  updateTodos = todos => {

    this.setState({ todos });

    if(todos.length > 0) {

      localStorage.setItem('todos', JSON.stringify(todos));

    } else {
      localStorage.clear();
    }
  }

  addTodo = todo => {
    if(todo === '') return;

    let newTodo = { text:todo, completed: false };
    let updatedTodos = [...this.state.todos, newTodo];

    this.updateTodos(updatedTodos);
  }

  deleteTodo = id => {
    let todos = [...this.state.todos];
    todos.splice(id, 1);

    this.updateTodos(todos);
  }

  toggleStatus = todoIndex => {
    let todos = [...this.state.todos];
    let todo = todos[todoIndex];

    todo.completed = !todo.completed;
    todos[todoIndex] = todo;

    this.updateTodos(todos);
  }

  componentDidMount() {

    const todos = JSON.parse(localStorage.getItem('todos'));

    if(todos) this.setState({ todos });

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
