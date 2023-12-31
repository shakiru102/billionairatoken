import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import PasteIcon from '../assets/pasteicon.png'
import { useTranslation } from 'react-i18next';

const TokenInfo = () => {

  const {t} = useTranslation()

    const [active, setActive] = useState<boolean>(false)
    
  return (
    <div className={`bg-white transition-all duration-300 ease-linear h-[240px] md:h-[276px] w-full md:w-[628px] overflow-hidden  z-[100] fixed bottom-52 rounded-tl-[20px] rounded-bl-[20px] ${ active ? "right-0" : " -right-[90%] md:-right-[578px]" }`}>
      <div className="flex ">
      
        <div 
        className={`transition-all cursor-pointer duration-300 ease-linear ${active ? "bg-[#2C2C2B] text-white" : "bg-white text-black" } flex justify-center gap-3 items-center h-[240px] md:h-[276px] text-center [writing-mode:vertical-rl] w-[50px]`}
        onClick={() => setActive(prev => !prev)}
        
        >
            <span className=' text-[20px] font-biomeW04Regular font-bold'>{t('tokenInfo')}</span>
            <span className={`transition-all duration-300 ease-linear inline-block ${active ? '[transform:rotate(-90deg)]' : '[transform:rotate(90deg)]'}`}><ArrowDropDownIcon fontSize={'large'}  /></span>
        </div>
        <div className='flex-1 text-black font-biomeW04Regular font-bold'>
          <div className='ml-5 md:ml-10 flex flex-col justify-around py-5 h-full'>
            <p className=' text-[18px] md:text-[20px]'>{t('tokenInfo')}</p>
            
            <p className='text-[#AAA]'>
            {t('tokenInfoName')}
              <p className='text-black text-[11px] md:text-[18px]'>Blow</p>
            </p>
            <p className='text-[#AAA]'>
            {t('tokenInfoContractAdd')}
              <p className='text-black text-[11px] md:text-[18px] flex gap-3 items-center'>
              0x435252521848591ae0e6a<br className='md:hidden'/>5trb12536328f61a80e
              <span>
                <Image src={PasteIcon} alt='icon' />
              </span>
              </p>
            </p>
            <p className='text-[#AAA]'>
            {t('tokenInfoDecimal')}
              <p className='text-black text-[11px] md:text-[18px]'>18</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenInfo
