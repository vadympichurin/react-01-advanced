import React from "react";

import Todo from "../Todo/Todo";

import "./TodoList.css";

const ToDoList = ({ todos, onDeleteTodo, toggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => toggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
          id={id}
        />
      </li>
    ))}
  </ul>
);

export default ToDoList;
