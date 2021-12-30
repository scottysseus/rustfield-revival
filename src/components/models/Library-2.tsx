/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane110']: THREE.Mesh
    ['Plane110_1']: THREE.Mesh
    ['Plane110_2']: THREE.Mesh
    ['Plane110_3']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['School::Pillars']: THREE.MeshStandardMaterial
    ['School::Brick']: THREE.MeshStandardMaterial
    ['Library::Text']: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/library-2.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane110.geometry} material={materials.Dirt} />
        <mesh castShadow receiveShadow geometry={nodes.Plane110_1.geometry} material={materials['School::Pillars']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane110_2.geometry} material={materials['School::Brick']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane110_3.geometry} material={materials['Library::Text']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/library-2.glb')
