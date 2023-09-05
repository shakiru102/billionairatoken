import React from 'react'
import { socialHandles } from './ MediaIcons'
import Image from 'next/image'


const SocialCapsule = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
        {
            socialHandles.map((item, i:number) => item.handle !== 'social icon' ? <>
                    <a href={item.link} key={i} target='_blank'>
                    <div className=' py-[10px] px-[8px] bg-[#2C2C2B] text-white font-sora text-[20px] flex gap-2 items-center rounded-[50px]'>
                        <Image src={item.image} alt={item.handle} />
                        <div>{item.handle}</div>
                    </div>
                    </a>
            </> : null)
        }
    </div>
   
  )
}

export default SocialCapsule
