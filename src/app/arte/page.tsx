import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Image from "next/image";
import { ARTE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Arte",
  twitter: {
    title: "Arte",
  },
  openGraph: {
    title: "Arte",
  },
};

export default function Arte() {
  return (
    <Wrapper>
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
