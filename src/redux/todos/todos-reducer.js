import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addTodoRequest,
  addTodoSucces,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSucces,
  deleteTodoError,
  toggleTodoRequest,
  toggleTodoSucces,
  toggleTodoError,
  changeFilter,
  getTodosRequest,
  getTodosSucces,
  getTodosError,
} from "./todos-actions";

const items = createReducer([], {
  [getTodosSucces]: (_, action) => action.payload,
  [addTodoSucces]: (state, action) => [action.payload, ...state],
  [deleteTodoSucces]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [toggleTodoSucces]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload.id ? action.payload : todo
    ),
});

const loading = createReducer(false, {
  [getTodosRequest]: () => true,
  [getTodosSucces]: () => false,
  [getTodosError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSucces]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSucces]: () => false,
  [deleteTodoError]: () => false,
  [toggleTodoRequest]: () => true,
  [toggleTodoSucces]: () => false,
  [toggleTodoError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
  loading,
});
