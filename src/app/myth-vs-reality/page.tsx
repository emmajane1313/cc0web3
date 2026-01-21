import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Reality from "../components/Common/modules/Reality";

export const metadata: Metadata = {
  title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/myth-vs-reality/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Myth", "Reality", "Web3"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
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
