import React, { FC, ReactNode } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import PartnerImages from '../assets/partners.png'
import ContainerLayout from '../Layout/ContainerLayout'

interface RenderComponentProps {
  title: string ;
  subtitle?: string ;
  children?: ReactNode
}

const RenderComponent: FC<RenderComponentProps> = ({
  children,
  title,
  subtitle
}) => {
  return (
    <div className=' pt-16 my-8  z-50 relative'>

      <ContainerLayout>
        <div className="text-center md:mb-16">
        <div data-aos="fade-up" data-aos-delay="500" className=" inline-block mb-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            { title }
        </div>
       { subtitle && <div data-aos="fade-up" data-aos-delay="700" className="font-sora md:mx-36 text-[#A8A8A8] text-[14px] my-2 md:text-[16px] text-center">{ subtitle }</div>}
        </div>
         <div data-aos="fade" data-aos-delay="800" className='flex justify-center'>
         { children ? children :   <Image alt='partners'className='w-[100%]' src={PartnerImages} /> }
          </div>
         
    </ContainerLayout>
    </div>
  )
}

export default RenderComponent
