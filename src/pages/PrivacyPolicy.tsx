const PrivacyPolicy = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Polityka Prywatności</h1>
        <div className="policy-content">
          <p><em>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</em></p>

          <h2>1. Wprowadzenie</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
            przekazywanych przez Użytkowników w związku z korzystaniem ze strony internetowej Momatar.
          </p>

          <h2>2. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Momatar. Szanujemy prywatność naszych Użytkowników 
            i dokładamy wszelkich starań, aby ich dane osobowe były należycie chronione.
          </p>

          <h2>3. Rodzaje zbieranych danych</h2>
          <p>Zbieramy następujące kategorie danych osobowych:</p>
          <ul>
            <li><strong>Dane kontaktowe:</strong> imię, nazwisko, adres e-mail, numer telefonu</li>
            <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, system operacyjny</li>
            <li><strong>Dane o aktywności:</strong> odwiedzane strony, czas wizyty, źródło ruchu</li>
          </ul>

          <h2>4. Cele przetwarzania danych</h2>
          <p>Dane osobowe są przetwarzane w następujących celach:</p>
          <ul>
            <li>Obsługa zapytań i kontakt z klientami</li>
            <li>Realizacja usług brandingowych</li>
            <li>Analiza ruchu na stronie i optymalizacja UX</li>
            <li>Marketing bezpośredni (za zgodą)</li>
            <li>Wywiązywanie się z obowiązków prawnych</li>
          </ul>

          <h2>5. Podstawa prawna przetwarzania</h2>
          <p>Dane osobowe przetwarzamy na podstawie:</p>
          <ul>
            <li>Zgody użytkownika (art. 6 ust. 1 lit. a RODO)</li>
            <li>Wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
            <li>Prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO)</li>
            <li>Obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
          </ul>

          <h2>6. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały 
            zebrane, lub do momentu wycofania zgody przez Użytkownika. Dane mogą być przechowywane 
            dłużej, jeśli wymaga tego prawo lub dla celów archiwizacyjnych.
          </p>

          <h2>7. Udostępnianie danych</h2>
          <p>Dane osobowe mogą być udostępniane:</p>
          <ul>
            <li>Dostawcom usług IT wspierającym działanie strony</li>
            <li>Firmom kurierskim (w przypadku wysyłki materiałów)</li>
            <li>Organom państwowym (na podstawie przepisów prawa)</li>
          </ul>

          <h2>8. Prawa użytkowników</h2>
          <p>Użytkownicy mają prawo do:</p>
          <ul>
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>Cofnięcia zgody w dowolnym momencie</li>
            <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
          </ul>

          <h2>9. Bezpieczeństwo danych</h2>
          <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo 
            przetwarzanych danych, w tym szyfrowanie połączenia SSL, regularne kopie zapasowe 
            i ograniczenie dostępu do danych.
          </p>

          <h2>10. Zmiany w polityce prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
            O wszelkich zmianach będziemy informować poprzez publikację nowej wersji na stronie.
          </p>

          <h2>11. Kontakt</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych prosimy o kontakt poprzez formularz 
            kontaktowy dostępny na stronie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
