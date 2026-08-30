import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "Diensten",
    links: [
      { label: "Woningontruiming", href: "/diensten/woningontruiming" },
      { label: "Opleverklaar maken", href: "/diensten/opleverklaar-maken" },
      { label: "Bedrijfspanden", href: "/diensten/bedrijfspanden" },
    ],
  },
  {
    heading: "Bedrijf",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Start intake", href: "/#intake" },
    ],
  },
  {
    heading: "Juridisch",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-light text-white">
      <div className="container-om grid gap-12 py-16 md:grid-cols-4">
        <div>
          <span className="font-display text-lg font-semibold">
            Oplever<span className="text-orange">Meester</span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Elke ruimte. Zorgeloos opleverklaar.
          </p>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold text-white/80">{col.heading}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-orange-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-om flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} OpleverMeester. Alle rechten voorbehouden.</span>
          <span>KvK: 96147067</span>
        </div>
      </div>
    </footer>
  );
}
