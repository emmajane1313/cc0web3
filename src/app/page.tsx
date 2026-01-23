import { Metadata } from "next";
import Home from "./components/Home";

export const metadata: Metadata = {
  title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description:
    "CC0 web3 art, transmissions, and videos by Emma-Jane MacKinnon-Lee.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Emma-Jane MacKinnon-Lee",
    "CC0 Web3",
    "Open Source Art",
    "Web3 Videos",
    "Street Art",
  ],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description:
      "CC0 web3 art, transmissions, and videos by Emma-Jane MacKinnon-Lee.",
  },
  openGraph: {
    title: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description:
      "CC0 web3 art, transmissions, and videos by Emma-Jane MacKinnon-Lee.",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CC0 Web3 by Emma-Jane MacKinnon-Lee",
    url: "https://cc0web3.com",
    description: "CC0 web3 art, transmissions, and videos by Emma-Jane MacKinnon-Lee.",
    creator: {
      "@type": "Person",
      name: "Emma-Jane MacKinnon-Lee",
      url: "https://emmajanemackinnonlee.com/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Home />
    </>
  );
}
