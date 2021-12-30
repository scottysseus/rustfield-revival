// @ts-nocheck
// since we no longer use modelPaths this helper app is completely broken.

import { tileCatalog } from './tile-catalog'
import { access, cp } from 'fs/promises'
import { constants } from 'fs'
import { join } from 'path'

const placeholderModelPath = './public/models/placeholder.glb'
async function doit () {
  for (const tileType in tileCatalog) {
    console.debug(tileType)
    const filePath = join('./public', tileCatalog[tileType].modelPath)
    try {
      await access(filePath, constants.F_OK)
    } catch (error) {
      // If error, fill in placeholder model
      cp(placeholderModelPath, filePath)
    }
  }
}

doit().catch(console.debug)
