import expect from 'expect';
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
  errorFunc,
} from '../constants';

// toExist([message]) : Assert the given object is truthy
expect(obj).toExist()

// toNotExist([message]) : Assert the given object is falsy
expect(nully).toNotExist();

// toBe(value, [message]) : '===' equality
expect(one).toBe(1);

// toNotBe(value, [message])
expect(one).toNotBe(2);
expect(one).toNotBe(true);

// toEqual(value, [message]) : using is-equal (conceptually equal)
expect(one).toEqual(1);

// toNotEqual(value, [message])
expect(one).toNotEqual(2);

// toThrow
expect(errorFunc).toThrow(/boom/);

// toNotThrow
expect(func).toNotThrow(/boom/);

// toBeA
expect(str).toBeA('string');
expect(myClassA).toBeA(ClassA);

// toNotBeA
expect(str).toNotBeA('number');

// toMatch(RegExp)
expect('str').toMatch(/tr/);

// toNotMatch(RegExp)
expect('str').toNotMatch(/tt/);

// toBeLessThan
expect(one).toBeLessThan(2);

// toBeLessThanOrEqualTo
expect(one).toBeLessThanOrEqualTo(1);

// toBeGreaterThan
expect(one).toBeGreaterThan(0);

// toBeGreaterThanOrEqualTo
expect(one).toBeGreaterThanOrEqualTo(1);

// toInclude
expect(arr).toInclude(one);

// toExclude
expect(arr).toExclude(0);

// toIncludeKey(s)
expect(obj).toIncludeKey('kex');
expect(obj).toIncludeKeys(['kex', 'key']);

// toExcludeKey(s)
expect(obj).toExcludeKey('kew');
expect(obj).toExcludeKeys(['keu', 'kev']);
