import Image from "next/image";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_HREF = "tel:+31645316851";
const WHATSAPP_HREF = "https://wa.me/31645316851?text=Hallo%20OpleverMeester%2C%20ik%20wil%20graag%20mijn%20situatie%20bespreken.";

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-om grid min-h-[66vh] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-orange-light">OpleverMeester · Groningen, Friesland & Drenthe</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4rem]">Ruimte opleveren?<br />Wij regelen wat nodig is.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">Woning, bedrijfspand, kantoor of opslagruimte. Geef de situatie door en wij kijken direct wat er nodig is om de ruimte goed op te leveren.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#intake" className="inline-flex rounded-om bg-orange px-7 py-3.5 text-center font-semibold text-white hover:bg-orange-light">Start intake</a>
            <a href={PHONE_HREF} className="inline-flex rounded-om border border-white/30 px-6 py-3.5 font-semibold text-white hover:border-orange-light hover:text-orange-light">Bel {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex rounded-om border border-white/20 px-6 py-3.5 font-semibold text-white/90 hover:border-orange-light hover:text-orange-light">WhatsApp</a>
          </div>
        </div>
        <aside className="order-last" aria-label="Het resultaat van een oplevering">
          <div className="relative aspect-[16/10] overflow-hidden rounded-om bg-navy-light shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <Image src="/images/visual-proof/homepage-hero.webp" alt="Leeg opgeleverde woonkamer met daglicht" fill priority fetchPriority="high" sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" style={{ objectPosition: "center 52%" }} />
          </div>
          <div className="mt-5 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {["Eén aanspreekpunt", "Duidelijke planning", "Opleveren zoals afgesproken"].map((item) => <p key={item} className="text-sm font-semibold leading-snug text-white/90">{item}</p>)}
          </div>
        </aside>
      </div>
    </section>
  );
}
