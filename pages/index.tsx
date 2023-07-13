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
import { useState } from 'react'
import { Formik } from 'formik'
import TextInput from '../components/utils/TextInput'
import SolidButton from '../components/utils/SolidButton'
import RoadMap from '../components/RoadMap'

const Home: NextPage = () => {

  const [presaleModal, setPresaleModal] = useState<boolean>(false)


  return (
   <>
   <NavBar openPresaleModal={() => setPresaleModal(prev => !prev)} />
    <OnBoard openPresaleModal={() => setPresaleModal(prev => !prev)}/>
    <About />
    <div className="bg-[url('../assets/partnerbg.png')] bg-no-repeat bg-cover relative md:h-[250vh] md:flex flex-col justify-between">
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] top-0 left-0"></div>
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] bottom-0 right-0"></div>
    <RenderComponent title='Featured By' />
      <Tokenomics />
    </div>
      <Launch />
      <Ecosystem />
      <RoadMap />
    <RenderComponent title='Backed by' />
    <RenderComponent 
    title='The team'  
    subtitle='The Community constitutes the governing team of the project. No centralise authorities over the project. Built for the game-changers only!'
    >
      <Image alt='chess' src={Chess} />
    </RenderComponent>
    <FAQ />
    <Footer />
    <CoinModal
    dialogTitle='Join Presale'
    dialogText='Please enter the necessary information the input field below.'
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
                label='SPT Token price'
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
                 <TextInput 
                name='walletAddress'
                label='BEP20 or ERC20 wallet address'
                value={values.walletAddress}
                handleChange={handleChange('walletAddress')}
                placeholder='0x56378i6ygcbh64tgybf74tg7uf4'
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
