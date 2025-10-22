import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';

const App = () => {
  useEffect(() => {
    // Capture UTM parameters and store in sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    
    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
      }
    });
  }, []);

  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:slug" element={<ServiceDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/dziekujemy" element={<ThankYou />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="/polityka-cookies" element={<CookiePolicy />} />
          <Route path="/regulamin" element={<Terms />} />
          <Route path="/polityka-zwrotow" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </HashRouter>
  );
};

export default App;
