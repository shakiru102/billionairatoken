import React, { FC } from 'react'
import Layout from './Layout'
import AboutLogo from '../assets/tokenlogo.png'
import Image from 'next/image'
import ContainerLayout from '../Layout/ContainerLayout'
import { Canvas } from '@react-three/fiber'
import AboutModel from '../models/AboutModel'
import { OrbitControls } from '@react-three/drei'
const About: FC = () => {
  return (
     <div id='about' className="md:h-screen 3xl:h-[80vh] relative">
      <Canvas
              id='webgl-about'
              camera={{
               position: [0, 2, -5]
              }}
              shadows
              >
                <AboutModel />
               <OrbitControls  enablePan={false} enableZoom={false}/>
              </Canvas>
        <div className='relative'>
        <ContainerLayout>
           

           <div className='  w-full flex lg:flex-row flex-col justify-end pt-[40px] md:h-screen lg:pt-0'>
              {/* <div className="lg:flex-1" /> */}
              <div className='md:hidden'>
                <Canvas
                  // id='webgl-about'
                  style={{
                    height: "50vh"
                  }}
                  camera={{
                  position: [0, 2, -5]
                  }}
                  shadows
                  >
                <group scale={1.5} position={[-5,0,0]}>
                  <AboutModel />
                </group>
              </Canvas>
                </div>
              <div className=' w-full lg:w-5/12 flex flex-col md:flex-row items-center  '>
                
                 <div className="flex flex-col mt-10 lg:mt-0 lg:p-5 rounded-[10px] lg:bg-black">
                    
             <div className="font-detacher text-[20px] text-center lg:text-left md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                About BlowX
            </div>
             <div className='text-[14px] md:text-[18px] text-center lg:text-left  text-[#A8A8A8] mt-4 font-biomeW04Regular'>
             At the New Frontier Empire we are a highly experienced community of cryptocurrency pioneers, united by a shared culture and vision. Our aim is to revolutionise the web3  landscape and the global economy by introducing real-world utilities through our native token, <span className='text-white font-bold text-[18px] md:text-[22px] '>Blow</span>. Built on a multi chain network, <span className='text-white font-bold text-[18px] md:text-[22px] '>BlowX</span> powers transactions and activities within the Billionaires ecosystem, enabling seamless and efficient interactions.
               </div>
                 </div>
          </div> 
       </div>
        </ContainerLayout>
        </div>
    </div>
  )
}

export default About
