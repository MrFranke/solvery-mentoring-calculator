const {sum} = require('./sum');

describe('add function test', () =>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + "2" throw error', () => {
    expect(() => sum(1, "2")).toThrowError(new Error("string is not good"));
  });
})
