const {divide} = require('./divide');

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});
