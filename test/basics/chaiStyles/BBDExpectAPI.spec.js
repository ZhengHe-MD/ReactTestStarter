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

const expect = chai.expect;

// .not
expect(one).to.not.equal(2);

// .deep
expect(obj).to.deep.equal({ key: 'val', kex: 'vam', kez: 'van' });

// .any
expect(obj).to.have.any.keys('kex', 'kew');

// .all
expect(obj).to.have.all.keys('kex', 'key', 'kez');

// .a(type)
expect(str).to.be.a('string');

// .include(value)
expect(arr).to.include(2);

// .ok
expect('everything').to.be.ok;

// .true
expect(truthy).to.be.true;

// .false
expect(falsy).to.be.false;

// .null
expect(nully).to.be.null;

// .undefined
expect(undefinedly).to.be.undefined;

// .NaN
expect(nan).to.be.NaN;

// .exist
expect(str).to.exist;

// .empty
expect([]).to.be.empty;

// .equal .eql ['===' equality]
expect(str).to.equal('str');

// .above
expect(one).to.be.above(0);

// .leat
expect(one).to.be.least(1);

// .below
expect(one).to.below(2);

// .most
expect(one).to.be.at.most(1);

// .within(start, finish)
expect(one).to.be.within(0, 2);

// .instanceof(constructor)
expect(myClassA).instanceof(ClassA);

// .property(name, [value])
expect(obj).to.have.property('key');

// .ownProperty(name)
expect('test').to.have.ownProperty('length');

// .length
expect(str).to.have.length.above(2);

// .lengthOf
expect(str).to.have.lengthOf(3);

// .match(regexp)
expect('foobar').to.match(/^foo/);

// .string(string)
expect(str).to.have.string('tr');

// .keys(key1, [key2],[...])
expect(obj).to.have.any.keys('kex', 'key', 'kew');

// .throw
expect(func).to.not.throw(Error);

// .oneOf(list)
expect(one).oneOf([1, 2, 3]);
