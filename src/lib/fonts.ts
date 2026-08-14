import { Oswald, Roboto } from "next/font/google";

export const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const siteFontsClassName = `${roboto.className} ${oswald.className} antialiased`;
