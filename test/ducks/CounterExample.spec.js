import expect from 'expect';

import { store } from '../../src/ducks/CounterExample/store';
import * as CounterActions from '../../src/ducks/CounterExample/action';
import { bindActionCreators } from 'redux';
const {
  incrementCounter,
  decrementCounter,
  resetCounter,
  setCounter,
} = bindActionCreators(CounterActions, store.dispatch);

describe('CounterDuck: Test initial status', () => {
  it('initial counter should be set to 0', () => {
    expect(store.getState()).toEqual(0);
  });
})

describe('CounterDuck: Test basic functionalities', () => {

  it('setCounter: set count value to given', () => {
    setCounter(3);
    expect(store.getState()).toEqual(3);
    setCounter(0);
    expect(store.getState()).toEqual(0);
  });

  it('resetCounter: reset counter to 0', () => {
    setCounter(3);
    resetCounter();
    expect(store.getState()).toEqual(0);
  })

  it('incrementCounter: increment by one', () => {
    resetCounter();
    incrementCounter();
    expect(store.getState()).toEqual(1);
    incrementCounter();
    expect(store.getState()).toEqual(2);
  });

  it('decrementCounter: decrement by one', () => {
    setCounter(2);
    decrementCounter();
    expect(store.getState()).toEqual(1);
    decrementCounter();
    expect(store.getState()).toEqual(0);
  });

  it('edge case: counter should not be set given negative numbers', () => {
    setCounter(3);
    setCounter(-1);
    expect(store.getState()).toEqual(3);
  });

  it('edge case: counter should not be decremented given 0', () => {
    resetCounter();
    decrementCounter();
    expect(store.getState()).toEqual(0);
  });
});
