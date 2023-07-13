import React, { FC } from 'react'

export interface RoadMapProps {
    position: 'right' | 'left';
    title: string;
    list: string[];
}

const RoadMapCard: FC<RoadMapProps> = ({
    list,
    position,
    title
}) => {
  return (
    <div className={
        position === 'right' ? 
        "overflow-hidden rounded-l-[40px] bg-gradient-to-r from-[rgba(44,44,44,0.60)] to-[rgba(44,44,44,0.25)]" :
        "overflow-hidden rounded-r-[40px] bg-gradient-to-r from-[rgba(44,44,44,0.60)] to-[rgba(44,44,44,0.25)]" 
    }>
      <div className="text-white font-detacher bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] text-[20px] py-6 px-8">{title}</div>
      {
        list.map((item: string, i: number) => (
            <div key={i} className='flex gap-3 px-8 py-4 font-sora text-[#D9D9D9] text-[14px]'>
                <div className="inline-block" />
                <div>{item}</div>
            </div>
        ))
      }
    </div>
  )
}

export default RoadMapCard
