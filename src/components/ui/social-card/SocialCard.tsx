import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import type { AnchorHTMLAttributes } from "react";
import { siTiktok, siX } from "simple-icons";
import styles from "./SocialCard.module.scss";

const PLATFORM_ICONS = {
  tiktok: siTiktok,
  x: siX,
} as const;

export interface SocialCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Post thumbnail image. */
  src: StaticImageData;
  /** Alt text describing the post content. */
  alt: string;
  /** Platform the post belongs to — drives the badge icon. */
  platform: "tiktok" | "x";
  /** URL of the original post — opens in a new tab. */
  href: string;
}

/**
 * Linked social media post thumbnail with a platform badge in the bottom-left corner.
 * The whole card is an anchor that opens the post in a new tab.
 *
 * @example
 * <SocialCard
 *   src={post1Img}
 *   alt="Polly dancing"
 *   platform="tiktok"
 *   href="https://www.tiktok.com/@pollypenguins/video/123"
 * />
 */
export function SocialCard({
  src,
  alt,
  platform,
  href,
  className,
  ...rest
}: SocialCardProps) {
  const icon = PLATFORM_ICONS[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt} on ${icon.title}`}
      className={clsx(styles["social-card"], className)}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        className={styles["social-card__image"]}
        sizes="(max-width: 767px) 50vw, 33vw"
        fill
      />
      <span className={styles["social-card__badge"]} aria-hidden>
        <svg
          className={styles["social-card__badge-icon"]}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
        >
          <path d={icon.path} />
        </svg>
      </span>
    </a>
  );
}
