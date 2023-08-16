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
import { Suspense, useState } from 'react'
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
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home: NextPage = () => {

  const [presaleModal, setPresaleModal] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const { problemDetails, activeId } = UseCustomHook(['section-1', 'section-2'], 300)
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
   <>
   <div className='relative'>
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
    <RenderComponent title='Featured On' />
      <div 
      className="w-[100%] hidden relative box-border pt-28 2xl:px-96  lg:flex scroll-smooth"
      >
        <div className="sidemenu hidden lg:flex flex-col justify-around  flex-1 h-screen sticky top-0 w-[50%]">
          <div className='flex flex-col justify-center items-center gap-4'>
          {
            ['section-1', 'section-2'].map((item, i: number) => (
              <UtilButton 
              href={`#${item}`}
              className={activeId === item ? 'bg-white text-[#2C2C2B] hover:bg-white' : 'text-white'}
              key={i}
              >{ i == 0 ? 'The Problem We Are Solving' : 'The Solution We Are Providing'}</UtilButton>
            ))
          }
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" w-[50%] inline-block mb-4 font-sora text-[20px] md:text-[32px] text-transparent bg-gradient-to-b from-[#FAFAFA] to-[#aaa5a503] bg-clip-text">
                What about Tokenized Real World Assets?
            </div>
            <div className='font-sora w-[50%] text-[20px] text-white'>
            With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance.
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div 
          className="flex flex-col justify-evenly 2xl:h-[80vh] 2xl:justify-center 2xl:gap-8 h-screen mb-28"
          id='section-1'
          >
            {
              problemDetails.problems.map((item , i: number) => (
                <div key={i} className='p-[28px] w-[75%] bg-white font-sora'>
                  <div className='font-bold mb-4 text-[20px]'>{item.title}</div>
                  <div>{item.text}</div>
                </div>
              ))
            }
          </div>
          <div
           className="flex flex-col justify-evenly h-screen 2xl:h-[80vh] 2xl:justify-start 2xl:gap-8"
          id='section-2'

           >
            <div>
              <div className="font-sora font-bold text-white text-[32px]">The Solution</div>
              <div className="font-sora text-white text-[24px]">Enter Ostium</div>
            </div>
            {
              problemDetails.solution.map((item , i: number) => (
                <div key={i} className='p-[28px] w-[75%] bg-white font-sora'>
                  <div className='font-bold mb-4 '>{item.title}</div>
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
                  <Typography className='font-sora block capitalize font-bold  rounded-none text-white'>{ i == 0 ? 'The Problem We Are Solving' : 'The Solution We Are Providing'}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {
                      // @ts-ignore
                 activeId === 'section-1' ? 
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
                      <div className="font-sora font-bold text-white text-[32px]">The Solution</div>
                      <div className="font-sora text-white text-[24px]">Enter Ostium</div>
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
                What about Tokenized Real World Assets?
            </div>
            <div className='font-sora  text-[16px] text-white'>
            With the continued failure of centralized exchanges, crypto is seeing a return to first principles: new and seasoned investors alike are embracing the trustless, non-custodial, decentralized nature of on-chain finance.
            </div>
          </div>{} 
      </div>
      <Tokenomics />
      <Launch />
      <Ecosystem />
      <RoadMap />
    <RenderComponent title='Backed by' />
    <RenderComponent 
    title='The team'  
    subtitle='The Community constitutes the governing team of the project. No centralise authorities over the project. Built for the game-changers only!'
    >
      <Image alt='chess' src={Chess} />
      {/* <Suspense fallback={<Image alt='chess' src={Chess} />}>
      <Canvas
      id='webgl'
      shadows
      camera={{
        position: [0,Math.PI / 2, 5,]
      }}
      >
        <ChessBoard scale={35}  />
            <ambientLight intensity={0.5} color={new THREE.Color('#FECF81')}/>
            <spotLight intensity={10} castShadow position={[-10,20,0]} angle={0.523} decay={2} penumbra={2} distance={0} 
            // color={new THREE.Color('#FECF81')}
             />
            {/* <directionalLight intensity={15} castShadow color={new THREE.Color('#FECF81')} position={[3,1, 0]} /> */}
        {/* <OrbitControls enableZoom={false}/> */}
      {/* </Canvas> */}
      {/* </Suspense> */} 
    </RenderComponent>
    <FAQ />
    <Footer />
    <CoinModal
    dialogTitle='Join Presale'
    dialogText='Kindly fill in the necessary information to participate in the presale'
    open={presaleModal}
    onClose={() => setPresaleModal(false)}
    dialogChildren={
      <Formik
        initialValues={{ 
          token: '',
          amount: '',
          walletAddress: '',
          registeredEmail: '',
          verifyEmail: ''
        }}
        onSubmit={() => {}}
        >
            {({ 
                values,
                handleChange,
                handleSubmit
             }) => (
            <form className="flex flex-col gap-6">
                <TextInput 
                name='token'
                label='Blowx Token price'
                value={values.token}
                handleChange={handleChange('token')}
                placeholder='0.08 per token'
                 />
                <TextInput 
                name='token'
                label='Amount'
                value={values.amount}
                handleChange={handleChange('amount')}
                inputAdorments={[
                  { text: '25%' },
                  { text: '50%' },
                  { text: '75%' },
                  { text: '100%' },
                ]}
                 />
                 <SelectInput 
                name='walletAddress'
                label='Select Your Wallet (ENS/ETH/BEP20/ARB)'
                value={values.walletAddress}
                handleChange={handleChange('walletAddress')}
                placeholder='Enter your wallet address'
                menuItems={[
                  { label: 'ENS',  value: 'ENS' }, 
                  { label: 'ETH Address',  value: 'ETH Address' }, 
                  { label: 'BSC Address',  value: 'BSC Address' }, 
                  { label: 'ARB Address',  value: 'ARB Address' }
                 ]}
                 />
                 <TextInput 
                name='registeredEmail'
                label='Enter registered email address'
                value={values.registeredEmail}
                handleChange={handleChange('registeredEmail')}
                inputAdorments={[
                  { text: 'Get Code' }
                ]}
                placeholder='gamersmerge@blowx.ai'
                 />
                  <TextInput 
                name='verifyEmail'
                label='Verify email'
                value={values.verifyEmail}
                handleChange={handleChange('verifyEmail')}
                inputAdorments={[
                  { text: 'Verify' }
                ]}
                placeholder='Enter 6 digit code'
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

export default Home
