const FAQS = [
  ["Hoe snel kunnen jullie starten?", "Bij een korte deadline kijken we direct wat praktisch mogelijk is. Bel bij spoed rechtstreeks via 06 45 31 68 51."],
  ["Wat kost een ontruiming of oplevering?", "Onze vanafprijs van €595 inclusief btw is gebaseerd op een kleine, vrij nette ruimte met een lage vuilgraad. Elke woning en situatie is anders. De projectprijs hangt af van de omvang, hoeveelheid inboedel, vervuiling, bereikbaarheid en afgesproken werkzaamheden. Stuur via WhatsApp foto\u0027s voor een eerste beoordeling; daarna stemmen we de definitieve prijs af."],
  ["Werken jullie ook met spoed?", "Ja. Geef de deadline direct door of bel ons. We zeggen meteen wat haalbaar is en welke planning daarbij past."],
  ["Wat gebeurt er met de inboedel?", "We spreken vooraf af wat moet blijven, apart gezet moet worden of kan worden afgevoerd. Waar passend kiezen we voor hergebruik en gescheiden verwerking."],
  ["In welke regio's zijn jullie actief?", "Onze vaste focus is Noord-Nederland: Groningen, Friesland en Drenthe. Voor grotere opdrachten buiten de regio bekijken we per situatie wat mogelijk is."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function FAQ() {
  return <section id="faq" className="bg-surface-light py-24">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="container-om max-w-3xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Veelgestelde vragen</h2>
      <div className="mt-10 divide-y divide-surface-mid rounded-om border border-surface-mid bg-white">
        {FAQS.map(([q, a]) => <details key={q} className="group"><summary className="cursor-pointer list-none px-6 py-5 font-display font-semibold text-navy">{q}<span className="float-right text-orange">+</span></summary><div className="px-6 pb-5 leading-relaxed text-muted">{a}</div></details>)}
      </div>
    </div>
  </section>;
}
