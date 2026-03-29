"use client";

import clsx from "clsx";
import type { SVGAttributes } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import type { WaveGenOptions } from "#lib/wavegen";
import { archPath, wavePath } from "#lib/wavegen";
import styles from "./Wave.module.scss";

export interface WaveProps extends SVGAttributes<SVGElement> {
  /**
   * Wave shape.
   * - `"arch"` — single smooth bump.
   * - `"wave"` — multi-peak sine-like curve (see `options.points`).
   */
  variant: "arch" | "wave";
  /** Generator options — seed, peak count, amplitude. */
  options: WaveGenOptions;
  /** Fill colour — typically the background of the adjacent section. */
  fill: string;
  /**
   * Edge of the containing section this wave sits on.
   * - `"bottom"` — right-side up, fills the lower portion of the SVG.
   * - `"top"` — flipped via `scaleY(-1)` to fill the upper portion.
   */
  position: "top" | "bottom";
}

/**
 * Inline SVG wave used to create seamless colour transitions between sections.
 * Pair with `<Section>` via its `topWave` / `bottomWave` props, or render standalone.
 *
 * @example
 * <Wave variant="wave" options={{ seed: 42, points: 2, maxHeight: 35 }} fill="#fff" position="bottom" />
 */
export function Wave({
  variant,
  options,
  fill,
  position,
  className,
  ...rest
}: WaveProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // useLayoutEffect so the initial measurement happens before the browser paints,
  // avoiding a flash of the empty SVG. ResizeObserver keeps it in sync on drag/resize.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = (rect: DOMRectReadOnly) =>
      setSize({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    measure(el.getBoundingClientRect());
    const ro = new ResizeObserver(([entry]) => measure(entry.contentRect));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { width, height } = size;
  const ready = width > 0 && height > 0;

  return (
    <svg
      ref={ref}
      viewBox={ready ? `0 0 ${width} ${height}` : undefined}
      preserveAspectRatio="none"
      aria-hidden="true"
      {...rest}
      className={clsx(styles.wave, styles[`wave--${position}`], className)}
    >
      {ready && (
        <path
          d={
            variant === "arch"
              ? archPath(options, width, height)
              : wavePath(options, width, height)
          }
          fill={fill}
        />
      )}
    </svg>
  );
}
