import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Transmit from "../components/Videos/modules/Transmit";
import { DEFAULT_UPLOAD_DATE, TRANSMIT } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Transmissions - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/transmissions/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Transmissions", "Videos", "Web3"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Transmissions - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Transmissions - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Transmissions() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CC0 Web3 Transmissions by Emma-Jane MacKinnon-Lee",
    itemListElement: TRANSMIT.map((video, index) => ({
      "@type": "VideoObject",
      position: index + 1,
      name: video.titulo,
      description: "CC0 Web3 transmission by Emma-Jane MacKinnon-Lee.",
      thumbnailUrl: video.imagen,
      contentUrl: video.video,
      embedUrl: "https://cc0web3.com/transmissions/",
      uploadDate: DEFAULT_UPLOAD_DATE,
      duration: "PT2M",
      creator: {
        "@type": "Person",
        name: "Emma-Jane MacKinnon-Lee",
        url: "https://emmajanemackinnonlee.com/",
      },
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
    })),
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Transmit />
    </Wrapper>
  );
}
