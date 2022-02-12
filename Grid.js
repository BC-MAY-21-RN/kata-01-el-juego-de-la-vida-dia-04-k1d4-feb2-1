const Cell = require('./Cell');
class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matriz = this.fillGrid();
    this.setFirtsGen(4);
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  fillGrid() {
    const matriz = new Array(this.rows)
      .fill('.')
      .map(() => new Array(this.columns).fill('.'));

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        matriz[i][j] = new Cell(i, j);
      }
    }

    return matriz;
  }

  setFirtsGen(num) {
    let count = 0;
    do {
      let x = this.random(0, this.rows - 1);
      let y = this.random(0, this.columns - 1);
      if (this.matriz[x][y].status == 0) {
        this.matriz[x][y].setStatus(1);
        count++;
      }
    } while (count < num);
  }

  printGrid() {
    let matrizText = '';
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        matrizText += this.matriz[x][y].status == 1 ? '🙂 ' : '💀 ';
      }
      console.log(matrizText);
      matrizText = '';
    }
  }
}
const myGrid = new Grid(4, 5);
myGrid.printGrid();
