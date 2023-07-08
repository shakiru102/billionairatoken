import React, { FC } from 'react'
import Layout from './Layout'
import { Paper } from '@mui/material'
import ContainerLayout from '../Layout/ContainerLayout'
import Certik from '../assets/certik.png'
import Image from 'next/image'

const Tokenomics: FC = () => {

    const tokenomics: { text: string; color: string }[] = [
        { text: 'Team and Advisors 10%', color: '#FFED0A'  },
        { text: 'Marketing 10%', color: '#FF3C2A'  },
        { text: 'Ecosystem/Develop.... 50%', color: '#2AD084'  },
        { text: 'Private Sale 5%', color: '#FF8ACB'  },
        { text: 'Public Sale 5%', color: '#15C7FF'  },
        { text: 'TGE 7.5%', color: '#FF692A'  },
        { text: 'Airdrops 2.5%', color: '#000CDF'  }
    ]

  return (
    <div className='z-50 relative '>
        <ContainerLayout>
        <div className=" md:mb-4 text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
            Tokenomics
        </div>
        <div className="font-sora md:mx-36 text-[#A8A8A8] md:text-[16px] text-center">
            The total supply of Metatime Coin, which is offered to everyone with its unique tokenomics structure, has been limited to 10 billion MTC.
        </div>
        <div className="md:mt-4 font-sora text-[#FECF81] md:text-[18px] uppercase font-semibold text-center">
            ONE TOKEN LIMITLESS POSSIBILITIES!
        </div>
        <div className="flex">
            <div className='flex-1'></div>
            <div className='flex-1'>
                <Paper elevation={0} className='md:h-[410px] bg-[#1A1613] flex flex-col justify-around md:p-10 md:mt-28'>
                   {
                    tokenomics.map((item, i) => (
                        <div key={i} className='flex items-center gap-6 text-white font-sora text-[14px]'>
                          <div style={{ background: item.color }} className='h-[11.7px] w-[11.7px] rounded-full'></div>
                          <div className="">{ item.text }</div>
                        </div>
                    ))
                   }
                </Paper>
                <Image className='mt-4' alt="certik" src={Certik} />
            </div>
        </div>
        </ContainerLayout>
    </div>
  )
}

export default Tokenomics
