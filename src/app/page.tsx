"use client";

import Image from "next/image";
import Stats from "./components/Common/modules/Stats";
import Wrapper from "./components/Common/modules/Wrapper";
import { useContext } from "react";
import { ModalContext } from "./providers";

export default function Home() {
  const contexto = useContext(ModalContext);
  return (
    <Wrapper>
      <div className="relative flex flex-col md:flex-row w-full justify-between lg:order-2 order-1 gap-6">
        <div className="w-3/5 text-center w-full h-full flex flex-col justify-between">
          <div className="text-yellow-300 text-xs">
            DOWNLOAD | <span className="text-red-500">PUT UP</span> | DOWNLOAD
          </div>
          <div className="flex justify-center gap-4 py-2 flex-col sm:flex-row justify-center items-center">
            {[
              {
                portada: "/images/neoroman.png",
                titulo: "Disappear quietly",
              },
              {
                portada: "/images/wisely.png",
                titulo: "Choose Wisely",
              },
              {
                portada: "/images/forest.png",
                titulo: "In the Dark Forest",
              },
            ].map((el, i) => (
              <div
                key={i}
                className="rounded border w-fit border-red-600 bg-black p-2 shadow-sm bg-black p-1 border border-red-600"
              >
                <Image
                  src={el.portada}
                  alt={el.titulo}
                  draggable={false}
                  width={200}
                  height={100}
                />
                <div className="text-white text-xs">{el.titulo}</div>
              </div>
            ))}
          </div>
          <div className="relative w-full h-fit flex flex-col gap-2">
            <div className="my-4 bg-red-900 text-yellow-300 text-lg font-bold">
              «« VOID NEO-ROMAN COLLABORATORS »»
            </div>
            <div className="flex relative w-full h-fit">
              <video
                draggable={false}
                poster={contexto?.afis?.imagen}
                className="object-cover flex relative w-full h-96"
                autoPlay
                loop
                muted
                key={contexto?.afis?.imagen}
              >
                <source src={contexto?.afis?.video} />
              </video>
            </div>
          </div>
        </div>
        <Stats />
      </div>
    </Wrapper>
  );
}
