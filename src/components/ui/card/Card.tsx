import clsx from "clsx";
import Image from "next/image";
import type { HTMLAttributes, ReactNode } from "react";
import bowtieImg from "#assets/images/bowtie.png";
import { fontHandwritten } from "#lib/fonts";
import styles from "./Card.module.scss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card heading rendered above children in Chiron Go Round TC (same font as hero buttons).
   *
   * @example
   * <Card title="About Polly">...</Card>
   */
  title?: string;
  /**
   * Positions the decorative bowtie at the given corner.
   * The bowtie is flipped to face the proportional corner.
   *
   * @example
   * <Card bowtiePosition="top-right">...</Card>
   */
  bowtiePosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /**
   * Colour theme for the title stroke and fill.
   * - `"primary"` — blue fill, blue stroke.
   * - `"secondary"` — pink fill, pink stroke.
   * Defaults to `"primary"`.
   */
  variant?: "primary" | "secondary";
  children?: ReactNode;
}

/**
 * Glassmorphism card with an optional title and corner bowtie decoration.
 * Renders its children in a horizontal flex row.
 *
 * @example
 * <Card title="About Polly" bowtiePosition="top-right">
 *   <p>Polly is a heartwarming character…</p>
 * </Card>
 */
export function Card({
  title,
  bowtiePosition,
  variant = "primary",
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        variant === "secondary" && styles["card--secondary"],
        className,
      )}
      {...rest}
    >
      {bowtiePosition && (
        <Image
          src={bowtieImg}
          alt=""
          aria-hidden
          className={clsx(
            styles["card__bowtie"],
            styles[`card__bowtie--${bowtiePosition}`],
          )}
        />
      )}
      <div className={styles["card__inner"]}>
        {title && (
          <p
            className={clsx(
              styles["card__title"],
              styles[`card__title--${variant}`],
              fontHandwritten.className,
            )}
          >
            {title}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
