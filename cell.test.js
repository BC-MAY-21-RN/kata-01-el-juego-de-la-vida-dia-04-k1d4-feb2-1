/* eslint-disable no-undef */
const Grid = require('./Grid');

const myGrid = new Grid(4, 8);
let matriz = myGrid.matriz;

describe('Status siguiente', () => {
  let myCellOne = matriz[1][3];
  let myCellTwo = matriz[2][3];

  myCellOne.liveNeighbors = myCellOne.countLiveNeighbors(matriz);
  myCellTwo.liveNeighbors = myCellTwo.countLiveNeighbors(matriz);

  test('defines getStatus', () => {
    expect(myCellOne.nextStatus()).toBe(1);
  });
  test('defines getStatus', () => {
    expect(myCellTwo.nextStatus()).toBe(1);
  });
});
