import { Paper } from '@mui/material'
import React, { FC } from 'react'
import SolidButton from './SolidButton'
import Image, { StaticImageData } from 'next/image'
import { SolidButtonProps } from '../../types'

export interface LaunchCardProps {
    title: "Airdrop" | "Presale" | "CEX Listing";
    imageCols: '2' | '3';
    images: {image: StaticImageData, name: string}[];
    text: string;
    buttons: SolidButtonProps[]
}

const LaunchCard: FC<LaunchCardProps> = ({
    buttons,
    images,
    imageCols,
    text,
    title
}) => {
  return (
    <div className='flex flex-col gap-4'>
       <Paper className='bg-[#0F0F0F] rounded-[10px]'>
          <div className='text-[#FFF] text-[20px] md:text-[24px] text-center py-3 font-sora font-semibold'>
            { title }
            </div>
       </Paper>
       <Paper className='bg-[#0F0F0F] rounded-[10px] px-4 pt-10 pb-16  '>
          <div style={{perspective: "1000px"}} className={ imageCols == '3' ? 'grid grid-cols-3 gap-4' : 'grid grid-cols-2 gap-4'}>
            {
               images.map((item, i: number) => (
                <div 
                key={i} 
                style={{ transformStyle: 'preserve-3d', animationDelay: '3s' }}
                className='animate-flip animation-delay-[30s] rounded-[10px] relative  h-[86px] bg-[#272727] flex flex-col justify-center items-center  '>
                    <div style={{ backfaceVisibility: 'hidden' }} className='absolute'><Image alt='launch image' src={item.image}/></div>

                    <div style={{ backfaceVisibility: 'hidden' }} className='font-sora  absolute text-[14px] text-center [transform:rotateY(180deg)]   text-white '>
                      <div className='font-bold'>{item.name}</div>
                      <div className='text-[12px]'>31/03/2023</div>
                    </div>
                </div>
               ))
            }
          </div>
          <div className='text-[#A8A8A8] text-[14px] font-sora text-center my-8'>
            { text }
          </div>
          <div className='flex flex-col justify-center px-20 gap-4'>
            {
                buttons.map((item: SolidButtonProps, i: number) => (
                    <SolidButton key={i} text={item.text} variant={item.variant} handleClick={item.handleClick} />
                ))
            }
          </div>
       </Paper>
    </div> 
  )
}

export default LaunchCard
