import React from "react";
import { connect } from "react-redux";

import Todo from "../Todo/Todo";
import { deleteTodo, toggleTodo } from "../../redux/todos/todos-operations";
import todosSelectors from "../../redux/todos/todos-selectors";

import "./TodoList.css";

const ToDoList = ({ todos, onDeleteTodo, toggleCompleted }) => console.log('TodoList re-render!!!') || (
  <ul className="TodoList">
    {todos?.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() =>
            toggleCompleted({ id, completed: !completed })
          }
          onDelete={() => onDeleteTodo(id)}
          id={id}
        />
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: todosSelectors.getFilteredTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleCompleted: ({ id, completed }) =>
    dispatch(toggleTodo({ id, completed })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
