import type { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
  const b="https://www.oplevermeester.nl";
  const d=new Date("2026-09-13");
  return [
    ["",1],["/woningontruiming",.95],["/woningontruiming-groningen",.9],["/woningontruiming-friesland",.9],["/woningontruiming-drenthe",.9],["/huis-leeghalen-na-overlijden",.9],["/huurwoning-opleveren",.9],["/inspectierapport-woning-wat-nu",.9],["/spoedontruiming",.9],["/seniorenverhuizing-en-oplevering",.85],["/bedrijfsontruiming",.85],["/kosten-woningontruiming",.9],["/vloer-verwijderen-oplevering",.8],["/zakelijk/bewindvoerders-en-curatoren",.85],["/zakelijk/bewindvoerders-en-curatoren/woning-opleveren",.85],["/zakelijk/vastgoedbeheer-en-corporaties",.85],["/over-ons",.8],["/contact",.8],["/privacy",.5],["/algemene-voorwaarden",.4],["/cookies",.4]
  ].map(([path,priority])=>({url:`${b}${path}`,lastModified:d,changeFrequency:"weekly" as const,priority:Number(priority)}));
}
