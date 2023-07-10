import type { NextPage } from 'next'
import OnBoard from '../components/OnBoard'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import RenderComponent from '../components/RenderComponent'
import Chess from '../assets/chess.png'
import Image from 'next/image'
import Timeline from '../assets/timeline.png'
import Launch from '../components/Launch'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ContainerLayout from '../Layout/ContainerLayout'
import Ecosystem from '../components/Ecosystem'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
   <>
   <NavBar />
    <OnBoard />
    <About />
    <div className="bg-[url('../assets/partnerbg.png')] bg-no-repeat bg-cover relative md:h-[250vh] md:flex flex-col justify-between">
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] top-0 left-0"></div>
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] bottom-0 right-0"></div>
    <RenderComponent title='Partners' />
    <Tokenomics />
    </div>
      <Launch />
      <Ecosystem />
      <ContainerLayout>

    <Image alt='time line' src={Timeline}/>
      </ContainerLayout>
    <RenderComponent title='Backed by' />
    <RenderComponent 
    title='The team'  
    subtitle='The Community constitutes the governing team of the project. No centralise authorities over the project. Built for the game-changers only!'
    >
      <Image alt='chess' src={Chess} />
    </RenderComponent>
    <FAQ />
    <Footer />
   </>
  )
}

export default Home
