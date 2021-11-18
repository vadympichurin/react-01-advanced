import React from "react";

import "./TodoList.css";

const ToDoList = ({ todos, onDeleteTodo, toggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
