const counter = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return state + 1;
    case 'COUNTER/DECREMENT':
      return state >= 1 ? state - 1 : state;
    case 'COUNTER/RESET':
      return 0;
    case 'COUNTER/SET':
      return action.value >= 0 ? action.value : state;
    default:
      return state;
  }
}

export {
  counter,
};
