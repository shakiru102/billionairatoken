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
import { useTranslation } from 'react-i18next'

interface onBoardProps {
    openPresaleModal: () => void;
   }

const OnBoard: FC<onBoardProps> = ({
    openPresaleModal
}) => {

    const { t } = useTranslation()

    const [airdrop, setAirdrop] = useState<boolean>(false)
    const buttons: SolidButtonProps[] = [
        {
            text: t('privateSaleBtnText'),
            variant: "solid",
            handleClick: () => openPresaleModal()
        },
        {
            text: t('joinAirdropBtnText'),
            variant: "transparent",
            handleClick: () => setAirdrop(prev => !prev)
        }
    ]

    
   
    

  return (
    <div className="min-h-screen md:min-h-full z-50 lg:min-h-screen flex pt-36 md:pt-0 md:items-center">
       <ContainerLayout>
        <div className="lg:w-[50%] ">
        <div data-aos="fade-left"data-aos-delay="1000" className='md:leading-[96px] text-[36px] md:text-[75px] bg-gradient-to-b from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent font-detacher'>
        { t('onBoardTitle') }
        </div>
        <div data-aos="fade-up" data-aos-delay="1500" className='bg-[#08080897] my-2 pt-2 lg:pt-0 lg:bg-transparent relative'>
        {/* bg-gradient-to-r from-[#FAFAFA] to-[#AAA5A5] bg-clip-text text-transparent */}
            <div className=' lg:pr-8 text-[12px]  md:text-[18px] text-white font-sora'>
            { t('onBoardContent') }
            </div>
        </div>
            <div data-aos="fade" data-aos-delay="2000" className='flex gap-4 my-4'>
                {
                    buttons.map((item: SolidButtonProps, i: number) => (
                        <SolidButton key={i} {...item}/>
                    ))
                }
            </div>
           <div data-aos="fade" data-aos-delay="2000" className='mt-10 md:mt-8'>
            <MediaIcons />
           </div>
        </div>
       </ContainerLayout>
       <div className='absolute  bottom-32 md:bottom-0 pb-8 w-full flex justify-center items-center'><Lottie className=' w-[90px] md:w-[120px]' autoPlay animationData={LottieFile} loop={true} /></div>
       <CoinModal
         open={airdrop}
         onClose={() => setAirdrop(false)}
         dialogTitle='Join Waitlist & Airdrop'
         dialogText='Kindly fill in the form and join our community to follow the development progress. You will be notified when Blow launch.'
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
                       label={`${t('chooseWallet')}`}
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
                       label={`${t('walletAddressLabel')}`}
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
                       text={`${t('submit')}`}
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
