import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import counterReducer from "./counter/counter-reducer";
import todosReducer from "./todos/todos-reducer";

console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleware,
})

export default store;
