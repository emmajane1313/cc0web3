import { ModalContext } from "@/app/providers";
import { useContext, useEffect } from "react";

const useStats = () => {
  const contexto = useContext(ModalContext);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/stats");
      const json = await res.json();
      contexto?.setData(json);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (contexto?.data?.priceBtc == null) {
      fetchData();
    }
  }, []);
};

export default useStats;
