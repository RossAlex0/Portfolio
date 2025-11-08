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
          "https://i9.ytimg.com/vi_webp/XwS-7c9GzNI/mqdefault.webp?v=672628ab&sqp=CKjrj7sG&rs=AOn4CLBfOyh9o1J1dOrnEZ8jGLgK61ZbPg",
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
          "https://i9.ytimg.com/vi_webp/XKqZp2TdxZ8/mq2.webp?sqp=CKjrj7sG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACtAWKAgwIABABGGUgXig3MA8=&rs=AOn4CLCVoYCG7tt7aqvSWsMK9J5WDrlIcA",
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
        duration: 115,
      },
    ],
  },
  {
    url: "/projects/web/2",
    changefreq: "monthly",
    priority: 0.5,
    video: [
      {
        content_loc: "https://youtube.com/embed/qqqlfxwVqqE",
        title: "Porfolio client",
        description: "Démonstration du portfolio client réalisé",
        thumbnail_loc:
          "https://i9.ytimg.com/vi_webp/qqqlfxwVqqE/mq2.webp?sqp=CPzoj7sG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACtAWKAgwIABABGH8gKSgvMA8=&rs=AOn4CLDNRfg1AuidxIdNKsndyPwEiXz-eA",
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
        duration: 87,
      },
    ],
  },
  { url: "/about", changefreq: "monthly", priority: 0.3 },
  { url: "/contact", changefreq: "monthly", priority: 1.0 },
  { url: "/CV.pdf", changefreq: "monthly", priority: 0.9 },
];

urls.forEach((url) => sitemap.write(url));

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
});
