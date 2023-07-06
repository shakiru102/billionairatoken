import NavBar from '../components/NavBar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-black min-h-screen'>
          <NavBar />
          <Component {...pageProps} />
        </div>
}

export default MyApp
