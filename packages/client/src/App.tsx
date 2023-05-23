import "./index.css";
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { optimism, optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Layout } from "./components";

export const App = () => {
  const { chains, publicClient } = configureChains(
    [optimism, optimismGoerli],
    [
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Revolte.app',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })


  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: 'grey',
          accentColorForeground: 'black',
        })}
        chains={chains}>
        <main>
          <Layout />
        </main>
      </RainbowKitProvider>
    </WagmiConfig >
  );
};
