import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Woningontruiming Groningen",
  description:
    "Woning laten ontruimen in Groningen? OpleverMeester regelt ontruiming, afvoer en opleverklaar maken vanuit één aanspreekpunt. Start direct de intake.",
  alternates: {
    canonical: "/woningontruiming-groningen",
  },
  openGraph: {
    title: "Woningontruiming Groningen | OpleverMeester",
    description:
      "Van volle woning naar correct opgeleverd. Eén aanspreekpunt voor woningontruiming in Groningen.",
    url: "https://oplevermeester.nl/woningontruiming-groningen",
    type: "website",
    locale: "nl_NL",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Woningontruiming Groningen",
  serviceType: "Woningontruiming en opleverklaar maken",
  provider: {
    "@type": "LocalBusiness",
    name: "OpleverMeester",
    url: "https://oplevermeester.nl",
  },
  areaServed: {
    "@type": "City",
    name: "Groningen",
  },
  url: "https://oplevermeester.nl/woningontruiming-groningen",
};

export default function WoningontruimingGroningenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <header className="border-b border-surface-mid bg-white">
        <div className="container-om flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-navy md:text-xl">
            Oplever<span className="text-orange">Meester</span>
          </Link>
          <a
            href="#intake"
            className="rounded-om bg-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-light"
          >
            Start intake
          </a>
        </div>
      </header>

      <main>
        <section className="bg-navy py-16 text-white md:py-24">
          <div className="container-om max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">
              Woningontruiming Groningen
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Woning leeg en correct opleveren in Groningen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Moet een woning worden leeggehaald door verhuizing, overlijden, verkoop of een strakke opleverdeadline? Geef de situatie door. OpleverMeester brengt overzicht en regelt wat nodig is richting een nette oplevering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#intake"
                className="rounded-om bg-orange px-7 py-3.5 font-semibold text-white hover:bg-orange-light"
              >
                Start intake
              </a>
              <Link
                href="/"
                className="rounded-om border border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
              >
                Bekijk OpleverMeester
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-om grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-orange">Wanneer dit speelt</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
                Eén partij voor de hele oplevering.
              </h2>
            </div>
            <div className="lg:col-span-2 grid gap-5 md:grid-cols-2">
              {[
                ["Na overlijden", "Een woning moet worden afgehandeld terwijl er vaak al genoeg geregeld moet worden."],
                ["Einde huur", "De woning moet leeg en volgens afspraak worden achtergelaten voor de verhuurder."],
                ["Verhuizing", "Niet alles kan mee en de oude woning moet op tijd klaar zijn voor overdracht."],
                ["Spoed", "Er staat een sleuteloverdracht of deadline vast en er is weinig ruimte in de planning."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-om border border-surface-mid bg-surface-light p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-light py-16 md:py-20">
          <div className="container-om grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-orange">Wat we kunnen regelen</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
                Van volle woning naar opleverklaar.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                Wat nodig is verschilt per woning. Daarom starten we niet met een standaardpakket, maar met de situatie en de oplevereis.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Woning leegmaken en ontruimen",
                "Inboedel en restmateriaal afvoeren",
                "Vloeren of losse onderdelen verwijderen waar afgesproken",
                "Kleine herstelwerkzaamheden coördineren",
                "Bezemschoon of verder schoon opleveren",
                "Planning en oplevering vanuit één aanspreekpunt",
              ].map((item) => (
                <div key={item} className="rounded-om border border-surface-mid bg-white p-5 text-sm font-medium text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-om max-w-4xl">
            <p className="text-sm font-semibold text-orange">Werkwijze</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
              Eerst de situatie. Daarna duidelijkheid.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Start intake", "Geef object, locatie, omvang en deadline door."],
                ["02", "We nemen het door", "We beoordelen wat er nodig is en nemen de details persoonlijk met u door."],
                ["03", "Plan en offerte", "Daarna ontvangt u duidelijkheid over aanpak, planning en prijs."],
              ].map(([number, title, body]) => (
                <div key={number} className="rounded-om border border-surface-mid p-6">
                  <span className="text-sm font-semibold text-orange">{number}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t border-surface-mid bg-white py-8">
        <div className="container-om flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© OpleverMeester</p>
          <Link href="/" className="font-medium text-navy hover:text-orange">Terug naar homepage</Link>
        </div>
      </footer>
    </>
  );
}
