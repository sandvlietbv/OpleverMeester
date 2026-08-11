import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "OpleverMeester",
  description:
    "OpleverMeester regelt het complete opleverproces van woningen en bedrijfspanden — ontruiming, opleverklaar maken en schoonmaak.",
  telephone: "+31645316851",
  url: "https://oplevermeester.nl",
  areaServed: "NL",
  priceRange: "€€",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="room-divider" />
        <Services />
        <ForWhom />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
