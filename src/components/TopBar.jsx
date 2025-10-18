import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div className="topbar-logo">
          <Link to="/">
            <h2>Dylan Schuurman</h2>
          </Link>
        </div>
        <div className="topbar-nav">
          <Link to="/">Home</Link>
          <Link to="/sprint1">Sprint 1</Link>
          <Link to="/sprint2">Sprint 2</Link>
          <Link to="/assignment">Opdracht</Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
