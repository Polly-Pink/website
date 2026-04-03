import { CHAINS } from "#config/chains";
import { SOCIALS } from "#config/socials";
import { Button } from "#ui/button";
import { CopyableContract } from "#ui/copyable-contract";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import styles from "./MorePolly.module.scss";

// biome-ignore lint/style/noNonNullAssertion: guaranteed by config
const telegram = SOCIALS.find((s) => s.id === "telegram")!;
// biome-ignore lint/style/noNonNullAssertion: guaranteed by config
const x = SOCIALS.find((s) => s.id === "x")!;
// biome-ignore lint/style/noNonNullAssertion: guaranteed by config
const tiktok = SOCIALS.find((s) => s.id === "tiktok")!;
// biome-ignore lint/style/noNonNullAssertion: guaranteed by config
const abstractChain = CHAINS.find((c) => c.id === "abstract")!;
// biome-ignore lint/style/noNonNullAssertion: guaranteed by config
const solanaChain = CHAINS.find((c) => c.id === "solana")!;

const LINKS = [
  { id: "telegram", label: "Telegram", href: telegram.href },
  { id: "x", label: "Twitter (X)", href: x.href },
  { id: "tiktok", label: "TikTok", href: tiktok.href },
  { id: "dexscreener", label: "DexScreener", href: abstractChain.chartUrl },
];

const CAS = [
  { id: "abstract", label: "Abstract", address: abstractChain.address },
  { id: "solana", label: "Solana", address: solanaChain.address },
];

/**
 * "More Polly" section — full-width link buttons to all channels and
 * both contract addresses.
 *
 * @example
 * <MorePolly />
 */
export function MorePolly() {
  return (
    <Section
      background="#FFEDF8"
      topWave={{ variant: "arch", seed: 33, rendering: "absolute" }}
    >
      <SectionHeading title="More Polly" variant="tertiary" align="center" />
      <div className={styles["more-polly__links"]}>
        {LINKS.map((link) => (
          <Button key={link.id} variant="link" theme="primary" href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>
      <div className={styles["more-polly__cas"]}>
        {CAS.map((ca) => (
          <CopyableContract key={ca.id} label={ca.label} address={ca.address} />
        ))}
      </div>
    </Section>
  );
}
