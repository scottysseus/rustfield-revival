/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane090: THREE.Mesh
    Plane090_1: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/meadow.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane090.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane090_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/meadow.glb')