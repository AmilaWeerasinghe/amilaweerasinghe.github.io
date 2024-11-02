import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Amila's Portfolio</Link>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
        <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
        <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;