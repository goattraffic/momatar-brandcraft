import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    const tcString = btoa(JSON.stringify({
      purposeConsents: { 1: true, 2: true, 3: true },
      vendorConsents: {},
      timestamp: new Date().toISOString()
    }));
    
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('tcString', tcString);
    setIsVisible(false);
  };

  const handleReject = () => {
    const tcString = btoa(JSON.stringify({
      purposeConsents: { 1: false, 2: false, 3: false },
      vendorConsents: {},
      timestamp: new Date().toISOString()
    }));
    
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('tcString', tcString);
    setIsVisible(false);
  };

  const handleCustomize = () => {
    const tcString = btoa(JSON.stringify({
      purposeConsents: { 1: true, 2: false, 3: false },
      vendorConsents: {},
      timestamp: new Date().toISOString()
    }));
    
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('tcString', tcString);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-banner ${isVisible ? 'show' : ''}`}>
      <div className="cookie-content">
        <div className="cookie-text">
          <p>
            <strong>Ta strona używa plików cookies</strong>
          </p>
          <p>
            Używamy plików cookies, aby zapewnić najlepsze doświadczenie na naszej stronie. 
            Możesz zaakceptować wszystkie cookies, odrzucić opcjonalne lub dostosować swoje preferencje. 
            Więcej informacji znajdziesz w naszej{' '}
            <Link to="/polityka-cookies">Polityce Cookies</Link> i{' '}
            <Link to="/polityka-prywatnosci">Polityce Prywatności</Link>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="btn btn-outline" onClick={handleReject}>
            Odrzuć
          </button>
          <button className="btn btn-secondary" onClick={handleCustomize}>
            Dostosuj
          </button>
          <button className="btn btn-primary" onClick={handleAccept}>
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
