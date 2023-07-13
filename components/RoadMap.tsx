import React, { FC } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import Image from 'next/image'
import Timeline from '../assets/timeline.png'
import RenderComponent from './RenderComponent'
import RoadMapCard, { RoadMapProps } from './utils/RoadMapCard'

const RoadMap: FC = () => {

    const roadMapList: RoadMapProps[] = [
        {
            title: "Roadmap stages",
            position: "left",
            list: [
                "Phase 1: Meme",
                "Phase 2: Vibe and HODL",
                "Phase 3: Meme Takeover"
            ]
        },
        {
            title: "Phase 1",
            position: "right",
            list: [
                "Launch",
                "CoinGecko/Coinmarketcap Listings",
                "1,000+ Holders",
                "Get $PEPE Trending on twitter with our memetic power"
            ]
        },
        {
            title: "Phase 2",
            position: "left",
            list: [
                " Community Partnerships Pepe Times digital newsletter",
                "Formation of token gated discord group, Pepe Palace, for holders, more details tba",
                "CEX Listings 10,000+holders"
            ]
        },
        {
            title: "Phase 3",
            position: "right",
            list: [
                "Pepe merch",
                "Pepe Academy",
                "Pepe Tools",
                "T1 Exchange Listings 100,000+ holders",
                "Meme Takeover"
            ]
        },
    ]
  
    
  return (
    <>
        <div className='hidden md:block'>
            <ContainerLayout>
                    <Image alt='time line'  src={Timeline}/>
            </ContainerLayout>
        </div>
        <div className="bg-[url('../assets/roadmapbg.png')] md:hidden bg-no-repeat bg-cover" >
            <RenderComponent title='Roadmap'>
                <div className='flex  flex-col gap-6'>
                {
                    roadMapList.map((item: RoadMapProps, index: number) => (
                        <RoadMapCard  key={index} {...item}/>
                    ))
                }
                </div>
            </RenderComponent>
        </div>
    </>
  )
}

export default RoadMap
