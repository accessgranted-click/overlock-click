import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "overlock.click — SEM & Meta Ads for Streetwear & Nonprofits",
  description:
    "Performance advertising agency run by Grant Wuerslin. We run SEM and Meta ad campaigns for brick-and-mortar streetwear brands and mission-driven nonprofits.",
  keywords: [
    "SEM agency",
    "Meta ads agency",
    "Google Ads",
    "streetwear marketing",
    "nonprofit advertising",
    "performance marketing",
    "overlock.click",
  ],
  openGraph: {
    title: "overlock.click — We lock in the clicks.",
    description:
      "Performance advertising for streetwear brands and nonprofits that refuse to be ignored.",
    url: "https://overlock.click",
    siteName: "overlock.click",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "overlock.click",
    description: "SEM & Meta ads for streetwear and nonprofits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
