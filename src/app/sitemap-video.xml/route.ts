import { NextResponse } from "next/server";
import { AFIS, DEFAULT_UPLOAD_DATE, TRANSMIT, VIDEOS } from "../lib/constantes";

type MediaWithAssets = {
  video: string;
  imagen: string;
  titulo: string;
  contenido?: string;
};

const toAbsolute = (baseUrl: string, url: string) =>
  url.startsWith("/") ? `${baseUrl}${url}` : url;

const hasVideoAssets = (video: {
  video?: string;
  imagen?: string;
  titulo: string;
  contenido?: string;
}): video is MediaWithAssets => Boolean(video.video && video.imagen);
const withTrailingSlash = (url: string) => (url.endsWith("/") ? url : `${url}/`);

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3.com";

  const entries: {
    loc: string;
    videos: {
      title: string;
      description: string;
      thumbnail: string;
      content: string;
      uploadDate: string;
    }[];
  }[] = [
    {
      loc: withTrailingSlash(`${baseUrl}/`),
      videos: AFIS.filter(hasVideoAssets).map(
        (video) => ({
          title: video.titulo,
          description: "Loop video from CC0 Web3 by Emma-Jane MacKinnon-Lee.",
          thumbnail: toAbsolute(baseUrl, video.imagen),
          content: toAbsolute(baseUrl, video.video),
          uploadDate: DEFAULT_UPLOAD_DATE,
        })
      ),
    },
    {
      loc: withTrailingSlash(`${baseUrl}/noticias`),
      videos: [
        {
          title: "Noticias loop video",
          description: "Loop video for the Noticias page by Emma-Jane MacKinnon-Lee.",
          thumbnail: `${baseUrl}/images/compman.png`,
          content: `${baseUrl}/videos/compman.mp4`,
          uploadDate: DEFAULT_UPLOAD_DATE,
        },
      ],
    },
    {
      loc: withTrailingSlash(`${baseUrl}/rugpulls`),
      videos: [
        {
          title: "Rugpulls loop video",
          description: "Loop video for the Rugpulls page by Emma-Jane MacKinnon-Lee.",
          thumbnail: `${baseUrl}/images/rugpulls.png`,
          content: `${baseUrl}/videos/rugpulls.mp4`,
          uploadDate: DEFAULT_UPLOAD_DATE,
        },
      ],
    },
    {
      loc: withTrailingSlash(`${baseUrl}/roots`),
      videos: [
        {
          title: "Roots loop video",
          description: "Loop video for the Roots page by Emma-Jane MacKinnon-Lee.",
          thumbnail: `${baseUrl}/images/chica.png`,
          content: `${baseUrl}/videos/chica.mp4`,
          uploadDate: DEFAULT_UPLOAD_DATE,
        },
      ],
    },
    {
      loc: withTrailingSlash(`${baseUrl}/video`),
      videos: VIDEOS.filter(hasVideoAssets).map(
        (video) => ({
          title: video.titulo,
          description:
            video.contenido || "CC0 Web3 video by Emma-Jane MacKinnon-Lee.",
          thumbnail: toAbsolute(baseUrl, video.imagen),
          content: toAbsolute(baseUrl, video.video),
          uploadDate: DEFAULT_UPLOAD_DATE,
        })
      ),
    },
    {
      loc: withTrailingSlash(`${baseUrl}/transmissions`),
      videos: TRANSMIT.filter(hasVideoAssets).map(
        (video) => ({
          title: video.titulo,
          description: "CC0 Web3 transmission by Emma-Jane MacKinnon-Lee.",
          thumbnail: toAbsolute(baseUrl, video.imagen),
          content: toAbsolute(baseUrl, video.video),
          uploadDate: DEFAULT_UPLOAD_DATE,
        })
      ),
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  ${entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.loc}</loc>
    ${entry.videos
      .map(
        (video) => `
    <video:video>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
      <video:content_loc>${video.content}</video:content_loc>
      <video:publication_date>${video.uploadDate}</video:publication_date>
    </video:video>`
      )
      .join("")}
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
