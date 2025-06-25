import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import CC0 from "../components/Common/modules/CC0";

export const metadata: Metadata = {
  title: "CC0 In Practice",
  twitter: {
    title: "CC0 In Practice",
  },
  openGraph: {
    title: "CC0 In Practice",
  },
};

export default function Practice() {
  return (
    <Wrapper>
      <CC0 />
    </Wrapper>
  );
}
