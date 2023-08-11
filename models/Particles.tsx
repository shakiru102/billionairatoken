import { RootState, useFrame, useLoader, useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const count: number = 1000
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6 * count), 3))
    geometry.setAttribute('velocity', new THREE.BufferAttribute(new Float32Array(2 * count), 1))
    let positionGeom = geometry.getAttribute('position')
    let position = positionGeom.array
    let velocity = geometry.getAttribute('velocity').array

        for (let i = 0; i < count ; i++) {
           let x = Math.random() * 20 - 10
           let y = Math.random() * 20 - 10
           let z = Math.random()  * 10 - 20
// Line start point
           position[6 * i] = x
           position[6 * i + 1] = y
           position[6 * i + 2] = z
        // Line end point
        position[6 * i + 3] = x
        position[6 * i + 4] = y
        position[6 * i + 5] = z

        velocity[2 * i] = velocity[2 * i + 1] = 0
        }
        
        let mat = new THREE.LineBasicMaterial({ color: new THREE.Color('white') })
        let lines = new THREE.LineSegments(geometry, mat)

const Particles = () => {
    const { scene } = useThree()
    const particles = useRef<THREE.Points>()
    
        useEffect(() => {
            scene.add(lines)
        },[])
             
       
    const particleMap = useLoader(THREE.TextureLoader, './particles/star_04.png')

    useFrame((state: RootState) => {
        const elapsedTime = state.clock.getElapsedTime()
        // console.log(state.mouse.y);
        
        if(particles.current && screen.width > 768) {
            particles.current.rotation.y = state.mouse.x * 0.1
            particles.current.rotation.x = -state.mouse.y * 0.1
        }

        for (let i = 0; i < count ; i++) {
            velocity[2 * i] += 0.03
            velocity[2 * i + 1] += 0.025

            //  Line start point
        //    position[6 * i] = x
        //    position[6 * i + 1] = y
           position[6 * i + 2] = velocity[2 * i]
           // Line end point
           // position[6 * i + 3] = x
           // position[6 * i + 4] = y
           position[6 * i + 5] = velocity[2 * i + 1]

           if(position[6 * i + 2] > 10) {
            position[6 * i + 2] = Math.random() * 100 - 10000
            position[6 * i + 5] = Math.random() * 100 - 10000
            velocity[2 * i] = 0
            velocity[2 * i + 1] = 0
           }

        }
      positionGeom.needsUpdate = true
    })

  return (
    // @ts-ignore
    <points scale={4.5} ref={particles}>
        <boxGeometry  args={[1, 1, 1, 100, 100, 100]}/>
        {/* @ts-ignore */}
      <pointsMaterial 
      sizeAttenuation={true}
      blending={THREE.AdditiveBlending}
      map={particleMap}
      size={0.02}
      color={new THREE.Color('white')}
      />
    </points>
  )
}

export default Particles
