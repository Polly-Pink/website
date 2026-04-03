import { Hero } from "#components/hero";
import { HowToBuy } from "#sections/how-to-buy";
import { MorePolly } from "#sections/more-polly";
import { Socials } from "#sections/socials";
import { Statistics } from "#sections/statistics";
import { Tokenomics } from "#sections/tokenomics";
import { WhoIsShe } from "#sections/who-is-she";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoIsShe />
      <HowToBuy />
      <Tokenomics />
      <Socials />
      <Statistics />
      <MorePolly />
    </main>
  );
}
