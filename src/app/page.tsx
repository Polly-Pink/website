import { Hero } from "#components/hero";
import { HowToBuy } from "#sections/how-to-buy";
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
      <Section
        background="#F3FDFF"
        title="Statistics"
        subtitle="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        topWave={{ variant: "wave", seed: 91, peaks: 3 }}
        bottomWave={{ variant: "spacer" }}
      >
        <p>
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
          vitae est. Mauris placerat eleifend leo. Quisque sit amet est et
          sapien ullamcorper pharetra.
        </p>
        <p>
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui.
        </p>
      </Section>
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
