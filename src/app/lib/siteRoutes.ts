export type SiteRoute = {
  path: string;
  images: { src: string; title: string }[];
};

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "",
    images: [
      {
        src: "/images/neoroman.png",
        title: "Disappear quietly",
      },
      {
        src: "/images/wisely.png",
        title: "Choose Wisely",
      },
      {
        src: "/images/forest.png",
        title: "In the Dark Forest",
      },
    ],
  },
  {
    path: "/video",
    images: [],
  },
  {
    path: "/transmissions",
    images: [],
  },
  {
    path: "/roots",
    images: [],
  },
  {
    path: "/noticias",
    images: [],
  },
  {
    path: "/myth-vs-reality",
    images: [],
  },
  {
    path: "/manifestos-and-dead-ends",
    images: [],
  },
  {
    path: "/cc0-in-practice",
    images: [],
  },
  {
    path: "/cadenas-falsas",
    images: [],
  },
  {
    path: "/arte",
    images: [],
  },
  {
    path: "/privacy-and-autonomy",
    images: [],
  },
  {
    path: "/rugpulls",
    images: [],
  },
];
