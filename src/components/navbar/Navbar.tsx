import Image from "next/image";
import type { HTMLAttributes } from "react";
import { siInstagram, siTelegram, siX } from "simple-icons";
import { fontDisplay } from "#lib/fonts";
import { IconButton } from "#ui";
import styles from "./Navbar.module.scss";

/**
 * Top-level navigation bar for the Polly landing page.
 *
 * Renders the Polly logo + wordmark on the left and a row of social
 * {@link IconButton} links on the right. Positioned absolutely so it
 * overlays the hero without pushing content down.
 *
 * All extra props are spread onto the underlying `<nav>` element.
 *
 * @example
 * // In the root layout, outside of <main>
 * <Navbar />
 */
export function Navbar({ ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <div className={styles["navbar-outer"]}>
      <nav {...rest} className={styles.navbar}>
        <div className={styles["navbar__logo"]}>
          <Image
            src="/images/coin.png"
            alt="Polly"
            width={56}
            height={56}
            className={styles["navbar__logo-img"]}
            priority
          />
          <span
            className={`${styles["navbar__logo-text"]} ${fontDisplay.className}`}
          >
            Polly
          </span>
        </div>

        <div className={styles["navbar__socials"]}>
          <IconButton
            variant="link"
            href="https://t.me/pollypink"
            label="Telegram"
          >
            <BrandIcon icon={siTelegram} />
          </IconButton>
          <IconButton
            variant="link"
            href="https://x.com/pollypink"
            label="X (Twitter)"
          >
            <BrandIcon icon={siX} />
          </IconButton>
          <IconButton
            variant="link"
            href="https://instagram.com/pollypink"
            label="Instagram"
          >
            <BrandIcon icon={siInstagram} />
          </IconButton>
        </div>
      </nav>
    </div>
  );
}

function BrandIcon({ icon }: { icon: { path: string; title: string } }) {
  return (
    <svg viewBox="0 0 24 24" fill="#54113e" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
