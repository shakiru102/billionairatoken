import React, { FC } from 'react'
import Layout from './Layout'
import AboutLogo from '../assets/tokenlogo.png'
import Image from 'next/image'
import ContainerLayout from '../Layout/ContainerLayout'
const About: FC = () => {
  return (
     <div id='about' className="md:min-h-screen bg-black">
        <ContainerLayout>
           
           <div className=' w-full flex lg:flex-row flex-col justify-between pt-[40px] md:py-[80px]'>
              <div className=" w-full lg:w-5/12">
                 
          <Image className='md:h-[539px] md:w-[539px]' alt='about' src={AboutLogo} />
              </div>
              <div className=' w-full lg:w-5/12 flex items-center '>
                 <div className="flex flex-col mt-10 md:mt-16">
                    
             <div className="font-detacher text-[20px] text-center md:text-left md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                About BlowX
            </div>
             <div className='text-[11px] md:text-[18px] text-center md:text-left  text-[#A8A8A8] mt-4 font-biomeW04Regular'>
             At the New Frontier Empire we are a highly experienced community of cryptocurrency pioneers, united by a shared culture and vision. Our aim is to revolutionise the web3  landscape and the global economy by introducing real-world utilities through our native token, Blow. Built on a multi chain network, BlowX powers transactions and activities within the Billionaires ecosystem, enabling seamless and efficient interactions.
               </div>
                 </div>
          </div> 
       </div>
        </ContainerLayout>
    </div>
  )
}

export default About
