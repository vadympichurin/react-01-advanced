import shortid from "shortid";
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/addTodo', (text) => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  }
});

const deleteTodo = createAction('todos/delete');
const toggleCompleted = createAction('todos/toggleCompleted');
const changeFilter = createAction('todos/changeFilter');

export default { addTodo, deleteTodo, toggleCompleted, changeFilter };
