import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  metadataBase: new URL("https://cc0web3.com/"),
  authors: [{ name: "Emma-Jane MacKinnon-Lee", url: "https://emmajanemackinnonlee.com/" }],
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cc0web3.com/",
    siteName: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Emma-Jane MacKinnon-Lee",
    "Emma Jane MacKinnon Lee",
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
    "Arte CC0",
    "Videos Web3",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.info/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajane.ai/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://icoinedweb3fashion.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
