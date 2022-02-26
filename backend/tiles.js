import { Tile } from './tile.js';
import { biome } from './biome.js';
import { animal } from './animal.js';

export const forestFree = new Tile(biome.forest, null, null);
export const forestBear = new Tile(biome.forest, animal.bear, null);
export const forestCougar = new Tile(biome.forest, animal.cougar, null);

export const desertFree = new Tile(biome.desert, null, null);
export const desertBear = new Tile(biome.desert, animal.bear, null);
export const desertCougar = new Tile(biome.desert, animal.cougar, null);

export const waterFree = new Tile(biome.water, null, null);
export const waterBear = new Tile(biome.water, animal.bear, null);
export const waterCougar = new Tile(biome.water, animal.cougar, null);

export const mountainFree = new Tile(biome.mountain, null, null);
export const mountainBear = new Tile(biome.mountain, animal.bear, null);
export const mountainCougar = new Tile(biome.mountain, animal.cougar, null);

export const swampFree = new Tile(biome.swamp, null, null);
export const swampBear = new Tile(biome.swamp, animal.bear, null);
export const swampCougar = new Tile(biome.swamp, animal.cougar, null);
