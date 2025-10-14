import React from 'react';

function TodoItem({ todo }) {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px auto',
        width: '300px',
        borderRadius: '5px',
        backgroundColor: todo.completed ? '#d4edda' : '#f8d7da'
      }}
    >
      <h3>{todo.title}</h3>
      <p>Status: {todo.completed ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
}

export default TodoItem;