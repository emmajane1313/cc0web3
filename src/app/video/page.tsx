import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Main from "../components/Videos/modules/Main";

export const metadata: Metadata = {
  title: "Vídeo",
  twitter: {
    title: "Vídeo",
  },
  openGraph: {
    title: "Vídeo",
  },
};

export default function Video() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}
