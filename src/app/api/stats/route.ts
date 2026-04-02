import { type NextRequest, NextResponse } from "next/server";
import { CHAINS } from "#config/chains";

const CACHE_HEADERS = {
  "Cache-Control": "s-maxage=300, stale-while-revalidate=60",
};
const EMPTY = {
  marketCap: null,
  price: null,
  volume24h: null,
  liquidity: null,
};

interface DexPair {
  chainId?: string;
  fdv?: number;
  marketCap?: number;
  priceUsd?: string;
  volume?: { h24?: number };
  liquidity?: { usd?: number };
}

function num(v: number | string | undefined): number | null {
  const n = typeof v === "string" ? parseFloat(v) : v;
  return Number.isFinite(n) ? (n as number) : null;
}

async function fetchPair(
  address: string,
  chainId: string,
): Promise<DexPair | null> {
  try {
    const res = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${address}`,
      { next: { revalidate: 300 } },
    );
    if (!res.ok) {
      console.error(`[stats] DexScreener HTTP ${res.status}`);
      return null;
    }
    const data = await res.json();
    const pairs: DexPair[] = data?.pairs ?? [];
    return pairs.find((p) => p.chainId === chainId) ?? pairs[0] ?? null;
  } catch (e) {
    console.error("[stats] DexScreener fetch failed:", e);
    return null;
  }
}

export async function GET(req: NextRequest) {
  const chain = req.nextUrl.searchParams.get("chain");
  const chainConfig = CHAINS.find((c) => c.id === chain);

  if (!chainConfig) {
    return NextResponse.json({ error: "Invalid chain" }, { status: 400 });
  }

  const pair = await fetchPair(chainConfig.address, chainConfig.id);

  if (!pair) {
    return NextResponse.json(EMPTY, { headers: CACHE_HEADERS });
  }

  return NextResponse.json(
    {
      marketCap: num(pair.fdv ?? pair.marketCap),
      price: num(pair.priceUsd),
      volume24h: num(pair.volume?.h24),
      liquidity: num(pair.liquidity?.usd),
    },
    { headers: CACHE_HEADERS },
  );
}
