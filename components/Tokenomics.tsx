import React, { FC } from 'react'
import Layout from './Layout'
import { Paper } from '@mui/material'

const Tokenomics: FC = () => {
  return (
    <Layout classNames='z-50 relative'>
        <div className=" md:mb-4 text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
            Tokenomics
        </div>
        <div className="font-sora md:mx-36 text-[#A8A8A8] md:text-[18px] text-center">
            The total supply of Metatime Coin, which is offered to everyone with its unique tokenomics structure, has been limited to 10 billion MTC.
        </div>
        <div className="md:mt-4 font-sora text-[#FECF81] md:text-[18px] uppercase font-semibold text-center">
            ONE TOKEN LIMITLESS POSSIBILITIES!
        </div>
        <div className="flex">
            <div className='flex-1'></div>
            <div className='flex-1'>
                <Paper elevation={0} className='md:h-[410px] bg-[#1A1613] '>
                   fwef
                </Paper>
            </div>
        </div>
    </Layout>
  )
}

export default Tokenomics
