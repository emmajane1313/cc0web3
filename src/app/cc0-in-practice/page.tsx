import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import CC0 from "../components/Common/modules/CC0";

export const metadata: Metadata = {
  title: "CC0 In Practice - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  keywords: ["Emma-Jane MacKinnon-Lee", "CC0", "Open Source", "Creative Commons"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "CC0 In Practice - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "CC0 In Practice - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Practice() {
  return (
    <Wrapper>
      <CC0 />
    </Wrapper>
  );
}
