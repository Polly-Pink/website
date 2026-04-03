"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "#ui/icon-button";
import styles from "./HorizontalImageCarousel.module.scss";

export interface HorizontalImageCarouselProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Horizontally scrollable image strip with left/right arrow controls.
 * Shows 3 items at a time with scroll-snap; intended for md+ viewports.
 *
 * @example
 * <HorizontalImageCarousel>
 *   <SocialCard ... />
 *   <SocialCard ... />
 * </HorizontalImageCarousel>
 */
export function HorizontalImageCarousel({
  children,
  className,
  ...rest
}: HorizontalImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const sync = () => {
      setCanScrollPrev(el.scrollLeft > 0);
      setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    return () => el.removeEventListener("scroll", sync);
  }, []);

  return (
    <div
      className={clsx(styles["horizontal-image-carousel"], className)}
      {...rest}
    >
      <IconButton
        variant="action"
        label="Previous"
        disabled={!canScrollPrev}
        onClick={() =>
          scrollRef.current?.scrollBy({
            left: -scrollRef.current.clientWidth,
            behavior: "smooth",
          })
        }
      >
        <ChevronLeft aria-hidden />
      </IconButton>

      <div
        ref={scrollRef}
        className={styles["horizontal-image-carousel__track"]}
      >
        {children}
      </div>

      <IconButton
        variant="action"
        label="Next"
        disabled={!canScrollNext}
        onClick={() =>
          scrollRef.current?.scrollBy({
            left: scrollRef.current.clientWidth,
            behavior: "smooth",
          })
        }
      >
        <ChevronRight aria-hidden />
      </IconButton>
    </div>
  );
}
