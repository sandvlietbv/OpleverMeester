import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oplevermeester.nl";

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/woningontruiming`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/woningontruiming-groningen`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/woningontruiming-friesland`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/woningontruiming-drenthe`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/huis-leeghalen-na-overlijden`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/huurwoning-opleveren`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/spoedontruiming`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/seniorenverhuizing-en-oplevering`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/bedrijfsontruiming`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/kosten-woningontruiming`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/vloer-verwijderen-oplevering`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/zakelijk/bewindvoerders-en-curatoren`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/zakelijk/bewindvoerders-en-curatoren/woning-opleveren`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/zakelijk/vastgoedbeheer-en-corporaties`, changeFrequency: "weekly", priority: 0.85 },
  ];
}
