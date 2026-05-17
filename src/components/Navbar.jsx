import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          Bombay Offset Printers
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Showcase</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="btn btn-primary nav-cta">Get a Quote</Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
