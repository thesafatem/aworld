export class Map {
  constructor(mapPieces) {
    this.height = 9;
    this.width = 12;
    this.grid = [];

    for (let i = 0; i < this.height; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.width; j++) {
        this.grid[i].push(null);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        const mapPiece = mapPieces[i][j];
        for (let x = 0; x < mapPiece.height; x++) {
          for (let y = 0; y < mapPiece.width; y++) {
            this.grid[i * mapPiece.height + x][j * mapPiece.width + y] = mapPiece.grid[x][y];
          }
        }
      }
    }
  }
}
