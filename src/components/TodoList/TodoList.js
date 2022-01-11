import React from "react";
import { connect } from "react-redux";

import Todo from "../Todo/Todo";
import actions from "../../redux/todos/todos-actions";

import "./TodoList.css";

const ToDoList = ({ todos, onDeleteTodo, toggleCompleted }) => (
  <ul className="TodoList">
    {todos?.map(({ id, text, completed }) => (
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

const mapStateToProps = (state) => ({
  todos: state.todos.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
  toggleCompleted: id => dispatch(actions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
