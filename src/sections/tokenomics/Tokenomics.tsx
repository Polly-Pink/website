import { TOKENOMICS } from "#config/tokenomics";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import { StatBlock } from "#ui/stat-block";
import styles from "./Tokenomics.module.scss";

/**
 * Tokenomics landing section — displays key token stats in a 2/3-column grid.
 *
 * @example
 * <Tokenomics />
 */
export function Tokenomics() {
  return (
    <Section
      background="#F3FDFF"
      topWave={{ variant: "wave", seed: 12, peaks: 3 }}
      bottomWave={{ variant: "wave", seed: 7, peaks: 2 }}
    >
      <SectionHeading
        title="Tokenomics"
        subtitle="With zero taxes, locked liquidity, and renounced ownership, $POLLY is built for the community — fair, transparent, and unstoppable."
      />
      <div className={styles["tokenomics__grid"]}>
        {TOKENOMICS.map((stat) => (
          <StatBlock key={stat.id} label={stat.label} value={stat.value} />
        ))}
      </div>
    </Section>
  );
}
