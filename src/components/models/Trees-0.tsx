/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane203']: THREE.Mesh
    ['Plane203_1']: THREE.Mesh
    ['Plane203_2']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Rust: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/trees-0.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane203.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane203_1.geometry} material={materials.Grass} />
        <mesh castShadow receiveShadow geometry={nodes.Plane203_2.geometry} material={materials.Rust} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/trees-0.glb')
