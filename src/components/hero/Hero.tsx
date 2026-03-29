import styles from "./Hero.module.scss";
import { HeroButtons } from "./hero-buttons";
import { HeroHeading } from "./hero-heading";
import { HeroIllustration } from "./hero-illustration";

/**
 * Top-of-page hero section for the Polly landing page.
 * Composes {@link Heading}, {@link Buttons}, and the Polly illustration.
 * Mobile-first: stacks vertically on small screens, two-column on `lg+`.
 *
 * @example
 * <Hero />
 */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__inner"]}>
        <div className={styles["hero__content"]}>
          <HeroHeading />
          <HeroButtons />
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
