import React from 'react'
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
import Listing6 from '../assets/listing6.png'
import Listing7 from '../assets/listing7.png'
import Listing8 from '../assets/listing8.png'
import Listing9 from '../assets/listing9.png'
import RenderComponent from './RenderComponent'
import LaunchCard, { LaunchCardProps } from './utils/LaunchCard'


const Launch = () => {

    const launch: LaunchCardProps[] = [
        {
            buttons: [
                { text: "Join community", variant: 'transparent' },
                { text: "Join Airdrop", variant: 'solid' }
            ],
            imageCols: '2',
            images: [ Airdrop1, Airdrop2 ],
            text: "Download metamask or your wallet of choice from the app store or google play store.",
            title: "Airdrop"
        },
        {
            buttons: [
                { text: "Join community", variant: 'transparent' },
                { text: "Join Airdrop", variant: 'solid' }
            ],
            imageCols: '3',
            images: [ Presale1, Presale2, Presale3, Presale4, Presale5, Presale6],
            text: "Download metamask or your wallet of choice from the app store or google play store.",
            title: "Presale"
        },
        {
            buttons: [
                { text: "Join community", variant: 'transparent' },
                { text: "Join Airdrop", variant: 'solid' }
            ],
            imageCols: '3',
            images: [ Listing1, Listing2, Listing3, Listing4, Listing5, Listing6, Listing7, Listing8, Listing9],
            text: "Download metamask or your wallet of choice from the app store or google play store.",
            title: "CEX Listing"
        }
    ]

  return (
    <div className="md:h-[150vh] md:flex justify-center items-center">
        <RenderComponent 
            title='TBT launch process' 
            children={
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        launch.map((item: LaunchCardProps, i: number) => (
                            <LaunchCard key={i} {...item}/>
                        ))
                    }
                </div>
            } 
            />
    </div>
  )
}

export default Launch
