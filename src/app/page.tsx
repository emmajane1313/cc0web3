import { Metadata } from "next";
import Home from "./components/Home";
import { AFIS, DEFAULT_UPLOAD_DATE } from "./lib/constantes";

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
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CC0 Web3 Loop Videos by Emma-Jane MacKinnon-Lee",
    itemListElement: AFIS.map((video, index) => ({
      "@type": "VideoObject",
      position: index + 1,
      name: video.titulo,
      description: "Loop video from CC0 Web3 by Emma-Jane MacKinnon-Lee.",
      thumbnailUrl: `https://cc0web3.com${video.imagen}`,
      contentUrl: `https://cc0web3.com${video.video}`,
      embedUrl: `https://cc0web3.com/`,
      uploadDate: DEFAULT_UPLOAD_DATE,
      duration: "PT30S",
      creator: {
        "@type": "Person",
        name: "Emma-Jane MacKinnon-Lee",
        url: "https://emmajanemackinnonlee.com/",
      },
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Home />
    </>
  );
}
