import jzsContext from '../../src/jzs-context';

describe('jzsContext', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(jzsContext, 'greet');

      jzsContext.greet();
    });

    it('should have been run once', () => {
      expect(jzsContext.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(jzsContext.greet).to.have.always.returned('hello');
    });
  });
});
