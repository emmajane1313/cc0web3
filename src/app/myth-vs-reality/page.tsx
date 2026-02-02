import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Reality from "../components/Common/modules/Reality";

export const metadata: Metadata = {
  title: "Myth Vs Reality - Where Did All the Cypherpunks Go? | CC0 Web3",
  description: "A deep dive into the history of cypherpunks, open knowledge, and decentralization. Exploring Len Sassaman, Aaron Swartz, and the legacy of encryption pioneers who shaped Web3 and cryptocurrency.",
  alternates: {
    canonical: "https://cc0web3.com/myth-vs-reality/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Cypherpunks", "Len Sassaman", "Aaron Swartz", "Satoshi Nakamoto", "Bitcoin", "Encryption", "Open Source", "Web3", "Cryptocurrency", "Decentralization"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee", url: "https://emmajanemackinnonlee.com/" }],
  twitter: {
    card: "summary_large_image",
    title: "Myth Vs Reality - Where Did All the Cypherpunks Go?",
    description: "A deep dive into the history of cypherpunks, open knowledge, and decentralization by Emma-Jane MacKinnon-Lee.",
    images: ["https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm"],
  },
  openGraph: {
    title: "Myth Vs Reality - Where Did All the Cypherpunks Go?",
    description: "A deep dive into the history of cypherpunks, open knowledge, and decentralization. Exploring Len Sassaman, Aaron Swartz, and the legacy of encryption pioneers.",
    url: "https://cc0web3.com/myth-vs-reality/",
    type: "article",
    images: [
      {
        url: "https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm",
        width: 1200,
        height: 630,
        alt: "Where Did All the Cypherpunks Go - Myth Vs Reality",
      },
    ],
  },
};

export default function Myth() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Where did all the cypherpunks go? - Myth Vs Reality",
    description: "A deep dive into the history of cypherpunks, open knowledge, and decentralization by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm",
    contentUrl: "https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm",
    embedUrl: "https://cc0web3.com/myth-vs-reality/",
    uploadDate: "2024-01-01T00:00:00Z",
    duration: "PT5M",
    creator: {
      "@type": "Person",
      name: "Emma-Jane MacKinnon-Lee",
      url: "https://emmajanemackinnonlee.com/",
    },
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Reality />
    </Wrapper>
  );
}
