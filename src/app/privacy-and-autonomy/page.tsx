import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Auto from "../components/Common/modules/Auto";

export const metadata: Metadata = {
  title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  keywords: ["Emma-Jane MacKinnon-Lee", "Privacy", "Autonomy", "Web3", "Decentralization"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Privacy & Autonomy - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Privacy() {
  return (
    <Wrapper>
      <Auto />
    </Wrapper>
  );
}
