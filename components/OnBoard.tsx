import React, { FC } from 'react'
import Logo from '../assets/tokenlogo.png'
import Image, { StaticImageData } from 'next/image'
import { SolidButtonProps } from '../types'
import SolidButton from './utils/SolidButton'
import Twitter from '../assets/twitter.png'
import Telegram from '../assets/telegram.png'
import Instagram from '../assets/instagram.png'
import SocialIcon from '../assets/socialicon.png'
import Layout from './Layout'

const OnBoard: FC = () => {

    const buttons: SolidButtonProps[] = [
        {
            text: "Join Presale",
            variant: "solid"
        },
        {
            text: "Join Airdrop",
            variant: "transparent"
        }
    ]
    const socialHandles: {image: StaticImageData, handle: string}[] = [ 
        { image: Twitter, handle: "twitter" },
        { image: Telegram, handle: "telegram" },
        { image: SocialIcon, handle: "social icon" },
        { image: Instagram, handle: "instagram" }
    ] 
    

  return (
    <div className="bg-[url('../assets/tokenbg.png')] bg-no-repeat bg-cover">
       <Layout classNames='flex items-center justify-center flex-col h-full md:mt-8'>
        <Image width={269} height={269} alt="logo" src={Logo} className='md:mb-8' />
        <div className='md:leading-[96px] text-center md:text-[90px] bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-detacher'>The 
        <span className='bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text'> Billionaires </span>
        Token</div>
        <div className=' my-4 text-center md:text-[18px] bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-sora'>
        Experience Blockchain , A.I and the Metaverse in one Place
        </div>
            <div className='flex gap-4 my-4'>
                {
                    buttons.map((item: SolidButtonProps, _index: number) => (
                        <SolidButton {...item}/>
                    ))
                }
            </div>
            <div className='flex gap-4 mt-4 items-center justify-center'>
                {
                    socialHandles.map((item, index: number) => (
                        <Image width={32} height={32} alt={item.handle} src={item.image} key={index}/>
                    ))
                }
            </div>
       </Layout>
    </div>
  )
}

export default OnBoard
