import React, { FC } from 'react'
import { CircularProgress, Paper } from '@mui/material'
import ContainerLayout from '../Layout/ContainerLayout'
import Certik from '../assets/certik.png'
import Image from 'next/image'
import tokenImage from "../assets/png/tokens.png"
import MTokenomics from '../assets/mtokenomics.png'
import TokenPlacholder from '../assets/mtokenomics.png'
import TokenomicsCard, { TokenomicsCardProps } from './utils/TokenomicsCard'
import { useTranslation } from 'react-i18next'
const Tokenomics: FC = () => {

    const {t} = useTranslation()

    const tokenomics: { content: string[]; subtext: string; percent: number; text: string; color: string }[] = [
        { 
            percent: 10, 
            text: 'Team and Advisors', 
            color: '#FFED0A',
            subtext: "Tokens 1,000,000,000 BLOW",
            content: [
                "• 0% TGE",
                "• 6 months Cliff - 1.67% monthly after" 
            ]
    },
        { 
            percent: 50, 
            text: 'Ecosystem/Development', 
            color: '#2AD084', 
            subtext: "Tokens 5,000,000,000 BLOW", 
            content: [
                "• TGE 0%",
                "• 6 months Cliff - 0.8% monthly after " 
            ]
    },
        { 
            percent: 5, 
            text: 'Private Sale', 
            color: '#FF8ACB',
            subtext: "Tokens 500,000,000 BLOW", 
            content: [
                "• TGE 15%",
                "• 2 months Cliff - 7.08% monthly after " 
            ]  
    },
        { 
            percent: 5, 
            text: 'Airdrops', 
            color: '#BD00FF',
            subtext: "Tokens 500,000,000 BLOW", 
            content: [
                "• 0% TGE",
                "• Released quarterly" 
            ]  
    },
        { 
            percent: 10, 
            text: 'Marketing', 
            color: '#FF3C2A',
            subtext: "Tokens 1,000,000,000 BLOW", 
            content: [
                "• TGE 0%",
                "• 3 months Cliff - 2.08% monthly "
            ]  
    },
        { 
            percent: 5, 
            text: 'Public Sale', 
            color: '#15C7FF',
            subtext: "Tokens 500,000,000 BLOW", 
            content: [
                "• 100% TGE",
                "• Not Vested" 
            ]   
    }
    ]

   
    
  return (
      <div className=''>
        <ContainerLayout>
        <div data-aos="fade-up" data-aos-delay="500" className=" mb-4 mt-8 text-[20px] text-center font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            {t('TokenomicsTitle')}
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="font-sora md:mx-36 px-6 md:px-0 text-[#A8A8A8] text-[14px] md:text-[16px] text-center">
        {t('TokenomicsSubTitle')}
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className="md:mt-4 hidden md:block font-sora text-[#C0C0C0] md:text-[18px] capitalize font-semibold text-center">
        {t('TokenomicsSubText')}
        </div>
        {/* Desktop */}
        <div data-aos="fade" data-aos-delay="800" className="flex flex-col py-10 lg:py-0 lg:px-10 md:flex-row  justify-evenly mt-10 border rounded-[20px] border-[#242424]">
            <div className='flex-1 my-10 flex justify-center'><Image  alt='placeholder' className='' src={TokenPlacholder}/></div>
            <div className="flex-1 flex py-10 lg:py-0 flex-col border-b-[#242424] border-t-[#242424] lg:border-r-[#242424]  lg:border-l-[#242424] border-t border-b lg:border-l lg:border-r justify-center gap-4 lg:gap-8">
               {
                tokenomics.slice(0, 3).map((item, i:number) => (
                    <div className='flex ml-5 lg:ml-10 items-center gap-4' key={i} style={{ color: item.color }}>
                       <div className='relative'>
                       <CircularProgress className=' text-[#363B41] absolute left-0 top-0' size={64} variant='determinate' color='inherit' value={100}/>
                       <CircularProgress className='z-50' size={64} variant='determinate' color='inherit' value={item.percent}/>
                       </div>
                       <div className='text-[14px]'>
                        <div className='text-[20px] font-bold'>{item.percent}%</div>
                        <div>{item.text}</div>
                        <div>{item.subtext}</div>
                        {
                            item.content.map((item, i: number) => (
                                <div key={i}>{item}</div>
                            ))
                        }
                       </div>
                    </div>
                )) 
               }
            </div>
            <div className="flex-1 pt-10 lg:pt-0 flex flex-col justify-center gap-4 lg:gap-8">
            {
                tokenomics.slice(3, 6).map((item, i:number) => (
                    <div className='flex ml-5 lg:ml-10 items-center gap-4' key={i} style={{ color: item.color }}>
                        <div className='relative'>
                       <CircularProgress className=' text-[#363B41] absolute left-0 top-0' size={64} variant='determinate' color='inherit' value={100}/>
                       <CircularProgress className='z-50' size={64} variant='determinate' color='inherit' value={item.percent}/>
                       </div>
                       <div className='text-[14px]'>
                        <div className='text-[20px] font-bold'>{item.percent}%</div>
                        <div>{item.text}</div>
                        <div>{item.subtext}</div>
                        {
                            item.content.map((item, i: number) => (
                                <div key={i}>{item}</div>
                            ))
                        }
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
