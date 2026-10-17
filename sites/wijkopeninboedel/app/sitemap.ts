import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url:"https://wijkopeninboedel.nl", changeFrequency:"monthly", priority:1 }]; }
