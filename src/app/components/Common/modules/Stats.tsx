import { useContext } from "react";
import useStats from "../hooks/useStats";
import { ModalContext } from "@/app/providers";

function Stats() {
  const contexto = useContext(ModalContext);
  useStats();
  return (
    <div className="bg-black text-yellow-400 flex w-full md:w-fit font-mono shadow-xl text-xs">
      <div className="relative w-full md:w-60 h-full flex flex-col gap-6 justify-between">
        <div className="bg-red-800 text-white flex p-2">CHAIN CORE »</div>
        <div className="gap-3 w-full leading-snug h-full flex flex-col">
          {contexto?.data.supply == null ? (
            <div className="relative w-full h-full bg-red-700/20 animate-pulse"></div>
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-yellow-500/20 pb-1">
                <span className="opacity-70">Total ETH</span>
                <span className="font-bold">
                  {contexto?.data.supply?.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-yellow-500/20 pb-1">
                <span className="opacity-70">ETH / USD</span>
                <span className="font-bold">
                  ${contexto?.data.priceUsd?.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-yellow-500/20 pb-1">
                <span className="opacity-70">ETH / BTC</span>
                <span className="font-bold">
                  {contexto?.data.priceBtc?.toFixed(8)} BTC
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-yellow-500/20 pb-1">
                <span className="opacity-70">Nodes Online</span>
                <span className="font-bold">{contexto?.data.nodes}</span>
              </div>
            </>
          )}
        </div>

        <div className="text-red-500 text-sm uppercase tracking-wide pt-2 border-t border-yellow-600/20 h-fit flex">
          Source: Etherscan v2.
        </div>
        <div className="h-fit w-full flex text-xs">
          The unbearable weight of seeing too much. Pause here. Because their
          stories still sit in the stack of unsolved problems. Aaron saw it.
          JSTOR was a symptom. Len saw it too. That people would adapt to opaque
          systems so well, they’d forget how to ask what they were agreeing to.
          That we’d optimize ourselves into prisons we couldn’t even name.
        </div>
      </div>
    </div>
  );
}

export default Stats;
