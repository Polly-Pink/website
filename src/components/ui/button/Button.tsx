import clsx from "clsx";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { fontBody } from "#lib/fonts";
import styles from "./Button.module.scss";

interface BaseProps {
  /**
   * Visual style.
   * - `"primary"` — pink fill, hard shadow; main CTA (Trade).
   * - `"secondary"` — dark-blue fill, yellow text; secondary CTA (Chart).
   * - `"outline"` — transparent background, pink border; low-emphasis action.
   */
  theme: "primary" | "secondary" | "outline";
  /**
   * Size variant. Defaults to full size.
   * - `"sm"` — smaller padding, font, and border radius.
   *
   * @example
   * <Button variant="link" theme="outline" size="sm" href="…">Open DEX</Button>
   */
  size?: "sm";
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
    const {
      variant,
      theme,
      size,
      className,
      children,
      href,
      "aria-disabled": ariaDisabled,
      ...rest
    } = props as ButtonLinkProps & {
      "aria-disabled"?: boolean | "true" | "false";
    };
    const isDisabled = ariaDisabled === true || ariaDisabled === "true";
    return (
      <a
        href={isDisabled ? undefined : href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        aria-disabled={isDisabled || undefined}
        className={clsx(
          styles.button,
          styles[`button--${theme}`],
          size && styles[`button--${size}`],
          fontBody.className,
          className,
        )}
      >
        {children}
      </a>
    );
  }

  const { variant, theme, size, className, children, ...rest } =
    props as ButtonActionProps;
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        styles.button,
        styles[`button--${theme}`],
        size && styles[`button--${size}`],
        fontBody.className,
        className,
      )}
    >
      {children}
    </button>
  );
}
