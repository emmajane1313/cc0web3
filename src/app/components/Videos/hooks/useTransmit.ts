import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { Media } from "../../Common/types/common.types";
import { TRANSMIT } from "@/app/lib/constantes";

const useTransmit = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [video, setVideo] = useState<Media>(TRANSMIT[0]);
  const vid = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(1);
  const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleSeek = (
    e: MouseEvent<HTMLDivElement, MouseEvent<Element, MouseEvent>>
  ) => {
    const progressRect = e.currentTarget.getBoundingClientRect();
    const seekPosition = (e.clientX - progressRect.left) / progressRect.width;

    if (vid.current)
      vid.current.currentTime = seekPosition * vid.current.duration;
  };

  const handleVolumeChange = (e: FormEvent) => {
    if (vid.current) vid.current.volume = (e.target as HTMLFormElement).value;
    setVolume(parseFloat((e.target as HTMLFormElement).value));
  };

  useEffect(() => {
    setCurrentTime(0);
  }, [video]);

  useEffect(() => {
    const videoElement = vid?.current;
    if (!videoElement) return;

    const updateTime = () => setCurrentTime(videoElement.currentTime);

    videoElement.addEventListener("timeupdate", updateTime);

    return () => {
      videoElement.removeEventListener("timeupdate", updateTime);
    };
  }, [vid, video]);

  const handlePlay = async (val: boolean) => {
    try {
      if (val) {
        await vid?.current?.play();
      } else {
        vid?.current?.pause();
      }
      setPlay(val);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return {
    handleSeek,
    handleVolumeChange,
    volume,
    setVolumeOpen,
    volumeOpen,
    progressRef,
    currentTime,
    handlePlay,
    vid,
    video,
    play,
    setVideo,
  };
};

export default useTransmit;
