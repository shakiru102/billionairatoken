import React, { FC } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import Image from 'next/image'
// import TimelineImage from '../assets/timeline.png'
import RenderComponent from './RenderComponent'
import RoadMapCard, { RoadMapProps } from './utils/RoadMapCard'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const RoadMap: FC = () => {

    const roadMapList: RoadMapProps[] = [
        {
            title: "Q4 2022",
            position: "left",
            list: [
                "Ideation and research",
                "Team building"
            ]
        },
        {
            title: "Q1 2023",
            position: "right",
            list: [
                "White-paper development",
                "Tokenomics development"
            ]
        },
        {
            title: "Q2 2023",
            position: "left",
            list: [
                "Web development",
                "Community building",
                "Influencer marketing",
                "Brand Ambassadorship"
            ]
        },
        {
            title: "Q3 2023",
            position: "right",
            list: [
                "Airdrop Phase 1 Snapshot",
                "Blow Private sale",
                "Blow Pre-sale",
                "Airdrop Phase 1 Released",
                "Public launch"
            ]
        },
        {
            title: "Q4 2023",
            position: "left",
            list: [
                "BlowEARN (Dynamic Staking) is announced and launched.",
                "Blow.ai Web3 Mobile: The beta version of the Blow.ai Web3 Mobile is launched.",
                "Blow.ai Web3 Mobile: The official version of the Blow.ai Web3 Mobile is released.",
                "Airdrop phase ll released"
            ]
        },
        {
            title: "Q1 2024",
            position: "right",
            list: [
                "BlowCHAIN is announced",
                "BlowVerse Marketplace Development begins.",
                "BLOW COIN tokenomics/utilities are finalized."
            ]
        },
        {
            title: "Q2 2024",
            position: "left",
            list: [
                "BlowCHAIN is launched.",
                "BLOW COIN Private sale begins",
                "BLOW COIN Pre sale begins",
                "BlowVerse Marketplace announcement",
                "Airdrop phase lll released"
            ]
        },
        {
            title: "Q3 2024",
            position: "right",
            list: [
                "BlowCHAIN: The second DApp for the BlowCHAIN platform is released.",
                "BlowVerse Marketplace launched",
                "BlowVerse Marketplace: New products and services are added to the marketplace.",
                "BLOW COIN is integrated with other blockchain-based platforms."
            ]
        },
        {
            title: "Q4 2024",
            position: "left",
            list: [
                "BlowCHAIN: New features and capabilities are added to the BlowCHAIN platform.",
                "BlowVerse Marketplace: New marketing campaigns are launched to promote the marketplace. Onboarding of developers to use the BlowCHAIN continues"
            ]
        },
    ]
  
    
  return (
    <>
        <div className='hidden pt-20  md:block mt'>
            <ContainerLayout>
                    <div className="text-center mb-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                        Roadmap
                    </div>
                    <Timeline position='alternate'>
                       {
                        roadMapList.map((item: RoadMapProps, i: number) => (
                            <TimelineItem key={i}>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined'/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <RoadMapCard  {...item}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                       }
                    </Timeline>
            </ContainerLayout>
        </div>
        <div className="md:hidden bg-no-repeat bg-cover" >
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
