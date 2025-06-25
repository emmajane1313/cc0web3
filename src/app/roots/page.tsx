import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Roots",
  twitter: {
    title: "Roots",
  },
  openGraph: {
    title: "Roots",
  },
};

export default function Roots() {
  return (
    <Wrapper>
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
          >
            <source src={"/videos/chica.mp4"} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}
