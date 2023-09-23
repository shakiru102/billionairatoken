import React, { FC, useState } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import OutlineButton from './utils/OutlineButton'
import EcosystemCard from './utils/EcosystemCard'
import Image from 'next/image'
import TopLeft from '../assets/topleft.png'
import TopRight from '../assets/topright.png'
import BottomLeft from '../assets/bottomleft.png'
import BottomRight from '../assets/bottomright.png'
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { EcosystemProps } from '../types'
import BlowAi from '../assets/TBT Ecosystem Assets/BlowAI.png'
import BlowVerseMarketPlace from '../assets/TBT Ecosystem Assets/BlowMarketplace.png'
import BlowStaking from '../assets/TBT Ecosystem Assets/Blow dynamic staking.png'
import BlowBlackCard from '../assets/tbt-gif-small.gif'
import BlowAvia from '../assets/TBT Ecosystem Assets/BlowAVIA.png'
import BlowWeb3 from '../assets/TBT Ecosystem Assets/Blow web3 phone.png'
import BlowBot from '../assets/TBT Ecosystem Assets/BlowBOT.png'
import BlowCali from '../assets/TBT Ecosystem Assets/BlowCALI.png'
import BlowLith  from '../assets/TBT Ecosystem Assets/BlowLITH.png'
import TbtFound from '../assets/TBT Ecosystem Assets/TBT found.png'
import BlowGames from '../assets/TBT Ecosystem Assets/BlowGames.png'
import BlowHYBRID from '../assets/TBT Ecosystem Assets/BlowHYBRID.png'
import BlowVault from '../assets/TBT Ecosystem Assets/BlowVault.png'
import BlowIsland from '../assets/TBT Ecosystem Assets/BlowISLAND.png'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import  ArrowForwardIosSharpIcon  from '@mui/icons-material/ArrowForwardIosSharp'
import { useTranslation } from 'react-i18next'


const ActiveEcoImage = () => (
    <>
     <span className='absolute top-0 left-1' ><Image src={TopLeft} alt='topleft'  /></span>
     <span className='absolute top-0 right-1'><Image src={TopRight} alt='topright' /></span>
     <span className='absolute bottom-0 right-1'><Image src={BottomRight} alt='bottomright' /></span>
     <span className='absolute bottom-0 left-1'><Image src={BottomLeft} alt='bottomright' /></span>
    </>
)

