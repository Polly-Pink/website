import { Fredoka, Onest, Shantell_Sans } from "next/font/google";
import localFont from "next/font/local";

/**
 * Fredoka — Google Fonts, SIL Open Font License 1.1
 * Loaded from CDN via next/font/google. Local static files kept in
 * src/assets/fonts/fredoka/ as an offline backup.
 */
export const fontBody = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/**
 * Shantell Sans — Google Fonts, SIL Open Font License 1.1
 * Loaded from CDN via next/font/google. Local static files kept in
 * src/assets/fonts/shantell_sans/ as an offline backup.
 */
export const fontHandwritten = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Onest — Google Fonts, SIL Open Font License 1.1
 * Loaded from CDN via next/font/google. Local static files kept in
 * src/assets/fonts/onest/ as an offline backup. Available as a
 * secondary sans-serif option if needed.
 */
export const fontSans = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/**
 * TT Trailers — TypeType foundry, trial/demo license (publicly available on dafont.com)
 * Self-hosted via next/font/local. Not available on Google Fonts.
 * Files stored in src/assets/fonts/tt_trailers/.
 */
export const fontDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/tt_trailers/static/TT-Trailers-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
});
