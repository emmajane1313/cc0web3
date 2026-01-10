import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";

export const metadata: Metadata = {
  title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  keywords: ["Emma-Jane MacKinnon-Lee", "Web3 News", "Noticias Web3", "CC0"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Noticias() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Noticias loop video",
    description: "Loop video for the Noticias page by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://cc0web3.com/images/compman.png",
    contentUrl: "https://cc0web3.com/videos/compman.mp4",
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
      <div className="relative w-full h-fit flex flex-col gap-2 lg:order-2 order-1">
        <div className="my-4 bg-red-900 text-center items-center justify-center w-full text-yellow-300 text-lg font-bold">
          «« HABRÁ MÁS PRONTO »»
        </div>
        <div className="flex relative w-full h-fit">
          <video
            draggable={false}
            poster={"/images/compman.png"}
            className="object-contain flex relative w-full h-96"
            autoPlay
            loop
            muted
            title="Noticias loop video"
            aria-label="Noticias loop video"
          >
            <source src={"/videos/compman.mp4"} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}
