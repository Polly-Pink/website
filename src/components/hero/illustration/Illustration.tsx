import Image from "next/image";
import pollyImg from "../../../assets/images/polly.png";
import styles from "./Illustration.module.scss";

/**
 * Polly mascot illustration displayed in the hero section.
 *
 * @example
 * <Illustration />
 */
export function Illustration() {
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
