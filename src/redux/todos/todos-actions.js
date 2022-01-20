import { createAction } from "@reduxjs/toolkit";

export const getTodosRequest = createAction("todos/getTodosRequest");
export const getTodosSucces = createAction("todos/getTodosSucces");
export const getTodosError = createAction("todos/getTodosError");
export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSucces = createAction("todos/addTodoSucces");
export const addTodoError = createAction("todos/addTodoError");
export const deleteTodoRequest = createAction("todos/deleteTodoRequest");
export const deleteTodoSucces = createAction("todos/deleteTodoSucces");
export const deleteTodoError = createAction("todos/deleteTodoError");
export const toggleTodoRequest = createAction("todos/toggleTodoRequest");
export const toggleTodoSucces = createAction("todos/toggleTodoSucces");
export const toggleTodoError = createAction("todos/toggleTodoError");

export const changeFilter = createAction("todos/changeFilter");
