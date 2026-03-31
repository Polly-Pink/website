"use client";

import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { fontDisplay } from "#lib/fonts";
import styles from "./SegmentedControl.module.scss";

export interface SegmentedOption {
  /** Unique key used as the value and React key. */
  key: string;
  /** Label rendered inside the option button. */
  label: string;
  /** Shortened label shown on small screens. Falls back to `label` if omitted. */
  shortLabel?: string;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
}

export interface SegmentedControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** The available options. */
  options: SegmentedOption[];
  /** Key of the currently selected option. */
  value: string;
  /** Called with the key of the newly selected option. */
  onChange: (key: string) => void;
}

/**
 * Horizontal group of mutually exclusive option buttons.
 * Exactly one option is active at a time.
 *
 * @example
 * <SegmentedControl
 *   options={[
 *     { key: "abstract", label: "Abstract", icon: <img src={abstractLogo} /> },
 *     { key: "solana",   label: "Solana",   icon: <img src={solanaLogo} /> },
 *   ]}
 *   value={chain}
 *   onChange={setChain}
 * />
 */
export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  ...rest
}: SegmentedControlProps) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: fieldset default styles require full reset; role="group" is equivalent
    <div
      role="group"
      className={clsx(styles["segmented-control"], className)}
      {...rest}
    >
      {options.map((option) => {
        const active = option.key === value;
        return (
          <button
            key={option.key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.key)}
            className={clsx(
              styles["segmented-control__option"],
              fontDisplay.className,
              active && styles["segmented-control__option--active"],
            )}
          >
            {option.icon && (
              <span className={styles["segmented-control__icon"]}>
                {option.icon}
              </span>
            )}
            {option.shortLabel && (
              <span className={styles["segmented-control__label--xs"]}>
                {option.shortLabel}
              </span>
            )}
            <span
              className={clsx(
                option.shortLabel && styles["segmented-control__label--full"],
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
