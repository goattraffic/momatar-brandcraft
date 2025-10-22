import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Anti-spam check
    if (formData.get('__hp')) {
      navigate('/dziekujemy');
      return;
    }
    
    // Validate consent
    if (!formData.get('consent')) {
      setError('Musisz zaakceptować politykę prywatności, aby wysłać formularz.');
      return;
    }
    
    // Add technical fields
    const urlParams = new URLSearchParams(window.location.search);
    formData.append('__ts', Date.now().toString());
    formData.append('utm_source', sessionStorage.getItem('utm_source') || urlParams.get('utm_source') || '');
    formData.append('utm_medium', sessionStorage.getItem('utm_medium') || urlParams.get('utm_medium') || '');
    formData.append('utm_campaign', sessionStorage.getItem('utm_campaign') || urlParams.get('utm_campaign') || '');
    formData.append('utm_term', sessionStorage.getItem('utm_term') || urlParams.get('utm_term') || '');
    formData.append('utm_content', sessionStorage.getItem('utm_content') || urlParams.get('utm_content') || '');
    formData.append('gclid', sessionStorage.getItem('gclid') || urlParams.get('gclid') || '');
    formData.append('fbclid', sessionStorage.getItem('fbclid') || urlParams.get('fbclid') || '');
    formData.append('referrer', document.referrer);
    formData.append('path', window.location.pathname + window.location.hash);
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formData
      });
      
      const result = await response.json();
      
      if (result.ok) {
        navigate('/dziekujemy');
      } else {
        setError(result.error || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      }
    } catch (err) {
      setError('Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section section" id="orderFormAnchor">
      <div className="container">
        <h2 className="section-title">Omówmy Twój projekt</h2>
        <p className="section-subtitle">
          Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
        </p>

        <form className="contact-form" id="leadForm" onSubmit={handleSubmit}>
          <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          
          <div className="form-group">
            <label htmlFor="first_name">Imię *</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              minLength={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Nazwisko *</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              minLength={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adres email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numer telefonu *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9\s\+\-\(\)]+"
            />
          </div>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
            />
            <label htmlFor="consent">
              Akceptuję <a href="/#/polityka-prywatnosci" target="_blank">politykę prywatności</a> i wyrażam zgodę na przetwarzanie moich danych osobowych *
            </label>
          </div>

          {error && (
            <div className="form-error" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
