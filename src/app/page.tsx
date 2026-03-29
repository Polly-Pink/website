import { Hero } from "#components/hero";
import { Section } from "#ui/section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section
        background="#F3FDFF"
        title="Lorem ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        topWave={{
          variant: "wave",
          seed: 40,
          peaks: 3,
          rendering: "absolute",
        }}
        bottomWave={{ variant: "arch", seed: 2 }}
      />
      <Section
        background="#ffffff"
        variant="secondary"
        title="Dolor sit amet"
        subtitle="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim."
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
      </Section>
      <Section
        background="#F3FDFF"
        title="Consectetur"
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
