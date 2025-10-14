import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "Learn React", completed: true },
        { id: 2, title: "Build a project", completed: false },
        { id: 3, title: "Read documentation", completed: false }
      ]
    };
  }
  // Toggle task completion
  toggleComplete = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={this.toggleComplete} 
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
