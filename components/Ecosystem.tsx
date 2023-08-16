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
import BlowAi from '../assets/TBT Ecosystem Assets/BlowAI.svg'
import BlowVerseMarketPlace from '../assets/TBT Ecosystem Assets/BlowMarketplace.svg'
import BlowStaking from '../assets/TBT Ecosystem Assets/Blow dynamic staking.svg'
import BlowBlackCard from '../assets/tbt-gif-small.gif'
import BlowAvia from '../assets/TBT Ecosystem Assets/BlowAVIA.svg'
import BlowWeb3 from '../assets/TBT Ecosystem Assets/Blow web3 phone.svg'
import BlowBot from '../assets/TBT Ecosystem Assets/BlowBOT.svg'
import BlowCali from '../assets/TBT Ecosystem Assets/BlowCALI.svg'
import BlowLith  from '../assets/TBT Ecosystem Assets/BlowLITH.svg'
import TbtFound from '../assets/TBT Ecosystem Assets/TBT found.svg'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import  ArrowForwardIosSharpIcon  from '@mui/icons-material/ArrowForwardIosSharp'


const ActiveEcoImage = () => (
    <>
     <span className='absolute top-0 left-1' ><Image src={TopLeft} alt='topleft'  /></span>
     <span className='absolute top-0 right-1'><Image src={TopRight} alt='topright' /></span>
     <span className='absolute bottom-0 right-1'><Image src={BottomRight} alt='bottomright' /></span>
     <span className='absolute bottom-0 left-1'><Image src={BottomLeft} alt='bottomright' /></span>
    </>
)

