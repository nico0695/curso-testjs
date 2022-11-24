const { sum, multiply, divide } = require('./02-math');

test('add 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('should be 4', () => {
  const rta = multiply(2, 2);
  expect(rta).toBe(4);
});

test('should divide', () => {
  const rta = divide(4, 2);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
  const rta3 = divide(6, 0);
  expect(rta3).toBe(Infinity);
});
