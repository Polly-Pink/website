export interface TokenomicStat {
  /** Unique identifier used as a React key. */
  id: string;
  /** Short label describing the stat (e.g. "Ticker"). */
  label: string;
  /** Display value (e.g. "$POLLY"). */
  value: string;
}

export const TOKENOMICS: TokenomicStat[] = [
  { id: "ticker", label: "Ticker", value: "$POLLY" },
  { id: "network", label: "Network", value: "Abstract / Solana" },
  { id: "supply", label: "Supply", value: "1,000,000,000" },
  { id: "ownership", label: "Ownership", value: "Renounced" },
  { id: "liquidity", label: "Liquidity", value: "Locked" },
  { id: "taxes", label: "Taxes", value: "None" },
];
