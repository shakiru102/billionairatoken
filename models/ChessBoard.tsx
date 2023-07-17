/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 scene.gltf -ts
Author: Misam Ali Rizvi (https://sketchfab.com/MisamAliRizvi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-set-ecab6a90b57845a28545fd200af7bea6
Title: Chess Set
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RootState, useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
// import Chess from '/public/chess_set/scene.gltf'

type GLTFResult = GLTF & {
  nodes: {
    Board_Board_0: THREE.Mesh
    Pawn_08_Player_02_0: THREE.Mesh
    Pawn_07_Player_02_0: THREE.Mesh
    Pawn_06_Player_02_0: THREE.Mesh
    Pawn_05_Player_02_0: THREE.Mesh
    Pawn_04_Player_02_0: THREE.Mesh
    Pawn_03_Player_02_0: THREE.Mesh
    Pawn_02_Player_02_0: THREE.Mesh
    Pawn_01_Player_02_0: THREE.Mesh
    Rook_02_Player_02_0: THREE.Mesh
    Knight_02_Player_02_0: THREE.Mesh
    Bishop_02_Player_02_0: THREE.Mesh
    Queen_01_Player_02_0: THREE.Mesh
    KING_01_Player_02_0: THREE.Mesh
    Bishop_01_Player_02_0: THREE.Mesh
    Knight_01_Player_02_0: THREE.Mesh
    Rook_01_Player_02_0: THREE.Mesh
    Rook_04_Player_01_0: THREE.Mesh
    Knight_04_Player_01_0: THREE.Mesh
    Bishop_04_Player_01_0: THREE.Mesh
    KING_02_Player_01_0: THREE.Mesh
    Queen_02_Player_01_0: THREE.Mesh
    Bishop_03_Player_01_0: THREE.Mesh
    Knight_03_Player_01_0: THREE.Mesh
    Rook_03_Player_01_0: THREE.Mesh
    Pawn_16_Player_01_0: THREE.Mesh
    Pawn_15_Player_01_0: THREE.Mesh
    Pawn_14_Player_01_0: THREE.Mesh
    Pawn_13_Player_01_0: THREE.Mesh
    Pawn_12_Player_01_0: THREE.Mesh
    Pawn_11_Player_01_0: THREE.Mesh
    Pawn_10_Player_01_0: THREE.Mesh
    Pawn_09_Player_01_0: THREE.Mesh
  }
  materials: {
    Board: THREE.MeshStandardMaterial
    Player_02: THREE.MeshStandardMaterial
    Player_01: THREE.MeshStandardMaterial
  }
}

export function ChessBoard(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/chess/scene.gltf') as GLTFResult

  const chess = useRef<THREE.Group>(null)
  const blackPawn1 = useRef<THREE.Group>(null)

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime()
    if(chess.current) {
      state.camera.lookAt(chess.current.position)
      chess.current.rotation.y =  elapsedTime *  0.05 
    }
    
  })

  useEffect(() => {
    const tl = gsap.timeline()
    if(blackPawn1.current) {
      // tl.to(blackPawn1.current?.position, { y: 4, repeat: 5, yoyo: true })
    }
  },[blackPawn1.current])


  return (
    <group {...props}  
    castShadow 
    receiveShadow 
    dispose={null} 
    rotation={[0, 0 , 0]} 
    ref={chess}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group ref={blackPawn1} position={[6.534, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_08_Player_02_0.geometry} material={materials.Player_02} position={[-6.364, 0, 0]} />
          </group>
          <group position={[4.695, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_07_Player_02_0.geometry} material={materials.Player_02} position={[-4.545, 0, 0]} />
          </group>
          <group position={[2.807, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_06_Player_02_0.geometry} material={materials.Player_02} position={[-2.727, 0, 0]} />
          </group>
          <group position={[0.974, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_05_Player_02_0.geometry} material={materials.Player_02} position={[-0.909, 0, 0]} />
          </group>
          <group position={[-0.97, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_04_Player_02_0.geometry} material={materials.Player_02} position={[0.909, 0, 0]} />
          </group>
          <group position={[-2.83, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_03_Player_02_0.geometry} material={materials.Player_02} position={[2.727, 0, 0]} />
          </group>
          <group position={[-4.731, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_02_Player_02_0.geometry} material={materials.Player_02} position={[4.545, 0, 0]} />
          </group>
          <group position={[-6.506, 4.699, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_01_Player_02_0.geometry} material={materials.Player_02} position={[6.364, 0, 0]} />
          </group>
          <group position={[6.534, 6.548, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Rook_02_Player_02_0.geometry} material={materials.Player_02} position={[-6.364, -1.849, 0]} />
          </group>
          <group position={[4.742, 6.577, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Knight_02_Player_02_0.geometry} material={materials.Player_02} position={[-4.734, -1.878, 0]} />
          </group>
          <group position={[2.793, 6.578, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Bishop_02_Player_02_0.geometry} material={materials.Player_02} position={[-2.727, -1.88, 0]} />
          </group>
          <group position={[0.96, 6.578, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Queen_01_Player_02_0.geometry} material={materials.Player_02} position={[-0.909, -1.88, 0]} />
          </group>
          <group position={[-0.917, 6.578, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.KING_01_Player_02_0.geometry} material={materials.Player_02} position={[0.909, -1.88, 0]} />
          </group>
          <group position={[-2.772, 6.578, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Bishop_01_Player_02_0.geometry} material={materials.Player_02} position={[2.727, -1.88, 0]} />
          </group>
          <group position={[-4.674, 6.578, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Knight_01_Player_02_0.geometry} material={materials.Player_02} position={[4.6, -1.88, 0]} />
          </group>
          <group position={[-6.563, 6.548, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Rook_01_Player_02_0.geometry} material={materials.Player_02} position={[6.364, -1.849, 0]} />
          </group>
          <group position={[6.526, -6.633, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Rook_04_Player_01_0.geometry} material={materials.Player_01} position={[-5.455, -0.031, 0]} />
          </group>
          <group position={[4.608, -6.664, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Knight_04_Player_01_0.geometry} material={materials.Player_01} position={[-3.691, 0, 0]} />
          </group>
          <group position={[2.83, -6.664, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Bishop_04_Player_01_0.geometry} material={materials.Player_01} position={[-1.818, 0, 0]} />
          </group>
          <mesh castShadow receiveShadow geometry={nodes.KING_02_Player_01_0.geometry} material={materials.Player_01} position={[0.936, -6.664, 2.918]} />
          <group position={[-0.902, -6.664, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Queen_02_Player_01_0.geometry} material={materials.Player_01} position={[1.818, 0, 0]} />
          </group>
          <group position={[-2.824, -6.664, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Bishop_03_Player_01_0.geometry} material={materials.Player_01} position={[3.636, 0, 0]} />
          </group>
          <group position={[-4.627, -6.662, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Knight_03_Player_01_0.geometry} material={materials.Player_01} position={[5.643, -0.002, 0]} />
          </group>
          <group position={[-6.506, -6.633, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Rook_03_Player_01_0.geometry} material={materials.Player_01} position={[7.273, -0.031, 0]} />
          </group>
          <group position={[6.371, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_16_Player_01_0.geometry} material={materials.Player_01} position={[-5.455, -1.88, 0]} />
          </group>
          <group position={[4.553, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_15_Player_01_0.geometry} material={materials.Player_01} position={[-3.636, -1.88, 0]} />
          </group>
          <group position={[2.735, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_14_Player_01_0.geometry} material={materials.Player_01} position={[-1.818, -1.88, 0]} />
          </group>
          <group position={[0.917, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_13_Player_01_0.geometry} material={materials.Player_01} position={[0, -1.88, 0]} />
          </group>
          <group position={[-0.902, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_12_Player_01_0.geometry} material={materials.Player_01} position={[1.818, -1.88, 0]} />
          </group>
          <group position={[-2.826, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_11_Player_01_0.geometry} material={materials.Player_01} position={[3.636, -1.88, 0]} />
          </group>
          <group position={[-4.705, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_10_Player_01_0.geometry} material={materials.Player_01} position={[5.455, -1.88, 0]} />
          </group>
          <group position={[-6.599, -4.784, 2.918]}>
            <mesh castShadow receiveShadow geometry={nodes.Pawn_09_Player_01_0.geometry} material={materials.Player_01} position={[7.273, -1.88, 0]} />
          </group>
          <mesh castShadow receiveShadow geometry={nodes.Board_Board_0.geometry} material={materials.Board} position={[0.004, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chess/scene.gltf')
