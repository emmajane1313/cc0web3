import { useContext, useEffect } from "react";
import { ModalContext } from "@/app/providers";

const useVideo = () => {
  const contexto = useContext(ModalContext);

  const handlePlay = async (val: boolean) => {
    try {
      if (val) {
        await contexto?.vid?.current?.play();
      } else {
        contexto?.vid?.current?.pause();
      }
      contexto?.setPlay(val);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const video = contexto?.vid?.current;
    const current = contexto?.video?.titulo;

    if (!video || !current) return;

    const time = parseFloat(
      localStorage.getItem("timestamp_" + current) || "0"
    );

    const restoreTime = async () => {
      if (!isNaN(time) && time > 0) {
        video.currentTime = time;
        if (contexto?.play) {
          await video.play();
        }
      }
    };

    video.addEventListener("loadedmetadata", restoreTime);

    const saveTime = () => {
      localStorage.setItem("timestamp_" + current, String(video.currentTime));
    };
    video.addEventListener("timeupdate", saveTime);

    return () => {
      video.removeEventListener("loadedmetadata", restoreTime);
      video.removeEventListener("timeupdate", saveTime);
    };
  }, [contexto?.vid, contexto?.video?.titulo]);

  return {
    handlePlay,
  };
};

export default useVideo;
