import type { NextPage } from 'next'
import OnBoard from '../components/OnBoard'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import RenderComponent from '../components/RenderComponent'
import Chess from '../assets/chess.png'
import Image from 'next/image'
import Launch from '../components/Launch'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Ecosystem from '../components/Ecosystem'
import NavBar from '../components/NavBar'
import CoinModal from '../components/utils/CoinModal'
import { Suspense, useEffect, useState } from 'react'
import { Formik } from 'formik'
import TextInput from '../components/utils/TextInput'
import SolidButton from '../components/utils/SolidButton'
import RoadMap from '../components/RoadMap'
import SelectInput from '../components/utils/SelectInput'
import { Canvas, RootState } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ChessBoard } from '../models/ChessBoard'
import * as THREE from 'three'
import OnBoardModel from '../models/OnBoardModel'
import UtilButton from '../components/utils/UtilButton'
import UseCustomHook from '../hooks/UseCustomHook'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TokenInfo from '../components/TokenInfo'
import UtilModal from '../components/utils/UtilModal'
import USDT from '../assets/usdt.png'
import ARB from '../assets/arb.png'
import BNB from '../assets/bnb.png'
import ETH from '../assets/eth.png'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, useAccount } from 'wagmi'
import { arbitrum, mainnet, polygon, bsc  } from 'wagmi/chains'
import { Web3Modal, useWeb3Modal } from '@web3modal/react'
import { useTranslation } from 'react-i18next'

const chains = [arbitrum, mainnet, polygon, bsc]
const projectId = 'f411cba3405901415bd5eddbedde4889'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

