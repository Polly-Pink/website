"use client";

import { useEffect, useState } from "react";
import { ImageCarousel } from "#ui/image-carousel";
import { Section } from "#ui/section";
import { SectionHeading } from "#ui/section/section-heading";
import { SocialCard } from "#ui/social-card";
import { POSTS } from "./posts";

/**
 * Socials landing section — 8 post thumbnails in a responsive image carousel.
 * Posts are shuffled client-side after hydration.
 * Mobile: vertical 2-column grid. md+: horizontal scroll strip.
 *
 * @example
 * <Socials />
 */
export function Socials() {
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => {
    setPosts([...POSTS].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <Section
      background="#ffffff"
      topWave={{ variant: "wave", seed: 22, peaks: 3 }}
    >
      <SectionHeading
        title="Socials"
        subtitle="Curious about what Polly's been up to? Dive into her latest adventures and updates, and explore all her newest posts below."
        variant="secondary"
      />
      <ImageCarousel>
        {posts.map((post) => (
          <SocialCard
            key={post.id}
            src={post.src}
            alt={post.alt}
            platform={post.platform}
            href={post.href}
          />
        ))}
      </ImageCarousel>
    </Section>
  );
}
