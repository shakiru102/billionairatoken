import React, { FC, useContext, useState } from 'react'
import Image from 'next/image'
import Logo from '../assets/tokenlogo.png'
import LanguageIcon from '../assets/languageicon.png'
import { NavlinksProps } from '../types'
import { AppBar, Box, Button, Drawer, Input, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material'
import SolidButton from './utils/SolidButton'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useTranslation } from 'react-i18next'

 interface NavBarProps {
  openPresaleModal: () => void;
 }

const NavBar: FC<NavBarProps> = ({
  openPresaleModal,
}) => {

    
 const [drawer, setDrawer] = useState<boolean>(false)
 const [selectedLang, setSelectedLang] = useState<string>('en')
 const { i18n } = useTranslation()

 const languages: { label: string, value: string }[] = [
  {
    label: 'ENG',
    value: 'en'
  },
  { label: 'FRA', value: 'fr' },
  { label: 'ARB', value: 'ar' },
  { label: 'CHN', value: 'ch' },
  { label: 'SPA', value: 'sp' },
  { label: 'POR', value: 'po' },
  { label: 'GER', value: 'ge' },
  { label: 'DUT', value: 'du' },
 ]

 
    
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
          handleClick: () => null,
          to: './BlowX-WHITEPAPER_V1.pdf'
         },
        { text: 'Private Sale', contained: true }
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
                    download={item.to ? 'BlowX-WHITEPAPER_V1.pdf': null}
                    disableElevation 
                    target='_blank'
                    onClick={() => item.handleClick && item.handleClick()}
                    variant={'text'} >
                        { item.text }
                    </Button>)
                )
        }
        <div className='w-[155px] items-center ml-2 border-l pl-2 border-[#242424]'>
            {/* <Image alt='language' className='contain' src={LanguageIcon} />
            <span className='text-[#A8A8A8]'>ENG</span>
            <Image alt='icon' src={ChevronIcon} /> */}
            <Select
            value={selectedLang}
            IconComponent={() => <KeyboardArrowDownSharpIcon className='text-white'  />}
            startAdornment={<div className='mr-2'><Image alt='language' width={'70px'} height={'70px'} className='contain' src={LanguageIcon} /></div>}
            onChange={(e: SelectChangeEvent<typeof selectedLang>) => {
              i18n.changeLanguage(e.target.value)
              setSelectedLang(e.target.value)
            }}
            MenuProps={{
              PaperProps: {
                  className: "bg-black text-white"
              }
            }}
            input={
              <Input
              disableUnderline
              className={`bg-transparent  text-[#FFF] px-3`}
                />}
            >
              { languages.map((item, i) => (
                <MenuItem value={item.value} key={i}>{item.label}</MenuItem>
              )) }
            </Select>
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
