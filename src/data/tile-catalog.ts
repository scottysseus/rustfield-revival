import { RawTileCatalog } from '../game_logic'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const catalog: RawTileCatalog = {
  empty: {
    name: 'Empty Lot',
    description: '',
    tags: [],
    happiness: 0,
    revenue: 0,
    projects: [],
    modelPath: 'models/tile.glb'
  },
  grocery: {
    name: 'Grocery',
    description: '',
    tags: [],
    happiness: 0,
    revenue: 0,
    projects: [
      'demolish'
    ],
    modelPath: 'models/groceries.glb'
  },
  library: {
    name: 'Library',
    description: 'Books!',
    tags: [],
    happiness: 0,
    revenue: 0,
    projects: [
      'demolish'
    ],
    modelPath: 'models/library.glb'
  },
  gas: {
    name: 'Gas',
    description: 'Books!',
    tags: [],
    happiness: 0,
    revenue: 0,
    projects: [
      'demolish'
    ],
    modelPath: 'models/gas.glb'
  }
}
