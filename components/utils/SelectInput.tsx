import { Input, InputLabel, MenuItem, Select } from '@mui/material'
import React, { FC } from 'react'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { TextinputProps } from '../../types';
import Image from 'next/image';

const SelectInput: FC<TextinputProps> = ({
    label,
    name,
    value,
    handleChange,
    menuItems,
    placeholder,
    textInputType
}) => {
  return (
    <div >
      <InputLabel
        className={`font-sora mb-1 ${ textInputType !== 'presale' ? 'text-[#A8A8A8] text-[14px]' : 'text-[#FFF] text-[16px]' }`}
        >
          { label }
        </InputLabel>
        <Select 
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={placeholder}
        IconComponent={() => <KeyboardArrowDownSharpIcon className='text-white'  />}
        fullWidth 
        input={
        <Input
        disableUnderline
        
        className={`bg-[#1F1F1F]  ${ textInputType !== 'presale' ? 'rounded-[14px] text-[#D9D9D9] border border-[#4B4B4B] font-sora font-normal' : 'rounded-[10px] text-[#FFF] border-none font-biomeW04Regular' }  p-3 w-[100%]`}
          />}
          MenuProps={{
            PaperProps: {
                className: textInputType !== 'presale' ? 
                "bg-[#1F1F1F] cursor-fancy rounded-[8px]" :
                " border-[0.3px] border-[rgba(51,51,255,0.30)] bg-gradient-to-br rounded-[20px] from-[#1F1F1F] to-[#000] p-4"
            }
          }}

          inputProps={{
            className: "cursor-fancy"
          }}
       >
            {
                menuItems?.map((item, i: number) => textInputType == 'presale' ? (
                    <MenuItem key={i} onClick={(e) => console.log(e.target)}  value={item.value} className='cursor-fancy font-biomeW04Regular text-[14px] text-[#D9D9D9]'>
                      <div className='flex gap-4 items-center'>
                    { item.icon &&  <Image src={item.icon} alt={item.value} /> }
                      <div>
                        <p>{item.label}</p>
                        <p className='text-[10px]'>{item.value}</p>
                      </div>
                      </div>
                    </MenuItem>
                ) : (
                    <MenuItem key={i} value={item.value} className='cursor-fancy font-sora text-[14px] text-[#D9D9D9]'>{item.label}</MenuItem>
                ))
            }
        </Select>
    </div>
  )
}

export default SelectInput
