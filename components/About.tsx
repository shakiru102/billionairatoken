import React, { FC } from 'react'
import Layout from './Layout'
import AboutLogo from '../assets/tokenlogo.png'
import Image from 'next/image'
import ContainerLayout from '../Layout/ContainerLayout'
import { Canvas } from '@react-three/fiber'
import AboutModel from '../models/AboutModel'
import { OrbitControls } from '@react-three/drei'
import { useTranslation, Trans } from 'react-i18next'
const About: FC = () => {

  const { t } = useTranslation()

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
                
                 <div data-aos="fade" className="flex flex-col mt-10 lg:mt-0 lg:p-5 rounded-[10px] lg:bg-black">
                    
             <div data-aos="fade-left" data-aos-delay="500" className="font-detacher text-[20px] text-center lg:text-left md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                { t('aboutTitle') }
            </div>
             <div data-aos="fade-up" data-aos-delay="1000"  className='text-[14px] md:text-[18px] text-center lg:text-left  text-[#A8A8A8] mt-4 font-biomeW04Regular'>
              <Trans components={{big: <span className='text-white text-[24px] font-bold' />}}>
                aboutContent
              </Trans>
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
