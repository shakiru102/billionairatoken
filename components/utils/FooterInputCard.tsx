import { Input, InputAdornment } from '@mui/material'
import React, { FC } from 'react'
import SolidButton from './SolidButton'

export interface FooterInputCardProps {
    title: string;
    content: string;
    position?: "left" | "right";
    buttoText?: string;
    buttonAction?: () => void;
}

const FooterInputCard: FC<FooterInputCardProps> = ({
    content,
    position,
    title,
    buttoText,
    buttonAction
}) => {
  return (
    <div className={ position === 'right' ? 'text-center md:text-right' : 'text-center md:text-left'}>
      <div className="md:text-[24px] font-detacher text-[#FECF81]">{ title }</div>
      <div className="text-[16px] mt-1 mb-8 font-sora text-[#A8A8A8]">{ content }</div>
      <Input
       className='bg-[#1F1F1F] rounded-[14px] text-[#D9D9D9] font-sora p-3 w-[100%]'
       placeholder='Enter your email'
        endAdornment= {
            <InputAdornment position="end">
                <SolidButton text={ buttoText || 'SUBSCRIBE'}  handleClick={buttonAction} variant='solid' classnames='rounded-[10px]' />
            </InputAdornment>
        }
      />

    </div>
  )
}

export default FooterInputCard
