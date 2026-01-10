import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  keywords: ["Emma-Jane MacKinnon-Lee", "Aaron Swartz", "Len Sassaman", "Ilya Zhitomirskiy", "Open Source Roots"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Roots() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Roots loop video",
    description: "Loop video for the Roots page by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://cc0web3.com/images/chica.png",
    contentUrl: "https://cc0web3.com/videos/chica.mp4",
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
        <div className="relative w-full items-center justify-center h-fit flex flex-row gap-2">
          {[
            {
              titulo: "Aaron Swartz",
              src: "/images/aaron.png",
            },
            {
              titulo: "Len Sassaman",
              src: "/images/len.png",
            },
            {
              titulo: "Ilya Zhitomirskiy",
              src: "/images/ilya.png",
            },
          ].map((el, i) => (
            <div
              key={i}
              className="border border-yellow-400 relative w-fit h-fit flex"
            >
              <div className="relative w-12 sm:w-40 h-12 sm:h-24 flex">
                <Image
                  draggable={false}
                  alt={el?.titulo}
                  title={el?.titulo}
                  src={el?.src}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex relative w-full h-fit">
          <video
            draggable={false}
            poster={"/images/chica.png"}
            className="object-contain flex relative w-full h-96"
            autoPlay
            loop
            muted
            title="Roots loop video"
            aria-label="Roots loop video"
          >
            <source src={"/videos/chica.mp4"} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}
