import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="thank-you-container">
          <div className="thank-you-content">
            <div className="thank-you-icon">✓</div>
            <h1>Dziękujemy!</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-gray)', marginBottom: '2rem' }}>
              Twoje dane zostały pomyślnie wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>
            <Link to="/" className="btn btn-primary">
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
