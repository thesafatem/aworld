export class MapPiece {
  constructor(grid) {
    this.height = 3;
    this.width = 6;
    this.grid = grid;
  }

  reverse() {
    for (let i = 0; i <= parseInt(this.height / 2); i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = this.grid[this.height - i - 1][this.width - j - 1];
      }
    }
  }
}
