"use client";

import { INFURA_GATEWAY_INTERNAL, TRANSMIT } from "@/app/lib/constantes";
import formatTime from "@/app/lib/helpers/formatTime";
import Image from "next/image";
import { FormEvent } from "react";
import useTransmit from "../hooks/useTransmit";

function Transmit() {
  const {
    handlePlay,
    vid,
    video,
    play,
    handleSeek,
    handleVolumeChange,
    volume,
    setVolumeOpen,
    volumeOpen,
    progressRef,
    currentTime,
    setVideo,
  } = useTransmit();
  const videoTitle = video?.titulo || "CC0 Web3 transmission video";

  return (
    <div className="relative   lg:order-2 order-1 w-full h-fit flex items-center justify-center">
      <div className="relative w-5/6 flex h-fit flex-col gap-3  items-start justify-center">
        <div className="relative w-fit h-fit flex flex-wrap flex-row gap-2">
          {TRANSMIT.map((tra, i) => (
            <div
              key={i}
              className="relative w-fit border border-yellow-200 cursor-pointer hover:opacity-60 h-fit flex"
              onClick={() => setVideo(tra)}
            >
              <div className="relative w-20 h-12 flex">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={tra?.imagen}
                  alt={tra?.titulo}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full text-left h-fit text-yellow-400 font-wood">
          {video?.titulo}
        </div>
        <div className="relative w-full items-center justify-center h-full flex">
          {video && (
            <video
              key={video?.titulo}
              ref={vid}
              className="relative border border-yellow-400 flex object-cover w-full h-[20rem] sm:h-[30rem]"
              draggable={false}
              poster={video?.imagen}
              title={videoTitle}
              aria-label={videoTitle}
            >
              <source src={video?.video} />
            </video>
          )}
        </div>
        <div className="relative w-full h-fit flex flex-row gap-2 items-center justify-between">
          <div className="relative w-fit h-full flex items-center font-wood text-xs text-white">
            <span className="text-red-600">{formatTime(currentTime || 0)}</span>
            /
            <span className="text-yellow-300">
              {formatTime(vid?.current?.duration || 0)}
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
                  ((currentTime || 0) / (vid?.current?.duration || 0)) * 100
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

export default Transmit;
