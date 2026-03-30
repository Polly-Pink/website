import { siTelegram, siTiktok, siX } from "simple-icons";

export interface Social {
  /** Unique identifier used as a React key. */
  id: string;
  /** Accessible label for the icon button. */
  label: string;
  /** Target URL. */
  href: string;
  /** simple-icons icon object — provides `path` and `title`. */
  icon: { path: string; title: string };
}

export const SOCIALS: Social[] = [
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/pollyxyz",
    icon: siX,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@pollypenguins",
    icon: siTiktok,
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/PollyCommunity",
    icon: siTelegram,
  },
];
