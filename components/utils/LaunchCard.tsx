import { Paper } from '@mui/material'
import React, { FC } from 'react'
import SolidButton from './SolidButton'
import Image from 'next/image'
import Airdrop1 from '../../assets/airdrop1.png'

const LaunchCard: FC = () => {
  return (
    <div className='flex flex-col gap-4'>
       <Paper className='bg-[#1A1613] rounded-[10px]'>
          <div className='text-[#FECF81] md:24px text-center py-3 font-sora font-semibold'>Airdrop</div>
       </Paper>
       <Paper className='bg-[#1A1613] rounded-[10px] px-4 pt-10 pb-16 '>
          <div className='grid grid-cols-3 gap-4 '>
            <div className='rounded-[10px] md:h-[86px] bg-[#2A231E] flex justify-center items-center'>
                <Image alt='token' src={Airdrop1}/>
            </div>
            <div className='rounded-[10px] md:h-[86px] bg-[#2A231E] flex justify-center items-center'>
                <Image alt='token' src={Airdrop1}/>
            </div>
          </div>
          <div className='text-[#A8A8A8] font-sora text-center mt-4 mb-8'>
            Download metamask or your wallet of choice from the app store or google play store.
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <SolidButton text='Join community' />
            <SolidButton text='Join community' />
          </div>
       </Paper>
    </div> 
  )
}

export default LaunchCard
