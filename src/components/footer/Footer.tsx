import Image from "next/image";
import pollyFactImg from "#assets/images/polly_fact.png";
import styles from "./Footer.module.scss";

/**
 * Site footer with legal disclaimer, copyright, and decorative Polly illustration.
 *
 * @example
 * <Footer />
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles["footer__content"]}>
        <p className={styles["footer__disclaimer"]}>
          Polly is a character and intellectual property of Pudgy Penguins. This
          project is an independent community tribute and is not affiliated with
          or endorsed by Pudgy Penguins.
        </p>
        <p className={styles["footer__disclaimer"]}>
          All original content, including this website, dApps, software, and
          related materials, is © 2025—{year} Polly Abstract. All rights
          reserved.
        </p>
      </div>
      <Image
        src={pollyFactImg}
        alt=""
        aria-hidden
        className={styles["footer__polly"]}
      />
    </footer>
  );
}
