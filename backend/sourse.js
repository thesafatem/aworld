import { map } from './test.js';
function draw() {
  console.log(map);
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (let i = 0; i < map.height; i++) {
      for (let j = 0; j < map.width; j++) {
        const tile = map.grid[i][j];
        ctx.fillStyle = tile.biome.hexcolor;
        if (j & 1) {
          ctx.fillRect(30 * (j + 1), 30 * (i + 1) + 15, 25, 25);
        } else {
          ctx.fillRect(30 * (j + 1), 30 * (i + 1), 25, 25);
        }
      }
    }
  }
}

draw();
