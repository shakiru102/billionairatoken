import { Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react'
import TextButton from './TextButton';
import { EcosystemProps, SolidButtonProps } from '../../types';
import OutlineButton from './OutlineButton';
import Image from 'next/image';



const EcosystemCard: FC<EcosystemProps> = ({
    title,
    button,
    content,
    header,
    image
}) => {
  return (
   <Paper className='rounded-[10px] relative md:m-8 bg-transparent md:w-[90%] p-4 md:px-4 md:py-8'>
      <div className="md:hidden">
        { image && <Image alt={title} src={image}  />}
      </div>
      <div className=" text-[18px] md:text-[20px] mt-6 font-sora text-[#FFF] font-semibold">
        { header || title }
      </div>
      <div className="text-[14px] md:text-[18px] font-biomeW04Regular mt-6 mb-4 text-[#A8A8A8]">
        { content }
      </div>
     
     <div className='flex flex-col md:flex-row items-start md:justify-between md:items-center'>
     { button ?  <TextButton { ...button}  /> : <div /> }
        <div className="self-end mt-3 md:mt-0 ">
          <OutlineButton text='Coming soon' />
        </div>
      </div>
   </Paper>
  )
}

export default EcosystemCard
