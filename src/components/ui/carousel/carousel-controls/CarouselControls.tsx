"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { IconButton } from "#ui/icon-button";
import styles from "./CarouselControls.module.scss";

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
  /** Rendered between the two arrows — typically a `CarouselProgress`. */
  children?: ReactNode;
}

/**
 * Prev/next arrow row for a carousel. Renders children between the two arrows.
 *
 * @example
 * <CarouselControls onPrev={prev} onNext={next} prevDisabled={i === 0} nextDisabled={i === last}>
 *   <CarouselProgress count={n} index={i} onChange={setIndex} />
 * </CarouselControls>
 */
export function CarouselControls({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  children,
}: CarouselControlsProps) {
  return (
    <div className={styles["carousel-controls"]}>
      <IconButton
        variant="action"
        theme="primary"
        label="Previous slide"
        onClick={onPrev}
        disabled={prevDisabled}
      >
        <ChevronLeft aria-hidden />
      </IconButton>

      {children}

      <IconButton
        variant="action"
        theme="primary"
        label="Next slide"
        onClick={onNext}
        disabled={nextDisabled}
      >
        <ChevronRight aria-hidden />
      </IconButton>
    </div>
  );
}
