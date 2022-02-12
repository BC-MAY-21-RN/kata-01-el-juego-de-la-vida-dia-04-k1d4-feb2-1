module.exports = class Cell {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.status = 0;
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }
};
