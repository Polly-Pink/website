import type { StaticImageData } from "next/image";
import tiktok1 from "#assets/images/socials/tiktok_1.png";
import tiktok2 from "#assets/images/socials/tiktok_2.png";
import tiktok3 from "#assets/images/socials/tiktok_3.png";
import x1 from "#assets/images/socials/x_1.png";
import x2 from "#assets/images/socials/x_2.png";
import x3 from "#assets/images/socials/x_3.jpg";
import x4 from "#assets/images/socials/x_4.png";
import x5 from "#assets/images/socials/x_5.png";

export interface SocialPost {
  id: string;
  src: StaticImageData;
  alt: string;
  platform: "tiktok" | "x";
  href: string;
}

export const POSTS: SocialPost[] = [
  {
    id: "x_1",
    src: x1,
    alt: "Polly on X",
    platform: "x",
    href: "https://x.com/Pollyxyz/status/2039296967994441980",
  },
  {
    id: "tiktok_1",
    src: tiktok1,
    alt: "Polly on TikTok",
    platform: "tiktok",
    href: "https://www.tiktok.com/@pollypenguins/video/7531854399031790870",
  },
  {
    id: "x_2",
    src: x2,
    alt: "Polly on X",
    platform: "x",
    href: "https://x.com/Pollyxyz/status/2040021819860623632",
  },
  {
    id: "tiktok_2",
    src: tiktok2,
    alt: "Polly on TikTok",
    platform: "tiktok",
    href: "https://www.tiktok.com/@pollypenguins/video/7524803810213006614",
  },
  {
    id: "x_3",
    src: x3,
    alt: "Polly on X",
    platform: "x",
    href: "https://x.com/Pollyxyz/status/2039451508417212476",
  },
  {
    id: "tiktok_3",
    src: tiktok3,
    alt: "Polly on TikTok",
    platform: "tiktok",
    href: "https://www.tiktok.com/@pollypenguins/video/7574652764316241174",
  },
  {
    id: "x_4",
    src: x4,
    alt: "Polly on X",
    platform: "x",
    href: "https://x.com/Pollyxyz/status/2038934522100695495",
  },
  {
    id: "x_5",
    src: x5,
    alt: "Polly on X",
    platform: "x",
    href: "https://x.com/Pollyxyz/status/2038209776719442179",
  },
];
