/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane179: THREE.Mesh
    Plane179_1: THREE.Mesh
    Plane179_2: THREE.Mesh
    Plane179_3: THREE.Mesh
    Plane179_4: THREE.Mesh
    Plane179_5: THREE.Mesh
    Plane179_6: THREE.Mesh
    Plane179_7: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['House::Paint::Blue']: THREE.MeshStandardMaterial
    ['House::Trim::Blue']: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    ['Mailbox::Black']: THREE.MeshStandardMaterial
    ['Mailbox::Flag::Red']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/house-2.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane179.geometry} material={materials.Dirt} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_1.geometry} material={materials.Grass} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_2.geometry} material={materials['Material.006']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_3.geometry} material={materials['House::Paint::Blue']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_4.geometry} material={materials['House::Trim::Blue']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_5.geometry} material={materials.Red} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_6.geometry} material={materials['Mailbox::Black']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane179_7.geometry} material={materials['Mailbox::Flag::Red']} />
    </group>
  )
}

useGLTF.preload('/models/house-2.glb')
