const one = 1;
const str = 'str';
const obj = { key: 'val', kex: 'vam', kez: 'van' };
const arr = [1, 2, 3];
const truthy = true;
const falsy = false;
const nully = null;
const undefinedly = undefined;
const nan = NaN;
const func = () => {};
class ClassA {
  constructor(prop) {
    this.prop = prop;
  }
};
const myClassA = new ClassA('test');
class ClassB {
  constructor(prop) {
    this.prop = prop;
  }
};
const myClassB = new ClassB('test');
const errorFunc = () => {
  throw new Error('boom!');
};

export {
  one,
  str,
  obj,
  arr,
  truthy,
  falsy,
  nully,
  undefinedly,
  nan,
  func,
  ClassA,
  ClassB,
  myClassA,
  myClassB,
  errorFunc,
};
