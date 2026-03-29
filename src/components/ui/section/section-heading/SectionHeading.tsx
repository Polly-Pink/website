import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { fontDisplay } from "#lib/fonts";
import styles from "./SectionHeading.module.scss";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  /** Section display title. */
  title: string;
  /** Optional subtitle below the title. */
  subtitle?: string;
  /** Colour theme — `primary` is blue, `secondary` is pink, `tertiary` is white on pink bg. Defaults to `primary`. */
  variant?: "primary" | "secondary" | "tertiary";
  /** Text alignment. Defaults to `start`. */
  align?: "start" | "center";
}

/**
 * Display heading for a page section — large outlined title with optional subtitle.
 *
 * @example
 * <SectionHeading title="Who is she?" subtitle="Follow these quick steps." variant="primary" />
 */
export function SectionHeading({
  title,
  subtitle,
  variant = "primary",
  align,
  className,
  ...rest
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        styles["section-heading"],
        styles[`section-heading--${variant}`],
        align === "center" && styles["section-heading--center"],
        className,
      )}
      {...rest}
    >
      <h2
        className={clsx(
          styles["section-heading__title"],
          fontDisplay.className,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={styles["section-heading__subtitle"]}>{subtitle}</p>
      )}
    </div>
  );
}
