import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './counter-types';

export const increment = (value) => ({
    type: COUNTER_INCREMENT,
    payload: value,
  });
  
  export const decrement = (value) => ({
    type: COUNTER_DECREMENT,
    payload: value,
  });
  
  