import { MapPiece } from './mapPiece.js';
import * as tiles from './tiles.js';

export const mapPiece1 = new MapPiece([
  [tiles.waterFree, tiles.waterFree, tiles.waterFree, tiles.waterFree, tiles.forestFree, tiles.forestFree],
  [tiles.swampFree, tiles.swampFree, tiles.waterFree, tiles.desertFree, tiles.forestFree, tiles.forestFree],
  [tiles.swampFree, tiles.swampFree, tiles.desertFree, tiles.desertBear, tiles.desertBear, tiles.desertBear]
]);

export const mapPiece2 = new MapPiece([
  [tiles.swampCougar, tiles.forestCougar, tiles.forestCougar, tiles.forestFree, tiles.forestFree, tiles.forestFree],
  [tiles.swampFree, tiles.swampFree, tiles.forestFree, tiles.desertFree, tiles.desertFree, tiles.desertFree],
  [tiles.swampFree, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree, tiles.desertFree]
]);

export const mapPiece3 = new MapPiece([
  [tiles.swampFree, tiles.swampFree, tiles.forestFree, tiles.forestFree, tiles.forestFree, tiles.waterFree],
  [tiles.swampCougar, tiles.swampCougar, tiles.forestFree, tiles.mountainFree, tiles.waterFree, tiles.waterFree],
  [tiles.mountainCougar, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree, tiles.waterFree, tiles.waterFree]
]);

export const mapPiece4 = new MapPiece([
  [tiles.desertFree, tiles.desertFree, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree],
  [tiles.desertFree, tiles.desertFree, tiles.mountainFree, tiles.waterFree, tiles.waterFree, tiles.waterCougar],
  [tiles.desertFree, tiles.desertFree, tiles.desertFree, tiles.forestFree, tiles.forestFree, tiles.forestCougar]
]);

export const mapPiece5 = new MapPiece([
  [tiles.swampFree, tiles.swampFree, tiles.swampFree, tiles.mountainFree, tiles.mountainFree, tiles.mountainFree],
  [tiles.swampFree, tiles.desertFree, tiles.desertFree, tiles.waterFree, tiles.mountainFree, tiles.mountainBear],
  [tiles.desertFree, tiles.desertFree, tiles.waterFree, tiles.waterFree, tiles.waterBear, tiles.waterBear]
]);

export const mapPiece6 = new MapPiece([
  [tiles.desertBear, tiles.desertFree, tiles.swampFree, tiles.swampFree, tiles.swampFree, tiles.forestFree],
  [tiles.mountainBear, tiles.mountainFree, tiles.swampFree, tiles.swampFree, tiles.forestFree, tiles.forestFree],
  [tiles.mountainFree, tiles.waterFree, tiles.waterFree, tiles.waterFree, tiles.waterFree, tiles.forestFree]
])
