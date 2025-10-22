import { Link } from 'react-router-dom';
import { services } from '../data/services';
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

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Nasze usługi</h1>
        <p className="section-subtitle">
          Kompleksowe rozwiązania brandingowe, które wyróżnią Twoją markę na rynku
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
                <ul className="service-features">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="service-card-price">{service.price}</div>
                <Link to={`/uslugi/${service.slug}`} className="btn btn-primary">
                  Zobacz szczegóły
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
            Nie jesteś pewien, która usługa jest dla Ciebie odpowiednia?
          </p>
          <Link to="/kontakt" className="btn btn-secondary">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
