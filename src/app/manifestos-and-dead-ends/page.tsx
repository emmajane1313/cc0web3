import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import DeadEnd from "../components/Common/modules/DeadEnd";

export const metadata: Metadata = {
  title: "Manifestos & Dead Ends - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/manifestos-and-dead-ends/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Manifestos", "Web3", "F3Manifesto"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Manifestos & Dead Ends - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Manifestos & Dead Ends - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Manifesto() {
  return (
    <Wrapper>
      <DeadEnd />
    </Wrapper>
  );
}
