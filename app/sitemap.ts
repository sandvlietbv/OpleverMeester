import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oplevermeester.nl";

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/woningontruiming-groningen`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/huis-leeghalen-na-overlijden`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
