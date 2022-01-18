import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

// const asyncActionCreator = args => dispatch => {
//   fetch(args).then(x => dispatch(someAction(x))).catch(error => dispatch(errorAction(error)))
// }

const addTodo = (text) => (dispatch) => {
  const todo = { text, completed: false };

  dispatch({ type: "todos/addTodoRequest" });

  axios
    .post("/todos", todo)
    .then(({ data }) =>
      dispatch({ type: "todos/addTodoSucces", payload: data })
    )
    .catch((error) => dispatch({ type: "todos/addTodoError", payload: error }));
};

const addTodoRequest = createAction("todos/addTodoRequest");
const addTodoSucces = createAction("todos/addTodoSucces");
const addTodoError = createAction("todos/addTodoError");

// const addTodo = createAction('todos/addTodo', (text) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     },
//   }
// });

const deleteTodo = createAction("todos/delete");
const toggleCompleted = createAction("todos/toggleCompleted");
const changeFilter = createAction("todos/changeFilter");

export default {
  addTodo,
  addTodoRequest,
  addTodoSucces,
  addTodoError,
  deleteTodo,
  toggleCompleted,
  changeFilter,
};
