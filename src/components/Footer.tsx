import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Momatar</h4>
            <p>Tworzymy marki, w które wierzą klienci.</p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Godziny pracy:</strong><br />
              Poniedziałek - Piątek: 9:00 - 18:00
            </p>
          </div>

          <div className="footer-section">
            <h4>Firma</h4>
            <ul>
              <li><Link to="/o-nas">O nas</Link></li>
              <li><Link to="/uslugi">Usługi</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informacje prawne</h4>
            <ul>
              <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
              <li><Link to="/polityka-cookies">Polityka cookies</Link></li>
              <li><Link to="/regulamin">Regulamin</Link></li>
              <li><Link to="/polityka-zwrotow">Polityka zwrotów</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Momatar. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
