import Image from "next/image";

const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_HREF = "tel:+31645316851";
const WHATSAPP_HREF = "https://wa.me/31645316851?text=Hallo%20OpleverMeester%2C%20ik%20heb%20een%20vraag%20over%20het%20leeghalen%20en%20opleveren%20van%20een%20woning.";
export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-om grid min-h-[66vh] items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-orange-light">OpleverMeester · Groningen, Friesland & Drenthe</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4rem]">Woning leeghalen? Wij regelen de complete oplevering.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">Van het verwijderen van de inboedel tot schoonmaak en afgesproken herstelwerkzaamheden. Eén aanspreekpunt, vooraf duidelijkheid over de kosten en een woning die klaar is voor overdracht.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
            <a href="#intake" className="inline-flex rounded-om bg-orange px-7 py-3.5 text-center font-semibold text-white hover:bg-orange-light">Ontvang een prijsindicatie</a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center font-semibold text-white/90 underline decoration-white/30 underline-offset-4 hover:text-orange-light">Stel een vraag via WhatsApp</a>
          </div>
        </div>
        <aside className="order-last" aria-label="Het resultaat van een oplevering">
          <div className="relative aspect-[16/10] overflow-hidden rounded-om bg-navy-light shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <Image src="/images/visual-proof/homepage-hero.webp" alt="Leeg opgeleverde woonkamer met daglicht" fill priority fetchPriority="high" sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" style={{ objectPosition: "center 52%" }} />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">Van een onduidelijke ruimte naar overzicht en een afgesproken eindstaat.</p>
        </aside>
      </div>
    </section>
  );
}
