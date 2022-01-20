import React from "react";
import { connect } from "react-redux";

import Todo from "../Todo/Todo";
// import actions from "../../redux/todos/todos-actions";
import { deleteTodo, toggleTodo } from "../../redux/todos/todos-operations";

import "./TodoList.css";

const ToDoList = ({ todos, onDeleteTodo, toggleCompleted }) => (
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

const getFilteredTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter((todo) =>
    todo.text.toLowerCase().includes(normalizedFilter)
  );
};

// const mapStateToProps = (state) => {
//   const { items, filter } = state.todos;
//   const visibleTodos = getFilteredTodos(items, filter);

//   return {
//     todos: visibleTodos,
//   }
// };

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos.items, state.todos.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleCompleted: ({ id, completed }) =>
    dispatch(toggleTodo({ id, completed })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