const Home: NextPage = () => {

  const { t } = useTranslation()
  const [presaleModal, setPresaleModal] = useState<boolean>(false)
  const [buyBlowModal, setBuyBlowModal] = useState<boolean>(false)
  const [kyc, setKyc] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const { problemDetails, activeId, buyBlowDetails } = UseCustomHook(['section-1', 'section-2'], 300)
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    
    const ethereumClient = new EthereumClient(wagmiConfig, chains)
    const { open, close } = useWeb3Modal()
    const { isConnected } = useAccount()

    const loadBlockPassWidget = () => {
      // @ts-ignore
      const blockpass = new window.BlockpassKYCConnect(process.env.NEXT_PUBLIC_BLOCKPASS_CLIENT_ID)
      
      blockpass.startKYCConnect()
  
      blockpass.on('KYCConnectSuccess', () => {
        //add code that will trigger when data have been sent.
        setKyc(true)
      })
    }
  


  return (
   <>
   {/* <TokenInfo /> */}
   <div className='relative overflow-hidden'>
   <NavBar openPresaleModal={() => setPresaleModal(prev => !prev)} />
   <Canvas id='webgl'
   onCreated={(state: RootState) => {
    // if(screen.width >= 768) state.camera.position.x = 2
   }}
   >
      <OnBoardModel >
        
      </OnBoardModel>
   </Canvas>
   <OnBoard openPresaleModal={() => setPresaleModal(prev => !prev)}/>
   </div>
    <About />
    <RenderComponent title={`${t('featuredOn')}`} />
      <div 
      className="w-[100%] hidden relative box-border pt-20 3xl:px-96 lg:mb-36  lg:flex scroll-smooth"
      >
        <div className="sidemenu hidden lg:flex flex-col justify-around  flex-1 h-screen sticky top-5 w-[50%]">
          <div className='flex flex-col justify-center items-center gap-4'>
          {
            ['section-1', 'section-2'].map((item, i: number) => (
              <UtilButton 
              href={`#${item}`}
              className={activeId === item ? 'bg-white text-[#2C2C2B] hover:bg-white text-[20px]' : 'text-white text-[20px]'}
              key={i}
              >{ i == 0 ? t('problemSloving') : t('solutionProviding')}</UtilButton>
            ))
          }
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-[50%] inline-block mb-4 font-sora text-[20px] md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
              { t('whatAboutTokenizedAsset') }
            </div>
            <div className='font-sora w-[50%] text-[20px] text-white'>
             { t('whatAboutTokenizedAssetContent') }
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div 
          className="flex flex-col justify-evenly h-auto  2xl:justify-center 2xl:gap-8  mb-28"
          id='section-1'
          >
            {
              problemDetails.problems.map((item , i: number) => (
                <div key={i} className='p-[28px] mb-8 w-[75%] bg-white font-sora'>
                  <div className='font-bold mb-4 text-[20px]'>{item.title}</div>
                  <div>{item.text}</div>
                </div>
              ))
            }
          </div>
          <div
           className="flex flex-col justify-evenly h-auto  2xl:justify-start 2xl:gap-8"
          id='section-2'

           >
            <div>
              <div className="font-sora font-bold text-white text-[32px]">{t('solutionProvidingHeader')}</div>
              {/* <div className="font-sora text-white text-[24px]">{t('solutionProvidingSubHeader')}</div> */}
            </div>
            {
              problemDetails.solution.map((item , i: number) => (
                <div key={i} className='p-[28px] mb-8  w-[75%] bg-white font-sora'>
                  <div className='font-bold mb-4 text-[20px]'>{item.title}</div>
                  <div>{item.text}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="lg:hidden pt-20">
      {
            ['panel1', 'panel2'].map((item, i: number) => (
              <Accordion key={i} expanded={expanded === item} onChange={handleChange(item)} elevation={0} className='rounded-none bg-[#000]'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className='font-sora block capitalize font-bold mx-auto  rounded-none text-white'>{ i == 0 ? t('problemSloving'): t('solutionProviding')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {
                      // @ts-ignore
                 item === 'panel1' ? 
                 <Typography>
                  {
                    problemDetails.problems.map((item: any , i: number) => (
                      <div key={i} className='p-[28px] relative mb-4 bg-white font-sora'>
                        <div className='font-bold mb-4 text-[20px]'>{item.title}</div>
                        <div>{item.text}</div>
                        <div className='absolute bottom-0 left-0 w-full  h-[10px] bg-black' />
                      </div>
                    ))
                  }
                 </Typography> : 
                 <Typography>
                 { item === 'section-2' && 
                  <div className='mb-4'>
                      <div className="font-sora font-bold text-white text-[32px]">{t('solutionProvidingHeader')}</div>
                      {/* <div className="font-sora text-white text-[24px]">{t('solutionProvidingSubHeader')}</div> */}
                    </div>
                  }
                  {
                     problemDetails.solution.map((item: any , i: number) => (
                      <div key={i} className='p-[28px] relative bg-white font-sora'>
                        <div className='font-bold mb-4 text-[20px]'>{item.title}</div>
                        <div>{item.text}</div>
                        <div className='absolute bottom-0 left-0 w-full  h-[10px] bg-black' />
                      </div>
                    ))
                  }
                 </Typography>
                }
                </AccordionDetails>
          </Accordion>

            
            ))
          }
          <div className="flex flex-col px-4 mt-10">
            <div className=" inline-block mb-4 font-sora text-[24px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
            { t('whatAboutTokenizedAsset') }
            </div>
            <div className='font-sora  text-[16px] text-white'>
            { t('whatAboutTokenizedAssetContent') }
            </div>
          </div>
      </div>
      <Tokenomics />
      <Launch />
      <Ecosystem />
      <RoadMap />
    {/* <RenderComponent title='Backed by' /> */}
    <RenderComponent 
    title={`${t('theTeam')}`}  
    subtitle={`${t('theTeamContent')}`}
    >
      <Image alt='chess' src={Chess} />
    </RenderComponent>
    <FAQ />
    <Footer />
    <UtilModal
    title={`${t('joinPrivateSale')}`}
    subtitle={
      <div>
        <p>{t('listingPrice')}  = $0.080</p>
        <p>1$BLOW = $0.040</p>
      </div>
    }
    type='presale'
    open={presaleModal}
    onClose={() => setPresaleModal(false)}
    content={
      <div className='border-t border-t-[#2b2b2d] pt-20'>
        <Formik
        initialValues={{ 
          token: '',
          blowToken: '',
          amount: '',
          walletAddress: 'ETH',
          registeredEmail: '',
          verifyEmail: ''
        }}
        onSubmit={(e) => {
          console.log(e);
          
        }}
        >
            {({ 
                values,
                handleChange,
                handleSubmit
             }) => (
            <form className="flex flex-col gap-6">
                 <SelectInput 
                name='walletAddress'
                textInputType='presale'
                label={`${t('selectPaymentTokenAsset')}`}
                value={values.walletAddress}
                handleChange={handleChange('walletAddress')}
                placeholder='Enter your wallet address'
                menuItems={[
                  { icon: USDT, value: 'USDT',  label: 'TRC-20' }, 
                  { icon: ETH, value: 'ETH',  label: 'ERC20' }, 
                  { icon: BNB, value: 'BNB',  label: 'BEP20' }, 
                  { icon: ARB, value: 'ARB',  label: 'Arbitrum' }
                 ]}
                 />
                <TextInput 
                name='token'
                label={`${t('amountYouPayIn')} ${values.walletAddress || 'USDT'}`}
                textInputType='presale'
                value={values.amount}
                handleChange={handleChange('amount')}
                placeholder='500 USDT'
                 />
                 <TextInput 
                name='blowToken'
                label='Amount you receive in BlowX'
                textInputType='presale'
                value={values.token}
                handleChange={handleChange('token')}
                placeholder='0.08 per token'
                 />
                
                 <TextInput 
                 textInputType='presale'
                name='registeredEmail'
                label={`${t('enterEmailAddress')}`}
                value={values.registeredEmail}
                handleChange={handleChange('registeredEmail')}
                placeholder='gamersmerge@blowx.ai'
                 />
                 {
                  kyc ?  <SolidButton 
                  handleClick={() => open()} 
                  variant='solid' text={ isConnected ? t('buy') : t('connect')} 
                  classnames='rounded-[10px] mb-3 py-3' 
                  /> : 
                  <Button
                 id='blockpass-kyc-connect'
                 className='hover:bg-[#FFFFFF] text-black cursor-fancy font-sora rounded-[10px] font-semibold mb-3 py-3 bg-[#FFFFFF] capitalize md:text-[16px]'
                 onClick={loadBlockPassWidget}
                 >{t('verifyIdentity')}</Button>
                 }
            </form>
            )}
        </Formik>
<Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        <div className='flex cursor-pointer text-[#FFF] mt-4 justify-between font-biomeW04Regular text-[14px] underline'>
          <span onClick={() => setBuyBlowModal(true)}>{t('howToBuy')}</span>
          <span>{t('refferalLink')}</span>
        </div>
      </div>
    }
    />

    <UtilModal
    title={`${t('howToBuyBlowToken')}`}
    subtitle={`${t('connectWithUs')}`}
    open={buyBlowModal}
    onClose={() => setBuyBlowModal(false)}
    content={
      <div>
        {
          buyBlowDetails.map((item, i: number) => (
            <Accordion key={i}  elevation={0} className='rounded-none bg-[#2C2C2B] mt-4'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='font-sora block capitalize font-bold  rounded-none text-white'>{ item.header }</Typography>
              </AccordionSummary>
              <AccordionDetails className='bg-white'>
               <Typography>
               <div className=' font-sora text-black font-bold mb-4 text-[20px]'>{item.title}</div>
                {
                  item.content.map((text: any , i: number) => (
                    <div key={i} className=' text-black text-[14px] relative mb-4 bg-white font-sora'>
                      <div>{text}</div>
                    </div>
                  ))
                }
                <div className='font-sora font-bold text-[14px]'>
                        <a href={item.readMore} target='_blank'>{t('readMore')}</a>
                      </div>
               </Typography> 
              </AccordionDetails>
        </Accordion>
        ))}
        <div className="text-white font-sora text-center text-[20px] font-bold mt-10">
          <a href="https://medium.com/@BlowX_Official/from-novice-to-crypto-pro-a-guide-on-how-to-buy-blow-tokens-d389ea1d6bec" target='_blank'>Read More...</a>
        </div>
      </div>
    }
    />
   </>
  )
}

export default Home
