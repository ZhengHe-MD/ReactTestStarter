// reference: [http://chaijs.com/api/bdd/]
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

const should = chai.should();

// .not
one.should.not.equal(2);

// .deep
obj.should.deep.equal({ key: 'val', kex: 'vam', kez: 'van' });

// .any
obj.should.have.any.keys('kex', 'kew');

// .all
obj.should.have.all.keys('kex', 'key', 'kez');

// .a(type)
str.should.be.a('string');

// .include(value)
arr.should.include(2);

// .ok
'everything'.should.be.ok;

// .true
truthy.should.be.true;

// .false
falsy.should.be.false;

// .null .undefined is not supported in should API
// use .exist instead.
// .NaN
nan.should.be.NaN;

// .exist
str.should.exist;

// .empty
[].should.be.empty;

// .equal .eql ['===' equality]
str.should.equal('str');

// .above
one.should.be.above(0);

// .leat
one.should.be.least(1);

// .below
one.should.below(2);

// .most
one.should.be.at.most(1);

// .within(start, finish)
one.should.be.within(0, 2);

// .instanceof(constructor)
myClassA.should.be.instanceof(ClassA);

// .property(name, [value])
obj.should.have.property('key');

// .ownProperty(name)
'test'.should.have.ownProperty('length');

// .length
str.should.have.length.above(2);

// .lengthOf
str.should.have.lengthOf(3);

// .match(regexp)
'foobar'.should.match(/^foo/);

// .string(string)
str.should.have.string('tr');

// .keys(key1, [key2],[...])
obj.should.have.any.keys('kex', 'key', 'kew');

// .throw
func.should.not.throw(Error);

// .oneOf(list)
one.should.be.oneOf([1, 2, 3]);
