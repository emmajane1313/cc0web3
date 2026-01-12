import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Reality from "../components/Common/modules/Reality";

export const metadata: Metadata = {
  title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/myth-vs-reality/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Myth", "Reality", "Web3"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Myth Vs Reality - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Myth() {
  return (
    <Wrapper>
      <Reality />
    </Wrapper>
  );
}
