import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Transmit from "../components/Videos/modules/Transmit";

export const metadata: Metadata = {
  title: "Transmissions",
  twitter: {
    title: "Transmissions",
  },
  openGraph: {
    title: "Transmissions",
  },
};

export default function Transmissions() {
  return (
    <Wrapper>
      <Transmit />
    </Wrapper>
  );
}
