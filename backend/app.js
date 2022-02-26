import fs from 'fs';

import {
  mapPiece1,
  mapPiece2,
  mapPiece3,
  mapPiece4,
  mapPiece5,
  mapPiece6
} from './mapPieces.js';
import { Map } from './map.js';

const map = new Map([
  [mapPiece1, mapPiece2],
  [mapPiece3, mapPiece4],
  [mapPiece5, mapPiece6]
]);

fs.writeFile('aliyusha.json', JSON.stringify(map, ['grid', 'biome', 'name'], 2), err => {
  if (err) {
    console.log(err);
  }
});
