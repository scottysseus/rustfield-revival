/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane109: THREE.Mesh
    Plane109_1: THREE.Mesh
    Plane109_2: THREE.Mesh
    Plane109_3: THREE.Mesh
    Plane109_4: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['House::Trim::Brown']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/house-1.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane109.geometry} material={materials.Dirt} />
      <mesh castShadow receiveShadow geometry={nodes.Plane109_1.geometry} material={materials['Material.005']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane109_2.geometry} material={materials['Material.006']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane109_3.geometry} material={materials['Material.009']} />
      <mesh castShadow receiveShadow geometry={nodes.Plane109_4.geometry} material={materials['House::Trim::Brown']} />
    </group>
  )
}

useGLTF.preload('/house-1.glb')
