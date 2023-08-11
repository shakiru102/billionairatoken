import React, { useState } from 'react'
import Airdrop1 from '../assets/airdrop1.png'
import Airdrop2 from '../assets/airdrop2.png'
import Presale1 from '../assets/presale1.png'
import Presale2 from '../assets/presale2.png'
import Presale3 from '../assets/presale3.png'
import Presale4 from '../assets/presale4.png'
import Presale5 from '../assets/presale5.png'
import Presale6 from '../assets/presale6.png'
import Listing1 from '../assets/listing1.png'
import Listing2 from '../assets/listing2.png'
import Listing3 from '../assets/listing3.png'
import Listing4 from '../assets/listing4.png'
import Listing5 from '../assets/listing5.png'
import Listing7 from '../assets/listing7.png'
import Listing8 from '../assets/listing8.png'
import Listing9 from '../assets/listing9.png'
import RenderComponent from './RenderComponent'
import LaunchCard, { LaunchCardProps } from './utils/LaunchCard'
import CoinModal from './utils/CoinModal'
import SolidButton from './utils/SolidButton'
import { Formik } from 'formik'
import TextInput from './utils/TextInput'


const Launch = () => {

    const launch: LaunchCardProps[] = [
        {
            buttons: [
                { text: "Join community", variant: 'transparent', classnames: '' },
                { text: "Join Airdrop", variant: 'solid', classnames: '' }
            ],
            imageCols: '2',
            images: [ {
                image: Airdrop1,
                name: "TrustPad"
            }, {
                image: Airdrop2,
                name: "AirLyft"
            } ],
            text: "Download Metamask or TrustWallet from the AppStore or GooglePlay Store. Follow the steps to be eligible.",
            title: "Airdrop"
        },
        {
            buttons: [
                { text: "Buy $TBT Presale", variant: 'solid', classnames: '' }
            ],
            imageCols: '3',
            images: [ 
                {
                    image: Presale1,
                    name: "PinkSale"
                },
                 {
                    image: Presale2,
                    name: "GemPad"
                 },
                  {
                    image: Presale3,
                    name: "Camelot"
                  }, 
                  {
                    image: Presale4,
                    name: "Uniswap"
                  }, 
                  {
                    image: Presale5,
                    name: "PancakeSwap"
                  },
                   {
                    image: Presale6,
                    name: "SyncSwap"
                  }],
            text: "Download Metamask or TrustWallet from the AppStore or GooglePlay Store. Follow the steps to be eligible.",
            title: "Presale"
        },
        {
            buttons: [
                { text: "Public Sale", variant: 'solid', handleClick: () => setCexlisting(true) }
            ],
            imageCols: '3',
            images: [
                {
                    image:  Listing1,
                    name: "MEXC Global"
                }, 
                {
                    image: Listing2,
                    name: "Gate.io"
                }, 
                {
                    image: Listing3,
                    name: "Houbi"
                }, 
                {
                    image: Listing4,
                    name: "kuCoin"
                }, 
                {
                    image: Listing5,
                    name: "OKX"
                }, 
                {
                    image: Listing7,
                    name: "BitMart"
                }, 
                {
                    image: Listing8,
                    name: "CoinStore"
                }, 
            {
                image: Listing9,
                name: "ByBit"
            }],
            text: "Download Metamask or TrustWallet from the AppStore or GooglePlay Store. Follow the steps to be eligible.",
            title: "CEX Listing"
        }
    ]
    const [cexlisting, setCexlisting] = useState<boolean>(false)

  return (
   <>
    <div className="md:h-[150vh] md:flex justify-center items-center">
        <RenderComponent 
        title='BlowX Launch Process' 
        >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    launch.map((item: LaunchCardProps, i: number) => (
                        <LaunchCard key={i} {...item}/>
                    ))
                }
            </div>
        </RenderComponent>
    </div>
    <CoinModal 
    open={cexlisting}
    onClose={() => setCexlisting(false)}
    dialogText='Subscribe to get latest updates about TBT CEX listing.'
    dialogTitle='Coming Soon...'
    dialogChildren={
        <Formik
        initialValues={{ email: '' }}
        onSubmit={({ email }) => {
            console.log(email);
            
        }}
        >
            {({ 
                values,
                handleChange,
                handleSubmit
             }) => (
            <form className="flex flex-col gap-5">
                <TextInput 
                name='email'
                label='Enter your email'
                value={values.email}
                handleChange={handleChange('email')}
                placeholder='sample@email.com'
                 />
                <SolidButton handleClick={handleSubmit} variant='solid' text='Submit' classnames='rounded-[8px] mb-3' />
            </form>
            )}
        </Formik>
    }
    />
   </>
  )
}

export default Launch
