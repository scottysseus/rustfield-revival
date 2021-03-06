/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane100']: THREE.Mesh
    ['Plane100_1']: THREE.Mesh
    ['Plane100_2']: THREE.Mesh
    ['Plane100_3']: THREE.Mesh
    ['Plane100_4']: THREE.Mesh
    ['Plane100_5']: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    ['NiceGasStation::Red']: THREE.MeshStandardMaterial
    ['NiceGasStation::White']: THREE.MeshStandardMaterial
    ['NiceGasStation::Glass']: THREE.MeshStandardMaterial
    ['NiceGasStation::Yellow']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
  }
}

export default function Model ({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('models/gas-1.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane100.geometry} material={materials.Dirt} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_1.geometry}
          material={materials['NiceGasStation::Red']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_2.geometry}
          material={materials['NiceGasStation::White']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_3.geometry}
          material={materials['NiceGasStation::Glass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_4.geometry}
          material={materials['NiceGasStation::Yellow']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Plane100_5.geometry} material={materials['Material.008']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/gas-1.glb')
