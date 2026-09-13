import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata:Metadata={title:"Algemene voorwaarden",description:"Algemene voorwaarden van OpleverMeester.",alternates:{canonical:"/algemene-voorwaarden"}};

const sections=[
["1. Wie wij zijn","OpleverMeester is een eenmanszaak gevestigd aan Lijsterbeslaan 43 in Groningen, ingeschreven bij de Kamer van Koophandel onder nummer 96147067. Contact: info@oplevermeester.nl en 06 45 31 68 51."],
["2. Offerte en overeenkomst","Een aanvraag of prijsindicatie op de website is nog geen definitieve overeenkomst. Voor uitvoering ontvangt u duidelijkheid over de afgesproken werkzaamheden, planning en projectprijs. De overeenkomst ontstaat wanneer u met het aanbod instemt."],
["3. Wat is inbegrepen","We voeren uit wat in de offerte of opdrachtbevestiging staat. Werkzaamheden, afvoer, materialen of andere posten die niet zijn afgesproken worden niet zonder overleg toegevoegd."],
["4. Wijzigingen tijdens de opdracht","Blijkt tijdens de uitvoering dat de situatie wezenlijk anders is dan vooraf kon worden vastgesteld, dan bespreken we eerst de gevolgen voor werk, planning en prijs. Extra werkzaamheden worden pas uitgevoerd na akkoord, behalve wanneer direct handelen noodzakelijk is voor veiligheid of om schade te beperken."],
["5. Planning en toegang","De klant zorgt dat de afgesproken locatie op het afgesproken moment toegankelijk is en meldt relevante bijzonderheden vooraf. We doen ons best om de afgesproken planning te halen en melden het zo snel mogelijk wanneer omstandigheden buiten onze invloed tot wijziging leiden."],
["6. Betaling","Betaaltermijn en betaalwijze staan op de offerte of factuur. Bij een betalingsachterstand volgen we de wettelijke regels die gelden voor de betreffende klant."],
["7. Annuleren of verplaatsen","Wilt u een opdracht annuleren of verplaatsen, neem dan zo snel mogelijk contact op. We bekijken welke werkzaamheden of aantoonbare kosten al zijn gemaakt en welke wettelijke rechten voor u gelden. Voor consumenten blijven wettelijke consumentenrechten altijd van toepassing."],
["8. Zorgvuldigheid en aansprakelijkheid","We voeren werkzaamheden zorgvuldig uit. Als er schade ontstaat, meld die dan zo snel mogelijk zodat we de situatie kunnen beoordelen. Wettelijke regels over aansprakelijkheid blijven van toepassing; deze voorwaarden beperken geen rechten die volgens de wet niet mogen worden beperkt."],
["9. Klachten","Bent u niet tevreden, meld dit dan via info@oplevermeester.nl of 06 45 31 68 51. We proberen eerst samen tot een praktische oplossing te komen."],
["10. Toepasselijk recht","Op overeenkomsten met OpleverMeester is Nederlands recht van toepassing. Dwingende wettelijke regels voor consumenten blijven onverkort gelden."],
];

export default function Page(){return <><main className="bg-white"><div className="container-om max-w-4xl py-14 md:py-20"><Link href="/" className="font-display text-lg font-semibold text-navy">Oplever<span className="text-orange">Meester</span></Link><p className="mt-12 text-sm font-semibold uppercase tracking-[.12em] text-orange">Juridisch</p><h1 className="mt-2 font-display text-4xl font-semibold text-navy">Algemene voorwaarden</h1><p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 13 september 2026.</p><div className="mt-10 space-y-8">{sections.map(([t,b])=><section key={t}><h2 className="font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 leading-relaxed text-muted">{b}</p></section>)}</div></div></main><Footer/></>}
