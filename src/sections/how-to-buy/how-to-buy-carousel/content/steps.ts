import type { ChainId } from "#config/chains";

export const STEPS: Record<ChainId, string[]> = {
  abstract: [
    "Set up an Abstract-compatible wallet. Use the native Abstract Global Wallet at abs.xyz, or add the Abstract network to any EVM wallet like MetaMask or Rabby.",
    "Get ETH on Abstract. Bridge ETH from Ethereum mainnet using the Abstract bridge, or buy ETH directly via an on-ramp inside your wallet.",
    "Swap for $POLLY. Go to any DEX on Abstract (like Relay), paste the $POLLY contract address, and swap your ETH for $POLLY.",
    "You're in! Save your wallet address and transaction hash somewhere safe, and welcome to the community!",
  ],
  solana: [
    "Set up a Solana-compatible wallet. Any Solana wallet works, such as Phantom, Solflare, or Backpack. Available as a browser extension or mobile app.",
    "Get SOL. Buy SOL on a centralised exchange like Coinbase, Binance, or Kraken, then withdraw it to your wallet address.",
    "Swap for $POLLY. Go to any DEX on Solana (like Jupiter), paste the $POLLY contract address, and swap your SOL for $POLLY.",
    "You're in! Save your wallet address and transaction hash somewhere safe, and welcome to the community!",
  ],
};
