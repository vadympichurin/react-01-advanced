import { combineReducers } from "redux";
import actionTypes from "./todos-types";

// {
//     counter: {},
//     todos: {
//         items: [],
//         filter: '',
//     }
// }

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [payload, ...state];

    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  return state;
};

// const todosReducer = combineReducers({
//     items,
//     filter,
// });

// export default todosReducer;

export default combineReducers({
  items,
  filter,
});
