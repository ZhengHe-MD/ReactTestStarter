const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';
const SET = 'COUNTER/SET';

export const incrementCounter = () => {
  return { type: INCREMENT };
}

export const decrementCounter = () => {
  return { type: DECREMENT };
}

export const resetCounter = () => {
  return { type: RESET };
}

export const setCounter = (value) => {
  return {
    type: SET,
    value: value,
  };
}
