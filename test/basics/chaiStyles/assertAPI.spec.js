import chai from 'chai';
import {
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
} from '../constants';

const assert = chai.assert;

// .equal(actual, expected, [message])
assert.equal(3, '3', '3 is equal to 3');

// .notEqual(actual, expected, [message])
assert.notEqual(3, '4', '3 is not equal to 4');

// .isTrue(value, [message])
assert.isTrue(truthy, 'truthy is true');

// .isNotTrue(value, [message])
assert.isNotTrue(falsy, 'falsy is false');

// .isNull(value, [message])
assert.isNull(nully, 'nully is null');

// .isNotNull(value, [message])
assert.isNotNull(str, 'str is not null');

// .isNan(value, [message])
assert.isNaN(nan, 'nan is Nan');

// .isNotNaN(value, [message])
assert.isNotNaN(3, '3 is not NaN');

// .isUndefined(value, [message])
assert.isUndefined(undefinedly, 'undefinedly is undefined');

// .isNotUndefined(value, [message])
assert.isDefined(obj, 'obj is defined');

// .isFunction(value, [message])
assert.isFunction(func, 'func is a function');

// .isNotFunction(value, [message])
assert.isNotFunction(obj, 'obj is not a function');

// .isObject(value, [message])
assert.isObject(obj, 'obj is an object');

// .isNotObject(value, [message])
assert.isNotObject(undefinedly, 'undefinedly is not an object');

// .isArray(value, [message])
assert.isArray(arr, 'arr is an array');

// .isNotArray(value, [message])
assert.isNotArray(str, 'str is not an array');

// .isString(value, [message])
assert.isString(str, 'str is a string');

// .isNotString(value, [message])
assert.isNotString(obj, 'obj is not a string');

// .isNumber(value, [message])
assert.isNumber(one, 'one is a number');

// .isNotNumber(value, [message])
assert.isNotNumber(str, 'str is not a number');

// .isBoolean(value, [message])
assert.isBoolean(truthy, 'truthy is a boolean');

// .isNotBoolean(value, [message])
assert.isNotBoolean(undefinedly, 'undefinedly is not a boolean');

// .typeOf(value, name, [message])
assert.typeOf(str, 'string', 'str is of type string');

// .notTypeOf(value, name, [message])
assert.notTypeOf(str, 'number', 'str is not of type number');

// .instanceOf(obj, constructor, [message])
assert.instanceOf(myClassA, ClassA, 'myClassA is an instance of myClass');

// .notInstanceOf(object, constructor, [message])
assert.notInstanceOf(myClassA, ClassB, 'myClassA is not an instance of ClassB');

// .equal(actual, expected, [message])
assert.equal(str, 'str', 'str equal "str"');

// .lengthOg(object, length, [message])
assert.lengthOf(str, 3, 'the length of str is 3');
