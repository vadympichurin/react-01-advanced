import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

export const getTodos = () => {
  return axios
    .get("/todos")
    .then((response) => response.data);
};

export const deleteTodo = (todoId) => {
  return axios.delete(`/todos/${todoId}`);
};

export const addTodo = (todo) => {
  return axios
    .post("/todos", todo)
    .then(({ data }) => data);
};

export const updateTodo = (todoId, update) => {
  return axios
    .patch(`/todos/${todoId}`, update)
    .then(({ data }) => data);
};

// export default { getTodos,  }
