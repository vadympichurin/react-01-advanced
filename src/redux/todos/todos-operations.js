import axios from "axios";

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
  getTodosRequest,
  getTodosSucces,
  getTodosError,
} from "./todos-actions";

axios.defaults.baseURL = "http://localhost:4040";

// const asyncActionCreator = args => dispatch => {
//   fetch(args).then(x => dispatch(someAction(x))).catch(error => dispatch(errorAction(error)))
// }

export const getAllTodos = () => async (dispatch) => {
  dispatch(getTodosRequest());

  try {
    const { data } = await axios.get("/todos");
    dispatch(getTodosSucces(data));
  } catch (error) {
    dispatch(getTodosError(error));
  }

  //   axios
  //     .get("/todos")
  //     .then(({ data }) => dispatch(getTodosSucces(data)))
  //     .catch((error) => dispatch(getTodosError(error)));
};

export const addTodo = (text) => (dispatch) => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());

  axios
    .post("/todos", todo)
    .then(({ data }) => dispatch(addTodoSucces(data)))
    .catch((error) => dispatch(addTodoError(error)));
};

export const deleteTodo = (todoID) => (dispatch) => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoID}`)
    .then(() => dispatch(deleteTodoSucces(todoID)))
    .catch((error) => dispatch(deleteTodoError(error)));
};

export const toggleTodo = ({ id, completed }) => (dispatch) => {
  dispatch(toggleTodoRequest());

  const update = { completed };

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleTodoSucces(data)))
    .catch((error) => dispatch(toggleTodoError(error)));
};
