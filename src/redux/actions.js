export const increment = (value) => ({
  type: "counter/increment",
  payload: value,
});

export const decrement = (value) => ({
  type: "counter/decrement",
  payload: value,
});

export const test = (value) => ({
  type: "counter/test",
  payload: value,
});
