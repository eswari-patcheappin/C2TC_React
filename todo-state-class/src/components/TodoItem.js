
import React, { Component } from 'react';
class TodoItem extends Component {
  handleClick = () => {
    this.props.toggleComplete(this.props.todo.id);
  }
  render() {
    const { todo } = this.props;
    return (
      <div 
        onClick={this.handleClick}
        style={{
          border: '1px solid #ddd',
          padding: '15px',
          margin: '10px auto',
          width: '300px',
          borderRadius: '5px',
          backgroundColor: todo.completed ? '#d4edda' : '#f8d7da',
          cursor: 'pointer'
        }}
      >
        <h3>{todo.title}</h3>
        <p>Status: {todo.completed ? "Completed ✅" : "Pending ⏳"}</p>
        <p><i>Click to toggle completion</i></p>
      </div>
    );
  }
}
export default TodoItem;