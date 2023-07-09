import { Paper } from '@mui/material'
import React, { FC } from 'react'
import SolidButton from './SolidButton'
import Image, { StaticImageData } from 'next/image'
import { SolidButtonProps } from '../../types'

export interface LaunchCardProps {
    title: "Airdrop" | "Presale" | "CEX Listing";
    imageCols: '2' | '3';
    images: StaticImageData[];
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
       <Paper className='bg-[#1A1613] rounded-[10px]'>
          <div className='text-[#FECF81] md:24px text-center py-3 font-sora font-semibold'>
            { title }
            </div>
       </Paper>
       <Paper className='bg-[#1A1613] rounded-[10px] px-4 pt-10 pb-16 '>
          <div className={ imageCols == '3' ? 'grid grid-cols-3 gap-4' : 'grid grid-cols-2 gap-4'}>
            {
               images.map((item: StaticImageData, i: number) => (
                <div key={i} className='rounded-[10px] h-[86px] bg-[#2A231E] flex justify-center items-center'>
                    <Image alt='launch image' src={item}/>
                </div>
               ))
            }
          </div>
          <div className='text-[#A8A8A8] font-sora text-center mt-4 mb-8'>
            { text }
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            {
                buttons.map((item: SolidButtonProps, i: number) => (
                    <SolidButton text={item.text} variant={item.variant} handleClick={item.handleClick} />
                ))
            }
          </div>
       </Paper>
    </div> 
  )
}

export default LaunchCard
