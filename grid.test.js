/* eslint-disable no-undef */
const Grid = require('./Grid');

describe('Grid', () => {
  const grid = new Grid(4, 8);

  test('get matriz', () => {
    expect(grid.matriz).not.toBeNull();
  });

  test('matriz alto', () => {
    expect(grid.columns).toBe(8);
  });

  test('matriz ancho', () => {
    expect(grid.rows).toBe(4);
  });
});
