import type { ReactNode } from "react";
import { HorizontalImageCarousel } from "./HorizontalImageCarousel";
import styles from "./ImageCarousel.module.scss";
import { VerticalImageCarousel } from "./VerticalImageCarousel";

export interface ImageCarouselProps {
  children: ReactNode;
}

/**
 * Responsive image carousel. Renders a vertical grid on mobile and a
 * horizontal scroll strip on md+. Both variants share the same children.
 *
 * @example
 * <ImageCarousel>
 *   <SocialCard ... />
 *   <SocialCard ... />
 * </ImageCarousel>
 */
export function ImageCarousel({ children }: ImageCarouselProps) {
  return (
    <>
      <div className={styles["image-carousel__mobile"]}>
        <VerticalImageCarousel>{children}</VerticalImageCarousel>
      </div>
      <div className={styles["image-carousel__desktop"]}>
        <HorizontalImageCarousel>{children}</HorizontalImageCarousel>
      </div>
    </>
  );
}
