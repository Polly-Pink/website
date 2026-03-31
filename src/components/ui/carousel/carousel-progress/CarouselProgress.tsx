"use client";

import clsx from "clsx";
import styles from "./CarouselProgress.module.scss";

export interface CarouselProgressProps {
  /** Total number of slides. */
  count: number;
  /** Currently active slide index. */
  index: number;
  /** Called with the new index when a dot is clicked. */
  onChange: (index: number) => void;
}

/**
 * Dot indicator row for a carousel. Each dot is a tab-role button.
 *
 * @example
 * <CarouselProgress count={4} index={current} onChange={setCurrent} />
 */
export function CarouselProgress({
  count,
  index,
  onChange,
}: CarouselProgressProps) {
  return (
    <div
      className={styles["carousel-progress"]}
      role="tablist"
      aria-label="Slides"
    >
      {Array.from({ length: count }, (_, i) => `dot-${i}`).map((key, i) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={`Slide ${i + 1}`}
          className={clsx(
            styles["carousel-progress__dot"],
            i === index && styles["carousel-progress__dot--active"],
          )}
          onClick={() => onChange(i)}
        />
      ))}
    </div>
  );
}
