const Lab = require('lab');
const Code = require('code');
const Pickme = require('../');

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('Pickme', () => {

  describe('Pick One', () => {

    describe('(with empty array of elements)', () => {

      it('should return null', (done) => {
        expect(new Pickme().pickOne()).to.be.null();
        done();
      });
    });

    describe('(with NOT empty array of elements)', () => {

      describe('(with one element)', () => {

        it('should return the element', (done) => {
          expect(new Pickme(['a']).pickOne()).to.equal('a');
          done();
        });
      });

      describe('(with multiple elements)', () => {

        it('should return one of the elements', (done) => {
          const elements = ['a', 'b', 'c'];
          expect(elements).to.include(new Pickme(elements).pickOne());
          done();
        });
      });

      describe('(with multiple elements of different type)', () => {

        it('should return one of the elements', (done) => {
          const date = new Date().toISOString();
          const elements = ['a', 1, date];
          expect(elements).to.include(new Pickme(elements).pickOne());
          done();
        });
      });

      describe('(with not supported type inside elements)', () => {

        it('should return one of the elements', (done) => {
          const elements = [Symbol('a')];
          const testFun = () => new Pickme(elements).pickOne();
          expect(testFun).to.throw(Error, 'Elements of type symbol are not supported, '
            + 'supported types are number, string, boolean');
          done();
        });
      });

    });

  });
});
