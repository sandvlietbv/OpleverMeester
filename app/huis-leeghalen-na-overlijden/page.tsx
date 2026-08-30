import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Huis leeghalen na overlijden",
  description:
    "Huis leeghalen na overlijden? OpleverMeester helpt met ontruimen, afvoer, schoonmaak en opleverklaar maken vanuit één aanspreekpunt. Start de intake.",
  alternates: {
    canonical: "/huis-leeghalen-na-overlijden",
  },
  openGraph: {
    title: "Huis leeghalen na overlijden | OpleverMeester",
    description:
      "Rust en overzicht bij het leeghalen en opleveren van een woning na overlijden.",
    url: "https://oplevermeester.nl/huis-leeghalen-na-overlijden",
    type: "website",
    locale: "nl_NL",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Huis leeghalen na overlijden",
  serviceType: "Woning leeghalen en opleverklaar maken na overlijden",
  provider: {
    "@type": "LocalBusiness",
    name: "OpleverMeester",
    url: "https://oplevermeester.nl",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Groningen" },
    { "@type": "AdministrativeArea", name: "Friesland" },
    { "@type": "AdministrativeArea", name: "Drenthe" },
  ],
  url: "https://oplevermeester.nl/huis-leeghalen-na-overlijden",
};

export default function HuisLeeghalenNaOverlijdenPage() {
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
              Huis leeghalen na overlijden
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              De woning moet leeg. U hoeft niet alles zelf te regelen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Na een overlijden komt er vaak veel tegelijk op u af. OpleverMeester helpt met het praktisch leeghalen, afvoeren, schoonmaken en correct opleveren van de woning, met één aanspreekpunt voor het hele proces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#intake"
                className="rounded-om bg-orange px-7 py-3.5 font-semibold text-white hover:bg-orange-light"
              >
                Start intake
              </a>
              <Link
                href="/woningontruiming-groningen"
                className="rounded-om border border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
              >
                Woningontruiming Groningen
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="container-om grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-orange">Wat er meestal geregeld moet worden</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
                Van volle woning naar een nette overdracht.
              </h2>
            </div>
            <div className="lg:col-span-2 grid gap-5 md:grid-cols-2">
              {[
                ["Inboedel uitzoeken", "Samen bepalen wat blijft, weg kan of apart gehouden moet worden."],
                ["Woning leeghalen", "Meubels, spullen en restmateriaal worden volgens afspraak verwijderd."],
                ["Afvoer regelen", "Wat niet blijft, wordt afgevoerd en waar mogelijk gescheiden verwerkt."],
                ["Opleverklaar maken", "Schoonmaak en kleine herstelpunten kunnen onderdeel zijn van de oplevering."],
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
              <p className="text-sm font-semibold text-orange">Rustige regie</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
                Eén aanspreekpunt, duidelijke stappen.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                U hoeft niet zelf meerdere partijen aan te sturen. We beginnen met wat er moet gebeuren, welke spullen aandacht nodig hebben en wanneer de woning klaar moet zijn.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Afstemmen wat bewaard of apart gezet moet worden",
                "Leeghalen van woning, berging of garage",
                "Afvoer van inboedel en restmateriaal",
                "Verwijderen van losse onderdelen waar afgesproken",
                "Schoonmaak richting afgesproken opleverniveau",
                "Planning en coördinatie vanuit één aanspreekpunt",
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
              Eerst overzicht. Daarna uitvoering.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Start intake", "Geef de locatie, omvang, planning en situatie door."],
                ["02", "Persoonlijk afstemmen", "We nemen door wat er moet gebeuren en wat bijzondere aandacht nodig heeft."],
                ["03", "Plan en offerte", "U krijgt duidelijkheid over aanpak, planning en prijs voordat de uitvoering start."],
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

        <section className="bg-surface-light py-16 md:py-20">
          <div className="container-om max-w-4xl">
            <p className="text-sm font-semibold text-orange">Voor nabestaanden en betrokken partijen</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
              Ook wanneer u niet zelf in de woning woont.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              De aanvraag kan ook worden gestart door een familielid, executeur, bewindvoerder, makelaar of andere partij die de oplevering moet organiseren. In de intake kunt u kort aangeven wat uw rol en situatie is.
            </p>
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
