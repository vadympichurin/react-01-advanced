import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import counterReducer from "./counter/counter-reducer";
import todosReducer from "./todos/todos-reducer";
import counterReducer from './todos/counter';

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("my middleware : ", action);

//   next(action);
// };

// function myMiddleware (store) {
//   return function (next) {
//     return function (action) {
//       // code
//     }
//   }
// }

// const persistConfig = {
//   key: "todos",
//   storage,
//   blacklist: ["filter", "loading"],
// };

const middleware = [
  ...getDefaultMiddleware(), 
  // logger
];

const rootReducer = combineReducers({
  // counter: counterReducer,
  // todos: persistReducer(persistConfig, todosReducer),
  todos: todosReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: middleware,
});

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
