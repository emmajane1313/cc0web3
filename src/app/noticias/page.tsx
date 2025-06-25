import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";

export const metadata: Metadata = {
  title: "Noticias",
  twitter: {
    title: "Noticias",
  },
  openGraph: {
    title: "Noticias",
  },
};

export default function Noticias() {
  return (
    <Wrapper>
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
          >
            <source src={"/videos/compman.mp4"} />
          </video>
        </div>
      </div>
    </Wrapper>
  );
}
