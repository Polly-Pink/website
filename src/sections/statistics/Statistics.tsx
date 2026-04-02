"use client";

import { useEffect, useState } from "react";
import { CHAINS } from "#config/chains";
import { useChainStore } from "#lib/chain-store";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import { StatBlock } from "#ui/stat-block";
import { CHAIN_HOLDERS, FOLLOWERS } from "./constants";
import styles from "./Statistics.module.scss";

interface StatsData {
  marketCap: number | null;
  price: number | null;
  volume24h: number | null;
  liquidity: number | null;
}

/**
 * Statistics landing section — displays live market data per selected chain
 * plus static holder and follower counts.
 *
 * @example
 * <Statistics />
 */
export function Statistics() {
  const { chainId } = useChainStore();
  const [stats, setStats] = useState<StatsData>({
    marketCap: null,
    price: null,
    volume24h: null,
    liquidity: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/stats?chain=${chainId}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: StatsData) => {
        setStats(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("[Statistics] fetch failed:", e);
        setStats({
          marketCap: null,
          price: null,
          volume24h: null,
          liquidity: null,
        });
        setLoading(false);
      });
  }, [chainId]);

  const { marketCap, price, volume24h, liquidity } = stats;
  const holders = CHAIN_HOLDERS[chainId];
  const chainLabel = CHAINS.find((c) => c.id === chainId)?.label ?? chainId;

  const live = (v: number | null, fmt: (n: number) => string) =>
    !loading && v !== null ? fmt(v) : "—";

  const usd = (v: number) => `$${Math.round(v).toLocaleString("en-US")}`;

  return (
    <Section
      background="#F3FDFF"
      topWave={{ variant: "wave", seed: 91, peaks: 3 }}
      bottomWave={{ variant: "spacer" }}
    >
      <SectionHeading
        title="Statistics"
        subtitle={`Polly is growing fast, check the statistics for ${chainLabel} below to keep up!`}
        variant="primary"
      />
      <div className={styles["statistics__grid"]}>
        <StatBlock
          key={`${chainId}-holders`}
          label="Holders"
          value={holders.toLocaleString("en-US")}
          countUpEnd={holders}
        />
        <StatBlock
          key={`${chainId}-market-cap`}
          label="Market Cap"
          value={live(marketCap, usd)}
          countUpEnd={!loading && marketCap !== null ? marketCap : undefined}
          countUpPrefix="$"
        />
        <StatBlock
          label="Followers"
          value={FOLLOWERS.toLocaleString("en-US")}
          countUpEnd={FOLLOWERS}
        />
        <StatBlock
          key={`${chainId}-price`}
          label="Price"
          value={live(price, (v) => `$${v.toFixed(6)}`)}
          countUpEnd={!loading && price !== null ? price : undefined}
          countUpPrefix="$"
          countUpDecimals={6}
        />
        <StatBlock
          key={`${chainId}-volume`}
          label="24h Volume"
          value={live(volume24h, usd)}
          countUpEnd={!loading && volume24h !== null ? volume24h : undefined}
          countUpPrefix="$"
        />
        <StatBlock
          key={`${chainId}-liquidity`}
          label="Liquidity"
          value={live(liquidity, usd)}
          countUpEnd={!loading && liquidity !== null ? liquidity : undefined}
          countUpPrefix="$"
        />
      </div>
    </Section>
  );
}
