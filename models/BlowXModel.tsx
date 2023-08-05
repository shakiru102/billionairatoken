import { RootState, extend, useFrame, useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import React, { useRef } from 'react'
import * as THREE from 'three'
import CustomFont from  '../assets/typeface/Detacher_Regular.json'

extend({ TextGeometry })

const BlowXModel = () => {
    const particlesText = useRef<THREE.Points>()
    const particleTextMap = useLoader(THREE.TextureLoader, './matcaps/matcap2.jpeg')
    const detacher = new FontLoader().parse(CustomFont)
    useFrame((state: RootState) => {
        const elapsedTime = state.clock.getElapsedTime()
        // console.log(state.mouse.y);
        
        // if(particlesText.current) {
        //     particlesText.current.rotation.y = state.mouse.x * 0.1
        //     particlesText.current.rotation.x = -state.mouse.y * 0.1
            
        // }
    })

  return (
    // @ts-ignore
    <mesh scale={0.3} position={[5, -2, 0]} rotation={[0, 0, Math.PI / 2]}  ref={particlesText}>
        {/* @ts-ignore */}
      <textGeometry  args={['BlowX', {font: detacher, size: 2, height: 0.2 }]}/>
      <meshMatcapMaterial
    //   matcap={particleTextMap}
     color={new THREE.Color('gray')}
      />
    </mesh>
  )
}

export default BlowXModel
