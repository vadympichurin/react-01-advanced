import { createSelector } from "@reduxjs/toolkit";

const getTodosLoading = (state) => state.todos.loading;
const getTodosFilter = (state) => state.todos.filter;
const getTodos = (state) => state.todos.items;

// const getFilteredTodos = (state) => {
//   const filter = getTodosFilter(state);
//   const todos = getTodos(state);
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter((todo) =>
//     todo.text.toLowerCase().includes(normalizedFilter)
//   );
// };

const getFilteredTodos = createSelector(
  [getTodosFilter, getTodos],
  (filter, todos) => {
    console.log("getFilteredTodos !!!!!");
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getTodosLoading,
  getTodosFilter,
  getFilteredTodos,
};
