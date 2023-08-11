import React, { FC, ReactNode } from 'react'
import Particles from './Particles'
import { OrbitControls, Html } from '@react-three/drei'
import BlowXModel from './BlowXModel'

const OnBoardModel: FC<{ children: ReactNode }> = ({
    children
}) => {
  console.log(screen.width);
  
  return (
    <>
      <Particles />
      {/* <BlowXModel /> */}
      <OrbitControls 
      enableZoom={false} 
      enableRotate={screen.width <= 768 ? false : true }
      minAzimuthAngle={ - Math.PI * 0.1 } 
      maxAzimuthAngle={ Math.PI * 0.1 }
      minPolarAngle={ Math.PI * 0.4 }
      maxPolarAngle={ Math.PI  * 0.6}
       />
    </>
  )
}

export default OnBoardModel
