"use client";

import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";
import { CarouselControls } from "./carousel-controls";
import { CarouselProgress } from "./carousel-progress";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Slides to display one at a time. */
  slides: ReactNode[];
  /** Called whenever the active slide index changes. */
  onIndexChange?: (index: number) => void;
}

/**
 * Single-slide carousel with prev/next arrows and dot indicators.
 * Fades between slides on navigation.
 *
 * @example
 * <Carousel slides={steps.map(step => <p>{step}</p>)} onIndexChange={setStep} />
 */
export function Carousel({
  slides,
  onIndexChange,
  className,
  ...rest
}: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handleChange = (next: number) => {
    setIndex(next);
    onIndexChange?.(next);
  };

  return (
    <div className={clsx(styles.carousel, className)} {...rest}>
      <div className={styles["carousel__slide"]} key={index}>
        {slides[index]}
      </div>

      <CarouselControls
        onPrev={() => handleChange(index - 1)}
        onNext={() => handleChange(index + 1)}
        prevDisabled={index === 0}
        nextDisabled={index === slides.length - 1}
      >
        <CarouselProgress
          count={slides.length}
          index={index}
          onChange={handleChange}
        />
      </CarouselControls>
    </div>
  );
}
