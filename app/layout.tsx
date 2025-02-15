import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tezac.xyz'),
  title: {
    default: "Tezac - Privacy NFT Marketplace",
    template: "%s | Tezac NFT Marketplace"
  },
  description: "Privacy-preserving NFT marketplace enabling private ownership, hidden reserve prices, blind auctions, and cross-chain bridging powered by Aztec Network's zero-knowledge proofs.",
  keywords: [
    "NFT marketplace",
    "private NFT trading",
    "privacy NFT",
    "Aztec Network",
    "zero-knowledge proofs",
    "blind auctions",
    "cross-chain NFT",
    "private cryptocurrency",
    "ZK rollup",
    "blockchain privacy",
    "decentralized marketplace",
    "Aztec Bridge",
    "NFT Bridge",
    "L1 Bridge",
    "L2 Bridge",
    "Cross-Chain",
    "Cross-Chain NFT",
    "Private Trading",
    "Private Auctions",
    "Private Ownership",
  ],
  authors: [{ name: "andeebtceth" }],
  creator: "Tezac",
  publisher: "Tezac",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tezac.xyz",
    siteName: "Tezac NFT Marketplace",
    title: "Tezac | Private NFT Trading Platform",
    description: "Privacy-preserving NFT marketplace built on Aztec Network. Trade NFTs with complete privacy using zero-knowledge proofs.",
    images: [
      {
        url: "/tezac-with-bg.png",
        width: 1200,
        height: 630,
        alt: "Tezac NFT Marketplace Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tezac NFT Marketplace",
    description: "Privacy-first NFT trading powered by Aztec",
    site: "tezac.xyz",
    creator: "@andeebtceth",
    images: ["/tezac-with-bg.png"],
  },
  alternates: {
    canonical: "https://tezac.xyz",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/tezac.png" },
      { url: "/tezac.png", type: "image/png" },
    ],
    apple: [
      { url: "/tezac.png" },
    ],
  },
  category: "Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={geistMono.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}