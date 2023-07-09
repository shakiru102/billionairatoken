import React, { FC, useState } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import OutlineButton from './utils/OutlineButton'
import EcosystemCard, { EcosystemProps } from './utils/EcosystemCard'
import Image from 'next/image'
import TopLeft from '../assets/topleft.png'
import TopRight from '../assets/topright.png'
import BottomLeft from '../assets/bottomleft.png'
import BottomRight from '../assets/bottomright.png'

const ActiveEcoImage = () => (
    <>
     <Image src={TopLeft} alt='topleft' className='absolute top-1 left-1'  />
     <Image src={TopRight} alt='topright' className='absolute top-1 right-1'  />
     <Image src={BottomRight} alt='bottomright' className='absolute bottom-1 right-1'  />
     <Image src={BottomLeft} alt='bottomright' className='absolute bottom-1 left-1'  />
    </>
)

const Ecosystem: FC = () => {

    const [ecosystem, setEcosystem] = useState<EcosystemProps | null>({ title: "Blow.ai Web3 Mobile" })

    const ecosystems: EcosystemProps[] = [
        { title: "Blow.ai Web3 Mobile" },
        { title: "BlowVerse Marketplace" },
        { title: "BlowPAY (BlackCard)" },
        { title: "BlowEARN (Staking)" },
        { title: "BlowNFT" },
        { title: "Blow Island & Casino" },
        { title: "BlowAVIA" },
        { title: "Blow AI" },
        { title: "BlowBOT" },
        { title: "BlowCALIFORNIUM" },
        { title: "BlowLITHIUM" },
        { title: "BlowEVC Station" },
        { title: "The BillionairesDAO" },
        { title: "TBT Foundation" },
    ]


  return (
    <div className='min-h-[130vh]'>
      <ContainerLayout>
            <div className="text-center">
                    <div className="inline-block md:mb-4 font-detacher md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
                        Ecosystem Overview
                    </div>
                    <div className="font-sora text-[18px] text-[#FECF81] mb-6">
                    Many times people get confused. They sometimes think an economy is money. Money in real sense is database for exchange of goods and services. Money is simply a database and driven force of the economy. Money doesn’t have power in and of itself. The actual economy is goods and services with TBT leveraging the blockchain and other disruptive technologies.
                    </div>
                </div>
            <div className="grid grid-cols-3 md:h-[782px]">
                <ul className="border-t border-r border-b border-l border-[#FECF81] flex flex-col">
                    {
                        ecosystems.map((item:EcosystemProps, i: number) => {
                            const isLastItem = i === ecosystems.length -1 
                            if(isLastItem) {
                                return (
                                    <li style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[18px] flex-1 flex gap-2 pl-16 items-center">
                                        { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                        <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                    </li>
                                )
                            }

                            return (
                                <li style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[18px] flex-1 flex border-b border-b-[#FECF81] gap-2 pl-16 items-center">
                                    { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                    <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=" grid grid-rows-4 bg-[url('../assets/tokenbg.png')] bg-no-repeat bg-cover bg-center col-span-2">
                    <div className="row-span-3 border-t border-r border-[#FECF81]">
                        <EcosystemCard 
                        {...ecosystem}
                        />
                    </div>
                    <div className="bg-[#00000080] border-t border-r border-b border-[#FECF81] pl-8 flex flex-col justify-center">
                        <div>
                        <div className="bg-gradient-to-r inline-block from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-detacher text-[24px] text-transparent">
                            Swaps
                        </div>
                        </div>
                        <div className="md:text-[18px] text-[#A8A8A8] font-sora my-4">
                            Quickly and easily exchange one token for another.
                        </div>
                        <div>
                        <OutlineButton text='Coming soon' />
                        </div>
                    </div>
                </div>
            </div>
      </ContainerLayout>
    </div>
  )
}

export default Ecosystem
