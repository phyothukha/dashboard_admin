import type { Metadata } from "next";
import "@/styles/globals.css";
import { NavigationEvents } from "@/components/navigation-events";
import { geistSans, geistMono, robotoFlex, roboto } from "@/lib/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Phyrous | Admin Dashboard",
    template: "%s | Phyrous",
  },
  description:
    "Phyrous is an all-in-one admin dashboard for managing users, tasks, goals, products, and projects in one place.",
  applicationName: "Phyrous",
  keywords: [
    "Phyrous",
    "admin dashboard",
    "team management",
    "task management",
    "project management",
    "Phyo Thu Kha",
    "phyothukha",
    "mern stack developer",
  ],
  authors: [{ name: "Phyo Thu Kha" }],
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Phyrous | Admin Dashboard",
    description:
      "Manage users, tasks, goals, products, and projects in one place.",
    siteName: "Phyrous",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} ${roboto.variable} antialiased`}
      >
        <NavigationEvents />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
