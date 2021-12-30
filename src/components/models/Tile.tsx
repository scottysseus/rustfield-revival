/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Grid032: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/tile.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Grid032.geometry} material={materials.Dirt} position={[1, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/tile.glb')
