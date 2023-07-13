import { Paper } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
import PointImage from '../../assets/Ellipse 20.svg'

export interface TokenomicsCardProps {
    title: string;
    text?: string;
    points?: string[]
}

const TokenomicsCard: FC<TokenomicsCardProps> = ({
    text,
    title,
    points
}) => {
  return (
    <Paper className='p-[16px] rounded-[6px] bg-[#1A1613]'>
        <div className="flex items-center gap-2">
            <Image alt='point' src={PointImage} />
            <span className='font-sora text-[#FECF81] text-[14px]'>{title}</span>
        </div>
        <div className="text-[#A8A8A8] font-sora text-[12px]">
           { text && <div>{text}</div> }
            { points && points.map((item: string, i: number) => (
                <div key={i}>{item}</div>
            )) }
        </div>
    </Paper>
  )
}

export default TokenomicsCard
