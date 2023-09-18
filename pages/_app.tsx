import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, bsc  } from 'wagmi/chains'
import Context from '../context/Context'
import Script from 'next/script'

const chains = [arbitrum, mainnet, polygon, bsc]
const projectId = 'f411cba3405901415bd5eddbedde4889'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})


function MyApp({ Component, pageProps }: AppProps) {
  return <StyledEngineProvider injectFirst>
            <WagmiConfig config={wagmiConfig}>
                <Context>
                  <div className="bg-black min-h-screen cursor-fancy">
                    <Script src='https://cdn.blockpass.org/widget/scripts/release/3.0.2/blockpass-kyc-connect.prod.js' />
                      <Component {...pageProps} />
                    </div>
                </Context>
            </WagmiConfig>
        </StyledEngineProvider>
  
}

export default MyApp
