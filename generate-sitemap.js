import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://alex-rossignol.fr",
});

const urls = [
  { url: "/", changefreq: "yearly", priority: 0.3 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  {
    url: "/projects/web/0",
    changefreq: "monthly",
    priority: 0.5,
    video: [
      {
        content_loc: "https://youtube.com/embed/XwS-7c9GzNI",
        title: "Street Art Hunter",
        description: "Démonstration du site web full stack street art hunter",
        thumbnail_loc:
          "https://i9.ytimg.com/vi_webp/XwS-7c9GzNI/mqdefault.webp?v=672628ab&sqp=CKzQmLkG&rs=AOn4CLC-1oSz92GYNn-nlfkczwdwMqFdeg",
        duration: 130,
      },
    ],
  },
  {
    url: "/projects/web/1",
    changefreq: "monthly",
    priority: 0.5,
    video: [
      {
        content_loc: "https://youtube.com/embed/XKqZp2TdxZ8",
        title: "RoyalBlue",
        description: "Démonstration du site web full stack RoyalBlue",
        thumbnail_loc:
          "https://i9.ytimg.com/vi_webp/XKqZp2TdxZ8/mqdefault.webp?v=67262a47&sqp=CNjSmLkG&rs=AOn4CLB1fZMuz9AlxBmre9TLe0VK4TVsAA",
        duration: 42,
      },
    ],
  },
  {
    url: "/projects/mobile/0",
    changefreq: "monthly",
    priority: 0.5,
    video: [
      {
        content_loc: "https://youtube.com/embed/pyyyKSBrlU0",
        title: "WildWeather",
        description:
          "Démonstration de l'applications mobile IOS et android Wild Weather",
        thumbnail_loc:
          "https://i9.ytimg.com/vi/pyyyKSBrlU0/mqdefault.jpg?v=671bb98d&sqp=CNjSmLkG&rs=AOn4CLCVZ0wps4Lg4EJWuv-APxsTVAazSQ",
        duration: 115,
      },
    ],
  },
  {
    url: "/projects/mobile/1",
    changefreq: "monthly",
    priority: 0.5,
    video: [
      {
        content_loc: "https://www.youtube.com/embed/yH9_UERd5ZE",
        title: "BudgetMade",
        description:
          "Démonstration de l'applications mobile IOS et android BudgetMade",
        thumbnail_loc:
          "https://i9.ytimg.com/vi/yH9_UERd5ZE/mqdefault.jpg?v=671bb9af&sqp=CITVmLkG&rs=AOn4CLAxhvim1s_A2P1FJ4Uz6C4o_Tjrdg",
        duration: 87,
      },
    ],
  },
  { url: "/about", changefreq: "monthly", priority: 0.3 },
  { url: "/contact", changefreq: "monthly", priority: 1.0 },
  { url: "/CV-New.pdf", changefreq: "yearly", priority: 0.9 },
];

urls.forEach((url) => sitemap.write(url));

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
});
