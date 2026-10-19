import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardList, Home, KeyRound } from "lucide-react";
import CompactHeader from "@/components/CompactHeader";

export const metadata: Metadata = {
  title: "Zakelijke woningontruiming en oplevering aanvragen",
  description: "Zakelijke offerte aanvragen voor ontruiming, schoonmaak en oplevering. Voor bewindvoerders, curatoren, vastgoedbeheerders en corporaties.",
  alternates: { canonical: "/zakelijk" },
};

const ROUTES = [
  {
    href: "/zakelijk/bewindvoerders-en-curatoren",
    icon: ClipboardList,
    title: "Bewindvoerders en curatoren",
    description: "Cliëntwoningen, spoed, toegang en oplevering vanuit het dossier.",
  },
  {
    href: "/zakelijk/vastgoedbeheer-en-corporaties",
    icon: Building2,
    title: "Vastgoedbeheer en corporaties",
    description: "Mutatiewoningen, leegstand, schoonmaak en opleverklare ruimtes.",
  },
  {
    href: "/bedrijfsontruiming",
    icon: KeyRound,
    title: "Bedrijfsontruiming",
    description: "Kantoren en andere bedrijfsruimtes leeghalen en opleveren.",
  },
];

export default function ZakelijkPage() {
  return <>
    <CompactHeader ctaLabel="Particulier? App foto's" ctaHref="/" />
    <main className="bg-[#faf7f1] py-20 md:py-28">
      <div className="container-om">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">Zakelijke aanvragen</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-navy md:text-6xl">Eén aanspreekpunt voor ontruiming en oplevering.</h1>
          <p className="mt-6 text-lg leading-8 text-muted">Voor zakelijke opdrachten behouden we een gestructureerde intake en formele prijsaanvraag. Kies hieronder uw type opdracht.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ROUTES.map(({ href, icon: Icon, title, description }) => (
            <Link key={href} href={href} className="group flex min-h-[252px] flex-col rounded-[24px] border border-[#e7dfd2] bg-white p-7 shadow-[0_15px_40px_rgba(50,37,14,0.06)] transition hover:-translate-y-1 hover:border-orange/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e8c6] text-orange"><Icon className="h-6 w-6" /></span>
              <h2 className="mt-6 font-display text-2xl font-semibold text-navy">{title}</h2>
              <p className="mt-2 leading-7 text-muted">{description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-orange">Zakelijke intake <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted"><Home className="h-4 w-4" /> Particuliere woning? <Link href="/" className="font-semibold text-[#8e5906] underline">Foto's sturen via WhatsApp</Link></p>
      </div>
    </main>
  </>;
}
