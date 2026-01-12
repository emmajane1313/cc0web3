import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import Cadena from "../components/Common/modules/Cadena";

export const metadata: Metadata = {
  title: "Cadenas Falsas - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/cadenas-falsas/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Cadenas Falsas", "Blockchain", "Web3"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Cadenas Falsas - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Cadenas Falsas - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Falsas() {
  return (
    <Wrapper>
      <Cadena />
    </Wrapper>
  );
}
