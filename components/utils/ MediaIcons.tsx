import React, { FC } from 'react'
import Twitter from '../../assets/twitter.png'
import Telegram from '../../assets/telegram.png'
import Instagram from '../../assets/instagram.png'
import SocialIcon from '../../assets/socialicon.png'
import Github from '../../assets/github.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface MediaIconsProps {
  position?: 'left' | 'right' | 'center';
}

const  MediaIcons: FC<MediaIconsProps> = ({
  position
}) => {

    const socialHandles: {image: StaticImageData, handle: string, link: string}[] = [ 
        { 
          image: Twitter, 
          handle: "twitter" ,
          link: "https://twitter.com/blowx_official?s=21&t=WsOunCWsNhdoyCG_aroRbQ"
      },
        { 
          image: Telegram, 
          handle: "telegram",
          link: 'https://t.me/BlowX_Official' 
      },
        { 
          image: SocialIcon, 
          handle: "social icon",
          link: 'https://medium.com/@BlowX_Official' 
      },
      { 
        image: Github, 
        handle: "github",
        link: 'https://github.com/BlowX-Official' 
      },
        { 
          image: Instagram, 
          handle: "instagram",
          link: 'https://instagram.com/blowx_official?igshid=OGQ5ZDc2ODk2ZA==' 
      }
    ] 

  return (
    <div className={`flex gap-6 mt-4 items-center
     ${ position === 'center' ? 'justify-center' :
     position === 'right' ? 'justify-end' : 'justify-start' }`}>
    {
        socialHandles.map((item, index: number) => (
            <a href={item.link} className='cursor-fancy' key={index} target='_/'>
               <Image width={32} height={32} alt={item.handle} src={item.image} />
            </a>
        ))
    }
</div>
  )
}

export default  MediaIcons
