import { Metadata } from "next";
import Wrapper from "../components/Common/modules/Wrapper";
import { DEFAULT_UPLOAD_DATE } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
  description: "For the mailing list moderators.",
  alternates: {
    canonical: "/noticias/",
  },
  keywords: ["Emma-Jane MacKinnon-Lee", "Web3 News", "Noticias Web3", "CC0"],
  authors: [{ name: "Emma-Jane MacKinnon-Lee" }],
  twitter: {
    card: "summary_large_image",
    title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
  openGraph: {
    title: "Noticias - CC0 Web3 by Emma-Jane MacKinnon-Lee",
    description: "For the mailing list moderators.",
  },
};

export default function Noticias() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Noticias loop video",
    description: "Loop video for the Noticias page by Emma-Jane MacKinnon-Lee.",
    thumbnailUrl: "https://cc0web3.com/images/compman.png",
    contentUrl: "https://cc0web3.com/videos/compman.mp4",
    embedUrl: "https://cc0web3.com/noticias/",
    uploadDate: DEFAULT_UPLOAD_DATE,
    duration: "PT30S",
    creator: {
      "@type": "Person",
      name: "Emma-Jane MacKinnon-Lee",
      url: "https://emmajanemackinnonlee.com/",
    },
    license: "https://creativecommons.org/publicdomain/zero/1.0/",
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="relative w-full h-fit flex flex-col gap-2 lg:order-2 order-1">
        <div className="my-4 bg-red-900 text-center items-center justify-center w-full text-yellow-300 text-lg font-bold">
          «« Real-Time Autonomous Visual Layers »»
        </div>
        <div className="flex relative w-full h-fit">
          <video
            draggable={false}
            poster={"/images/compman.png"}
            className="object-contain flex relative w-full h-40"
            autoPlay
            loop
            muted
            title="Noticias loop video"
            aria-label="Noticias loop video"
          >
            <source src={"/videos/compman.mp4"} />
          </video>
        </div>
        <div className="relative w-full h-fit flex text-yellow-200 text-center text-sm justify-center items-center">
          <div className="relative w-full lg:w-1/2 flex items-start bg-red-900/60 p-2 h-[20rem] overflow-y-scroll">
            People assume that if you care about privacy, you must have
            something to hide, but that's not what it's about.
            <br />
            <br />
            It's about having the right to decide what parts of yourself you
            reveal. It's about selectively encrypting based on where you are,
            who you're speaking with, what mood you're in, how you want to
            present yourself. Moment by moment, context by context—without
            surrendering your essence to surveillance or algorithmic profiling.
            <br />
            <br />
            In increasingly video-centric spaces, presence is no longer neutral.
            Your background, lighting, face, body language—every frame is data.
            And for many, that exposure is not just uncomfortable, it's
            dangerous.
            <br />
            <br />
            Real-time anonymous visual layers offer a radical alternative.
            They’re not filters in the superficial sense; they’re interfaces of
            sovereignty. Tools that allow you to encrypt your visual identity in
            real time—modulating who you are, how much you show, how you choose
            to be seen.
            <br />
            <br />
            It’s not about hiding. It’s about sculpting presence. About being
            able to show up as a symbol, a construct, a mask, or nothing at all.
            About transforming a camera feed into an intentional performance of
            identity.
            <br />
            <br />
            This kind of flexibility isn’t trivial. For many, it’s the only way
            to participate in public discourse, education, remote work, or
            creative collaboration without compromising safety. In zones of
            repression, these visual layers can be as vital as VPNs. They’re not
            just tools of aesthetic self-expression—they’re veils of protection,
            escape routes, cloaks against algorithmic violence.
            <br />
            <br />
            It's a key to slipping through the dark forest unseen, past the
            enemies that lurk in the shadows. And I'm talking about everyone
            fighting for their basic rights—people in Ukraine where revealing
            their identity could mean their life, activists in Hong Kong,
            journalists in authoritarian states, women trying to get an
            education in places where that's been made illegal.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
