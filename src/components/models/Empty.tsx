/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane114']: THREE.Mesh
    ['Plane114_1']: THREE.Mesh
    ['Plane114_2']: THREE.Mesh
    ['Plane114_3']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Gray: THREE.MeshStandardMaterial
    Rust: THREE.MeshStandardMaterial
    Tumbleweed: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/empty.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, -1]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane114.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane114_1.geometry} material={materials.Gray} />
        <mesh castShadow receiveShadow geometry={nodes.Plane114_2.geometry} material={materials.Rust} />
        <mesh castShadow receiveShadow geometry={nodes.Plane114_3.geometry} material={materials.Tumbleweed} />
      </group>
    </group>
  )
}

useGLTF.preload('models/empty.glb')
