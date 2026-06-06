import { RefObject, useContext, useEffect, useState } from "react";
import { ModalContext } from "@/app/providers";

const useVideo = (
  matroidVid?: RefObject<HTMLVideoElement | null>,
  storageKey?: string,
) => {
  const contexto = useContext(ModalContext);
  const [play, setPlay] = useState<boolean>(false);

  const handlePlay = async (val: boolean) => {
    try {
      if (val) {
        await (matroidVid ? matroidVid : contexto?.vid)?.current?.play();
      } else {
        (matroidVid ? matroidVid : contexto?.vid)?.current?.pause();
      }
      if (matroidVid) {
        setPlay(val);
      } else {
        contexto?.setPlay(val);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const video = (matroidVid ? matroidVid : contexto?.vid)?.current;
    const current = storageKey || contexto?.video?.titulo;

    if (!video || !current) return;

    const timestampKey = "timestamp_" + current;
    const time = parseFloat(localStorage.getItem(timestampKey) || "0");

    const restoreTime = async () => {
      if (!isNaN(time) && time > 0) {
        video.currentTime = time;
        if (matroidVid ? play : contexto?.play) {
          await video.play();
        }
      }
    };

    video.addEventListener("loadedmetadata", restoreTime);

    const saveTime = () => {
      localStorage.setItem(timestampKey, String(video.currentTime));
    };
    video.addEventListener("timeupdate", saveTime);

    return () => {
      video.removeEventListener("loadedmetadata", restoreTime);
      video.removeEventListener("timeupdate", saveTime);
    };
  }, [contexto?.vid, contexto?.video?.titulo, matroidVid, storageKey]);

  return {
    handlePlay,
    play,
  };
};

export default useVideo;
