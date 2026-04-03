import { Hero } from "#components/hero";
import { HowToBuy } from "#sections/how-to-buy";
import { Socials } from "#sections/socials";
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
      <Socials />
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
