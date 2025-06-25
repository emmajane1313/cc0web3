import { NextResponse } from "next/server";
import { ARTE } from "../lib/constantes";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3.com";

  const imagesXml = () =>
    [
      {
        imagenes: [
          {
            portada: "/images/neoroman.png",
            titulo: "Disappear quietly",
          },
          {
            portada: "/images/wisely.png",
            titulo: "Choose Wisely",
          },
          {
            portada: "/images/forest.png",
            titulo: "In the Dark Forest",
          },
        ],
        enlace: "",
      },
      {
        imagenes: [],
        enlace: "video/",
      },
      {
        imagenes: [],
        enlace: "transmissions/",
      },
      {
        imagenes: [],
        enlace: "roots/",
      },
      {
        imagenes: [],
        enlace: "noticias/",
      },
      {
        imagenes: [],
        enlace: "myth-vs-reality/",
      },
      {
        imagenes: [],
        enlace: "manifestos-and-dead-ends/",
      },
      {
        imagenes: [],
        enlace: "cc0-in-practice/",
      },
      {
        imagenes: [],
        enlace: "cadenas-falsas/",
      },
      {
        imagenes: ARTE.map((item) => ({
          titulo: item?.alt,
          portada: item?.src,
        })),
        enlace: "arte/",
      },
      {
        imagenes: [],
        enlace: "privacy-and-autonomy/",
      },
      {
        imagenes: [],
        enlace: "rugpulls/",
      },
    ]
      .map(
        (item) =>
          `
      <url>
        <loc>${baseUrl}/${item.enlace}</loc>
        ${item.imagenes?.map(
          (img) => ` <image:image>
            <image:loc>${baseUrl}${img.portada}</image:loc>
            <image:title><![CDATA[${img.titulo} | Emma-Jane MacKinnon-Lee]]></image:title>
            <image:caption><![CDATA[${img.titulo} | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>`
        )}
       
 
      </url>
        `
      )
      .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  ${imagesXml()}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
