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
import ContainerLayout from '../Layout/ContainerLayout'
import LottieFile from '../assets/scrolldown.json'
import Lottie from "lottie-react";

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
    <div className="min-h-screen md:min-h-full lg:min-h-screen flex pt-36 md:pt-0 md:items-center">
       <ContainerLayout>
        <div className="lg:w-[40%]">
        <div className='md:leading-[96px] text-[36px] md:text-[75px] bg-gradient-to-b from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-detacher'>
        Evolution of Digital Assets
        </div>
        <div className='bg-[#08080897] my-2 pt-2 lg:pt-0 lg:bg-transparent relative'>
            <div className=' lg:pr-8 text-[12px]  md:text-[18px] bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-sora'>
           From buildings to bonds, we are redefining the concept  of ownership. Leading charge in Real-World Digital Assets ecosystem, leveraging Blockchain, Web3, AI and the Metaverse.
            </div>
        </div>
            <div className='flex gap-4 my-4'>
                {
                    buttons.map((item: SolidButtonProps, i: number) => (
                        <SolidButton key={i} {...item}/>
                    ))
                }
            </div>
           <div>
            <MediaIcons />
           </div>
        </div>
       </ContainerLayout>
       <div className='absolute bottom-0 pb-8 w-full flex justify-center items-center'><Lottie className='w-[150px]' autoPlay animationData={LottieFile} loop={true} /></div>
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
                       label='Twitter Handle *'
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
