// matchers
test('test obj', () => {
  const obj = { name: 'prueba' };
  obj.lastname = 'prueba';
  expect(obj).toEqual({ name: 'prueba', lastname: 'prueba' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('esto es una prueba match').toMatch(/prueba/);
});

test('list / arrays', () => {
  const list = ['prueba1', 'prueba2', 'prueba3'];
  expect(list).toContain('prueba1');
});
