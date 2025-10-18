import './Sprint2Page.css';

function Sprint2Page() {
  return (
    <div className="page sprint-page">
      <div className="sprint-hero sprint-2-hero">
        <div className="sprint-hero-content">
          <h1>Sprint 2 Reflectie</h1>
          <p>Mijn voortgang en ontwikkeling tijdens de tweede sprint</p>
        </div>
      </div>
      
      <div className="sprint-content">
        <section className="reflection-block">
          <h2>Wat heb ik geleerd?</h2>
          <p>
            [Hier komt jouw reflectie over wat je geleerd hebt in sprint 2]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Uitdagingen</h2>
          <p>
            [Beschrijf de uitdagingen waar je tegenaan liep in sprint 2]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Successen</h2>
          <p>
            [Wat ging er goed in sprint 2?]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Vergelijking met Sprint 1</h2>
          <p>
            [Hoe is je ontwikkeling sinds sprint 1? Wat is er veranderd?]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Leerpunten</h2>
          <ul>
            <li>[Leerpunt 1]</li>
            <li>[Leerpunt 2]</li>
            <li>[Leerpunt 3]</li>
          </ul>
        </section>

        <section className="reflection-block">
          <h2>Toekomstperspectief</h2>
          <p>
            [Wat neem je mee naar de toekomst? Hoe ga je je verder ontwikkelen?]
          </p>
        </section>
      </div>
    </div>
  );
}

export default Sprint2Page;
