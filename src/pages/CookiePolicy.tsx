const CookiePolicy = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Polityka Cookies</h1>
        <div className="policy-content">
          <p><em>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</em></p>

          <h2>1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas przeglądania 
            stron internetowych. Pozwalają one stronie zapamiętać Twoje działania i preferencje przez 
            określony czas.
          </p>

          <h2>2. Jakie cookies używamy?</h2>
          
          <h3>2.1. Cookies niezbędne</h3>
          <p>
            Te pliki cookies są konieczne do prawidłowego funkcjonowania strony. Umożliwiają podstawowe 
            funkcje, takie jak nawigacja po stronie i dostęp do bezpiecznych obszarów.
          </p>
          <ul>
            <li><strong>cookieConsent:</strong> Przechowuje informacje o Twoich preferencjach dotyczących cookies</li>
            <li><strong>tcString:</strong> Przechowuje dane zgodności z IAB TCF v2.2</li>
          </ul>

          <h3>2.2. Cookies analityczne</h3>
          <p>
            Te cookies pomagają nam zrozumieć, jak użytkownicy korzystają ze strony, dzięki czemu możemy 
            ją ulepszać i optymalizować. Zbierają anonimowe dane statystyczne.
          </p>

          <h3>2.3. Cookies marketingowe</h3>
          <p>
            Używane do śledzenia zachowań użytkowników w celach marketingowych. Pozwalają na wyświetlanie 
            spersonalizowanych reklam i mierzenie skuteczności kampanii.
          </p>

          <h2>3. Jak zarządzać cookies?</h2>
          <p>
            Możesz kontrolować i/lub usuwać pliki cookies według własnych preferencji. Większość 
            przeglądarek internetowych akceptuje pliki cookies automatycznie, ale możesz zmienić 
            ustawienia przeglądarki, aby odrzucała cookies.
          </p>

          <h3>Zarządzanie cookies w popularnych przeglądarkach:</h3>
          <ul>
            <li><strong>Google Chrome:</strong> Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn</li>
            <li><strong>Mozilla Firefox:</strong> Ustawienia → Prywatność i bezpieczeństwo → Ciasteczka i dane stron</li>
            <li><strong>Safari:</strong> Preferencje → Prywatność → Zarządzaj danymi witryn internetowych</li>
            <li><strong>Microsoft Edge:</strong> Ustawienia → Pliki cookie i uprawnienia witryn</li>
          </ul>

          <h2>4. Cookies stron trzecich</h2>
          <p>
            Nasza strona może zawierać elementy stron trzecich (np. osadzone wideo). Te serwisy mogą 
            ustawiać własne pliki cookies, na które nie mamy wpływu.
          </p>

          <h2>5. Aktualizacja polityki</h2>
          <p>
            Możemy okresowo aktualizować niniejszą Politykę Cookies. Zmiany wchodzą w życie z chwilą 
            opublikowania nowej wersji na stronie.
          </p>

          <h2>6. Zgoda na cookies</h2>
          <p>
            Korzystając z naszej strony po wyświetleniu się banneru informacyjnego i kontynuując 
            przeglądanie bez zmiany ustawień cookies, wyrażasz zgodę na ich używanie zgodnie z 
            niniejszą polityką.
          </p>

          <h2>7. Standardy IAB TCF v2.2</h2>
          <p>
            Nasze rozwiązanie zarządzania zgodą jest zgodne z IAB Transparency & Consent Framework 
            v2.2, zapewniając transparentne i standaryzowane zarządzanie zgodami użytkowników.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
