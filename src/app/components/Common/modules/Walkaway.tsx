"use client";

import {
  INFURA_GATEWAY,
  INFURA_GATEWAY_INTERNAL,
  WALKAWAY_VID,
} from "@/app/lib/constantes";
import Image from "next/image";
import { FormEvent, FunctionComponent, useRef } from "react";
import useControls from "../../Videos/hooks/useControls";
import useVideo from "../hooks/useVideo";
import formatTime from "@/app/lib/helpers/formatTime";

const Walkaway: FunctionComponent = () => {
  const walkawayVid = useRef<HTMLVideoElement>(null);
  const {
    handleSeek,
    handleVolumeChange,
    volume,
    setVolumeOpen,
    volumeOpen,
    progressRef,
    currentTime,
  } = useControls(walkawayVid);
  const { handlePlay, play } = useVideo(walkawayVid);

  return (
    <div className="relative w-full h-fit flex flex-col gap-2 lg:order-2 order-1 items-center justify-center">
      <div className="my-4 bg-red-900 text-center items-center justify-center w-full text-yellow-300 text-lg font-bold">
        «« أمشي وأسيب الموضوع »»
      </div>
      <div className="relative w-full sm:w-2/3 flex h-fit flex-col gap-3 items-center justify-center">
        <div className="relative w-full items-center justify-center h-full flex">
          <video
            key={WALKAWAY_VID?.titulo}
            ref={walkawayVid}
            className="relative border border-yellow-400 flex"
            draggable={false}
            poster={`${INFURA_GATEWAY}/ipfs/${WALKAWAY_VID.portada}`}
            title={WALKAWAY_VID.titulo}
            aria-label={WALKAWAY_VID.titulo}
          >
            <source src={`${INFURA_GATEWAY}/ipfs/${WALKAWAY_VID.video}`} />
          </video>
        </div>
        <div className="relative w-full h-fit flex flex-row gap-2 items-center justify-between">
          <div className="relative w-fit h-full flex items-center font-wood text-xs text-white">
            <span className="text-red-600">{formatTime(currentTime || 0)}</span>
            /
            <span className="text-yellow-300">
              {formatTime(walkawayVid?.current?.duration || 0)}
            </span>
          </div>
          <div
            className="relative cursor-pointer w-3 h-3 flex items-center justify-center"
            onClick={() => handlePlay(!play)}
          >
            <Image
              src={`${INFURA_GATEWAY_INTERNAL}${
                play
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
                  ((currentTime || 0) / (walkawayVid?.current?.duration || 0)) *
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
            <div className="relative w-12 h-12 flex">
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
     
    </div>
  );
};

export default Walkaway;
