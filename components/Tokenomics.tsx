import React, { FC } from 'react'
import { Paper } from '@mui/material'
import ContainerLayout from '../Layout/ContainerLayout'
import Certik from '../assets/certik.png'
import Image from 'next/image'
import tokenImage from "../assets/png/tokens.png"
import MTokenomics from '../assets/mtokenomics.png'
import TokenPlacholder from '../assets/tokenomicsplaceholder.png'
import TokenomicsCard, { TokenomicsCardProps } from './utils/TokenomicsCard'
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

    const tokenomicsList: TokenomicsCardProps[] = [
        { 
            title: "40% Burn Pool",
            text: "Burn Pool represents 4 billion MTCs reserved for burning. These MTCs will be dynamically burned over two years." 
        },
        { 
            title: "5% Strategic Sale Pool",
            text: "Strategic Sales Pool represents 500 million MTCs reserved for sale.",
            points: [
                "✦   Seed Sale 1: 1% (250 days linear vesting)",
                "✦   Seed Sale 2: 1% (250 days linear vesting)",
                "✦   Private Sale 1: 1% (100% after 10 days cliff from TGE)",
                "✦   Public Sale: 2% (100 days linear vesting)"
            ] 
        },
        { 
            title: "55% Others",
            points: [
                "✦ 19% Team Pool (24 months cliff than 1000 days linear vesting)",
                "✦   10% Miner Pool (2000 days linear vesting)",
                "✦   5% Liquidity Pool (Only for market making)",
                "✦   5% Reward Pool (5000 days linear vesting)",
                "✦   5% Staking Pool (1000 days linear vesting)",
                "✦   8% Marketing Pool (6 months cliff/ 500 days linear vesting)",
                "✦   2% MetaAirdrop Pool",
                "✦   1% Charity Pool (1000 days linear vesting)"
            ] 
        }
    ]
    
  return (
      <div className=' relative mt-20  md:mt-24'>
        <ContainerLayout>
        <div className=" mb-4 text-[20px] text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            Tokenomics
        </div>
        <div className="font-sora md:mx-36 px-6 md:px-0 text-[#A8A8A8] text-[14px] md:text-[16px] text-center">
            The total supply of Metatime Coin, which is offered to everyone with its unique tokenomics structure, has been limited to 10 billion MTC.
        </div>
        <div className="md:mt-4 hidden md:block font-sora text-[#C0C0C0] md:text-[18px] capitalize font-semibold text-center">
            One Token, Limitless Possibilities!
        </div>
        {/* Mobile */}
        <div className='flex flex-col mt-8  md:hidden z-50'>
               <div className="tokenomics flex flex-col gap-6">
                 {
                    tokenomicsList.map((item: TokenomicsCardProps, i: number) => (
                        <TokenomicsCard key={i}  {...item}/>
                    ))
                 }
               </div>
            </div>
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center mt-10">
            <Image  alt='placeholder' className='' src={TokenPlacholder}/>
        </div>
        </ContainerLayout>
    </div>
    
  )
}

export default Tokenomics
