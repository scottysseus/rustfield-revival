/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane117: THREE.Mesh
    Plane117_1: THREE.Mesh
    Plane117_2: THREE.Mesh
    Plane117_3: THREE.Mesh
    Plane117_4: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Gray: THREE.MeshStandardMaterial
    Rust: THREE.MeshStandardMaterial
    Tumbleweed: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/park-0.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -1]} rotation={[-Math.PI, -3.3e-7, -Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane117.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane117_1.geometry} material={materials.Gray} />
        <mesh castShadow receiveShadow geometry={nodes.Plane117_2.geometry} material={materials.Rust} />
        <mesh castShadow receiveShadow geometry={nodes.Plane117_3.geometry} material={materials.Tumbleweed} />
        <mesh castShadow receiveShadow geometry={nodes.Plane117_4.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/park-0.glb')
