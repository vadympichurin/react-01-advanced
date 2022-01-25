import { createAction, createReducer, combineReducers } from "@reduxjs/toolkit";

export const increment = createAction('counter/increment');

const counter = createReducer(0, {
    [increment]: (state, _) => state + 1,
});

export default combineReducers({
    counter,
});