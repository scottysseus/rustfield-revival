/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane220: THREE.Mesh
    Plane220_1: THREE.Mesh
    Plane220_2: THREE.Mesh
    Plane220_3: THREE.Mesh
    Plane220_4: THREE.Mesh
    Plane220_5: THREE.Mesh
    Plane220_6: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['Rust::Market::Planters']: THREE.MeshStandardMaterial
    ['Shop Walls']: THREE.MeshStandardMaterial
    ['Dining Wood']: THREE.MeshStandardMaterial
    ['Shop Dumpster']: THREE.MeshStandardMaterial
    ['Shop Dumpster Stripe']: THREE.MeshStandardMaterial
    ['Shop Trash']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/shop-0.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane220.geometry} material={materials.Dirt} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane220_1.geometry}
          material={materials['Rust::Market::Planters']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Plane220_2.geometry} material={materials['Shop Walls']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane220_3.geometry} material={materials['Dining Wood']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane220_4.geometry} material={materials['Shop Dumpster']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane220_5.geometry}
          material={materials['Shop Dumpster Stripe']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Plane220_6.geometry} material={materials['Shop Trash']} />
      </group>
    </group>
  )
}

useGLTF.preload('/shop-0.glb')
