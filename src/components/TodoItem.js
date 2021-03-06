import React, { Component } from 'react';

class TodoItem extends Component {
  getStyle = () => {
      return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'line-through': 'none'
    }
  }

  // e brings in event perameter
  // arrow function eliminates the need to implement binding on checkbox input

  markComplete = (e) => {
    console.log(this.props)
  }

  render() {
    // you're effectively passing the id and title props up to app.js here.
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
