import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Auto from "../components/Common/modules/Auto";

export const metadata: Metadata = {
  title: "Privacy & Autonomy",
  twitter: {
    title: "Privacy & Autonomy",
  },
  openGraph: {
    title: "Privacy & Autonomy",
  },
};

export default function Privacy() {
  return (
    <Wrapper>
      <Auto />
    </Wrapper>
  );
}
