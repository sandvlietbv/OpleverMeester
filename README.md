# OpleverMeester — nieuwe homepage

Herontwerp van de homepage volgens het merkbrief: rustig, premium, zonder
klantenportaal-elementen (de "OP-014 / In uitvoering"-kaart is verwijderd —
die functionaliteit is bewaard voor een toekomstig klantenportaal, niet in
deze homepage).

## Wat is er gebouwd

- `app/layout.tsx` — fonts (Inter + Geist), metadata, SEO-basis
- `app/page.tsx` — homepage, assembleert alle secties + JSON-LD (LocalBusiness)
- `app/globals.css` — designtokens (kleuren, focus-states, reduced-motion)
- `app/api/contact/route.ts` — beveiligde serverbrug voor aanvragen naar PRIDE
- `components/` — Header, Hero, WhyUs, ForWhom, Services, Process, Trust,
  Reviews, FAQ, Contact, Footer
- `tailwind.config.ts` — merkkleuren (navy, oranje) en typografie-tokens

## Design

- **Kleur:** navy `#0b1d33` (rust, premium), oranje `#e76f2c` (CTA/actie),
  wit + lichtgrijs voor secties
- **Type:** Geist voor koppen, Inter voor body/UI
- **Signature:** een lijn-icoon van een deur die opent, gebruikt in de hero
  als stille verwijzing naar "ruimte die klaar wordt gemaakt"
- **Motion:** subtiele scroll-reveals via Framer Motion, `prefers-reduced-motion`
  wordt gerespecteerd (zie `globals.css`)

## Dit is nu een compleet, deploybaar project

`tsconfig.json`, `next-env.d.ts`, `postcss.config.mjs`, `next.config.mjs` en
`.gitignore` zitten erbij. Er ontbreken geen configbestanden meer.

### Lokaal draaien

```
npm install
npm run dev
```

### PRIDE contactformulier configureren

Het contactformulier stuurt aanvragen server-to-server naar PRIDE. Stel deze
variabelen in op de OpleverMeester deployment; zet ze nooit in browsercode:

```
PRIDE_INTAKE_URL=https://<pride-host>/api/intake/oplevermeester
PRIDE_INTAKE_SECRET=<dezelfde sterke gedeelde secret als op PRIDE>
```

Zonder deze variabelen weigert `/api/contact` veilig met HTTP 503 en wordt er
geen succesmelding aan de bezoeker getoond. De PRIDE deployment moet de
bijbehorende intake-route en database-migraties al hebben voordat deze koppeling
productie-verkeer ontvangt.

### Deployen (bijv. Vercel)

```
npm install
npm run build
npm start
```

Geverifieerd: `npx tsc --noEmit` loopt zonder fouten. `next build` is hier
alleen gestrand op het ophalen van het Inter-font via Google Fonts, omdat
deze sandbox geen internettoegang naar `fonts.googleapis.com` heeft — dat is
een beperking van de bouwomgeving hier, niet van de code. Op Vercel of een
normale build-machine met internet lost `next/font/google` dit gewoon op.
Als je zeker wilt zijn zonder afhankelijkheid van een build-time fetch, kun
je Inter ook vervangen door `next/font/local` met een zelf-gehost
font-bestand.

### Integratie in een ander bestaand project (optioneel)

Als je dit liever samenvoegt met een bestaand Next.js-project in plaats van
dit als nieuw project te gebruiken: kopieer `components/`, `app/`,
`tailwind.config.ts` en `postcss.config.mjs` over, en merge de dependencies
uit `package.json`. Vervang het telefoonnummer/WhatsApp-nummer als dat
wijzigt — deze staan als constanten bovenaan `Header.tsx`, `Hero.tsx` en
`Contact.tsx`.

## Nog te doen

- **Reviews** (`components/Reviews.tsx`): bevat nog geen echte klantreviews.
  Koppel de Google Places API of een reviews-widget zodra er voldoende
  beoordelingen zijn — verzin nooit citaten.
- **KvK/BTW** in de footer zijn placeholders.
- **Pagina's per doelgroep** (`/particulieren`, `/makelaars`,
  `/vastgoedbeheerders`, `/woningcorporaties`) worden gelinkt vanuit
  "Voor wie", maar zijn nog niet gebouwd.
- **Lighthouse-score**: test deze na productie-integratie met de uiteindelijke
  deploymentconfiguratie.
