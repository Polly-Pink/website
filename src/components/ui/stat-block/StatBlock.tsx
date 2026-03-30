import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { fontDisplay } from "#lib/fonts";
import styles from "./StatBlock.module.scss";

export interface StatBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** Short descriptor shown above the value (e.g. "Ticker"). */
  label: string;
  /** The value to highlight (e.g. "$POLLY"). */
  value: string;
}

/**
 * Labelled stat block — a small card with a muted label and a bold value.
 * Used in Tokenomics and Statistics sections.
 *
 * @example
 * <StatBlock label="Ticker" value="$POLLY" />
 */
export function StatBlock({
  label,
  value,
  className,
  ...rest
}: StatBlockProps) {
  return (
    <div className={clsx(styles["stat-block"], className)} {...rest}>
      <span
        className={clsx(styles["stat-block__label"], fontDisplay.className)}
      >
        {label}
      </span>
      <span className={styles["stat-block__value"]}>{value}</span>
    </div>
  );
}
