import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Cadena from "../components/Common/modules/Cadena";

export const metadata: Metadata = {
  title: "Cadenas Falsas",
  twitter: {
    title: "Cadenas Falsas",
  },
  openGraph: {
    title: "Cadenas Falsas",
  },
};

export default function Falsas() {
  return (
    <Wrapper>
      <Cadena />
    </Wrapper>
  );
}
