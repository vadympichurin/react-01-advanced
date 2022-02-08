import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from './todos-actions';

// GET @ /tasks
const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

// POST @ /tasks
const addTodo = description => dispatch => {
  const todo = {
    description,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post('/contacts', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error.message)));
};

// DELETE @ /tasks/:id
const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/contacts/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error.message)));
};

// PATCH @ /tasks/:id
const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };

  dispatch(toggleCompletedRequest());

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error.message)));
};

export default {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
