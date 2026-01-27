import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Auto from "../components/Common/modules/Auto";
import { DEFAULT_UPLOAD_DATE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/privacy-and-autonomy/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Privacy", "Autonomy", "Web3", "Decentralization"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Privacy() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Roman Matroids",
    description: "Roman Matroids video by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://chromadin.infura-ipfs.io/ipfs/QmbDFF5XGfa4mimHoRjkSM67YM6EBFLxZw2PimxSQQ1gdF",
    contentUrl: "https://chromadin.infura-ipfs.io/ipfs/QmYF56PqmExGSLntWrbjHWyt6rVsjCjLGiGoUiXXc2Pk3U",
    embedUrl: "https://cc0web3.com/privacy-and-autonomy/",
    uploadDate: DEFAULT_UPLOAD_DATE,
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
      <Auto />
    </Wrapper>
  );
}
