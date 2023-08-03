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
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ChessBoard } from '../models/ChessBoard'
import * as THREE from 'three'

const Home: NextPage = () => {

  const [presaleModal, setPresaleModal] = useState<boolean>(false)
  


  return (
   <>
   <NavBar openPresaleModal={() => setPresaleModal(prev => !prev)} />
    <OnBoard openPresaleModal={() => setPresaleModal(prev => !prev)}/>
    <About />
    {/* <div className="bg-[url('../assets/partnerbg.png')] bg-no-repeat bg-cover relative md:h-[250vh] md:flex flex-col justify-between">
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] top-0 left-0"></div>
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] bottom-0 right-0"></div>
    <RenderComponent title='Featured On' />
      <Tokenomics />
    </div> */}
    <RenderComponent title='Featured On' />
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
                label='TBT Token price'
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
                placeholder='gamersmerge@tbt.eth'
                 />
                  <TextInput 
                name='verifyEmail'
                label='Verify email'
                value={values.verifyEmail}
                handleChange={handleChange('verifyEmail')}
                inputAdorments={[
                  { text: 'Verify' }
                ]}
                placeholder='gamersmerge@tbt.eth'
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
