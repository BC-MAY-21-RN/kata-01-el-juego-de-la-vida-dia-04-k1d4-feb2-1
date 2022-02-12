/* eslint-disable no-undef */
const Cell = require('./Cell');

describe('Cell', () => {
  const cell = new Cell(2, 2);

  test('defines getStatus', () => {
    expect(cell.getStatus).not.toBeNull();
  });
});
