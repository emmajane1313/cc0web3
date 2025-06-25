import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import DeadEnd from "../components/Common/modules/DeadEnd";

export const metadata: Metadata = {
    title: "Manifestos & Dead Ends",
  twitter: {
      title: "Manifestos & Dead Ends",
  },
  openGraph: {
    title: "Manifestos & Dead Ends",
  },
};

export default function Manifesto() {
  return (
    <Wrapper>
      <DeadEnd />
    </Wrapper>
  );
}
