import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Amila's Portfolio</a>
      <nav className="navbar">
        <a href="#" style={{ '--i': 1 } as React.CSSProperties} className="active">Home</a>
        <a href="pages/about.html" style={{ '--i': 2 } as React.CSSProperties}>About</a>
        <a href="pages/about.html" style={{ '--i': 3 } as React.CSSProperties}>Skills</a>
        <a href="pages/about.html" style={{ '--i': 4 } as React.CSSProperties}>Portfolio</a>
        <a href="pages/about.html" style={{ '--i': 5 } as React.CSSProperties}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;