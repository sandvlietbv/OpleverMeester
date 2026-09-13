import Link from "next/link";

const FOOTER_LINKS = [
  { heading: "Diensten", links: [
    { label: "Woningontruiming", href: "/woningontruiming" },
    { label: "Huurwoning opleveren", href: "/huurwoning-opleveren" },
    { label: "Na overlijden", href: "/huis-leeghalen-na-overlijden" },
    { label: "Spoedontruiming", href: "/spoedontruiming" },
    { label: "Kosten woningontruiming", href: "/kosten-woningontruiming" },
  ]},
  { heading: "Regio & zakelijk", links: [
    { label: "Groningen", href: "/woningontruiming-groningen" },
    { label: "Friesland", href: "/woningontruiming-friesland" },
    { label: "Drenthe", href: "/woningontruiming-drenthe" },
    { label: "Bewindvoerders & curatoren", href: "/zakelijk/bewindvoerders-en-curatoren" },
    { label: "Vastgoedbeheer & corporaties", href: "/zakelijk/vastgoedbeheer-en-corporaties" },
  ]},
  { heading: "OpleverMeester", links: [
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
    { label: "Start intake", href: "/#intake" },
    { label: "Privacy", href: "/privacy" },
    { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
    { label: "Cookiebeleid", href: "/cookies" },
  ]},
];

export default function Footer() {
  return <footer className="bg-navy-light text-white">
    <div className="container-om grid gap-12 py-16 md:grid-cols-4">
      <div>
        <span className="font-display text-lg font-semibold">Oplever<span className="text-orange">Meester</span></span>
        <p className="mt-4 text-sm text-white/60">Elke ruimte. Zorgeloos opleverklaar.</p>
        <div className="mt-5 text-sm leading-7 text-white/65">
          <p>OpleverMeester · Groningen</p>
          <a href="tel:+31645316851" className="block hover:text-orange-light">06 45 31 68 51</a>
          <a href="mailto:info@oplevermeester.nl" className="block hover:text-orange-light">info@oplevermeester.nl</a>
        </div>
        <a href="https://wa.me/31645316851" target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-om border border-white/20 px-4 py-2.5 text-sm font-semibold">WhatsApp</a>
      </div>
      {FOOTER_LINKS.map((col) => <div key={col.heading}><h3 className="text-sm font-semibold text-white/80">{col.heading}</h3><ul className="mt-4 flex flex-col gap-2.5">{col.links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 hover:text-orange-light">{link.label}</Link></li>)}</ul></div>)}
    </div>
    <div className="border-t border-white/10"><div className="container-om flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} OpleverMeester</span><span>Eenmanszaak · KvK 96147067 · Groningen</span></div></div>
  </footer>;
}
