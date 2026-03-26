import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./IconButton.module.scss";

interface BaseProps {
  /** Accessible label applied as `aria-label` — required since the button has no visible text. */
  label: string;
  /** Icon to render inside the button. */
  children: ReactNode;
}

/** Props for a link variant — renders an `<a>` with `target="_blank"`. */
export interface LinkProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  variant: "link";
}

/** Props for an action variant — renders a `<button>` for in-page triggers. */
export interface ActionProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant: "action";
}

export type IconButtonProps = LinkProps | ActionProps;

/**
 * Icon-only button, discriminated by `variant`:
 * - `"link"` — renders an `<a>` that opens in a new tab (`target="_blank"`).
 *   Pass `href` and any other anchor attributes.
 * - `"action"` — renders a `<button>` for in-page interactions.
 *   Pass `onClick` and any other button attributes.
 *
 * The `label` prop is used as `aria-label` and is required for accessibility
 * since no visible text is rendered. All remaining props are forwarded to the
 * underlying element.
 *
 * @example
 * <IconButton variant="link" href="https://t.me/polly" label="Telegram">
 *   <TelegramIcon />
 * </IconButton>
 *
 * @example
 * <IconButton variant="action" onClick={handleCopy} label="Copy address">
 *   <CopyIcon />
 * </IconButton>
 */
export function IconButton(props: IconButtonProps) {
  if (props.variant === "link") {
    const { label, children, variant, ...rest } = props as LinkProps;
    return (
      // biome-ignore lint/a11y/useAriaPropsSupportedByRole: aria-label is valid on <a> — biome false positive
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        className={styles["icon-button"]}
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  const { label, children, variant, ...rest } = props as ActionProps;
  return (
    <button {...rest} className={styles["icon-button"]} aria-label={label}>
      {children}
    </button>
  );
}
