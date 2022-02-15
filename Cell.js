module.exports = class Cell {
  constructor(posX, posY, limits) {
    this.posX = posX;
    this.posY = posY;
    this.status = 0;
    this.limits = limits;
    this.liveNeighbors = 0;
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getPosX() {
    return this.posX;
  }

  getPosY() {
    return this.posY;
  }

  limitChecker() {
    const { limitX, limitY } = this.limits;
    let result = 'nada';

    let x = this.getPosX();
    let y = this.getPosY();
    let sumXY = x + y;

    if (sumXY == 0) {
      result = 'cornerTL';
    } else if (x == 0 && y == limitY) {
      result = 'cornerTR';
    } else if (x == limitX && y == 0) {
      result = 'cornerBL';
    } else if (x == limitX && y == limitY) {
      result = 'cornerBR';
    } else if (x == 0) {
      result = 'borderTop';
    } else if (y == 0) {
      result = 'borderLeft';
    } else if (x == limitX) {
      result = 'borderBottom';
    } else if (y == limitY) {
      result = 'borderRight';
    }

    return result;
  }

  countLiveNeighbors(matriz) {
    let counter = 0;

    let top = { x: this.getPosX() - 1, y: this.getPosY() };
    let bot = { x: this.getPosX() + 1, y: this.getPosY() };
    let left = { x: this.getPosX(), y: this.getPosY() - 1 };
    let right = { x: this.getPosX(), y: this.getPosY() + 1 };
    let topLeft = { x: this.getPosX() - 1, y: this.getPosY() - 1 };
    let topRight = { x: this.getPosX() - 1, y: this.getPosY() + 1 };
    let botLeft = { x: this.getPosX() + 1, y: this.getPosY() - 1 };
    let botRight = { x: this.getPosX() + 1, y: this.getPosY() + 1 };

    let location = this.limitChecker();

    if (location == 'cornerTL') {
      let searchNeighbors = { right, bot, botRight };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'cornerTR') {
      let searchNeighbors = { left, bot, botLeft };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'cornerBL') {
      let searchNeighbors = { top, right, topRight };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'cornerBR') {
      let searchNeighbors = { top, left, topLeft };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'borderTop') {
      let searchNeighbors = { left, right, botLeft, botRight, bot };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'borderLeft') {
      let searchNeighbors = { right, top, bot, topRight, botRight };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'borderBottom') {
      let searchNeighbors = { left, right, topLeft, topRight, top };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else if (location == 'borderRight') {
      let searchNeighbors = { left, top, bot, topLeft, botLeft };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    } else {
      let searchNeighbors = {
        left,
        top,
        bot,
        right,
        topRight,
        topLeft,
        botLeft,
        botRight,
      };
      Object.entries(searchNeighbors).forEach(([key, value]) => {
        if (matriz[value.x][value.y].getStatus() == 1) {
          counter++;
        }
      });
    }

    return counter;
  }

  nextStatus() {
    if (this.liveNeighbors < 2) {
      return 0;
    } else if (this.liveNeighbors <= 3) {
      if (this.status == 1) {
        return 1;
      } else {
        if (this.liveNeighbors == 2) {
          return 0;
        } else {
          return 1;
        }
      }
    } else {
      return 0;
    }
  }
};
