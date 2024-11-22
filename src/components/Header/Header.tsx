import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <Link to="/" className={`logo ${theme}`}>Amila's Portfolio</Link>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${theme}`} onClick={toggleMenu}>Home</Link>
        <Link to="/skills" className={`nav-link ${theme}`} onClick={toggleMenu}>Skills</Link>
        <Link to="/concepts" className={`nav-link ${theme}`} onClick={toggleMenu}>Portfolio</Link>
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