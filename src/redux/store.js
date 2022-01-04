import { createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
    step: 5,
  },
  user: {},
  contacts: {},
  preferences: {},
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + action.payload,
        },
      };

    case "counter/decrement":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - action.payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
