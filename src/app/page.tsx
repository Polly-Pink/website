import { Hero } from "#components/hero";
import { HowToBuy } from "#sections/how-to-buy";
import { Statistics } from "#sections/statistics";
import { Tokenomics } from "#sections/tokenomics";
import { WhoIsShe } from "#sections/who-is-she";
import { Section } from "#ui/section";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoIsShe />
      <HowToBuy />
      <Tokenomics />
      <Section
        background="#ffffff"
        variant="secondary"
        title="Socials"
        subtitle="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
      />
      <Statistics />
      <Section
        background="#FFEDF8"
        variant="tertiary"
        align="center"
        title="Adipiscing elit"
        subtitle="Ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation."
        topWave={{ variant: "arch", seed: 33, rendering: "absolute" }}
      />
    </main>
  );
}
