import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            Mom<span>atar</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Główna</Link></li>
              <li><Link to="/o-nas" onClick={closeMenu}>O nas</Link></li>
              <li><Link to="/uslugi" onClick={closeMenu}>Usługi</Link></li>
              <li><Link to="/kontakt" onClick={closeMenu}>Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
