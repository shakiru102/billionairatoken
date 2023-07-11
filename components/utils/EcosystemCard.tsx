import { Paper } from '@mui/material';
import React, { FC, ReactNode } from 'react'
import TextButton from './TextButton';
import { SolidButtonProps } from '../../types';

export interface EcosystemProps {
    title: string;
    header?: string;
    content: string | ReactNode;
    button?: SolidButtonProps
    
}

const EcosystemCard: FC<EcosystemProps> = ({
    title,
    button,
    content,
    header
}) => {
  return (
   <Paper className='rounded-[10px] relative md:m-8 bg-[#1A1613] md:w-[90%] p-4 md:px-4 md:py-8'>
      <div className=" text-[18px] md:text-[20px] font-sora text-[#FECF81] font-semibold">
        { header || title }
      </div>
      <div className="text-[14px] md:text-[18px] font-biomeW04Regular mt-6 mb-4 text-[#A8A8A8]">
        { content }
      </div>
     { button && <TextButton { ...button}  /> }
   </Paper>
  )
}

export default EcosystemCard
