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
import { useTranslation } from 'react-i18next'

const RoadMap: FC = () => {

    const {t} = useTranslation()

    const roadMapList: RoadMapProps[] = [
        {
            title: "Q4 2022",
            position: "left",
            list: [
                t('q42022List1'),
                t('q42022List2'),
            ]
        },
        {
            title: "Q1 2023",
            position: "right",
            list: [
                t('q12023List1'),
                t('q12023List2')
            ]
        },
        {
            title: "Q2 2023",
            position: "left",
            list: [
                t('q22023List1'),
                t('q22023List2'),
                t('q22023List3'),
                t('q22023List4')
            ]
        },
        {
            title: "Q3 2023",
            position: "right",
            list: [
                t('q32023List1'),
                t('q32023List2'),
                t('q32023List3'),
                t('q32023List4'),
                t('q32023List5')
            ]
        },
        {
            title: "Q4 2023",
            position: "left",
            list: [
                t('q42023List1'),
                t('q42023List2'),
                t('q42023List3'),
                t('q42023List4')
            ]
        },
        {
            title: "Q1 2024",
            position: "right",
            list: [
                t('q12024List1'),
                t('q12024List2'),
                t('q12024List3')
            ]
        },
        {
            title: "Q2 2024",
            position: "left",
            list: [
                t('q22024List1'),
                t('q22024List2'),
                t('q22024List3'),
                t('q22024List4'),
                t('q22024List5')
            ]
        },
        {
            title: "Q3 2024",
            position: "right",
            list: [
                t('q32024List1'),
                t('q32024List2'),
                t('q32024List3'),
                t('q32024List4')
            ]
        },
        {
            title: "Q4 2024",
            position: "left",
            list: [
                t('q42024List1'),
                t('q42024List2')
            ]
        },
    ]
  
    
  return (
    <>
        <div className='hidden pt-20  md:block mt'>
            <ContainerLayout>
                    <div className="text-center mb-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                        {t('roadMap')}
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
