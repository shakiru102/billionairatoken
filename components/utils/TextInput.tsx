import { Input, InputAdornment, InputLabel } from '@mui/material'
import React, { FC } from 'react'
import SolidButton from './SolidButton'
import { SolidButtonProps, TextinputProps } from '../../types'

const TextInput: FC<TextinputProps> = ({
  label,
  value,
  handleChange,
  inputAdorments,
  placeholder,
  name,
  textInputType
}) => {
  return (
    <div>
        <InputLabel
        className={`font-sora mb-1 ${ textInputType !== 'presale' ? 'text-[#A8A8A8] text-[14px]' : 'text-[#FFF] text-[16px]' }`}
        >
          { label }
        </InputLabel>
        <Input
        disableUnderline
        onChange={handleChange}
       className={`bg-[#1F1F1F] ${ textInputType !== 'presale' ? 'rounded-[14px] text-[#D9D9D9] border border-[#4B4B4B] font-sora font-normal' : 'rounded-[10px] text-[#FFF] border-none font-biomeW04Regular' }  p-3 w-[100%]`}
       placeholder={placeholder}
       value={value}
       fullWidth
        endAdornment= {
            inputAdorments ? (
                <InputAdornment position="end" className='my-4 flex gap-1'>
                  {
                     inputAdorments.map((item: SolidButtonProps, i: number) => (
                      <SolidButton key={i} {...item}   variant='textinput' />
                     ))
                  }
              </InputAdornment>
            ): null
        }
      />
    </div>
  )
}

export default TextInput
