const Terms = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Regulamin</h1>
        <div className="policy-content">
          <p><em>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</em></p>

          <h2>1. Postanowienia ogólne</h2>
          <p>
            Niniejszy Regulamin określa zasady korzystania ze strony internetowej Momatar 
            oraz świadczenia usług brandingowych.
          </p>

          <h2>2. Definicje</h2>
          <ul>
            <li><strong>Usługodawca:</strong> Momatar</li>
            <li><strong>Klient:</strong> Osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług</li>
            <li><strong>Usługa:</strong> Usługi brandingowe oferowane przez Usługodawcę</li>
            <li><strong>Strona:</strong> Witryna internetowa dostępna pod adresem związanym z Momatar</li>
          </ul>

          <h2>3. Rodzaje usług</h2>
          <p>Usługodawca świadczy następujące usługi:</p>
          <ul>
            <li>Projektowanie logo</li>
            <li>Identyfikacja wizualna marki</li>
            <li>Projektowanie opakowań</li>
            <li>Projektowanie stron WWW</li>
            <li>Materiały marketingowe</li>
            <li>Strategia brandingowa</li>
          </ul>

          <h2>4. Warunki świadczenia usług</h2>
          <p>
            Usługi są świadczone na podstawie indywidualnych umów zawieranych między Usługodawcą 
            a Klientem. Szczegółowe warunki współpracy, zakres prac, terminy i wynagrodzenie są 
            określane w odrębnych umowach lub ofertach.
          </p>

          <h2>5. Proces realizacji projektu</h2>
          <ol>
            <li>Klient kontaktuje się z Usługodawcą poprzez formularz lub e-mail</li>
            <li>Usługodawca przeprowadza bezpłatną konsultację wstępną</li>
            <li>Po akceptacji oferty, strony podpisują umowę</li>
            <li>Klient wpłaca zaliczkę (zazwyczaj 50% wartości projektu)</li>
            <li>Usługodawca realizuje projekt zgodnie z harmonogramem</li>
            <li>Klient otrzymuje projekty do akceptacji</li>
            <li>Po wprowadzeniu poprawek i akceptacji, Klient wpłaca pozostałą część wynagrodzenia</li>
            <li>Usługodawca przekazuje finalne pliki i dokumentację</li>
          </ol>

          <h2>6. Prawa autorskie</h2>
          <p>
            Prawa autorskie do utworzonych projektów przechodzą na Klienta po pełnej zapłacie 
            wynagrodzenia. Do tego momentu wszystkie prawa pozostają przy Usługodawcy.
          </p>
          <p>
            Usługodawca zachowuje prawo do umieszczenia zrealizowanych projektów w swoim portfolio 
            oraz do wykorzystania ich w celach promocyjnych, chyba że umowa stanowi inaczej.
          </p>

          <h2>7. Poprawki i modyfikacje</h2>
          <p>
            Liczba poprawek jest określana indywidualnie w ramach każdego projektu. Dodatkowe 
            poprawki wykraczające poza uzgodniony zakres mogą wiązać się z dodatkowymi kosztami.
          </p>

          <h2>8. Terminy realizacji</h2>
          <p>
            Usługodawca dokłada wszelkich starań, aby dotrzymać uzgodnionych terminów. Opóźnienia 
            spowodowane przez Klienta (brak feedbacku, materiałów) mogą wydłużyć czas realizacji.
          </p>

          <h2>9. Płatności</h2>
          <p>
            Wynagrodzenie jest płatne zgodnie z harmonogramem określonym w umowie. Standardowo:
          </p>
          <ul>
            <li>50% zaliczki przed rozpoczęciem prac</li>
            <li>50% po akceptacji projektu i przed przekazaniem plików źródłowych</li>
          </ul>

          <h2>10. Odpowiedzialność</h2>
          <p>
            Usługodawca nie ponosi odpowiedzialności za:
          </p>
          <ul>
            <li>Skutki prawne wynikające z użycia projektów niezgodnie z prawem</li>
            <li>Działania osób trzecich (drukarnie, wykonawcy)</li>
            <li>Straty wynikające z opóźnień spowodowanych przez Klienta</li>
          </ul>

          <h2>11. Odstąpienie od umowy</h2>
          <p>
            Klient może odstąpić od umowy przed rozpoczęciem prac z zachowaniem 7-dniowego okresu 
            wypowiedzenia. Po rozpoczęciu prac, odstąpienie wiąże się z koniecznością pokrycia 
            kosztów już wykonanych prac.
          </p>

          <h2>12. Poufność</h2>
          <p>
            Usługodawca zobowiązuje się do zachowania poufności wszelkich informacji otrzymanych 
            od Klienta w trakcie współpracy, chyba że umowa stanowi inaczej lub prawo wymaga 
            ich ujawnienia.
          </p>

          <h2>13. Rozstrzyganie sporów</h2>
          <p>
            Wszelkie spory będą rozwiązywane polubownie. W przypadku braku porozumienia, 
            właściwy będzie sąd właściwy dla siedziby Usługodawcy.
          </p>

          <h2>14. Postanowienia końcowe</h2>
          <p>
            Regulamin wchodzi w życie z dniem opublikowania. Usługodawca zastrzega sobie prawo 
            do wprowadzania zmian w Regulaminie, które będą obowiązywać od momentu publikacji.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
