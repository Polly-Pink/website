import type { ReactNode } from "react";
import { CHAINS, type ChainId } from "#config/chains";
import { Button } from "#ui/button";

// biome-ignore lint/style/noNonNullAssertion: chains are guaranteed by config
const abstractChain = CHAINS.find((c) => c.id === "abstract")!;
// biome-ignore lint/style/noNonNullAssertion: chains are guaranteed by config
const solanaChain = CHAINS.find((c) => c.id === "solana")!;

export const ACTIONS: Record<ChainId, Array<ReactNode>> = {
  abstract: [
    <Button
      key="add-abstract"
      variant="link"
      theme="secondary"
      size="sm"
      href="https://chainlist.org/chain/2741"
    >
      Add Abstract
    </Button>,
    <Button
      key="bridge-eth"
      variant="link"
      theme="secondary"
      size="sm"
      href="https://www.relay.link/bridge/abstract?fromChainId=1&toCurrency=0x0000000000000000000000000000000000000000&fromCurrency=0x0000000000000000000000000000000000000000"
    >
      Bridge ETH to Abstract
    </Button>,
    <Button
      key="swap-polly-abs"
      variant="link"
      theme="secondary"
      size="sm"
      href={abstractChain.tradeUrl}
    >
      Swap for $POLLY
    </Button>,
    undefined,
  ],
  solana: [
    undefined,
    undefined,
    <Button
      key="swap-polly-sol"
      variant="link"
      theme="secondary"
      size="sm"
      href={solanaChain.tradeUrl}
    >
      Swap for $POLLY
    </Button>,
    undefined,
  ],
};
