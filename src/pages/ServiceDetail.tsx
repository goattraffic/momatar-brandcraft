import { Link, useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="service-detail-hero">
        <div className="container">
          <ul className="breadcrumb">
            <li><Link to="/">Główna</Link></li>
            <li><Link to="/uslugi">Usługi</Link></li>
            <li>{service.title}</li>
          </ul>
          
          <h1>{service.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginTop: '1rem' }}>
            {service.short}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            <div className="service-detail-main">
              <img 
                src={serviceImages[service.image]} 
                alt={service.title}
                style={{ 
                  width: '100%', 
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '2rem'
                }}
              />
              
              <div dangerouslySetInnerHTML={{ __html: service.contentHtml }} />

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link 
                  to="/uslugi" 
                  className="btn btn-outline"
                  style={{ marginRight: '1rem' }}
                >
                  ← Powrót do usług
                </Link>
                <a 
                  href="#orderFormAnchor" 
                  onClick={scrollToForm}
                  className="btn btn-primary"
                >
                  Zamów tę usługę
                </a>
              </div>
            </div>

            <div className="service-detail-sidebar">
              <div className="service-price-box">
                <h3>Cena</h3>
                <div className="price">{service.price}</div>
                <a 
                  href="#orderFormAnchor" 
                  onClick={scrollToForm}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Wyceń projekt
                </a>
              </div>

              <div className="service-features-box">
                <h4>Co otrzymasz?</h4>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