const Ecosystem: FC = () => {
    const {t} = useTranslation()

    const ecosystems: EcosystemProps[] = [
        { 
            title: t('blowaiWeb3Mobile'),
            content: t('blowaiWeb3Content'),
            button: {
                text: t('blowaiWeb3ContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } ,
            image: BlowWeb3
        },
        { 
            title: t('blowVerseMarketplace'),
            content:t('blowVerseMarketplaceContent'),
            button: {
                text: t('blowVerseMarketplaceContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } ,
            image: BlowVerseMarketPlace
        },
        { 
            title: t('blowPayCard'),
            header: t('blowPayCardHeader'), 
            content: t('blowPayCardContent'),
            button: {
                text: t('blowPayCardContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowBlackCard
        },
        { 
            title: t('blowEarnStake'),
            header: t('blowEarnStakeHeader'),
            content: t('blowEarnStakeContent'),
            button: {
                text: t('blowEarnStakeContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowStaking 
        },
        { 
            title: "BlowNFT",
            content: t('blowNftContent'), 
            button: {
                text: t('blowNftContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowIsland
        },
        { 
            title: t('blowIslands'),
            content: <span>
                {t('blowIslandsContent')}
                <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    {' '}
                    {t('blowIslandsContentLink')}
                    </span>
            </span>, 
            image: BlowGames
        },
        { 
            title: "BlowAVIA",
            header: t('blowAviaHeader'),
            content: <span>
                    {t('blowAviaContent')}
                <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                   {t('blowAviaContentLink')}
                </span>
            </span>,   
            image: BlowAvia
        },
        { 
            title: "Blow AI",
            content: t('blowaiContent'),
            button: {
                text: t('blowaiContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowAi 
        },
        { 
            title: "BlowBOT",
            content: <span>
                    {t('blowBotContent')}
                    <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    {' '}
                    {t('blowBotContentLink')}
                    </span>
                </span>,  
            image: BlowBot    
        },
        { 
            title: "BlowCALIFORNIUM",
            header: t('blowCaliforniumHeader'),
            content: <span>
                        {t('blowCaliforniumContent')}
                        <span className='bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                        {t('blowCaliforniumContentLink')}
                        </span>
                    </span>, 
            image: BlowCali        
        },
        { 
            title: "BlowLITHIUM",
            content: <span>
                        {t('blowLithContent')} {' '}
                        <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                         {' '} {t('blowLithContentLink')}
                        </span>
                    </span>, 
            image: BlowLith        
        },
        { 
            title: t('blowEvc'),
            header: t('blowEvcHeader'),
            content: t('blowEvcContent'),
            button: {
                text: t('blowEvcContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowHYBRID 
        },
        { 
            title: t('blowDao'),
            header: t('blowDaoHeader'),
            content: t('blowDaoContent'),
            button: {
                text: t('blowDaoContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowVault 
        },
        { 
            title: t('blowFoundation'),
            content: t('blowFoundationContent'),
            button: {
                text: t('blowFoundationContentBtn'),
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: TbtFound 
        },
    ]

    const [ecosystem, setEcosystem] = useState<EcosystemProps>(ecosystems[0])


  return (
    <div id='ecosystem' className='lg:my-8'>
      <ContainerLayout>
            <div className="text-center">
                    <div data-aos="fade-up" data-aos-delay="500" className="inline-block my-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                        {t('ecosysemTitle')}
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className=" text-[12px] font-sora md:text-[18px] text-transparent bg-gradient-to-b from-[#AAA5A5] to-[#aaa5a576] bg-clip-text mb-8">
                    {t('ecosysemSubTitle')}
                    </div>
                </div>
            <div data-aos="fade" data-aos-delay="700" className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:h-[782px]">
                <ul className="border-t border-r row-span-3 lg:row-span-1 lg:col-span-1  border-b border-l border-[#CCC] flex flex-col">
                    {
                        ecosystems.map((item:EcosystemProps, i: number) => {
                            const isLastItem = i === ecosystems.length -1 
                            if(isLastItem) {
                                return (
                                    <li data-aos="fade" data-aos-delay={`${i + 8}00`} key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 hidden lg:flex gap-2 pl-16 items-center">
                                        { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                        <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                    </li>
                                )
                            }

                            return (
                                <li data-aos="fade" data-aos-delay={`${i + 8}00`} key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 hidden lg:flex border-b border-b-[#CCC] gap-2 pl-16 items-center">
                                    { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                    <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                </li>
                            )
                        })
                    }
                    {
                        ecosystems.map((item: EcosystemProps, i:number) => (
                            <Accordion key={i} data-aos="fade-up" data-aos-delay={`${i + 8}00`}  className='lg:hidden bg-transparent border-b border-b-[#CCC]'>
                                <AccordionSummary 
                                sx={{
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'rotate(90deg)',
                                      }
                                }}
                                expandIcon={<ArrowForwardIosSharpIcon  className='text-[#A8A8A8] text-[18px]'/>}
                                >
                                    <div className='relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 flex  gap-2 pl-4 items-center'>
                                        <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> <span> { item.title }</span>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                <EcosystemCard
                                    {...item}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </ul>
                <div className=" hidden lg:grid grid-rows-5 bg-[url('../assets/tokenbg.png')] bg-no-repeat bg-cover bg-center order-first lg:order-last lg:col-span-2">
                    <div className=" row-span-5 lg:row-span-3 border-t border-l lg:border-l-0 border-r border-[#CCC]">
                      { ecosystem.image && 
                       <div className={`text-center ${ ecosystem.title == 'BlowPAY (BlackCard)' ? '' : 'mt-8' }h-[100px]`}>
                        {
                            ecosystem.title == t('blowPayCard') ?  <Image alt={ecosystem.title} height={500} width={900} src={ecosystem.image} />
                            : 
                            <Image alt={ecosystem.title} width={500} height={500} src={ecosystem.image} />
                        }
                       
                      </div> }
                    </div>
                    <div className="bg-[#00000080] lg:row-span-2 hidden border-t border-r border-b border-[#CCC] lg:py-8 lg:flex flex-col justify-center">
                       <EcosystemCard
                       {...ecosystem}
                       />
                    </div>

                    
                </div>
            </div>
      </ContainerLayout>
    </div>
  )
}

export default Ecosystem
