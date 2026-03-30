import Image from "next/image";
import pollyImg from "#assets/images/polly_and_pengu.png";
import { Card } from "#ui/card";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import { Text } from "#ui/text";
import styles from "./WhoIsShe.module.scss";

/**
 * "Who is she?" landing page section introducing the Polly character.
 * Heading full-width above a row of card (60%) + illustration (40%).
 * Illustration is hidden below `sm`.
 *
 * @example
 * <WhoIsShe />
 */
export function WhoIsShe() {
  return (
    <Section
      background="#F3FDFF"
      topWave={{ variant: "wave", seed: 40, peaks: 3, rendering: "absolute" }}
      bottomWave={{ variant: "arch", seed: 2 }}
    >
      <SectionHeading title="Who is she?" />
      <div className={styles["who-is-she"]}>
        <div className={styles["who-is-she__illustration"]}>
          <Image
            src={pollyImg}
            alt="Polly the community memecoin mascot"
            className={styles["who-is-she__img"]}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Card
          title="About Polly"
          bowtiePosition="top-right"
          className={styles["who-is-she__card"]}
        >
          <Text>
            Polly is a heartwarming character in the world of Pudgy Penguins.
            Known for her charm, warmth, and unwavering loyalty, she represents
            the softer, nurturing spirit within the Pudgy universe.
          </Text>
          <Text>
            She has inspired a community-led tribute project that celebrates her
            story and the values she embodies.
          </Text>
        </Card>
      </div>
    </Section>
  );
}
