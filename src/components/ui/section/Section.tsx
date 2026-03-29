import clsx from "clsx";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { WaveProps } from "#ui/wave";
import { Wave } from "#ui/wave";
import styles from "./Section.module.scss";
import { SectionHeading } from "./section-heading";

interface WaveSlot extends Pick<WaveProps, "variant" | "options"> {}

interface SectionProps extends HTMLAttributes<HTMLElement> {
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

export type { WaveGenOptions } from "#lib/wavegen";

/**
 * Shared wrapper for every page section. Applies the section background colour
 * and renders optional SVG waves at the top and/or bottom edge to create
 * seamless transitions between adjacent sections.
 *
 * Wave `fill` should match the adjacent section's background so the two
 * sections appear to merge along the wave boundary.
 *
 * @example
 * <Section
 *   background="#fce4ec"
 *   topWave={{ variant: "arch", options: { seed: 444, points: 1, maxHeight: 80 }, fill: "#fff" }}
 *   bottomWave={{ variant: "wave", options: { seed: 333, points: 2, maxHeight: 35 }, fill: "#fff" }}
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
      className={clsx(styles.section, className)}
      style={{ background, ...style } as CSSProperties}
    >
      {topWave && (
        <Wave
          {...topWave}
          fill={background ?? "transparent"}
          position="top"
          className={clsx(
            styles["section__wave"],
            styles["section__wave--top"],
          )}
        />
      )}
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
      {bottomWave && (
        <Wave
          {...bottomWave}
          fill={background ?? "transparent"}
          position="bottom"
          className={clsx(
            styles["section__wave"],
            styles["section__wave--bottom"],
          )}
        />
      )}
    </section>
  );
}
