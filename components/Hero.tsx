const PHONE_DISPLAY = "06 45 31 68 51";
const PHONE_HREF = "tel:+31645316851";
const WHATSAPP_HREF = "https://wa.me/31645316851?text=Hallo%20OpleverMeester%2C%20ik%20wil%20graag%20mijn%20situatie%20bespreken.";

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-om grid min-h-[66vh] items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-orange-light">OpleverMeester · Groningen, Friesland & Drenthe</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[4rem]">Ruimte opleveren?<br />Wij regelen wat nodig is.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">Woning, bedrijfspand, kantoor of opslagruimte. Geef de situatie door en wij kijken direct wat er nodig is om de ruimte goed op te leveren.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#intake" className="inline-flex rounded-om bg-orange px-7 py-3.5 text-center font-semibold text-white hover:bg-orange-light">Start intake</a>
            <a href={PHONE_HREF} className="inline-flex rounded-om border border-white/30 px-6 py-3.5 font-semibold text-white hover:border-orange-light hover:text-orange-light">Bel {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex rounded-om border border-white/20 px-6 py-3.5 font-semibold text-white/90 hover:border-orange-light hover:text-orange-light">WhatsApp</a>
          </div>
          <p className="mt-4 text-sm text-white/55">Liever eerst een prijsrichting? De intake geeft een indicatie vanaf €440.</p>
        </div>
        <aside className="border-l border-white/15 pl-7 lg:pl-9">
          <p className="text-sm font-semibold text-orange-light">Van probleem naar oplevering</p>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-white/70">
            <p><strong className="block text-base text-white">Eén aanspreekpunt</strong>We houden de lijnen kort en maken duidelijk wat er moet gebeuren.</p>
            <p><strong className="block text-base text-white">Duidelijke planning</strong>U weet waar u aan toe bent en wanneer de ruimte klaar moet zijn.</p>
            <p><strong className="block text-base text-white">Opleveren zoals afgesproken</strong>We sturen op het eindresultaat, niet op losse klusjes.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
