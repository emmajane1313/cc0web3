import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Walkaway from "../components/Common/modules/Walkaway";

export const metadata: Metadata = {
  title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/roots/",
  },
  keywords: [
    "Emma-Jane MacKinnon-Lee",
    "Aaron Swartz",
    "Len Sassaman",
    "Ilya Zhitomirskiy",
    "Open Source Roots",
  ],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Roots - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Roots() {
  return (
    <Wrapper>
      <Walkaway />
    </Wrapper>
  );
}
