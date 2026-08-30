import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Lees hoe OpleverMeester omgaat met persoonsgegevens, intakegegevens en analytics.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-white text-slate-900">
        <section className="container-om py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              ← Terug naar OpleverMeester
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-orange">Privacy</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Privacyverklaring
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              OpleverMeester gebruikt persoonsgegevens alleen voor het behandelen van aanvragen, het uitvoeren en verbeteren van de dienstverlening en — uitsluitend na toestemming — het meten van websitegebruik.
            </p>

            <div className="mt-12 space-y-10 text-sm leading-7 text-slate-700">
              <section>
                <h2 className="text-xl font-semibold text-navy">Wie is verantwoordelijk?</h2>
                <p className="mt-2">OpleverMeester is verantwoordelijk voor de verwerking van persoonsgegevens via deze website. KvK: 96147067.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Welke gegevens verwerken we?</h2>
                <p className="mt-2">Wanneer u een intake start of verstuurt, kunt u onder meer naam, telefoonnummer, e-mailadres, adres of plaats, informatie over het object, gewenste planning en een toelichting op uw situatie doorgeven. We verwerken alleen gegevens die u zelf verstrekt of die nodig zijn om uw aanvraag technisch af te handelen.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Waarvoor gebruiken we die gegevens?</h2>
                <p className="mt-2">We gebruiken intakegegevens om uw aanvraag te beoordelen, contact met u op te nemen, de situatie te bespreken en waar passend een voorstel of dienstverlening voor te bereiden. De aanvraag wordt daarvoor doorgestuurd naar onze interne PRIDE-omgeving, waar OpleverMeester aanvragen verwerkt en opvolgt.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Google Analytics</h2>
                <p className="mt-2">Google Analytics wordt pas geladen nadat u daarvoor kiest. Hiermee meten we bijvoorbeeld paginaweergaven, het starten van een intake en een succesvol verstuurde aanvraag. We sturen via onze eigen analytics-events geen naam, e-mailadres, telefoonnummer of adres naar Google Analytics. Als u kiest voor “Alleen noodzakelijk”, laden we Google Analytics niet.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Uw keuze wijzigen</h2>
                <p className="mt-2">Uw analyticskeuze wordt lokaal in uw browser onthouden. Via de knop “Cookievoorkeuren” onderaan de website kunt u deze keuze later aanpassen.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Bewaren en beveiligen</h2>
                <p className="mt-2">We bewaren persoonsgegevens niet langer dan nodig voor het doel waarvoor ze zijn verzameld en eventuele wettelijke verplichtingen. We nemen passende technische en organisatorische maatregelen om gegevens te beschermen tegen verlies, misbruik en ongeoorloofde toegang.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Uw privacyrechten</h2>
                <p className="mt-2">U kunt vragen om inzage, correctie of verwijdering van uw persoonsgegevens en, waar van toepassing, bezwaar maken tegen of beperking vragen van een verwerking. Neem hiervoor contact met OpleverMeester op via de contactmogelijkheden op deze website. Als u vindt dat uw privacyrechten niet goed worden behandeld, kunt u ook een klacht indienen bij de Autoriteit Persoonsgegevens.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-navy">Wijzigingen</h2>
                <p className="mt-2">We kunnen deze privacyverklaring aanpassen als de website, dienstverlening of gebruikte systemen veranderen. Deze versie is bijgewerkt op 30 augustus 2026.</p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
