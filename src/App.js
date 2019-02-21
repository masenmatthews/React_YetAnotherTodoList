import React, { Component } from 'react';
import Header from './components/layout/Header/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Feed dogs",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Finish homework",
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // delete todo
  // ... operator basically copies everything that is already there. Filter basically says that we want filter out the task that we're deleting
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      // title translates to title: title because key and value are the same per ES6
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    return (
      <div className="container">
        <div className="App">
          <Header addTodo={this.addTodo} />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
