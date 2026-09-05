import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/app-sidebar";
import AppHeader from "@/layout/app-header";
import { NavigationEvents } from "@/components/navigation-events";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-flex",
  subsets: ["latin"],
});

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
  ],
  authors: [{ name: "Phyo Thu Kha" }],
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
        className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} antialiased`}
      >
        <NavigationEvents />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <div className="flex flex-1 flex-col gap-2 p-4">{children}</div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
