import type { ReactNode } from "react";
import styles from "./CarouselStep.module.scss";

export interface CarouselStepProps {
  /** Main slide content. */
  children: ReactNode;
  /**
   * Optional action rendered below the content — typically a `<Button>`.
   * Use this for CTAs like "Copy address" or "Open DEX".
   *
   * @example
   * <CarouselStep action={<Button variant="link" theme="primary" href="…">Trade</Button>}>
   *   Step content here.
   * </CarouselStep>
   */
  action?: ReactNode;
}

/**
 * Structured slide for use inside a `Carousel`.
 * Stacks content above an optional action button.
 *
 * @example
 * <Carousel
 *   slides={[
 *     <CarouselStep action={<Button …>Go</Button>}>Step 1 instructions.</CarouselStep>,
 *     <CarouselStep>Step 2 instructions.</CarouselStep>,
 *   ]}
 * />
 */
export function CarouselStep({ children, action }: CarouselStepProps) {
  return (
    <div className={styles["carousel-step"]}>
      <div className={styles["carousel-step__content"]}>{children}</div>
      {action && (
        <div className={styles["carousel-step__action"]}>{action}</div>
      )}
    </div>
  );
}
