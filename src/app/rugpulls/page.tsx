import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import { DEFAULT_UPLOAD_DATE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/rugpulls/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Rugpulls", "Web3 Scams", "Crypto"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Rugpulls - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Rugpulls() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Rugpulls loop video",
    description: "Loop video for the Rugpulls page by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://cc0web3.com/images/rugpulls.png",
    contentUrl: "https://cc0web3.com/videos/rugpulls.mp4",
    uploadDate: DEFAULT_UPLOAD_DATE,
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
      <div className="relative w-full h-fit flex flex-col gap-2  lg:order-2 order-1">
        <div className="my-4 bg-red-900 text-center items-center justify-center w-full text-yellow-300 text-lg font-bold">
          «« HABRÁ MÁS PRONTO »»
        </div>
        <div className="flex relative w-full h-fit">
          <video
            draggable={false}
            poster={"/images/rugpulls.png"}
            className="object-contain flex relative w-full h-96"
            autoPlay
            loop
            muted
            title="Rugpulls loop video"
            aria-label="Rugpulls loop video"
          >
            <source src={"/videos/rugpulls.mp4"} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}
