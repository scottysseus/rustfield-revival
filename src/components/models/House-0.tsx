/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane105']: THREE.Mesh
    ['Plane105_1']: THREE.Mesh
    ['Plane105_2']: THREE.Mesh
    ['Plane105_3']: THREE.Mesh
    ['Plane105_4']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['Abandoned House Walls']: THREE.MeshStandardMaterial
    ['Abandoned House Trim']: THREE.MeshStandardMaterial
    ['Abandoned House Windows']: THREE.MeshStandardMaterial
    ['Abandoned House Boards']: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/house-0.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane105.geometry} material={materials.Dirt} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105_1.geometry}
        material={materials['Abandoned House Walls']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105_2.geometry}
        material={materials['Abandoned House Trim']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105_3.geometry}
        material={materials['Abandoned House Windows']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105_4.geometry}
        material={materials['Abandoned House Boards']}
      />
    </group>
  )
}

useGLTF.preload('models/house-0.glb')
