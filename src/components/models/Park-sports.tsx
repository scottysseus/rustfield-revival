/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane199: THREE.Mesh
    Plane199_1: THREE.Mesh
    Plane199_2: THREE.Mesh
    Plane199_3: THREE.Mesh
    Plane199_4: THREE.Mesh
    Plane199_5: THREE.Mesh
    Plane199_6: THREE.Mesh
    Plane199_7: THREE.Mesh
    Plane199_8: THREE.Mesh
  }
  materials: {
    Grass: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
    ['Sports Park Track Stripe']: THREE.MeshStandardMaterial
    ['Sports Park Track']: THREE.MeshStandardMaterial
    ['Sports Park Goal Post']: THREE.MeshStandardMaterial
    ['Sporst Complex Field Stripe']: THREE.MeshStandardMaterial
    ['Sports Complex Benches']: THREE.MeshStandardMaterial
    ['Sports Complex Endzone']: THREE.MeshStandardMaterial
    ['Sports Complex Endzone Text']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/park-sports.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.5, -0.05, -0.5]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane199.geometry} material={materials.Grass} />
        <mesh castShadow receiveShadow geometry={nodes.Plane199_1.geometry} material={materials.Dirt} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_2.geometry}
          material={materials['Sports Park Track Stripe']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Plane199_3.geometry} material={materials['Sports Park Track']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_4.geometry}
          material={materials['Sports Park Goal Post']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_5.geometry}
          material={materials['Sporst Complex Field Stripe']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_6.geometry}
          material={materials['Sports Complex Benches']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_7.geometry}
          material={materials['Sports Complex Endzone']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199_8.geometry}
          material={materials['Sports Complex Endzone Text']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/park-sports.glb')
