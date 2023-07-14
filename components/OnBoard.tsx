import React, { FC, useState } from 'react'
import Logo from '../assets/tokenlogo.png'
import Image, { StaticImageData } from 'next/image'
import { SolidButtonProps } from '../types'
import SolidButton from './utils/SolidButton'
import Layout from './Layout'
import MediaIcons from './utils/ MediaIcons'
import CoinModal from './utils/CoinModal'
import { Formik } from 'formik'
import SelectInput from './utils/SelectInput'
import TextInput from './utils/TextInput'

interface onBoardProps {
    openPresaleModal: () => void;
   }

const OnBoard: FC<onBoardProps> = ({
    openPresaleModal
}) => {
    const [airdrop, setAirdrop] = useState<boolean>(false)
    const buttons: SolidButtonProps[] = [
        {
            text: "Join Presale",
            variant: "solid",
            handleClick: () => openPresaleModal()
        },
        {
            text: "Join Airdrop",
            variant: "transparent",
            handleClick: () => setAirdrop(prev => !prev)
        }
    ]

    
   
    

  return (
    <div className="bg-[url('../assets/tokenbg.png')] bg-no-repeat bg-cover">
       <Layout classNames='flex items-center justify-center flex-col h-[70vh] md:mt-8'>
        <span className='hidden md:inline'><Image width={230} height={230} alt="logo" src={Logo} /></span>
        <span className='md:hidden mt-16'><Image width={123} height={123} alt="logo" src={Logo} /></span>
        <div className='md:leading-[96px] text-center text-[36px] md:text-[75px] bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-detacher'>The 
        <span className='bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text'> Billionaires </span>
        Token</div>
        <div className=' my-4 text-center text-[12px] mx-8 md:mx-0 md:text-[18px] bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-sora'>
        Pioneering a comprehensive digital currency ecosystem with real-world assets!
        </div>
            <div className='flex gap-4 my-4'>
                {
                    buttons.map((item: SolidButtonProps, i: number) => (
                        <SolidButton key={i} {...item}/>
                    ))
                }
            </div>
           <MediaIcons />
       </Layout>

       <CoinModal
         open={airdrop}
         onClose={() => setAirdrop(false)}
         dialogTitle='Join Waitlist & Airdrop'
         dialogText='Kindly fill in the form and join our community to follow the development progress. You will be notified when TBT launch.'
         dialogChildren={
            <Formik
            initialValues={{
                wallet:'',
                walletAddress: '',
                email: '',
                twitter: '',
                telegram: ''
            }}
            onSubmit={() => {}}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <form className="flex flex-col gap-6">
                        <SelectInput
                       label='Choose Wallet'
                       value={values.wallet}
                       placeholder='example; Jones & Harii Int.'
                       handleChange={handleChange('wallet')}
                       menuItems={[
                        { label: 'ENS',  value: 'ENS' }, 
                        { label: 'ETH Address',  value: 'ETH Address' }, 
                        { label: 'BSC Address',  value: 'BSC Address' }, 
                        { label: 'ARB Address',  value: 'ARB Address' }
                       ]}
                       />
                       <TextInput
                       label='Wallet Address'
                       value={values.walletAddress}
                       placeholder='Wallet Address'
                       handleChange={handleChange('walletAddress')}
                       />
                       <TextInput
                       label='Email *'
                       value={values.email}
                       handleChange={handleChange('email')}
                       placeholder='Email Address'
                       />
                       <TextInput
                       label='Twitter Handle +'
                       value={values.twitter}
                       handleChange={handleChange('twitter')}
                       placeholder='Twitter username'
                       />
                       <TextInput
                       label='Telegram Handle *'
                       value={values.telegram}
                       handleChange={handleChange('telegram')}
                       placeholder='Telegram'
                       />
                       <SolidButton
                       text="Submit"
                       handleClick={handleSubmit}
                       variant='solid'
                       />
                    </form>
                )}
                </Formik>
         }
       />
    </div>
  )
}

export default OnBoard
