import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { fontGoRound } from "#lib/fonts";
import styles from "./Button.module.scss";

interface BaseProps {
  /**
   * Visual style.
   * - `"primary"` — pink fill, hard shadow; main CTA (Trade).
   * - `"secondary"` — dark-blue fill, yellow text; secondary CTA (Chart).
   */
  theme: "primary" | "secondary";
  children: ReactNode;
}

/** Props for a link variant — renders an `<a>` that opens in a new tab. */
export interface ButtonLinkProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  variant: "link";
}

/** Props for an action variant — renders a `<button>` for in-page interactions. */
export interface ButtonActionProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant: "action";
}

export type ButtonProps = ButtonLinkProps | ButtonActionProps;

/**
 * CTA button, discriminated by `variant`:
 * - `"link"` — renders an `<a>` that opens in a new tab.
 *   Pass `href` and any other anchor attributes.
 * - `"action"` — renders a `<button>` for in-page interactions.
 *   Pass `onClick` and any other button attributes.
 *
 * Use `theme` to control the visual style.
 *
 * @example
 * <Button variant="link" theme="primary" href="https://dex.example.com" target="_blank">
 *   Trade
 * </Button>
 *
 */
export function Button(props: ButtonProps) {
  if (props.variant === "link") {
    const { variant, theme, className, children, ...rest } =
      props as ButtonLinkProps;
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        className={clsx(
          styles.button,
          styles[`button--${theme}`],
          fontGoRound.className,
          className,
        )}
      >
        {children}
      </a>
    );
  }

  const { variant, theme, className, children, ...rest } =
    props as ButtonActionProps;
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        styles.button,
        styles[`button--${theme}`],
        fontGoRound.className,
        className,
      )}
    >
      {children}
    </button>
  );
}
