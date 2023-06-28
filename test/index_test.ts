const { expect } = require('expect');
const loggerPlugin = require('../src');

describe('config', () => {
  it('default config', () => {
      expect(loggerPlugin()).toEqual({});
  });
});

