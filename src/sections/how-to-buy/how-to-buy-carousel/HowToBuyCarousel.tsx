"use client";

import type { HTMLAttributes } from "react";
import type { ChainId } from "#config/chains";
import { useChainStore } from "#lib/chain-store";
import { Card } from "#ui/card";
import { Carousel } from "#ui/carousel";
import { CarouselStep } from "#ui/carousel/carousel-step";
import { SegmentedControl } from "#ui/segmented-control";
import { Text } from "#ui/text";
import { ACTIONS, CHAIN_OPTIONS, STEPS } from "./content";
import styles from "./HowToBuyCarousel.module.scss";

export interface HowToBuyCarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Called when the active step changes. */
  onStepChange?: (index: number) => void;
}

/**
 * Chain-selector card for the "How to Buy" section.
 * Pick Abstract or Solana to see tailored step-by-step buying instructions,
 * presented as a navigable carousel.
 *
 * @example
 * <HowToBuyCarousel onStepChange={setStep} />
 */
export function HowToBuyCarousel({
  onStepChange,
  className,
  ...rest
}: HowToBuyCarouselProps) {
  const { chainId, setChainId } = useChainStore();

  return (
    <Card
      bowtiePosition="top-left"
      variant="secondary"
      className={className}
      {...rest}
    >
      <SegmentedControl
        options={CHAIN_OPTIONS}
        value={chainId}
        onChange={(key) => setChainId(key as ChainId)}
      />
      <Carousel
        key={chainId}
        slides={STEPS[chainId].map((step, i) => (
          <CarouselStep key={step} action={ACTIONS[chainId][i]}>
            <div className={styles["htb-carousel__step"]}>
              <span className={styles["htb-carousel__step-num"]}>{i + 1}</span>
              <Text className={styles["htb-carousel__step-text"]}>{step}</Text>
            </div>
          </CarouselStep>
        ))}
        onIndexChange={onStepChange}
      />
    </Card>
  );
}
