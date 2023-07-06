import React, { FC } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import PartnerImages from '../assets/partners.png'

const Partners: FC = () => {
  return (
    <Layout>
        <div className=" md:mb-16 text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
            Partners
        </div>
        <Image alt='partners' src={PartnerImages} />
    </Layout>
  )
}

export default Partners
