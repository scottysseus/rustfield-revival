/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['road-turn_1']: THREE.Mesh
    ['road-turn_2']: THREE.Mesh
    ['road-turn_3']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['Road::Tar']: THREE.MeshStandardMaterial
    ['Road::Stripe']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/road-turn.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['road-turn_1'].geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes['road-turn_2'].geometry} material={materials['Road::Tar']} />
        <mesh castShadow receiveShadow geometry={nodes['road-turn_3'].geometry} material={materials['Road::Stripe']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/road-turn.glb')