import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import './HomePage.css';

function HomePage() {
  return (
    <div className="page">
      <Hero />
      <About />
      <section className="intro-section">
        <div className="intro-container">
          <h2>Welkom bij mijn Reflectie Portfolio</h2>
          <p>
            Deze website bevat mijn reflectie over semester 3, sprint 1 en 2, van mijn studie 
            HBO ICT Infrastructure. Navigeer door het menu naar de verschillende sprints 
            om mijn leerervaringen en ontwikkeling te ontdekken.
          </p>
          <div className="nav-cards">
            <Link to="/sprint1" className="nav-card">
              <h3>Sprint 1</h3>
              <p>Bekijk mijn reflectie en leerpunten van sprint 1</p>
            </Link>
            <Link to="/sprint2" className="nav-card">
              <h3>Sprint 2</h3>
              <p>Bekijk mijn reflectie en leerpunten van sprint 2</p>
            </Link>
            <Link to="/assignment" className="nav-card">
              <h3>Opdracht Info</h3>
              <p>Details over de Man6 Advanced Release Management opdracht</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
