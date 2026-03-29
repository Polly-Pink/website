import Image from "next/image";
import pollyImg from "#assets/images/polly.png";
import styles from "./HeroIllustration.module.scss";

/**
 * Polly mascot illustration displayed in the hero section.
 *
 * @example
 * <HeroIllustration />
 */
export function HeroIllustration() {
  return (
    <div className={styles.illustration}>
      <Image
        src={pollyImg}
        alt="Polly the community memecoin mascot"
        className={styles["illustration__img"]}
        priority
      />
    </div>
  );
}
