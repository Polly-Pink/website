import clsx from "clsx";
import { fontDisplay, fontHandwritten } from "#lib/fonts";
import styles from "./HeroHeading.module.scss";

/**
 * Hero display heading: "Hello, I'm / Polly / Community Memecoin".
 *
 * @example
 * <HeroHeading />
 */
export function HeroHeading() {
  return (
    <div className={styles.heading}>
      <p
        className={clsx(styles["heading__pretitle"], fontHandwritten.className)}
      >
        Hello, I&apos;m
      </p>
      <h1 className={clsx(styles["heading__title"], fontDisplay.className)}>
        Polly
      </h1>
      <p
        className={clsx(styles["heading__subtitle"], fontHandwritten.className)}
      >
        Community
        <br />
        Memecoin
      </p>
    </div>
  );
}
