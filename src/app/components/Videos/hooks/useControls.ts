import {
  FormEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ModalContext } from "@/app/providers";

const useControls = () => {
  const context = useContext(ModalContext);
  const progressRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(1);
  const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleSeek = (
    e: MouseEvent<HTMLDivElement, MouseEvent<Element, MouseEvent>>
  ) => {
    const progressRect = e.currentTarget.getBoundingClientRect();
    const seekPosition = (e.clientX - progressRect.left) / progressRect.width;

    if (context?.vid.current)
      context.vid.current.currentTime =
        seekPosition * context.vid.current.duration;
  };

  const handleVolumeChange = (e: FormEvent) => {
    if (context?.vid.current)
      context.vid.current.volume = (e.target as HTMLFormElement).value;
    setVolume(parseFloat((e.target as HTMLFormElement).value));
  };

  useEffect(() => {
    const video = context?.vid?.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);

    video.addEventListener("timeupdate", updateTime);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, [context?.vid]);

  return {
    handleSeek,
    handleVolumeChange,
    volume,
    setVolumeOpen,
    volumeOpen,
    progressRef,
    currentTime,
  };
};

export default useControls;
