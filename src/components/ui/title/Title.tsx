import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { fontDisplay } from "#lib/fonts";
import styles from "./Title.module.scss";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level to render.
   * @example
   * <Title as="h1">Polly</Title>
   */
  as?: "h1" | "h2" | "h3" | "h4";
  /**
   * Colour theme for fill and stroke.
   * - `"primary"` — blue fill, blue stroke.
   * - `"secondary"` — pink fill, pink stroke.
   * - `"tertiary"` — white fill, dark stroke.
   * Defaults to `"primary"`.
   */
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

/**
 * Large outlined display heading using TT Trailers.
 *
 * @example
 * <Title as="h2" variant="secondary">Who is she?</Title>
 */
export function Title({
  as: Tag = "h2",
  variant = "primary",
  className,
  children,
  ...rest
}: TitleProps) {
  return (
    <Tag
      className={clsx(
        styles.title,
        styles[`title--${variant}`],
        fontDisplay.className,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
