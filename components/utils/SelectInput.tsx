import { Input, InputLabel, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { TextinputProps } from '../../types';

const SelectInput: FC<TextinputProps> = ({
    label,
    name,
    value,
    handleChange,
    menuItems,
    placeholder
}) => {
  return (
    <div >
      <InputLabel
        className='font-sora mb-1 text-[#A8A8A8] text-[14px]'
        >
          { label }
        </InputLabel>
        <Select 
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        IconComponent={() => <KeyboardArrowDownSharpIcon className='text-white'  />}
        fullWidth 
        input={
        <Input
        disableUnderline
        
        className='bg-[#1F1F1F] cursor-fancy rounded-[14px] text-[#D9D9D9] border border-[#4B4B4B] font-sora p-3 w-[100%]'
          />}
          MenuProps={{
            PaperProps: {
                className: "bg-[#1F1F1F] cursor-fancy rounded-[8px]"
            }
          }}

          inputProps={{
            className: "cursor-fancy"
          }}
       >
            {
                menuItems?.map((item, i: number) => (
                    <MenuItem key={i} value={item.value} className='cursor-fancy font-sora text-[14px] text-[#D9D9D9]'>{item.label}</MenuItem>
                ))
            }
        </Select>
    </div>
  )
}

export default SelectInput
