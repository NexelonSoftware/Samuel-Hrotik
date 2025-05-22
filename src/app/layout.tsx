import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "Samuel Hrotik",
  description: "Samuel Hrotik - Software Engineer",
  keywords: ["Samuel Hrotik", "Software Engineer", "Portfolio"],
  creator: "Nexelon",
  publisher: "Nexelon",
  generator: "Next.js",
  metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
  alternates: {
    canonical: `/en`,
    languages: {
      "en-US": "/en",
      "sk-SK": "/sk",
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "72x72", url: "/icon72x72.png" },
    { rel: "apple-touch-icon", sizes: "120x120", url: "/icon120x120.png" },
    { rel: "apple-touch-icon", sizes: "152x152", url: "/icon152x152.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/icon180x180.png" },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
