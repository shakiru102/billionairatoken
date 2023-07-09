import type { NextPage } from 'next'
import OnBoard from '../components/OnBoard'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import RenderComponent from '../components/RenderComponent'
import Chess from '../assets/chess.png'
import Image from 'next/image'
import Timeline from '../assets/timeline.png'
import LaunchCard from '../components/utils/LaunchCard'
import Launch from '../components/Launch'
import ContainerLayout from '../Layout/ContainerLayout'

const Home: NextPage = () => {
  return (
   <>
    <OnBoard />
    <About />
    <div className="bg-[url('../assets/partnerbg.png')] bg-no-repeat bg-cover relative md:h-[225vh] md:flex flex-col justify-between">
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] top-0 left-0"></div>
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] bottom-0 right-0"></div>
    <RenderComponent title='Partners' />
    <Tokenomics />
    </div>
      <Launch />
      <ContainerLayout>

    <Image alt='time line' src={Timeline}/>
      </ContainerLayout>
    <RenderComponent title='Backed by' />
    <RenderComponent 
    title='The team'  
    subtitle='The Community constitutes the governing team of the project. No centralise authorities over the project. Built for the game-changers only!'
    children={<Image alt='chess' src={Chess} />}
    />

   </>
  )
}

export default Home
