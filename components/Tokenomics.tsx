import React, { FC } from 'react'
import { CircularProgress, Paper } from '@mui/material'
import ContainerLayout from '../Layout/ContainerLayout'
import Certik from '../assets/certik.png'
import Image from 'next/image'
import tokenImage from "../assets/png/tokens.png"
import MTokenomics from '../assets/mtokenomics.png'
import TokenPlacholder from '../assets/mtokenomics.png'
import TokenomicsCard, { TokenomicsCardProps } from './utils/TokenomicsCard'
const Tokenomics: FC = () => {

    const tokenomics: { percent: number; text: string; color: string }[] = [
        { percent: 10, text: 'Team and Advisors', color: '#FFED0A'  },
        { percent: 50, text: 'Ecosystem/Development', color: '#2AD084'  },
        { percent: 5, text: 'Private Sale', color: '#FF8ACB'  },
        { percent: 2.5, text: 'Airdrops', color: '#000CDF'  },
        { percent: 10, text: 'Marketing', color: '#FF3C2A'  },
        { percent: 5, text: 'Public Sale', color: '#15C7FF'  },
        { percent: 7.5, text: 'TGE', color: '#FF692A'  }
    ]

   
    
  return (
      <div className=''>
        <ContainerLayout>
        <div className=" mb-4 mt-8 text-[20px] text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            Tokenomics
        </div>
        <div className="font-sora md:mx-36 px-6 md:px-0 text-[#A8A8A8] text-[14px] md:text-[16px] text-center">
            The total supply of Metatime Coin, which is offered to everyone with its unique tokenomics structure, has been limited to 10 billion MTC.
        </div>
        <div className="md:mt-4 hidden md:block font-sora text-[#C0C0C0] md:text-[18px] capitalize font-semibold text-center">
            One Token, Limitless Possibilities!
        </div>
        {/* Desktop */}
        <div className="flex flex-col py-10 lg:py-0 lg:px-10 md:flex-row  justify-evenly mt-10 border rounded-[20px] border-[#242424]">
            <div className='flex-1 my-10 flex justify-center'><Image  alt='placeholder' className='' src={TokenPlacholder}/></div>
            <div className="flex-1 flex py-10 lg:py-0 flex-col border-b-[#242424] border-t-[#242424] lg:border-r-[#242424]  lg:border-l-[#242424] border-t border-b lg:border-l lg:border-r justify-center gap-4 lg:gap-8">
               {
                tokenomics.slice(0, 4).map((item, i:number) => (
                    <div className='flex ml-5 lg:ml-10 items-center gap-4' key={i} style={{ color: item.color }}>
                       <div className='relative'>
                       <CircularProgress className=' text-[#363B41] absolute left-0 top-0' size={40} variant='determinate' color='inherit' value={100}/>
                       <CircularProgress className='z-50' size={40} variant='determinate' color='inherit' value={item.percent}/>
                       </div>
                       <div>
                        <div className='text-[20px]'>{item.percent}%</div>
                        <div>{item.text}</div>
                       </div>
                    </div>
                )) 
               }
            </div>
            <div className="flex-1 pt-10 lg:pt-0 flex flex-col justify-center gap-4 lg:gap-8">
            {
                tokenomics.slice(4, 7).map((item, i:number) => (
                    <div className='flex ml-5 lg:ml-10 items-center gap-4' key={i} style={{ color: item.color }}>
                        <div className='relative'>
                       <CircularProgress className=' text-[#363B41] absolute left-0 top-0' size={40} variant='determinate' color='inherit' value={100}/>
                       <CircularProgress className='z-50' size={40} variant='determinate' color='inherit' value={item.percent}/>
                       </div>
                       <div>
                        <div className='text-[20px]'>{item.percent}%</div>
                        <div>{item.text}</div>
                       </div>
                    </div>
                )) 
               }
            </div>
        </div>

        </ContainerLayout>
    </div>
    
  )
}

export default Tokenomics
