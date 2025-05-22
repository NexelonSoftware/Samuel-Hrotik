import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { env } from "~/env";
import { TranslationProvider } from "~/localisation/useTranslation";
import type { Locale } from "~/i18n.config";
import { getLanguage } from "~/localisation/languages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const langData = await getLanguage(lang);

  return {
    title: langData.metadata.title,
    description: langData.metadata.description,
    keywords: langData.metadata.keywords,
    creator: "Nexelon",
    publisher: "Nexelon",
    generator: "Next.js",
    metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
    alternates: {
      canonical: `/${lang}`,
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
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TranslationProvider>
              {children}
              <Toaster />
            </TranslationProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
