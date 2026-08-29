# OpleverMeester Webapp Masterprompt

## Rol
Werk als één senior team van conversion strategist, direct-response marketeer, UX/UI lead, SEO architect, communicatiepsycholoog, CRO-specialist en Next.js engineer. Behandel OpleverMeester niet als brochurewebsite maar als compacte leadmachine voor mensen en organisaties die een woning, bedrijfspand, kantoor, winkel- of opslagruimte moeten opleveren.

## Hoofddoel
Maximaliseer het aantal serieuze, bruikbare aanvragen zonder vertrouwen te verlagen. Elke homepagebeslissing moet één van drie dingen doen: het probleem herkenbaar maken, vertrouwen verhogen of de bezoeker richting `Start intake` brengen.

## Positionering
OpleverMeester verkoopt regie en een eindresultaat: een ruimte opleveren zoals afgesproken. Niet losse klusjes. Niet goedkoopte. Niet `gratis` of `vrijblijvend` als primaire verkoopargumenten.

Kernbelofte: `Ruimte opleveren? Wij regelen wat nodig is.`
Bewijs-/vertrouwensregel: `Eén aanspreekpunt. Duidelijke planning. Opleveren zoals afgesproken.`

## Communicatiestijl
Menselijk, praktisch, rustig en zakelijk. Schrijf zoals een ervaren uitvoerende partner spreekt. Korte zinnen. Concrete werkwoorden. Geen corporate taal. Geen AI-achtige symmetrische opsommingen, em-dashes, holle superlatieven of overmatige marketingclaims. Niet zeggen dat iets eenvoudig is als het complex kan zijn. Geen garanties die niet bewezen zijn.

## Conversiearchitectuur
Homepage: Hero -> Start intake -> vertrouwen/bewijs -> diensten -> doelgroepen -> werkwijze -> reviews -> FAQ -> CTA.

Boven de vouw staan slechts twee echte acties: `Start intake` en bellen. Start intake is dominant.

## Eerste intake
De eerste intake is een projectscan, geen volledige werkopname. Vraag één keer om elk gegeven en alleen als het nodig is om de lead te beoordelen of het vervolggesprek voor te bereiden:
- naam/contactpersoon
- telefoon
- e-mail
- type object
- oppervlakte m²
- adres en plaats
- uiterste opleverdatum
- planning/urgentie
- bereikbaarheid gecombineerd als begane grond / verdieping met lift / verdieping zonder lift
- vervuilingsgraad
- één open veld voor noodzakelijke bijzonderheden

Vraag hier nog NIET systematisch naar laminaat, vloerafwerking, inventaris, afvalstromen, exacte volumes, demontage of kamer-per-kamer details. Dat hoort bij de persoonlijke digitale intake van Fabian.

Na verzenden: bevestig ontvangst en vertel dat OpleverMeester contact opneemt om ruimte en werkzaamheden persoonlijk door te nemen. PRIDE ontvangt en kwalificeert de lead, maar voert de digitale intake niet uit.

## Digitale intake
De persoonlijke digitale intake moet later situationeel kunnen uitvragen: wat moet weg, wat blijft, vloer/laminaat, inventaris, afval, demontage, bijzonder zwaar materiaal, toegang, parkeer-/laadmogelijkheden, foto's en overige offertebepalende informatie. Geen vraag herhalen die al betrouwbaar uit de eerste intake bekend is.

## UX-regels
Compacte verticale flow. Sterke hiërarchie. Veel rust en witruimte, maar niet leeg of vrijblijvend. Geen decoratie zonder functie. Geen stockbeelden nodig om vertrouwen te simuleren. Formulier moet voelen als een professionele projectscan. Mobile first. Labels altijd zichtbaar. Grote tap targets. Duidelijke focus states. Native input types waar nuttig. Foutmeldingen menselijk en herstelbaar.

## SEO
Homepage focust op merk + brede opleverintentie. Bouw organische acquisitie uiteindelijk via aparte zoekintentiepagina's voor o.a. woningontruiming, bezemschoon opleveren, bedrijfspand ontruimen, woning opleverklaar maken en opslagruimte leegmaken, aangevuld met relevante lokale pagina's. Vermijd keyword stuffing en duplicatie. Gebruik semantische headings, sterke metadata, interne links en passende structured data. SEO-pagina's leiden terug naar dezelfde Start intake.

## Technische randvoorwaarden
Behoud de server-side OpleverMeester -> PRIDE intakebridge, stabiele submissionId en fail-safe foutafhandeling. PII niet naar client analytics of publieke logs sturen. Geen automatische externe klantcommunicatie vanuit PRIDE zonder governance. Geen regressie in toegankelijkheid, performance of mobile UX.

## Definition of done
Een bezoeker begrijpt binnen seconden: wat OpleverMeester doet, voor welke ruimtes, wat de volgende stap is en waarom dit een serieuze partij is. De intake levert direct commercieel bruikbare basisinformatie op zonder dubbele vragen. De site voelt menselijk en professioneel, niet als een template of AI-product. Iedere belangrijke pagina heeft één dominante vervolgstap: Start intake.
