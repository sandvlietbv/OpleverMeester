import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Camera, Check, CheckCheck, MessageCircle, Send } from "lucide-react";
import { PHOTO_WHATSAPP_HREF } from "@/lib/whatsapp";

/** Illustratie van een gesprek, nadrukkelijk geen echte klantchat of offerte. */
export function PhoneChatDemo() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] py-4 sm:py-8">
      <div aria-hidden="true" className="absolute inset-6 rounded-full bg-[#e0a11a]/[0.12] blur-[54px]" />
      <div className="relative mx-auto w-[min(100%,330px)] rounded-[39px] border-[8px] border-[#292724] bg-[#faf7f1] p-1 shadow-[0_36px_85px_rgba(50,37,14,0.22)]">
        <div className="relative overflow-hidden rounded-[29px] bg-white">
          <div className="absolute left-1/2 top-1 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-[#292724]" aria-hidden="true" />
          <div className="flex items-center gap-3 border-b border-[#e9e3d9] bg-white px-4 pb-3 pt-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e8dccb] bg-[#faf7f1]">
              <Image src="/brand/oplevermeester-logo.svg" width={56} height={30} alt="" className="h-auto w-11" />
            </span>
            <div className="min-w-0">
              <strong className="block text-[13px] font-semibold text-[#282725]">OpleverMeester</strong>
              <span className="block text-[11px] text-[#746e64]">Voorbeeldgesprek</span>
            </div>
            <MessageCircle className="ml-auto h-5 w-5 shrink-0 text-[#a96800]" aria-hidden="true" />
          </div>
          <div className="min-h-[345px] space-y-3 bg-[#f6f0e6] px-3 py-5 text-[13px] leading-[1.45]">
            <p className="mx-auto w-fit rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium text-[#766e61]">Zo eenvoudig kan het gaan</p>
            <div className="ml-auto max-w-[86%] rounded-[16px] rounded-br-[4px] bg-[#f7dc99] px-3 py-2.5 text-[#2b2824] shadow-sm">
              Hoi! Ik wil een woning laten leeghalen.
            </div>
            <div className="ml-auto flex w-fit max-w-[86%] items-center gap-2 rounded-[13px] rounded-br-[4px] bg-[#f7dc99] p-2 text-[#2b2824] shadow-sm">
              <span className="grid w-[154px] grid-cols-3 gap-1 overflow-hidden rounded-lg bg-white/60 p-1.5">
                <Image src="/images/visual-proof/woningontruiming.webp" width={48} height={54} alt="Voorbeeldfoto van een woning" className="h-[54px] w-full rounded object-cover" />
                <Image src="/images/visual-proof/huurwoning-inspectie.webp" width={48} height={54} alt="Voorbeeldfoto van een kamer" className="h-[54px] w-full rounded object-cover" />
                <Image src="/images/visual-proof/senioren.webp" width={48} height={54} alt="Voorbeeldfoto van de inboedel" className="h-[54px] w-full rounded object-cover" />
              </span>
              <span className="pr-2 text-[11px] font-medium">3 voorbeeldfoto's<br /><span className="text-[10px] text-[#756a55]">Meegestuurd via WhatsApp</span></span>
            </div>
            <div className="mr-auto max-w-[94%] rounded-[16px] rounded-bl-[4px] bg-white px-3 py-2.5 text-[#2b2824] shadow-sm">
              Dank je! Wat is de postcode en wanneer moet de woning klaar zijn? Dan bekijken we wat nodig is en geven we een prijsindicatie.
            </div>
            <div className="ml-auto flex w-fit max-w-[78%] items-end gap-1.5 rounded-[16px] rounded-br-[4px] bg-[#f7dc99] px-3 py-2.5 text-[#2b2824] shadow-sm">
              Top, stuur ik door! <CheckCheck className="h-3.5 w-3.5 text-[#8b6f35]" aria-hidden="true" />
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-[#e9e3d9] bg-white px-4 py-3 text-[#b1a899]" aria-hidden="true">
            <Camera className="h-5 w-5" /><span className="flex-1 rounded-full bg-[#f5f2ed] px-4 py-2 text-xs">Bericht sturen...</span><Send className="h-4 w-4 text-[#a96800]" />
          </div>
        </div>
      </div>
      <div className="absolute -right-2 top-12 hidden items-center gap-2 rounded-full border border-[#e9dfcf] bg-white px-4 py-2 text-[12px] font-semibold text-[#282725] shadow-lg sm:flex" aria-hidden="true">
        <Camera className="h-4 w-4 text-[#a96800]" /> Foto's sturen
      </div>
      <div className="absolute -left-3 bottom-20 hidden items-center gap-2 rounded-full border border-[#e9dfcf] bg-white px-4 py-2 text-[12px] font-semibold text-[#282725] shadow-lg sm:flex" aria-hidden="true">
        <Check className="h-4 w-4 text-[#a96800]" /> Voorstel vooraf
      </div>
    </div>
  );
}

export default function PrivateWhatsApp() {
  return (
    <section id="intake" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-om">
        <div className="grid gap-9 rounded-[30px] border border-[#eadfce] bg-[#faf7f1] p-7 md:p-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a96800]">Voor particulieren</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-navy md:text-5xl">Laat zien wat er weg moet. Wij regelen de rest.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">Geen lange vragenlijst. Open WhatsApp en stuur een paar duidelijke foto's van de woning. Elke woning is anders. We stellen alleen de vragen die nodig zijn voor een passende prijsindicatie.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHOTO_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#b36f00] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(169,104,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#996000]">
                <MessageCircle className="h-5 w-5" /> Stuur foto's via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">WhatsApp opent met een ingevuld bericht. Voeg zelf foto's toe en verstuur ze. Een prijsindicatie is nog geen definitieve offerte.</p>
          </div>
          <div className="space-y-5 rounded-[22px] border border-[#e7dfd2] bg-white p-6">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7e8c6] text-[#a96800]"><Camera className="h-5 w-5" /></span><p className="text-base font-semibold text-navy">1. Stuur een paar foto's</p></div>
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7e8c6] text-[#a96800]"><MessageCircle className="h-5 w-5" /></span><p className="text-base font-semibold text-navy">2. Wij beoordelen de situatie</p></div>
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7e8c6] text-[#a96800]"><Check className="h-5 w-5" /></span><p className="text-base font-semibold text-navy">3. Je ontvangt een prijsvoorstel</p></div>
            <div className="border-t border-[#e7dfd2] pt-5">
              <Link href="/zakelijk/bewindvoerders-en-curatoren" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7f5108] hover:underline"><Building2 className="h-4 w-4" /> Zakelijke opdracht? Ga naar de zakelijke aanvraag <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
