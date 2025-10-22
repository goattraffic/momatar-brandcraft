import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Skontaktuj się z nami</h1>
          <p className="section-subtitle">
            Masz pytania dotyczące naszych usług? Chcesz omówić swój projekt? 
            Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
          </p>

          <div className="policy-content">
            <h2>Godziny pracy</h2>
            <p>
              <strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00<br />
              <strong>Sobota - Niedziela:</strong> Zamknięte
            </p>

            <h2>Jak możemy pomóc?</h2>
            <p>
              Niezależnie od tego, czy potrzebujesz nowego logo, kompletnej identyfikacji wizualnej, 
              czy strategicznego rebrandingu - jesteśmy tu, aby pomóc. Każdy projekt rozpoczynamy 
              od bezpłatnej konsultacji, podczas której poznajemy Twoje potrzeby i proponujemy 
              najlepsze rozwiązanie.
            </p>

            <h3>Co się dzieje po wysłaniu formularza?</h3>
            <ol>
              <li>Skontaktujemy się z Tobą w ciągu 24 godzin (dni robocze)</li>
              <li>Umówimy bezpłatną konsultację online lub stacjonarną</li>
              <li>Poznamy Twoje potrzeby i cele biznesowe</li>
              <li>Przygotujemy spersonalizowaną ofertę</li>
              <li>Po akceptacji - rozpoczniemy projekt!</li>
            </ol>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Contact;
