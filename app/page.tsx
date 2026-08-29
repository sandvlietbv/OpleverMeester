import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ForWhom from "@/components/ForWhom";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OpleverMeester",
  description: "OpleverMeester helpt woningen, bedrijfspanden, kantoren en opslagruimtes ontruimen, bezemschoon en opleverklaar maken.",
  telephone: "+31645316851",
  url: "https://oplevermeester.nl",
  areaServed: "NL",
  priceRange: "€€",
};

export default function HomePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} /><Header /><main><Hero /><Contact /><Trust /><Services /><ForWhom /><WhyUs /><Process /><Reviews /><FAQ /></main><Footer /></>;
}
