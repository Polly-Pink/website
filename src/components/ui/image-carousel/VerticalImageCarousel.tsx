"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "#ui/icon-button";
import styles from "./VerticalImageCarousel.module.scss";

export interface VerticalImageCarouselProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Two-column image grid with up/down scroll controls.
 * Shows ~50% of content at a time; intended for mobile viewports.
 *
 * @example
 * <VerticalImageCarousel>
 *   <SocialCard ... />
 *   <SocialCard ... />
 * </VerticalImageCarousel>
 */
export function VerticalImageCarousel({
  children,
  className,
  ...rest
}: VerticalImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const sync = () => {
      setCanScrollPrev(el.scrollTop > 0);
      setCanScrollNext(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
    };
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    return () => el.removeEventListener("scroll", sync);
  }, []);

  return (
    <div
      className={clsx(styles["vertical-image-carousel"], className)}
      {...rest}
    >
      <IconButton
        variant="action"
        label="Scroll up"
        disabled={!canScrollPrev}
        onClick={() =>
          scrollRef.current?.scrollBy({
            top: -scrollRef.current.clientHeight,
            behavior: "smooth",
          })
        }
      >
        <ChevronUp aria-hidden />
      </IconButton>

      <div ref={scrollRef} className={styles["vertical-image-carousel__grid"]}>
        {children}
      </div>

      <IconButton
        variant="action"
        label="Scroll down"
        disabled={!canScrollNext}
        onClick={() =>
          scrollRef.current?.scrollBy({
            top: scrollRef.current.clientHeight,
            behavior: "smooth",
          })
        }
      >
        <ChevronDown aria-hidden />
      </IconButton>
    </div>
  );
}
