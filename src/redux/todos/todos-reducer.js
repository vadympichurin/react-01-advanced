import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from './todos-actions';
import actionTypes from "./todos-types";

const {addTodoRequest, addTodoSucces, addTodoError} = actions;


const items = createReducer([], {
  [addTodoSucces]: (state, action) => [action.payload, ...state],
  [actions.deleteTodo]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.toggleCompleted]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSucces]: () => false,
  [addTodoError]: () => false,
});

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  loading,
});
