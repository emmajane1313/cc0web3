import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Image from "next/image";
import { ARTE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Arte - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  keywords: ["Emma-Jane MacKinnon-Lee", "Arte CC0", "Web3 Art", "Open Source Art", "Street Art"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Arte - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Arte - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Arte() {
  const imageListSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "CC0 Street Art Gallery by Emma-Jane MacKinnon-Lee",
    description: "As ruas também são uma tela. Sobe, anônime.",
    creator: {
      "@type": "Person",
      name: "Emma-Jane MacKinnon-Lee",
      url: "https://emmajanemackinnonlee.com/",
    },
    image: ARTE.map((art) => ({
      "@type": "ImageObject",
      contentUrl: `https://cc0web3.com${art.src}`,
      name: art.alt,
      creator: {
        "@type": "Person",
        name: "Emma-Jane MacKinnon-Lee",
      },
      license: "https://creativecommons.org/publicdomain/zero/1.0/",
    })),
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageListSchema) }}
      />
      <div className="relative flex flex-col w-full h-fit items-center justify-start  lg:order-2 order-1">
        <div className="relative w-fit h-fit flex text-yellow-400 font-mort text-lg">
          As ruas também são uma tela. Sobe, anônime.
        </div>
        <div className="relative flex w-full h-fit">
          <div className="relative flex flex-wrap items-center justify-center gap-2 w-full h-[30rem]  overflow-y-scroll">
            {ARTE.map((cart, i) => (
              <div key={i} className="relative w-72 h-72 flex">
                <Image
                  objectFit="contain"
                  draggable={false}
                  alt={cart?.alt}
                  layout="fill"
                  src={cart?.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