const Ecosystem: FC = () => {

    const ecosystems: EcosystemProps[] = [
        { 
            title: "Blow.ai Web3 Mobile",
            content: "Introducing Blow.ai Web3 Mobile, a blockchain-enabled mobile device that brings the power of blockchain and AI technology to your fingertips. Seamlessly integrate with decentralized applications (DApps), manage digital assets, and communicate securely with military-grade encryption.",
            button: {
                text: "LEARN MORE",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } ,
            image: BlowWeb3
        },
        { 
            title: "BlowVerse Marketplace",
            content: "Discover the BlowVerse Marketplace, your gateway to the decentralised economy. Explore a wide range of products and services, securely transact with smart contracts, empower creators and entrepreneurs, and enjoy frictionless payments using the native cryptocurrency, TBT.",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } ,
            image: BlowVerseMarketPlace
        },
        { 
            title: "BlowPAY (BlackCard)",
            header: "BlowPAY & BlackCard:",
            content: "Revolutionise payments with BlowPAY, leveraging blockchain technology for fast and secure transactions. The BlowPAY BlackCard offers exclusive benefits and privileges, enhanced security, global acceptance, instant fund access, expense tracking, and integration within the BlowPAY ecosystem.",
            button: {
                text: "Accept payment now",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowBlackCard
        },
        { 
            title: "BlowEARN (Staking)",
            header: "BlowEARN (Dynamic Staking)",
            content: "Maximise Your Returns with Flexible Staking Solutions. Earn dynamic staking rewards based on market conditions and network performance. Stake your assets now.",
            button: {
                text: "Start Earning Now",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowStaking 
        },
        { 
            title: "BlowNFT",
            content: "", 
        },
        { 
            title: "Blow Island & Casino",
            content: <span>
                Escape to the luxurious Blow Island & Casino, an exclusive paradise located in Ras Al Khaimah, UAE, and El Salvador Bitcoin City. Enjoy world-class gaming, lavish accommodations, gourmet dining experiences, exciting entertainment options, and VIP services. Experience luxury and entertainment like never before, exclusively for TBT prime hodlers and VVIPs. 
                <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>(Discover) Blow Island & Casino and plan your unforgettable experience today!</span>
            </span>, 
        },
        { 
            title: "BlowAVIA",
            header: "BlowAVIA (Smart Airport)",
            content: <span>
               Redefine your travel experience with BlowAVIA Smart Airport. Seamlessly navigate through the airport with advanced biometric identification, intelligent self-service kiosks, real-time flight information, and smart luggage tracking. Experience convenience and efficiency at its best with BlowAVIA.
                <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    (Learn more) about BlowAVIA and embark on a hassle-free journey!
                </span>
            </span>,   
            image: BlowAvia
        },
        { 
            title: "Blow AI",
            content: "Empower innovation and automation with Blow AI, a solution that utilises advanced artificial intelligence algorithms. Streamline workflows, personalise user experiences, gain valuable insights through predictive analytics, and enhance security measures with this intelligent decision-making platform.",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            },
            image: BlowAi 
        },
        { 
            title: "BlowBOT",
            content: <span>
                    Introducing BlowBOT, your intelligent virtual assistant for personal and business needs! Experience 24/7 automated support, personalised recommendations, task automation, and more. Discover the power of BlowBOT and optimise your efficiency today! 
                    <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    Get started with BlowBOT and revolutionize your daily tasks.
                    </span>
                </span>,  
            image: BlowBot    
        },
        { 
            title: "BlowCALIFORNIUM",
            header: "BlowCALIFORNIUM Mineral",
            content: <span>
                        Harness the power of nature with BlowCALIFORNIUM Mineral, a unique mineral formulation. Promote mineral balance, enhance cellular function, and support overall health. Unlock the potential of BlowCALIFORNIUM Mineral and experience its benefits! 
                        <span className='bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                        Explore BlowCALIFORNIUM Mineral and elevate your well-being now!
                        </span>
                    </span>, 
            image: BlowCali        
        },
        { 
            title: "BlowLITHIUM",
            content: <span>
                        Empower smart product manufacturers with BlowLITHIUM, the ultimate power solution. Enjoy advanced power management, extended battery life, and quick charging technology. Join the future of smart devices with BlowLITHIUM! {' '}
                        <span className=' bg-gradient-to-b cursor-fancy from-[#AAA5A5] to-[#aaa5a503] bg-clip-text font-biomeW04Regular text-transparent underline'>
                         {' '} Upgrade your smart products with BlowLITHIUM and boost performance!
                        </span>
                    </span>, 
            image: BlowLith        
        },
        { 
            title: "BlowEVC Station",
            header: "Blow Hybrid EVC Station",
            content: "A versatile electric vehicle charging station that combines fast DC charging and standard AC charging in one unit. It offers compatibility with various EV models, user-friendly interface, intelligent charging management, and scalability for future expansion. Experience the future of electric vehicle charging with Blow Hybrid EVC Station. ",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "The BillionairesDAO",
            header: "The Billionaires DAO",
            content: "Join a decentralised autonomous organization built on blockchain technology. The Billionaires DAO empowers token holders to participate in governance, access investment opportunities, and earn rewards. Be part of a transparent and community-driven ecosystem that shapes the future of decentralized governance and investments.",
            button: {
                text: "Get Involved",
                appendIcon: <EastSharpIcon className='text-[#FFF] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "TBT Foundation",
            content: "The TBT Foundation is dedicated to nurturing talent, providing scholarships, and supporting educational initiatives globally. It offers programs for skill-building, entrepreneurship support, cultural exchange, environmental sustainability, and global outreach. Join us in making a lasting impact and empowering the next generation across the globe.",
            button: {
                text: "Support the Foundation",
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
                    <div className="inline-block my-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                        Ecosystem Overview
                    </div>
                    <div className=" text-[12px] font-sora md:text-[18px] text-transparent bg-gradient-to-b from-[#AAA5A5] to-[#aaa5a576] bg-clip-text mb-8">
                    Why TBT Ecosystem: Decentralised system is the future, and so is the Real World Assets (RWAs) tokenisation. Whether you adopt it now or not. Value is value, Innovation is Innovation. TBT is positioned to build the first ever Real World Assets (RWAs) decentralised ecosystem, leveraging the Blockchain, Ai, Metaverse and other disruptive technologies.
                    </div>
                </div>
            <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:h-[782px]">
                <ul className="border-t border-r row-span-3 lg:row-span-1 lg:col-span-1  border-b border-l border-[#CCC] flex flex-col">
                    {
                        ecosystems.map((item:EcosystemProps, i: number) => {
                            const isLastItem = i === ecosystems.length -1 
                            if(isLastItem) {
                                return (
                                    <li key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 hidden lg:flex gap-2 pl-16 items-center">
                                        { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                        <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                    </li>
                                )
                            }

                            return (
                                <li key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 hidden lg:flex border-b border-b-[#CCC] gap-2 pl-16 items-center">
                                    { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                    <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                </li>
                            )
                        })
                    }
                    {
                        ecosystems.map((item: EcosystemProps, i:number) => (
                            <Accordion key={i} className='lg:hidden bg-transparent border-b border-b-[#CCC]'>
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
                       <div className='text-center mt-8'>
                        <Image alt={ecosystem.title} height={400} src={ecosystem.image} />
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
