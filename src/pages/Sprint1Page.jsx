import './Sprint1Page.css';

function Sprint1Page() {
  return (
    <div className="page sprint-page">
      <div className="sprint-hero">
        <div className="sprint-hero-content">
          <h1>Sprint 1 Reflectie</h1>
          <p>Mijn leerervaringen en ontwikkeling tijdens de eerste sprint</p>
        </div>
      </div>
      
      <div className="sprint-content">
        <section className="reflection-block">
          <h2>Wat heb ik geleerd?</h2>
          <p>
            [Hier komt jouw reflectie over wat je geleerd hebt in sprint 1]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Uitdagingen</h2>
          <p>
            [Beschrijf de uitdagingen waar je tegenaan liep in sprint 1]
          </p>
        </section>

        <section className="reflection-block">
          <h2>Successen</h2>
          <p>
            [Wat ging er goed in sprint 1?]
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
          <h2>Doelen voor volgende sprint</h2>
          <p>
            [Wat wil je verbeteren of bereiken in de volgende sprint?]
          </p>
        </section>
      </div>
    </div>
  );
}

export default Sprint1Page;
