import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Now We Are Six</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Now We Are Six is a collection of 35 children's poems and this book entered the US Public Domain in 2023. One of the first 'book and NFT Companion' collections on the blockchain, Now We Were Six honors the birthday of its author A.A. Milne. January 18th is also referred to as Winnie-the-Pooh Day!"
        />
        <meta
          name="keywords"
          content="Now We Are Six is a collection of 35 children's poems and this book entered the US Public Domain in 2023. One of the first 'book and NFT Companion' collections on the blockchain, Now We Were Six honors the birthday of its author A.A. Milne. January 18th is also referred to as Winnie-the-Pooh Day!"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
