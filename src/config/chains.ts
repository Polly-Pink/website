import type { StaticImageData } from "next/image";
import abstractLogo from "#assets/images/logo_abstract.png";
import solanaLogo from "#assets/images/logo_solana.png";

export interface Chain {
  /** Unique identifier used as a React key. */
  id: string;
  /** Display name shown in the tab button. */
  label: string;
  /** Abbreviated label shown on xs screens (e.g. `"ABS"`). */
  shortLabel: string;
  /** Chain logo displayed in the tab (24 × 24). */
  logo: StaticImageData;
  /** Token contract / program address on this chain. */
  address: string;
  /** JSON-RPC endpoint. */
  rpcUrl: string;
  /** Primary DEX link for trading. */
  tradeUrl: string;
  /** Price chart / analytics page. */
  chartUrl: string;
}

const contractAddresses = {
  solana: "3JgHze5iM3ztccvgrnvVaCAjPVqWk4hMssyZXn2KJ5S2",
  abstract: "0x987CF44F3F5d854eC0703123d7fD003a8b56eBb4",
};

export const CHAINS: Chain[] = [
  {
    id: "abstract",
    label: "Abstract",
    shortLabel: "ABS",
    logo: abstractLogo,
    address: contractAddresses.abstract,
    rpcUrl: "https://api.mainnet.abs.xyz",
    tradeUrl: `https://www.relay.link/bridge/abstract?fromChainId=2741&toCurrency=${contractAddresses.abstract}&fromCurrency=0x0000000000000000000000000000000000000000`,
    chartUrl: `https://dexscreener.com/abstract/${contractAddresses.abstract}`,
  },
  {
    id: "solana",
    label: "Solana",
    shortLabel: "SOL",
    logo: solanaLogo,
    address: contractAddresses.solana,
    rpcUrl: "https://api.mainnet-beta.solana.com",
    tradeUrl: `https://jup.ag/?buy=${contractAddresses.solana}&sell=So11111111111111111111111111111111111111112`,
    chartUrl: `https://birdeye.so/solana/token/${contractAddresses.solana}`,
  },
];
