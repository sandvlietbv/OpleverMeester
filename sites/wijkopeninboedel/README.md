# WijKopenInboedel — zelfstandige campagnewebsite

Dit is een **zelfstandig Next.js-project** in de OpleverMeester GitHub-repository, onder `sites/wijkopeninboedel`. De bestaande OpleverMeester-site blijft ongewijzigd.

## Publiceren met Vercel
1. Importeer de bestaande GitHub-repository `sandvlietbv/OpleverMeester` als een **nieuw, tweede** Vercel-project, bijv. `wijkopeninboedel`.
2. Stel bij 'Root Directory' in: `sites/wijkopeninboedel` (belangrijk: niet de repository-root).
3. Framework: Next.js; Build Command: `next build` en Output standaard.
4. Deploy het project. Controleer eerst de Vercel-preview-URL.
5. Voeg in Project Settings > Domains de domeinen `wijkopeninboedel.nl` en `www.wijkopeninboedel.nl` toe.
6. Volg **de exacte DNS-instructies** die Vercel voor dit project toont bij jouw domeinregistrar. Kies één primair domein en redirect de andere variant.
7. Controleer HTTPS, links, mobiele weergave en WhatsApp-berichten voordat je advertenties activeert.

## Lokaal
```bash
cd sites/wijkopeninboedel
npm install
npm run dev
```

## Bewerken
- `app/page.tsx`: teksten, WhatsApp-links, pagina-indeling.
- `app/globals.css`: opmaak en huisstijl.
- `app/layout.tsx`: SEO-titel en beschrijving.

## Belangrijk
- WhatsApp-nummer is nu hetzelfde als bij OpleverMeester: `31645316851`. Vervang het in `app/page.tsx` als WijKopenInboedel een eigen zakelijk nummer krijgt.
- De website stuurt **geen foto's automatisch door**. Bezoekers kiezen zelf de foto's in WhatsApp.
- De prijs 'bank ophalen vanaf €50' is een testaanbod met expliciete voorwaarden. Controleer de operationele marge, afvalregels en verwerkingskosten vóór publicatie.
- Dit is een publieke leadpagina, geen ingelogd portaal of AI-taxateur.
- Domeineigendom / registratie en Vercel-project zijn **nog niet geverifieerd**; de code kan niet zelf DNS wijzigen.
