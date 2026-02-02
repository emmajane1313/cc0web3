import { NextResponse } from "next/server";
import { AFIS, ARTE, TRANSMIT, VIDEOS } from "../lib/constantes";
import { SITE_ROUTES } from "../lib/siteRoutes";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3.com";
  const withTrailingSlash = (path: string) =>
    path.endsWith("/") ? path : `${path}/`;

  const imagesXml = () =>
    SITE_ROUTES.map((route) => {
      const imagesByPath: Record<string, { title: string; src: string }[]> = {
        "/": [
          ...route.images,
          ...AFIS.map((item) => ({
            title: item.titulo,
            src: item.imagen,
          })),
        ],
        "/arte": ARTE.map((item) => ({
          title: item.alt,
          src: item.src,
        })),
        "/video": VIDEOS.map((item) => ({
          title: item.titulo,
          src: item.imagen,
        })),
        "/transmissions": TRANSMIT.map((item) => ({
          title: item.titulo,
          src: item.imagen,
        })),
        "/noticias": [
          {
            title: "Noticias",
            src: "/images/compman.png",
          },
        ],
        "/rugpulls": [
          {
            title: "Rugpulls",
            src: "/images/rugpulls.png",
          },
          {
            title: "Alfombras Largas",
            src: "/images/alfombras.png",
          },
        ],
        "/roots": [
          {
            title: "Roots",
            src: "/images/chica.png",
          },
          {
            title: "Aaron Swartz",
            src: "/images/aaron.png",
          },
          {
            title: "Len Sassaman",
            src: "/images/len.png",
          },
          {
            title: "Ilya Zhitomirskiy",
            src: "/images/ilya.png",
          },
        ],
        "/privacy-and-autonomy": [
          {
            title: "Roman Matroids",
            src: "https://chromadin.infura-ipfs.io/ipfs/QmbDFF5XGfa4mimHoRjkSM67YM6EBFLxZw2PimxSQQ1gdF",
          },
        ],
        "/myth-vs-reality": [
          {
            title: "Where Did All the Cypherpunks Go - Myth Vs Reality",
            src: "https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm",
          },
        ],
      };

      const routePath = route.path || "/";
      const locPath = routePath === "" ? "/" : routePath;
      const images = imagesByPath[routePath] || route.images;

      return `
      <url>
        <loc>${baseUrl}${withTrailingSlash(locPath)}</loc>
        ${images
          .map(
            (img) => ` <image:image>
            <image:loc>${baseUrl}${img.src}</image:loc>
            <image:title><![CDATA[${img.title} | Emma-Jane MacKinnon-Lee]]></image:title>
            <image:caption><![CDATA[${img.title} | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>`
          )
          .join("")}
      </url>
        `;
    }).join("");

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
