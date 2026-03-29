"use client";

import clsx from "clsx";
import type { SVGAttributes } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { archPath, wavePath } from "#lib/wavegen";
import styles from "./Wave.module.scss";

export interface WaveProps extends SVGAttributes<SVGElement> {
  /** Wave shape — `"arch"` for a hollow arch, `"wave"` for a multi-peak curve. */
  variant?: "arch" | "wave";
  /** Seed — the same seed always produces the same path. */
  seed: number;
  /** Number of peaks. Required when `variant` is `"wave"`. */
  peaks?: number;
  /** Fill colour — typically the background of the adjacent section. */
  fill: string;
  /** `"top"` flips the wave upward via `scaleY(-1)`. */
  position: "top" | "bottom";
}

/**
 * Inline SVG wave used to create seamless colour transitions between sections.
 * Pair with `<Section>` via its `topWave` / `bottomWave` props, or render standalone.
 *
 * @example
 * <Wave variant="wave" seed={42} points={2} fill="#fff" position="bottom" />
 */
export function Wave({
  variant = "wave",
  seed,
  peaks,
  fill,
  position,
  className,
  ...rest
}: WaveProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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
      className={clsx(
        styles.wave,
        position === "top" && styles["wave--top"],
        className,
      )}
    >
      {ready && (
        <path
          d={
            variant === "arch"
              ? archPath(seed, width, height)
              : wavePath(seed, peaks ?? 2, width, height)
          }
          fill={fill}
        />
      )}
    </svg>
  );
}
