import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ContactForm from '../components/ContactForm';
import heroImage from '../assets/hero-branding.jpg';
import serviceLogo from '../assets/service-logo.jpg';
import serviceIdentity from '../assets/service-identity.jpg';
import servicePackaging from '../assets/service-packaging.jpg';
import serviceDigital from '../assets/service-digital.jpg';
import serviceMarketing from '../assets/service-marketing.jpg';
import serviceStrategy from '../assets/service-strategy.jpg';

const serviceImages: { [key: string]: string } = {
  'service-logo': serviceLogo,
  'service-identity': serviceIdentity,
  'service-packaging': servicePackaging,
  'service-digital': serviceDigital,
  'service-marketing': serviceMarketing,
  'service-strategy': serviceStrategy
};

const Home = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Tworzymy marki, w które wierzą</h1>
              <p>
                Profesjonalny branding i identyfikacja wizualna dla startupów, 
                marek D2C i rosnących firm. Od logo po kompleksowe systemy brandingowe.
              </p>
              <a href="#orderFormAnchor" onClick={scrollToForm} className="btn btn-primary">
                Omów redizajn
              </a>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Kreacja brandingu" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nasze usługi</h2>
          <p className="section-subtitle">
            Kompleksowe rozwiązania brandingowe dopasowane do Twoich potrzeb
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card">
                <img 
                  src={serviceImages[service.image]} 
                  alt={service.title}
                  className="service-card-image"
                />
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <div className="service-card-price">{service.price}</div>
                  <Link to={`/uslugi/${service.slug}`} className="btn btn-outline">
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">Liczby, które mówią same za siebie</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>150+</h3>
              <p>Zrealizowanych projektów</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Zadowolonych klientów</p>
            </div>
            <div className="stat-item">
              <h3>7 lat</h3>
              <p>Doświadczenia w brandingu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Co mówią nasi klienci</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">AK</div>
                <div className="testimonial-info">
                  <h4>Anna Kowalska</h4>
                  <p>Założycielka, FreshBrew Coffee</p>
                </div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Momatar stworzył dla nas kompletną identyfikację wizualną od podstaw. 
                Proces był profesjonalny, a rezultat przekroczył nasze oczekiwania. 
                Nasza marka wreszcie wygląda tak, jak powinna!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">MN</div>
                <div className="testimonial-info">
                  <h4>Marcin Nowak</h4>
                  <p>CEO, TechStart</p>
                </div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Rewelacyjna współpraca! Zespół Momatar nie tylko stworzył piękne logo, 
                ale też pomógł nam zdefiniować pozycjonowanie marki. To była prawdziwa 
                strategiczna partnerstwo."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">KW</div>
                <div className="testimonial-info">
                  <h4>Katarzyna Wiśniewska</h4>
                  <p>Marketing Manager, EcoLife</p>
                </div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Opakowania zaprojektowane przez Momatar dosłownie zmieniły nasze sprzedaże. 
                Klienci zwracają uwagę na nasze produkty i zapamiętują markę. 
                ROI z tego projektu był fenomenalny!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">PZ</div>
                <div className="testimonial-info">
                  <h4>Piotr Zieliński</h4>
                  <p>Właściciel, Artisan Bakery</p>
                </div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Szukałem kogoś, kto zrozumie charakter mojej rzemieślniczej piekarni 
                i przełoży to na wizerunek marki. Momatar idealnie to wykonał. 
                Każdy element - od logo po opakowania - opowiada naszą historię."
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Home;
