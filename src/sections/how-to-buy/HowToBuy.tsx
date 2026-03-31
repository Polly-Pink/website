"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import pollyCheer from "#assets/images/polly_pose_cheer.png";
import pollyProud from "#assets/images/polly_pose_proud.png";
import pollyRun from "#assets/images/polly_pose_run.png";
import pollyWave from "#assets/images/polly_pose_wave.png";
import { useChainStore } from "#lib/chain-store";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import styles from "./HowToBuy.module.scss";
import { HowToBuyCarousel } from "./how-to-buy-carousel";

const POSES = [pollyWave, pollyProud, pollyRun, pollyCheer];

/**
 * "How to buy?" landing page section.
 *
 * @example
 * <HowToBuy />
 */
export function HowToBuy() {
  const { chainId } = useChainStore();
  const [step, setStep] = useState(0);

  const prevChainId = useRef(chainId);

  if (prevChainId.current !== chainId) {
    prevChainId.current = chainId;
    setStep(0);
  }

  return (
    <Section background="#ffffff">
      <SectionHeading
        title="How to buy?"
        subtitle="Follow these quick steps to get started with buying Polly on the Abstract network."
        variant="secondary"
      />
      <div className={styles["how-to-buy"]}>
        <HowToBuyCarousel
          className={styles["how-to-buy__card"]}
          onStepChange={setStep}
        />
        <div className={styles["how-to-buy__polly"]}>
          <Image
            src={POSES[step]}
            alt=""
            aria-hidden
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </Section>
  );
}
