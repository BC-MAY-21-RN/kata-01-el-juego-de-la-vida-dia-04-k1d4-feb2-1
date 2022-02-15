const Cell = require('./Cell');
module.exports = class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matriz = this.fillGrid();
    this.newMatriz = this.fillGrid();
    // this.setFirtsGen(7);
    this.matrizTest();
    this.limits = this.getLimits();
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getLimits() {
    let limitX = this.rows - 1;
    let limitY = this.columns - 1;
    return { limitX: limitX, limitY: limitY };
  }
  fillGrid() {
    const matriz = new Array(this.rows)
      .fill('.')
      .map(() => new Array(this.columns).fill('.'));

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        matriz[i][j] = new Cell(i, j, this.getLimits());
      }
    }

    return matriz;
  }

  setFirtsGen(num) {
    let count = 0;
    do {
      let x = this.random(0, this.rows);
      let y = this.random(0, this.columns);
      if (this.matriz[x][y].status == 0) {
        this.matriz[x][y].setStatus(1);
        count++;
      }
    } while (count < num);
  }

  matrizTest() {
    this.matriz[1][4].setStatus(1);
    this.matriz[2][3].setStatus(1);
    this.matriz[2][4].setStatus(1);
  }

  printGrid(matriz) {
    let matrizText = '';
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        matrizText += matriz[x][y].status == 1 ? '🙂 ' : '💀 ';
        // let count = this.matriz[x][y].countLiveNeighbors(this.matriz);
        // this.matriz[x][y].liveNeighbors = count;
        // this.matriz[x][y].setStatus(this.matriz[x][y].nextStatus());
      }
      console.log(matrizText);
      matrizText = '';
    }
  }
};
