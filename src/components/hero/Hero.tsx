import { Buttons } from "./buttons";
import styles from "./Hero.module.scss";
import { Heading } from "./heading";
import { Illustration } from "./illustration";

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
          <Heading />
          <Buttons />
        </div>

        <Illustration />
      </div>
    </section>
  );
}
