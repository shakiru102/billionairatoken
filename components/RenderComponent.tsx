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
    <div className='min-h-screen pt-16'>
      <ContainerLayout>
        <div className="md:mb-16">
        <div className=" text-center md:mb-4 font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
            { title }
        </div>
         <div className="font-sora md:mx-36 text-[#A8A8A8] md:text-[16px] text-center">{ subtitle }</div>
        </div>
        { children ? children : <Image alt='partners' src={PartnerImages} /> }
    </ContainerLayout>
    </div>
  )
}

export default RenderComponent
