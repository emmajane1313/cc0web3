import { NextResponse } from "next/server";
import { ARTE } from "../lib/constantes";
import { SITE_ROUTES } from "../lib/siteRoutes";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cc0web3.com";

  const imagesXml = () =>
    SITE_ROUTES.map((route) => {
      const isArte = route.path === "/arte";
      const images = isArte
        ? ARTE.map((item) => ({
            title: item.alt,
            src: item.src,
          }))
        : route.images;

      return `
      <url>
        <loc>${baseUrl}${route.path}</loc>
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
