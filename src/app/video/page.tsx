import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Main from "../components/Videos/modules/Main";
import { DEFAULT_UPLOAD_DATE, VIDEOS } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Vídeo - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/video/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Videos Web3", "CC0 Video", "Web3 Fashion Video"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Vídeo - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Vídeo - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Video() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CC0 Web3 Videos by Emma-Jane MacKinnon-Lee",
    itemListElement: VIDEOS.map((video, index) => ({
      "@type": "VideoObject",
      position: index + 1,
      name: video.titulo,
      description:
        video.contenido ||
        "CC0 Web3 video by Emma-Jane MacKinnon-Lee.",
      thumbnailUrl: video.imagen,
      contentUrl: video.video,
      uploadDate: DEFAULT_UPLOAD_DATE,
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
      <Main />
    </Wrapper>
  );
}
