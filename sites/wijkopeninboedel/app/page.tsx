const WA_NUMBER = "31645316851";
const makeWa = (message: string) => "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);

const evaluateText = "Hallo WijKopenInboedel, ik wil mijn spullen laten beoordelen. Ik stuur foto's mee en vermeld mijn woonplaats.";
const pickupText = "Hallo WijKopenInboedel, ik wil spullen laten ophalen. Ik stuur foto's, mijn postcode en informatie over de verdieping/lift.";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo" aria-label="WijKopenInboedel, naar de homepage">WijKopen<span>Inboedel</span><span className="logo-dot">.</span></a>
          <a className="header-link" href="#hoe-werkt-het">Hoe werkt het?</a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot"/> Groningen · Friesland · Drenthe</p>
              <h1>Spullen laten <em>beoordelen</em> of <em>ophalen?</em></h1>
              <p className="hero-lead">Oude meubels, een bank of een complete inboedel? Stuur ons foto's via WhatsApp. Wij kijken persoonlijk wat mogelijk is en geven je een helder voorstel.</p>
              <div className="hero-points"><span>✓ Persoonlijke reactie</span><span>✓ Vrijblijvend</span><span>✓ Foto's via WhatsApp</span></div>
            </div>
            <div className="chooser" id="aanvragen">
              <p className="chooser-kicker">Kies wat jij wilt</p>
              <article className="choice-card primary">
                <div className="choice-icon" aria-hidden="true">€</div>
                <div><h2>Spullen laten beoordelen</h2><p>Misschien zijn jouw meubels of andere spullen nog verkoopbaar. Wij bekijken of overname of verkoopbemiddeling interessant is.</p></div>
                <a className="cta cta-dark" href={makeWa(evaluateText)} target="_blank" rel="noopener noreferrer">Stuur foto's via WhatsApp <span aria-hidden="true">↗</span></a>
              </article>
              <article className="choice-card secondary">
                <div className="choice-icon truck" aria-hidden="true">↗</div>
                <div><h2>Spullen laten ophalen</h2><p>Een kapotte bank, groot meubel of complete inboedel kwijt? Stuur foto's en ontvang een ophaalprijs op maat.</p></div>
                <a className="cta cta-orange" href={makeWa(pickupText)} target="_blank" rel="noopener noreferrer">Vraag ophaalprijs via WhatsApp <span aria-hidden="true">↗</span></a>
              </article>
              <p className="chooser-note">Foto's voeg je zelf toe nadat WhatsApp is geopend. Een aanvraag verplicht je tot niets.</p>
            </div>
          </div>
        </section>
        <section className="how-section" id="hoe-werkt-het">
          <div className="container">
            <div className="section-intro"><p className="eyebrow">Zo eenvoudig werkt het</p><h2>Van foto's naar een voorstel</h2><p>Je hoeft geen ingewikkelde formulieren in te vullen. Wij bekijken elke aanvraag persoonlijk.</p></div>
            <div className="steps">
              <article className="step"><span className="step-number">01</span><h3>Maak foto's</h3><p>Fotografeer de meubels of spullen die je wilt laten beoordelen of ophalen.</p></article>
              <article className="step"><span className="step-number">02</span><h3>Stuur een WhatsApp</h3><p>Vermeld je woonplaats, wat je kwijt wilt en bij ophalen ook de verdieping en bereikbaarheid.</p></article>
              <article className="step"><span className="step-number">03</span><h3>Ontvang ons voorstel</h3><p>Wij bepalen of we interesse hebben of wat ophalen kan kosten. Jij beslist.</p></article>
            </div>
          </div>
        </section>
        <section className="pricing-section">
          <div className="container pricing-layout"><div><p className="eyebrow">Duidelijke mogelijkheden</p><h2>Van bruikbaar tot beschadigd</h2><p>Niet alles heeft nog verkoopwaarde. Soms kunnen we spullen overnemen, soms is betaalde afvoer de beste oplossing.</p><p>Een bank ophalen kan <strong>vanaf €50 incl. btw</strong> bij een goed bereikbare begane grond in Groningen-stad, afhankelijk van omvang, route en verwerkingskosten. Definitieve prijs volgt na beoordeling van foto's en situatie.</p></div><div className="quote"><span className="quote-mark">“</span><h3>Jij stuurt foto's.<br/>Wij denken mee.</h3><p>Geen gegarandeerde bieding, geen onverwachte toezeggingen. Eerst beoordelen, daarna duidelijk afspreken.</p></div></div>
        </section>
        <section className="faq-section"><div className="container faq-wrap"><div className="section-intro"><p className="eyebrow">Veelgestelde vragen</p><h2>Goed om te weten</h2></div><div className="faq-list"><details><summary>Kopen jullie alle spullen op?</summary><p>Nee. We beoordelen eerst of spullen voldoende verkoopbaar zijn. We kunnen een bod doen, verkoopbemiddeling voorstellen of uitleggen dat we geen interesse hebben.</p></details><details><summary>Kan ik beschadigde meubels laten ophalen?</summary><p>Vaak wel. De kosten hangen af van het meubel, het volume, de locatie, verdieping en bereikbaarheid. Stuur foto's voor een persoonlijk voorstel.</p></details><details><summary>Worden mijn foto's automatisch meegestuurd?</summary><p>Nee. De knop opent een WhatsApp-gesprek met een voorgesteld bericht. Voeg daarna zelf de foto's toe en verzend ze.</p></details><details><summary>Kunnen jullie een complete woning leeghalen?</summary><p>Ja. Voor complete woningontruimingen werken we via OpleverMeester, met vooraf afspraken over planning, uitvoering en kosten.</p></details></div></div></section>
        <section className="closing"><div className="container closing-inner"><div><h2>Heb je spullen waar je vanaf wilt?</h2><p>Stuur een paar foto's en ontdek wat mogelijk is.</p></div><a className="cta cta-white" href={makeWa(pickupText)} target="_blank" rel="noopener noreferrer">Start via WhatsApp ↗</a></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><strong>WijKopen<span>Inboedel</span>.</strong><p>Een dienst van <a href="https://www.oplevermeester.nl" target="_blank" rel="noopener noreferrer">OpleverMeester</a> · Groningen</p></div><div><p>Groningen, Friesland en Drenthe</p><a href="https://www.oplevermeester.nl/privacy" target="_blank" rel="noopener noreferrer">Privacyverklaring</a></div></div><div className="container footer-small"><span>© {new Date().getFullYear()} WijKopenInboedel</span><span>Bij WhatsApp-contact worden gegevens verwerkt via WhatsApp.</span></div></footer>
    </>
  );
}
