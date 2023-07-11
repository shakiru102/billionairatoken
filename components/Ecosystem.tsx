import React, { FC, useState } from 'react'
import ContainerLayout from '../Layout/ContainerLayout'
import OutlineButton from './utils/OutlineButton'
import EcosystemCard, { EcosystemProps } from './utils/EcosystemCard'
import Image from 'next/image'
import TopLeft from '../assets/topleft.png'
import TopRight from '../assets/topright.png'
import BottomLeft from '../assets/bottomleft.png'
import BottomRight from '../assets/bottomright.png'
import EastSharpIcon from '@mui/icons-material/EastSharp';


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
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "BlowVerse Marketplace",
            content: "Discover the BlowVerse Marketplace, your gateway to the decentralised economy. Explore a wide range of products and services, securely transact with smart contracts, empower creators and entrepreneurs, and enjoy frictionless payments using the native cryptocurrency, TBT.",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "BlowPAY (BlackCard)",
            header: "BlowPAY & BlackCard:",
            content: "Revolutionise payments with BlowPAY, leveraging blockchain technology for fast and secure transactions. The BlowPAY BlackCard offers exclusive benefits and privileges, enhanced security, global acceptance, instant fund access, expense tracking, and integration within the BlowPAY ecosystem.",
            button: {
                text: "Accept payment now",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            }  
        },
        { 
            title: "BlowEARN (Staking)",
            header: "BlowEARN (Dynamic Staking)",
            content: "Maximise Your Returns with Flexible Staking Solutions. Earn dynamic staking rewards based on market conditions and network performance. Stake your assets now.",
            button: {
                text: "Start Earning Now",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "BlowNFT",
            content: "", 
        },
        { 
            title: "Blow Island & Casino",
            content: <span>
                Escape to the luxurious Blow Island & Casino, an exclusive paradise located in Ras Al Khaimah, UAE, and El Salvador Bitcoin City. Enjoy world-class gaming, lavish accommodations, gourmet dining experiences, exciting entertainment options, and VIP services. Experience luxury and entertainment like never before, exclusively for TBT prime hodlers and VVIPs. 
                <span className=' bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent underline'>(Discover) Blow Island & Casino and plan your unforgettable experience today!</span>
            </span>, 
        },
        { 
            title: "BlowAVIA",
            header: "BlowAVIA (Smart Airport)",
            content: <span>
               Redefine your travel experience with BlowAVIA Smart Airport. Seamlessly navigate through the airport with advanced biometric identification, intelligent self-service kiosks, real-time flight information, and smart luggage tracking. Experience convenience and efficiency at its best with BlowAVIA.
                <span className=' bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    (Learn more) about BlowAVIA and embark on a hassle-free journey!
                </span>
            </span>,   
        },
        { 
            title: "Blow AI",
            content: "Empower innovation and automation with Blow AI, a solution that utilises advanced artificial intelligence algorithms. Streamline workflows, personalise user experiences, gain valuable insights through predictive analytics, and enhance security measures with this intelligent decision-making platform.",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "BlowBOT",
            content: <span>
                    Introducing BlowBOT, your intelligent virtual assistant for personal and business needs! Experience 24/7 automated support, personalised recommendations, task automation, and more. Discover the power of BlowBOT and optimise your efficiency today! 
                    <span className=' bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent underline'>
                    Get started with BlowBOT and revolutionize your daily tasks.
                    </span>
                </span>,  
        },
        { 
            title: "BlowCALIFORNIUM",
            header: "BlowCALIFORNIUM Mineral",
            content: <span>
                        Harness the power of nature with BlowCALIFORNIUM Mineral, a unique mineral formulation. Promote mineral balance, enhance cellular function, and support overall health. Unlock the potential of BlowCALIFORNIUM Mineral and experience its benefits! 
                        <span className='bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent underline'>
                        Explore BlowCALIFORNIUM Mineral and elevate your well-being now!
                        </span>
                    </span>, 
        },
        { 
            title: "BlowLITHIUM",
            content: <span>
                        Empower smart product manufacturers with BlowLITHIUM, the ultimate power solution. Enjoy advanced power management, extended battery life, and quick charging technology. Join the future of smart devices with BlowLITHIUM! {' '}
                        <span className=' bg-gradient-to-r cursor-fancy from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-biomeW04Regular text-transparent underline'>
                         {' '} Upgrade your smart products with BlowLITHIUM and boost performance!
                        </span>
                    </span>, 
        },
        { 
            title: "BlowEVC Station",
            header: "Blow Hybrid EVC Station",
            content: "A versatile electric vehicle charging station that combines fast DC charging and standard AC charging in one unit. It offers compatibility with various EV models, user-friendly interface, intelligent charging management, and scalability for future expansion. Experience the future of electric vehicle charging with Blow Hybrid EVC Station. ",
            button: {
                text: "Explore",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "The BillionairesDAO",
            header: "The Billionaires DAO",
            content: "Join a decentralised autonomous organization built on blockchain technology. The Billionaires DAO empowers token holders to participate in governance, access investment opportunities, and earn rewards. Be part of a transparent and community-driven ecosystem that shapes the future of decentralized governance and investments.",
            button: {
                text: "Get Involved",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
        { 
            title: "TBT Foundation",
            content: "The TBT Foundation is dedicated to nurturing talent, providing scholarships, and supporting educational initiatives globally. It offers programs for skill-building, entrepreneurship support, cultural exchange, environmental sustainability, and global outreach. Join us in making a lasting impact and empowering the next generation across the globe.",
            button: {
                text: "Support the Foundation",
                appendIcon: <EastSharpIcon className='text-[#CD8D03] text-[18px] relative left-2'/>
            } 
        },
    ]

    const [ecosystem, setEcosystem] = useState<EcosystemProps>(ecosystems[0])


  return (
    <div className='min-h-[130vh] '>
      <ContainerLayout>
            <div className="text-center">
                    <div className="inline-block my-4 font-detacher text-[20px] md:text-[40px] uppercase text-transparent bg-gradient-to-r from-[#FDCE7B] to-[#CD8D03] bg-clip-text">
                        Ecosystem Overview
                    </div>
                    <div className=" hidden md:block font-sora text-[18px] text-[#FECF81] mb-6">
                    Many times people get confused. They sometimes think an economy is money. Money in real sense is database for exchange of goods and services. Money is simply a database and driven force of the economy. Money doesn’t have power in and of itself. The actual economy is goods and services with TBT leveraging the blockchain and other disruptive technologies.
                    </div>
                </div>
            <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 md:h-[782px]">
                <ul className="border-t border-r row-span-2 md:row-span-1 md:col-span-1  border-b border-l border-[#FECF81] flex flex-col">
                    {
                        ecosystems.map((item:EcosystemProps, i: number) => {
                            const isLastItem = i === ecosystems.length -1 
                            if(isLastItem) {
                                return (
                                    <li key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 flex gap-2 pl-16 items-center">
                                        { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                        <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                    </li>
                                )
                            }

                            return (
                                <li key={i} style={{ background: item.title === ecosystem?.title ? '#1A1613' : 'transparent' }} onClick={() => setEcosystem(item)} className=" relative text-[#A8A8A8] font-sora text-[15px] md:text-[18px] flex-1 flex border-b border-b-[#FECF81] gap-2 pl-16 items-center">
                                    { item.title === ecosystem?.title ? <ActiveEcoImage /> : null}
                                    <span className='inline-block w-[5px] h-[5px] bg-[#A8A8A8]' /> { item.title }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=" grid grid-rows-4 bg-[url('../assets/tokenbg.png')] bg-no-repeat bg-cover bg-center order-first md:order-last md:col-span-2">
                    <div className=" row-span-4 md:row-span-3 border-t border-l md:border-l-0 border-r border-[#FECF81]">
                        <EcosystemCard 
                        {...ecosystem}
                        />
                    </div>
                    <div className="bg-[#00000080] hidden border-t border-r border-b border-[#FECF81] pl-8 md:flex flex-col justify-center">
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
                {/* mobile */}
                <div className="bg-[#00000080] py-10 md:py-0 md:hidden border-t border-l md:border-l-0 border-r border-b border-[#FECF81] pl-4 md:pl-8 flex flex-col justify-center">
                        <div>
                        <div className="bg-gradient-to-r inline-block from-[#FDCE7B] to-[#CD8D03] bg-clip-text font-detacher text-[20px] md:text-[24px] text-transparent">
                            Swaps
                        </div>
                        </div>
                        <div className="text-[14px] md:text-[18px] text-[#A8A8A8] font-sora my-3 md:my-4">
                            Quickly and easily exchange one token for another.
                        </div>
                        <div>
                        <OutlineButton text='Coming soon' />
                        </div>
                    </div>
            </div>
      </ContainerLayout>
    </div>
  )
}

export default Ecosystem
