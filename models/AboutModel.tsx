import { Float, RoundedBox } from '@react-three/drei'
import { RootState, useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const AboutModel = () => {

    const blowxMap = useLoader(THREE.TextureLoader, './maps/blowlogo.jpeg')
    const spotLight = useRef<THREE.SpotLight>()
    const box = useRef<THREE.Group>()

    const planeData: {
        position?: THREE.Vector3,
        rotation?: THREE.Euler
    }[] = [
        {
            // @ts-ignore
            position: [0,2,-1.0005],
            // @ts-ignore
            rotation: [0, Math.PI, 0]
        },
        {
            // @ts-ignore
            position: [0,2,1.0005],
            // @ts-ignore
            rotation: [0, 0, 0]
        },
        {
            // @ts-ignore
            position: [-1.0005,2,0],
            // @ts-ignore
            rotation: [0, -Math.PI / 2, 0]
        },
        {
            // @ts-ignore
            position: [1.0005,2,0],
            // @ts-ignore
            rotation: [0, Math.PI / 2, 0]
        },
        {
            // @ts-ignore
            position: [0,3.0005,0],
            // @ts-ignore
            rotation: [Math.PI * 0.5, 0, 0]
        },
        {
            // @ts-ignore
            position: [0,1.0005,0],
            // @ts-ignore
            rotation: [Math.PI * 0.5, 0, 0]
        }
    ]

    useFrame((state: RootState) => {
       const time =  state.clock.getElapsedTime()
        if(spotLight.current) {
           spotLight.current.position.x = Math.cos(time) * 4.5
           spotLight.current.position.y = Math.sin(time) * 4.5
           spotLight.current.position.z = Math.sin(time) * 4.5
        }
        if(box.current) {
            // box.current.rotation.x = time * 0.01
            box.current.rotation.y = time * 0.2
        }
    })

  return (
    <group position={[0,-2,0]}>
      <Float
      floatingRange={[-1, 0.5]}
      floatIntensity={1}
      >
        {/* @ts-ignore */}
      <group castShadow ref={box} position={[3, 0,0]} rotation={[0, 0, 0]}>
        {/* @ts-ignore */}
        <RoundedBox castShadow scale={2} args={[1, 1, 1]} position={[0,2,0]} radius={0.2}>
        <meshStandardMaterial 
        color={new THREE.Color('black')} 
        />
      </RoundedBox>
      {
        planeData.map((item, i: number) => (
            <mesh  castShadow scale={1.3} key={i} position={item.position} rotation={item.rotation}>
                <planeGeometry   args={[1, 1]}/>
                <meshStandardMaterial map={blowxMap} side={THREE.DoubleSide} transparent  />
            </mesh>
        ))
      }
      </group>
      </Float>
      <mesh receiveShadow rotation={[Math.PI * 0.5, 0, 0]} scale={10}>
        <planeGeometry   args={[10, 10]}/>
        <meshStandardMaterial side={THREE.DoubleSide}  />
      </mesh>
      <spotLight
      castShadow
    //   @ts-ignore
    ref={spotLight}
      intensity={1}
      angle={Math.PI / 3}
      decay={1}
      distance={0}
      position={[-4.5, 4, 4.5]}
      penumbra={1}
      />
    </group>
  )
}

export default AboutModel
