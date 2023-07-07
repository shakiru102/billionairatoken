import React, { FC } from 'react'
import Image from 'next/image'
import Logo from '../assets/tokenlogo.png'
import LanguageIcon from '../assets/languageicon.png'
import { NavlinksProps } from '../types'
import { AppBar, Button, ThemeProvider, Toolbar } from '@mui/material'
import ChevronIcon from '../assets/chevron.svg'
import SolidButton from './utils/SolidButton'
import ContainerLayout from "../Layout/ContainerLayout"
const NavBar: FC = () => {

    

    
    const navigations:NavlinksProps[] = [
        { text: 'About us', to: '' },
        { text: 'Ecosystem', to: '' },
        { text: 'Learn More', to: '' },
        { text: 'Team', to: '' },
        { text: 'Join Presale', to: '', contained: true }
    ]

  return (
    <ContainerLayout>
    <AppBar 
    elevation={0}
      className='bg-black'>

      <Toolbar className='justify-between'>
      <div className='flex items-center gap-1'>
        <Image width={37} height={37} alt='logo' src={Logo} />
        <div className='text-[#FAD17F] font-larkenDemo '>The Billionaires Token</div>
      </div>
      <div className="hidden md:flex">
        {
          navigations.map((item: NavlinksProps, index: number )=> item.contained ? 
                (
                    <SolidButton 
                    key={index} 
                    text={item.text} 
                    variant='transparent'/>
                ) : 
                (
                  <Button 
                    className='capitalize text-[#A8A8A8] font-sora text-[16px]'
                    key={index} 
                    disableElevation 
                    variant={'text'} >
                        { item.text }
                    </Button>)
                )
        }
        <div className='flex gap-3 items-center ml-2 border-l pl-2 border-[#242424]'>
            <Image alt='language' src={LanguageIcon} />
            <span className='text-[#A8A8A8]'>ENG</span>
            <Image alt='icon' src={ChevronIcon} />
        </div>
      </div>
      </Toolbar>
    </AppBar>
                </ContainerLayout>
  )
}

export default NavBar
