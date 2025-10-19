import './Assignment.css';

function Assignment() {
  return (
    <section id="assignment" className="assignment">
      <div className="assignment-container">
        <h2>Opdracht Context</h2>
        <div className="assignment-content">
          <div className="assignment-header">
            <h3>Man6 - Advanced Release Management</h3>
            <span className="assignment-badge">Semester 3</span>
          </div>
          
          <div className="assignment-description">
            <h4>Opdracht Omschrijving</h4>
            <p>
              Realiseer een deployment pipeline voor het inzetten van een (web-)service 
              zonder downtime voor deployment (push-on-green) naar test/acc-omgeving en 
              handmatige goedkeuring naar productie-omgeving.
            </p>
          </div>
          
          <div className="assignment-technologies">
            <h4>Gebruikte Technologieën</h4>
            <div className="tech-tags">
              <span className="tech-tag">Jenkins</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">ArgoCD</span>
            </div>
          </div>
          
          <div className="assignment-note">
            <p>
              Deze reflectiewebsite is bewerkstelligd als onderdeel van bovenstaande opdracht, 
              waarbij een volledige CI/CD pipeline is opgezet voor geautomatiseerde deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assignment;
