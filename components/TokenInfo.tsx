import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import PasteIcon from '../assets/pasteicon.png'

const TokenInfo = () => {

    const [active, setActive] = useState<boolean>(true)
    
  return (
    <div className={`bg-white transition-all duration-300 ease-linear hidden md:block h-[276px] w-[628px] overflow-hidden  z-50 fixed bottom-52 rounded-tl-[20px] rounded-bl-[20px] ${ active ? "right-0" : "-right-[40.2%]" }`}>
      <div className="flex ">
      
        <div 
        className={`transition-all cursor-pointer duration-300 ease-linear ${active ? "bg-[#2C2C2B] text-white" : "bg-white text-black" } flex justify-center gap-3 items-center h-[276px] text-center [writing-mode:vertical-rl] w-[50px]`}
        onClick={() => setActive(prev => !prev)}
        
        >
            <span className=' text-[20px] font-biomeW04Regular [ font-bold'>Token Info</span>
            <span className={`transition-all duration-300 ease-linear inline-block ${active ? '[transform:rotate(-90deg)]' : '[transform:rotate(90deg)]'}`}><ArrowDropDownIcon fontSize={'large'}  /></span>
        </div>
        <div className='flex-1 text-black font-biomeW04Regular font-bold'>
          <div className='ml-10 flex flex-col justify-around py-5 h-full'>
            <p className='text-[20px]'>Token info</p>
            
            <p className='text-[#AAA]'>
              Name
              <p className='text-black text-[18px]'>Blow</p>
            </p>
            <p className='text-[#AAA]'>
              Smartcontract address
              <p className='text-black text-[18px] flex gap-3 items-center'>
              0x435252521848591ae0e6a5trb12536328f61a80e
              <span>
                <Image src={PasteIcon} alt='icon' />
              </span>
              </p>
            </p>
            <p className='text-[#AAA]'>
              Decimals
              <p className='text-black text-[18px]'>18</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenInfo
