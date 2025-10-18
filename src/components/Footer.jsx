import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {currentYear} Dylan Schuurman - HBO ICT Infrastructure</p>
        <p className="footer-subtitle">Semester 3 Reflectie | Sprint 1-2</p>
      </div>
    </footer>
  );
}

export default Footer;
