import clsx from "clsx";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { WaveProps } from "#ui/wave";
import { Wave } from "#ui/wave";
import styles from "./Section.module.scss";
import { SectionHeading } from "./section-heading";

type WaveSlot =
  | { variant: "spacer"; rendering?: "relative" | "absolute" }
  | { variant: "arch"; seed: number; rendering?: "relative" | "absolute" }
  | {
      variant?: "wave";
      seed: number;
      peaks: number;
      rendering?: "relative" | "absolute";
    };

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background colour of the section. */
  background?: string;
  /** Colour theme — `primary` is blue, `secondary` is pink, `tertiary` is white on pink bg. Defaults to `primary`. */
  variant?: "primary" | "secondary" | "tertiary";
  /** Heading alignment. Defaults to `start`. */
  align?: "start" | "center";
  /** Large display title rendered above children. */
  title?: string;
  /** Subtitle rendered below the title. */
  subtitle?: string;
  /** Wave at the top edge. Fill is derived from `background`. */
  topWave?: WaveSlot;
  /** Wave at the bottom edge. Fill is derived from `background`. */
  bottomWave?: WaveSlot;
  children?: ReactNode;
}

function waveProps(
  slot: Exclude<WaveSlot, { variant: "spacer" }>,
): Pick<WaveProps, "variant" | "seed" | "peaks"> {
  if (slot.variant === "arch") return { variant: "arch", seed: slot.seed };
  return { variant: "wave", seed: slot.seed, peaks: slot.peaks };
}

/**
 * Shared wrapper for every page section. Applies the section background colour
 * and renders optional SVG waves at the top and/or bottom edge to create
 * seamless transitions between adjacent sections.
 *
 * @example
 * <Section
 *   background="#fce4ec"
 *   topWave={{ variant: "arch", seed: 444 }}
 *   bottomWave={{ variant: "wave", seed: 333, peaks: 2 }}
 * >
 *   ...
 * </Section>
 */
export function Section({
  background,
  variant,
  align,
  title,
  subtitle,
  topWave,
  bottomWave,
  children,
  className,
  style,
  ...rest
}: SectionProps) {
  return (
    <section
      {...rest}
      className={clsx(
        styles.section,
        topWave &&
          topWave.rendering !== "absolute" &&
          styles["section--has-top-wave"],
        bottomWave &&
          bottomWave.rendering !== "absolute" &&
          styles["section--has-bottom-wave"],
        className,
      )}
      style={{ background, ...style } as CSSProperties}
    >
      {topWave &&
        (topWave.variant === "spacer" ? (
          <div
            className={clsx(
              styles["section__wave"],
              styles["section__wave--top"],
              styles["section__wave--spacer"],
            )}
            style={{ background }}
          />
        ) : (
          <Wave
            {...waveProps(topWave)}
            fill={background ?? "transparent"}
            position="top"
            className={clsx(
              styles["section__wave"],
              styles["section__wave--top"],
            )}
          />
        ))}
      <div className={styles["section__inner"]}>
        {title && (
          <SectionHeading
            title={title}
            subtitle={subtitle}
            variant={variant}
            align={align}
          />
        )}
        {children}
      </div>
      {bottomWave &&
        (bottomWave.variant === "spacer" ? (
          <div
            className={clsx(
              styles["section__wave"],
              styles["section__wave--bottom"],
              styles["section__wave--spacer"],
            )}
            style={{ background }}
          />
        ) : (
          <Wave
            {...waveProps(bottomWave)}
            fill={background ?? "transparent"}
            position="bottom"
            className={clsx(
              styles["section__wave"],
              styles["section__wave--bottom"],
            )}
          />
        ))}
    </section>
  );
}
