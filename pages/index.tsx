import type { NextPage } from 'next'
import OnBoard from '../components/OnBoard'
import About from '../components/About'
import Partners from '../components/Partners'
import Tokenomics from '../components/Tokenomics'

const Home: NextPage = () => {
  return (
   <>
    <OnBoard />
    <About />
    <div className="bg-[url('../assets/partnerbg.png')] bg-no-repeat bg-cover relative">
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] top-0 left-0"></div>
      <div className="absolute z-0 blur-[250.11935424804688px] bg-[rgba(216,156,55,0.28)] md:h-[524px] md:w-[524px] md:rounded-[524px] bottom-0 right-0"></div>
    <Partners />
    <Tokenomics />
    </div>
   </>
  )
}

export default Home
