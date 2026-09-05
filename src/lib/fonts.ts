import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const robotoFlex = Roboto_Flex({
  variable: "--font-flex",
  subsets: ["latin"],
});

export const roboto = localFont({
  src: "../assets/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});
