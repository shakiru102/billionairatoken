import React from 'react'
import Twitter from '../../assets/twitter.png'
import Telegram from '../../assets/telegram.png'
import Instagram from '../../assets/instagram.png'
import SocialIcon from '../../assets/socialicon.png'
import Image, { StaticImageData } from 'next/image'

const  MediaIcons = () => {

    const socialHandles: {image: StaticImageData, handle: string}[] = [ 
        { image: Twitter, handle: "twitter" },
        { image: Telegram, handle: "telegram" },
        { image: SocialIcon, handle: "social icon" },
        { image: Instagram, handle: "instagram" }
    ] 

  return (
    <div className='flex gap-4 mt-4 items-center justify-center'>
    {
        socialHandles.map((item, index: number) => (
            <Image width={32} height={32} alt={item.handle} src={item.image} key={index}/>
        ))
    }
</div>
  )
}

export default  MediaIcons
