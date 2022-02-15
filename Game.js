const Grid = require('./Grid');

let rows = 4;
let columns = 8;

const myGrid = new Grid(rows, columns);
let matriz = myGrid.matriz;
let newMatriz = myGrid.newMatriz;
console.log('primera gen');
myGrid.printGrid(matriz);

for (let x = 0; x < rows; x++) {
  for (let y = 0; y < columns; y++) {
    let count = matriz[x][y].countLiveNeighbors(matriz);
    matriz[x][y].liveNeighbors = count;
    newMatriz[x][y].setStatus(matriz[x][y].nextStatus());
  }
}

console.log('segunda gen');
myGrid.printGrid(newMatriz);

// console.log(myGrid.matriz[1][1].findNeighbours());
// let myCell = myGrid.matriz[0][3];
// console.log(myCell.liveNeighbors);
// console.log('status', myCell.nextStatus());
// myCell.countLiveNeighbors(matriz);
