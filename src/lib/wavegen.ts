/** Park-Miller (Lehmer) PRNG — modulus is the Mersenne prime 2³¹ − 1. */
const PRNG_MODULUS = 2 ** 31 - 1;
const PRNG_MULTIPLIER = 16807; // 7^5

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
  let d = `M ${fmt(knots[0][0])},${fmt(knots[0][1])}`;
  const last = knots.length - 1;
  for (let i = 0; i < last; i++) {
    const p0 = knots[i > 0 ? i - 1 : 0];
    const p1 = knots[i];
    const p2 = knots[i + 1];
    const p3 = knots[i + 2 <= last ? i + 2 : last];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${fmt(cp1x)},${fmt(cp1y)} ${fmt(cp2x)},${fmt(cp2y)} ${fmt(p2[0])},${fmt(p2[1])}`;
  }
  return d;
}

/**
 * Generates a hollow arch SVG path `d` attribute.
 * Both sides start at `height` (full depth) and the bezier's control points
 * are pulled above `y = 0` so the curve crosses zero near the centre — the
 * SVG viewport clips the above-zero portion, producing zero fill at the centre
 * and full fill at both sides (a hollow/concave arch, not a belly).
 * Seed varies horizontal steepness.
 */
export function archPath(seed: number, width: number, height: number): string {
  const r = seededRng(seed);
  // cpY = −height/3 guarantees the bezier crosses y = 0 at t = 0.5 (centre).
  const cpY = -(height / 3);
  const cx1 = width * (0.1 + r() * 0.15);
  const cx2 = width * (0.75 + r() * 0.15);
  return [
    `M 0,${fmt(height)}`,
    `C ${fmt(cx1)},${fmt(cpY)} ${fmt(cx2)},${fmt(cpY)} ${fmt(width)},${fmt(height)}`,
    `L ${fmt(width)},0`,
    `L 0,0`,
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
  seed: number,
  points: number,
  width: number,
  height: number,
): string {
  const r = seededRng(seed);
  const segW = width / (points + 1);

  const knots: [number, number][] = [[0, 0]];
  for (let i = 0; i < points; i++) {
    const x = (i + 1) * segW + (r() - 0.5) * segW * 0.5;
    const y = height * (0.25 + r() * 0.65);
    knots.push([x, y]);
  }
  knots.push([width, 0]);

  return `${catmullRomPath(knots)} Z`;
}
