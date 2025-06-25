"use client";

import { Context, PublicClient, mainnet } from "@lens-protocol/client";
import {
  createContext,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Media } from "./components/Common/types/common.types";
import { AFIS, VIDEOS } from "./lib/constantes";

export const ModalContext = createContext<
  | {
      afis: Media;
      setAfis: (e: SetStateAction<Media>) => void;
      clienteLens: PublicClient<Context> | undefined;
      play: boolean;
      setPlay: (e: SetStateAction<boolean>) => void;
      video: Media;
      setVideo: (e: SetStateAction<Media>) => void;
      vid: RefObject<HTMLVideoElement | null>;
      data: {
        supply: number | null;
        priceBtc: number | null;
        priceUsd: number | null;
        nodes: number | null;
      };
      setData: (
        e: SetStateAction<{
          supply: number | null;
          priceBtc: number | null;
          priceUsd: number | null;
          nodes: number | null;
        }>
      ) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [play, setPlay] = useState<boolean>(false);
  const [clienteLens, setClienteLens] = useState<PublicClient | undefined>();
  const vid = useRef<HTMLVideoElement | null>(null);
  const [video, setVideo] = useState<Media>(VIDEOS[0]);
  const [afis, setAfis] = useState<Media>(AFIS[0]);
  const [data, setData] = useState<{
    supply: number | null;
    priceBtc: number | null;
    priceUsd: number | null;
    nodes: number | null;
  }>({
    supply: null,
    priceBtc: null,
    priceUsd: null,
    nodes: null,
  });

  useEffect(() => {
    if (!clienteLens) {
      setClienteLens(
        PublicClient.create({
          environment: mainnet,
          storage: window.localStorage,
        })
      );
    }
  }, []);

  return (
    <ModalContext.Provider
      value={{
        clienteLens,
        vid,
        video,
        setVideo,
        play,
        setPlay,
        afis,
        setAfis,
        data,
        setData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
