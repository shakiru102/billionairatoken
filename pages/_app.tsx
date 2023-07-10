import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <StyledEngineProvider injectFirst>
              <div className="bg-black min-h-screen cursor-fancy">
                <Component {...pageProps} />
              </div>
        </StyledEngineProvider>
  
}

export default MyApp
