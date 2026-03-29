/** Park-Miller (Lehmer) PRNG — modulus is the Mersenne prime 2³¹ − 1. */
const PRNG_MODULUS = 2 ** 31 - 1;
const PRNG_MULTIPLIER = 16807; // 7^5

/** Generator options — seed and peak count. */
export interface WaveGenOptions {
  /** Seed — the same options always produce the same path. */
  seed: number;
  /**
   * Number of directional peaks. Each peak alternates direction
   * (crest → trough → crest → …). Ignored by `archPath`.
   */
  points: number;
}

/**
 * Returns a seeded PRNG that produces floats in [0, 1).
 * The same seed always yields the same sequence.
 */
export function seededRng(seed: number): () => number {
  let s = Math.abs(seed) % PRNG_MODULUS || 1;
  return () => {
    s = (s * PRNG_MULTIPLIER) % PRNG_MODULUS;
    return (s - 1) / (PRNG_MODULUS - 1);
  };
}

const fmt = (n: number) => n.toFixed(1);

/**
 * Converts [x, y] knots to a smooth cubic bezier path string via
 * Catmull-Rom → cubic bezier conversion. Endpoints are clamped so the
 * curve starts and ends exactly on the first and last knot.
 */
function catmullRomPath(knots: [number, number][]): string {
  const segments = knots.slice(0, -1).map((_, i) => {
    const p0 = knots[Math.max(0, i - 1)];
    const p1 = knots[i];
    const p2 = knots[i + 1];
    const p3 = knots[Math.min(knots.length - 1, i + 2)];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    return `C ${fmt(cp1x)},${fmt(cp1y)} ${fmt(cp2x)},${fmt(cp2y)} ${fmt(p2[0])},${fmt(p2[1])}`;
  });
  return [`M ${fmt(knots[0][0])},${fmt(knots[0][1])}`, ...segments].join(" ");
}

/**
 * Generates a single-arch SVG path `d` attribute.
 * Starts at y = 0 on both edges and dips outward toward `height` at the centre.
 * Place the SVG outside the section (top: 100% / bottom: 100%) so the arch
 * hangs into the adjacent section.
 */
export function archPath(
  { seed }: WaveGenOptions,
  width: number,
  height: number,
): string {
  const r = seededRng(seed);
  const dipY = height * (0.7 + r() * 0.2);
  const c1x = width * (0.22 + r() * 0.08);
  const c2x = width * (0.7 + r() * 0.08);
  return [
    `M 0,0`,
    `C ${fmt(c1x)},${fmt(dipY)} ${fmt(c2x)},${fmt(dipY)} ${width},0`,
    `Z`,
  ].join(" ");
}

/**
 * Generates a multi-peak wave SVG path `d` attribute using Catmull-Rom splines.
 * Starts and ends at y = 0; peaks dip outward toward `height`.
 * Even-indexed peaks dip deep, odd-indexed peaks dip shallow, producing a
 * natural alternating wave. Place the SVG outside the section so peaks hang
 * into the adjacent section.
 */
export function wavePath(
  { seed, points }: WaveGenOptions,
  width: number,
  height: number,
): string {
  const r = seededRng(seed);
  const segW = width / (points + 1);

  const knots: [number, number][] = [
    [0, 0],
    ...Array.from({ length: points }, (_, i): [number, number] => {
      const x = (i + 1) * segW + (r() - 0.5) * segW * 0.5;
      const y = height * (0.25 + r() * 0.65);
      return [x, y];
    }),
    [width, 0],
  ];

  return `${catmullRomPath(knots)} Z`;
}
