import type { NextPage } from 'next'
import OnBoard from '../components/OnBoard'
import About from '../components/About'
import Partners from '../components/Partners'

const Home: NextPage = () => {
  return (
   <>
    <OnBoard />
    <About />
    <Partners />
   </>
  )
}

export default Home
