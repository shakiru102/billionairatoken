import React, { FC } from 'react'
import Layout from './Layout'
import AboutLogo from '../assets/aboutlogo.png'
import Image from 'next/image'

const About: FC = () => {
  return (
    <div className="min-h-screen">
       <Layout classNames='flex gap-28 items-center justify-center md:h-screen'>
          <Image className='md:h-[539px] md:w-[539px]' alt='about' src={AboutLogo} />
          <div>
             <div className="font-detacher md:text-[32px] text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
                About TBT
            </div>
             <div className='text-[18px] text-[#A8A8A8] mt-4 font-biomeW04Regular'>
             At the New Frontier Empire we are a highly experienced community of cryptocurrency pioneers, united by a shared culture and vision. Our aim is to revolutionise the web3  landscape and the global economy by introducing real-world utilities through our native token, TBT. Built on a multi chain network, TBT powers transactions and activities within the Billionaires ecosystem, enabling seamless and efficient interactions.
             </div>
          </div> 
       </Layout>
    </div>
  )
}

export default About
