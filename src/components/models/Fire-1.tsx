/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane196: THREE.Mesh
    Plane196_1: THREE.Mesh
    Plane196_2: THREE.Mesh
    Plane196_3: THREE.Mesh
    Plane196_4: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    FireStationTrim: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/fire-1.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane196.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane196_1.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Plane196_2.geometry} material={materials.FireStationTrim} />
        <mesh castShadow receiveShadow geometry={nodes.Plane196_3.geometry} material={materials.Blue} />
        <mesh castShadow receiveShadow geometry={nodes.Plane196_4.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/fire-1.glb')
