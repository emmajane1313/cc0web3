"use client";

import { ReactNode, useContext } from "react";
import Header from "./Header";
import { ModalContext } from "@/app/providers";
import useVideo from "../hooks/useVideo";
import { AFIS, VIDEOS } from "@/app/lib/constantes";

function Wrapper({ children }: { children: ReactNode }) {
  const contexto = useContext(ModalContext);
  const { handlePlay } = useVideo();
  const previewTitle = contexto?.video?.titulo || "CC0 Web3 video preview";
  return (
    <div className="bg-black text-red-600 min-h-screen font-sans justify-between flex flex-col">
      <Header />

      <div className="flex px-4 py-6 gap-6 justify-between h-full w-full grow flex-col lg:flex-row">
        <div className="w-full lg:w-fit relative text-white flex lg:order-1 order-2 justify-between">
          <div className="relative w-full lg:w-60 flex flex-col gap-4 text-xs justify-between">
            <div className="flex  w-full h-fit bg-red-800 p-2">
              THE NETWORK EDGE »
            </div>
            <div className="flex w-full h-fit bg-black border border-red-700 p-2 text-red-600">
              DYOR. Viewer discretion is your own responsibility.
            </div>
            <div className="flex w-full h-fit bg-red-800 p-2">AFIŞLER</div>
            <ul className="flex w-full h-fit flex-col pl-4 list-disc text-yellow-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <li
                  onClick={() => contexto?.setAfis(AFIS[i])}
                  className="hover:underline cursor-pointer"
                  key={i}
                >
                  AFIŞ 0{i + 1}
                </li>
              ))}
            </ul>
            <div className="flex w-full h-fit bg-red-800 p-2">VIDEOLAR</div>
            <ul className="flex w-full h-fit flex-col pl-4 list-disc text-yellow-300">
              {VIDEOS.map((_, i) => (
                <li
                  className="hover:underline cursor-pointer"
                  onClick={() => {
                    const oldTitle = contexto?.video?.titulo;
                    if (oldTitle) {
                      localStorage.removeItem("timestamp_" + oldTitle);
                    }

                    handlePlay(false);
                    contexto?.setVideo(VIDEOS[i]);
                  }}
                  key={i}
                >
                  VIDEO 0{i + 1}
                </li>
              ))}
            </ul>
            <div className="relative w-full h-full items-end justify-end flex flex-col gap-2">
              <div className="w-full h-fit flex flex-row w-full gap-2">
                <div
                  className="relative p-2 w-full hover:opacity-80 justify-center h-fit flex bg-red-800 cursor-pointer"
                  onClick={() => handlePlay(!contexto?.play)}
                >
                  {contexto?.play ? "ПАУЗА" : "ВІДТВОРИТИ"}
                </div>
                <div
                  className="relative p-2 w-full hover:opacity-80 justify-center  h-fit flex bg-red-800 cursor-pointer"
                  onClick={() => window.open(contexto?.video?.enlace)}
                >
                  ІНФО
                </div>
              </div>

              <div className="relative w-full h-fit flex">
                {contexto?.video && (
                  <video
                    key={contexto?.video?.titulo}
                    ref={contexto?.vid}
                    className="relative border border-yellow-400 flex object-cover w-full h-40"
                    draggable={false}
                    poster={contexto?.video?.imagen}
                    title={previewTitle}
                    aria-label={previewTitle}
                  >
                    <source src={contexto?.video?.video} />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
      <h1 className="bg-black text-center text-xs text-red-600 border-t border-red-700 py-4 flex w-full h-fit items-center justify-center order-3 break-words text-center px-2 md:flex-row flex-col flex">
        <span>
          {" "}
          You’re free to mirror, fork, or vanish with them. Just bandwidth and
          will. Maintained by
        </span>
        <span
          className="ml-1 hover:underline cursor-pointer"
          onClick={() => window.open("https://icoinedweb3fashion.com/")}
        >
          {" "}
          Emma-Jane MacKinnon-Lee.
        </span>
      </h1>
    </div>
  );
}

export default Wrapper;
