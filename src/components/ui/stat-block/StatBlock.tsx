"use client";

import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fontDisplay } from "#lib/fonts";
import styles from "./StatBlock.module.scss";

export interface StatBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Short descriptor shown above the value (e.g. "Ticker"). */
  label: string;
  /** The value to display. Shown as-is when countUpEnd is not set; used as the SSR/loading fallback otherwise. */
  value: string;
  /** When provided, animates from 0 to this number on scroll into view. */
  countUpEnd?: number;
  /** Prefix prepended to the animated value (e.g. "$"). */
  countUpPrefix?: string;
  /** Suffix appended to the animated value. */
  countUpSuffix?: string;
  /** Decimal places for the animated value. Defaults to 0. */
  countUpDecimals?: number;
}

/**
 * Labelled stat block — a small card with a muted label and a bold value.
 * Optionally animates the value counting up when scrolled into view.
 * Used in Tokenomics and Statistics sections.
 *
 * @example
 * <StatBlock label="Ticker" value="$POLLY" />
 * @example
 * <StatBlock label="Holders" value="15,402" countUpEnd={15402} />
 */
export function StatBlock({
  label,
  value,
  countUpEnd,
  countUpPrefix,
  countUpSuffix,
  countUpDecimals,
  className,
  ...rest
}: StatBlockProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const valueContent =
    mounted && countUpEnd !== undefined ? (
      <CountUp
        end={countUpEnd}
        prefix={countUpPrefix}
        suffix={countUpSuffix}
        decimals={countUpDecimals ?? 0}
        separator=","
        enableScrollSpy
        scrollSpyOnce
      />
    ) : (
      value
    );

  return (
    <div className={clsx(styles["stat-block"], className)} {...rest}>
      <span
        className={clsx(styles["stat-block__label"], fontDisplay.className)}
      >
        {label}
      </span>
      <span className={styles["stat-block__value"]}>{valueContent}</span>
    </div>
  );
}
