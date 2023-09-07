import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, bsc  } from 'wagmi/chains'

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
                <div className="bg-black min-h-screen cursor-fancy">
                    <Component {...pageProps} />
                  </div>
            </WagmiConfig>
        </StyledEngineProvider>
  
}

export default MyApp
