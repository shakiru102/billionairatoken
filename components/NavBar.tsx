import React, { FC, useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/tokenlogo.png'
import LanguageIcon from '../assets/languageicon.png'
import { NavlinksProps } from '../types'
import { AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import ChevronIcon from '../assets/chevron.svg'
import SolidButton from './utils/SolidButton'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuIcon from '@mui/icons-material/Menu';

 interface NavBarProps {
  openPresaleModal: () => void;
 }

const NavBar: FC<NavBarProps> = ({
  openPresaleModal,
}) => {

    
 const [drawer, setDrawer] = useState<boolean>(false)
    
    const navigations:NavlinksProps[] = [
        { text: 'About us', handleClick: () => {
          const element = document.getElementById('about');
          element?.scrollIntoView({ behavior: 'smooth' })

        } },
        { text: 'Ecosystem', handleClick: () => {
          const element = document.getElementById('ecosystem');
          element?.scrollIntoView({ behavior: 'smooth' })
        }  },
        { 
          text: 'Whitepaper', 
          // to: 'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:696772c6-01f7-42db-8ce5-372df6864801'
         },
        { text: 'Join Presale', contained: true }
    ]

  return (
    <>
      <AppBar 
    elevation={0}
      className='bg-transparent backdrop-blur-lg pt-2'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >

      <Toolbar className='justify-between'>
      <div className='flex items-center gap-1'>
        <Image height={32} alt='logo' className='contain' src={Logo} />
      </div>
      <div className="hidden lg:flex gap-8">
        {
          navigations.map((item: NavlinksProps, index: number )=> item.contained ? 
                (
                    <SolidButton 
                    key={index} 
                    {...item}
                    handleClick={openPresaleModal}
                    variant='solid'/>
                ) : 
                (
                  <Button 
                    className='capitalize cursor-fancy text-[#A8A8A8] font-sora text-[16px]'
                    key={index} 
                    href={item.to ? item.to : ''}
                    disableElevation 
                    target='_blank'
                    onClick={() => item.handleClick && item.handleClick()}
                    variant={'text'} >
                        { item.text }
                    </Button>)
                )
        }
        <div className='flex gap-3 items-center ml-2 border-l pl-2 border-[#242424]'>
            <Image alt='language' className='contain' src={LanguageIcon} />
            <span className='text-[#A8A8A8]'>ENG</span>
            <Image alt='icon' src={ChevronIcon} />
        </div>
      </div>
      <div className="lg:hidden">
          {
            drawer ? <CloseSharpIcon onClick={() => setDrawer(prev => !prev)} className='text-white text-[24px] '/> : <MenuIcon onClick={() => setDrawer(prev => !prev)} className=' text-[24px] text-white'/>
          }
        </div>
      </Toolbar>
    </AppBar>

<Drawer
variant="temporary"
PaperProps={{
  className: 'bg-black overflow-hidden'
}}
open={drawer}
sx={{
  width: '100%',
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: { width: '100%', boxSizing: 'border-box' },
}}
>
<Toolbar />
  <List>
    {navigations.map((item, index) => item.contained ? (
     <ListItem key={index} >
        <SolidButton 
          key={index} 
          {...item}
          classnames='px-8 py-4 rounded-[8px]'
          handleClick={openPresaleModal}
          variant='transparent'/>
   </ListItem>
    ) : (
      <ListItem key={index} >
        <ListItemButton onClick={() => {
           if(!item.to) {
            setTimeout(() =>  item.handleClick && item.handleClick(), 100)
           setDrawer(false)
           }
        }}
        href={item.to ? item.to : ''}
        target='_blank'
        >
          <ListItemText 
          primary={item.text}
          className='capitalize cursor-fancy text-[#A8A8A8] font-sora text-[16px]'
          />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
<div className="absolute blur-[250.11935424804688px] bg-[rgba(255,255,255,0.7)] h-[457px] w-[457px] rounded-[457px] -bottom-20 -right-20"></div>
</Drawer>
    </>
  )
}

export default NavBar
