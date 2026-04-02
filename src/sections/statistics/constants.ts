import type { ChainId } from "#config/chains";

/**
 * Per-platform follower counts, summed into a single display value.
 *
 * These are static because social platforms (X, TikTok) don't offer public
 * follower-count APIs without authentication or expensive paid plans. Update
 * the values below whenever you check in on the numbers.
 *
 * If a daily scrape API is set up in the future, replace this with a fetch
 * to that endpoint and remove the static values.
 */
export const SOCIAL_FOLLOWERS = { x: 6_920, tiktok: 12_500 };
export const FOLLOWERS = Object.values(SOCIAL_FOLLOWERS).reduce(
  (a, b) => a + b,
  0,
);

/**
 * On-chain holder counts per chain, keyed by chain ID.
 *
 * These are static because free-tier block explorer APIs (Etherscan, Abscan)
 * gate holder-count endpoints behind paid Pro plans, and no reliable free
 * alternative exists for Abstract or Solana at the time of writing.
 *
 * Update the values below periodically, or replace with a fetch to a scrape
 * endpoint if one is set up.
 */
export const CHAIN_HOLDERS: Record<ChainId, number> = {
  abstract: 16_455,
  solana: 75,
};
