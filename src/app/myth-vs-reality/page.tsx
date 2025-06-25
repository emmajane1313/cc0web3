import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Reality from "../components/Common/modules/Reality";

export const metadata: Metadata = {
  title: "Myth Vs Reality",
  twitter: {
    title: "Myth Vs Reality",
  },
  openGraph: {
    title: "Myth Vs Reality",
  },
};

export default function Myth() {
  return (
    <Wrapper>
      <Reality />
    </Wrapper>
  );
}
