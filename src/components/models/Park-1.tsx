/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Cube056']: THREE.Mesh
    ['Cube056_1']: THREE.Mesh
    ['Cube056_2']: THREE.Mesh
    ['Cube056_3']: THREE.Mesh
  }
  materials: {
    Grass: THREE.MeshStandardMaterial
    Gray: THREE.MeshStandardMaterial
    Rust: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/park-1.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.30000001]} scale={[7.42671585, 0.25, 0.25]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube056.geometry} material={materials.Grass} />
        <mesh castShadow receiveShadow geometry={nodes.Cube056_1.geometry} material={materials.Gray} />
        <mesh castShadow receiveShadow geometry={nodes.Cube056_2.geometry} material={materials.Rust} />
        <mesh castShadow receiveShadow geometry={nodes.Cube056_3.geometry} material={materials.Dirt} />
      </group>
    </group>
  )
}

useGLTF.preload('models/park-1.glb')
