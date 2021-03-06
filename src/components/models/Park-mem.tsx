/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane089']: THREE.Mesh
    ['Plane089_1']: THREE.Mesh
    ['Plane089_2']: THREE.Mesh
    ['Plane089_3']: THREE.Mesh
    ['Plane089_4']: THREE.Mesh
    ['Plane089_5']: THREE.Mesh
    ['Plane089_6']: THREE.Mesh
    ['Plane089_7']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Gray: THREE.MeshStandardMaterial
    Water: THREE.MeshStandardMaterial
    Rust: THREE.MeshStandardMaterial
    ['Memorial Park Benches']: THREE.MeshStandardMaterial
    ['Memorial Park Flowers Stem']: THREE.MeshStandardMaterial
    ['Memorial Park Flowers Petals']: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/park-mem.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane089.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane089_1.geometry} material={materials.Grass} />
        <mesh castShadow receiveShadow geometry={nodes.Plane089_2.geometry} material={materials.Gray} />
        <mesh castShadow receiveShadow geometry={nodes.Plane089_3.geometry} material={materials.Water} />
        <mesh castShadow receiveShadow geometry={nodes.Plane089_4.geometry} material={materials.Rust} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_5.geometry}
          material={materials['Memorial Park Benches']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_6.geometry}
          material={materials['Memorial Park Flowers Stem']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_7.geometry}
          material={materials['Memorial Park Flowers Petals']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/park-mem.glb')
