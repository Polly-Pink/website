import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.scss";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

/**
 * Body paragraph with responsive sizing (16 → 28px) and muted colour.
 *
 * @example
 * <Text>Polly is a heartwarming character…</Text>
 */
export function Text({ className, children, ...rest }: TextProps) {
  return (
    <p className={clsx(styles.text, className)} {...rest}>
      {children}
    </p>
  );
}
