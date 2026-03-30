import Image from "next/image";
import type { HTMLAttributes } from "react";
import coinImg from "#assets/images/coin.png";
import { SOCIALS } from "#config/socials";
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
            src={coinImg}
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
          {SOCIALS.map((social) => (
            <IconButton
              key={social.id}
              variant="link"
              href={social.href}
              label={social.label}
            >
              <BrandIcon icon={social.icon} />
            </IconButton>
          ))}
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
