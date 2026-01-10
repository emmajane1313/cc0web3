"use client";

import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import formatTime from "@/app/lib/helpers/formatTime";
import { ModalContext } from "@/app/providers";
import Image from "next/image";
import { FormEvent, useContext } from "react";
import useControls from "../hooks/useControls";
import useVideo from "../../Common/hooks/useVideo";

function Main() {
  const contexto = useContext(ModalContext);
  const {
    handleSeek,
    handleVolumeChange,
    volume,
    setVolumeOpen,
    volumeOpen,
    progressRef,
    currentTime,
  } = useControls();
  const { handlePlay } = useVideo();
  const videoTitle = contexto?.video?.titulo || "CC0 Web3 video";

  return (
    <div className="relative w-full h-fit flex items-center justify-center  lg:order-2 order-1">
      <div className="relative w-5/6 flex h-fit flex-col gap-3  items-center justify-center">
        <div className="relative w-full text-left h-fit text-yellow-400 font-wood">
          {contexto?.video?.titulo}
        </div>
        <div className="relative w-full items-center justify-center h-full flex">
          {contexto?.video && (
            <video
              key={contexto?.video?.titulo}
              ref={contexto?.vid}
              className="relative border border-yellow-400 flex object-cover w-full h-[20rem] md:h-[30rem]"
              draggable={false}
              poster={contexto?.video?.imagen}
              title={videoTitle}
              aria-label={videoTitle}
            >
              <source src={contexto?.video?.video} />
            </video>
          )}
        </div>
        <div className="relative w-full h-fit flex flex-row gap-2 items-center justify-between">
          <div className="relative w-fit h-full flex items-center font-wood text-xs text-white">
            <span className="text-red-600">{formatTime(currentTime || 0)}</span>
            /
            <span className="text-yellow-300">
              {formatTime(contexto?.vid?.current?.duration || 0)}
            </span>
          </div>
          <div
            className="relative cursor-pointer w-3 h-3 flex items-center justify-center"
            onClick={() => handlePlay(!contexto?.play)}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}${
                contexto?.play
                  ? "Qmbg8t4xoNywhtCexD5Ln5YWvcKMXGahfwyK6UHpR3nBip"
                  : "QmXw52mJFnzYXmoK8eExoHKv7YW9RBVEwSFtfvxXgy7sfp"
              }`}
              draggable={false}
              width={12}
              height={12}
              alt="play"
            />
          </div>
          <div
            className="relative w-full h-2 border border-yellow-400 cursor-pointer"
            ref={progressRef}
            onClick={(e: any) => handleSeek(e)}
          >
            <div
              className="absolute h-full bg-red-700/70"
              style={{
                width: `${
                  ((currentTime || 0) /
                    (contexto?.vid?.current?.duration || 0)) *
                  100
                }%`,
              }}
            />
          </div>

          <div
            className="relative cursor-pointer w-3 h-3 flex items-center justify-center"
            onClick={() => setVolumeOpen(!volumeOpen)}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}${
                volume === 0
                  ? "QmVVzvq68RwGZFi46yKEthuG6PXQf74BaMW4yCrZCkgtzK"
                  : "Qme1i88Yd1x4SJfgrSCFyXp7GELCZRnnPQeFUt6jbfPbqL"
              }`}
              layout="fill"
              alt="volume"
              draggable={false}
            />
          </div>
          {volumeOpen && (
            <input
              className="absolute w-40 h-fit bottom-10 right-3"
              type="range"
              value={volume}
              max={1}
              min={0}
              step={0.1}
              onChange={(e: FormEvent) => handleVolumeChange(e)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
