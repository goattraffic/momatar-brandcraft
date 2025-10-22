const RefundPolicy = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Polityka Zwrotów</h1>
        <div className="policy-content">
          <p><em>Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</em></p>

          <h2>1. Wprowadzenie</h2>
          <p>
            Niniejsza Polityka Zwrotów określa zasady zwrotu środków i rezygnacji z usług 
            świadczonych przez Momatar. Ze względu na kreatywny charakter naszych usług, 
            zwroty są rozpatrywane indywidualnie.
          </p>

          <h2>2. Prawo odstąpienia od umowy</h2>
          <p>
            Zgodnie z prawem konsumenckim, Klient będący konsumentem ma prawo odstąpić od umowy 
            zawartej na odległość w ciągu 14 dni od daty zawarcia umowy, bez podania przyczyny.
          </p>
          <p>
            <strong>Ważne:</strong> Prawo to wygasa, jeśli usługa została wykonana w pełni za wyraźną 
            zgodą Klienta i po poinformowaniu go o utracie prawa odstąpienia.
          </p>

          <h2>3. Zwroty przed rozpoczęciem prac</h2>
          <p>
            Jeśli Klient rezygnuje z usługi przed rozpoczęciem jakichkolwiek prac projektowych:
          </p>
          <ul>
            <li>Wpłacona zaliczka zostaje zwrócona w całości</li>
            <li>Zwrot następuje w ciągu 14 dni roboczych</li>
            <li>Nie są pobierane żadne opłaty manipulacyjne</li>
          </ul>

          <h2>4. Zwroty po rozpoczęciu prac</h2>
          <p>
            Jeśli Klient rezygnuje z projektu po rozpoczęciu prac:
          </p>
          <ul>
            <li>Rozliczeniu podlegają godziny pracy już wykonane</li>
            <li>Klient pokrywa koszty materiałów i usług podmiotów trzecich</li>
            <li>Zwrotowi podlega różnica między wpłaconą zaliczką a kosztami wykonanych prac</li>
            <li>Usługodawca przedstawia szczegółowe rozliczenie wykonanych prac</li>
          </ul>

          <h2>5. Zwroty po zakończeniu projektu</h2>
          <p>
            Po dostarczeniu finalnych plików i akceptacji projektu przez Klienta, zwroty nie są możliwe. 
            Uważa się, że usługa została wykonana zgodnie z umową.
          </p>

          <h2>6. Niezadowolenie z projektu</h2>
          <p>
            Jeśli Klient nie jest zadowolony z projektu w trakcie jego realizacji:
          </p>
          <ul>
            <li>Przysługuje mu uzgodniona liczba rund poprawek (określona w umowie)</li>
            <li>Może zgłosić uwagi i sugestie zmian</li>
            <li>W uzasadnionych przypadkach możliwa jest zmiana kierunku projektu</li>
          </ul>
          <p>
            Niezadowolenie z projektu nie jest samo w sobie podstawą do zwrotu środków, 
            jeśli projekt jest realizowany zgodnie z briefem i umową.
          </p>

          <h2>7. Sytuacje szczególne uprawniające do zwrotu</h2>
          <p>Pełny lub częściowy zwrot może nastąpić w następujących przypadkach:</p>
          <ul>
            <li>Niedotrzymanie uzgodnionych terminów przez Usługodawcę (bez usprawiedliwionych przyczyn)</li>
            <li>Niewykonanie usługi zgodnie z briefem i umową</li>
            <li>Rażące naruszenie warunków umowy przez Usługodawcę</li>
            <li>Okoliczności uniemożliwiające kontynuację projektu niezależne od stron</li>
          </ul>

          <h2>8. Procedura zgłaszania zwrotu</h2>
          <p>Aby złożyć wniosek o zwrot:</p>
          <ol>
            <li>Skontaktuj się z nami poprzez formularz kontaktowy</li>
            <li>Wyjaśnij przyczynę wniosku o zwrot</li>
            <li>Dostarcz wszelkie dokumenty potwierdzające uzasadnienie zwrotu</li>
            <li>Poczekaj na analizę sprawy (do 7 dni roboczych)</li>
            <li>Otrzymaj decyzję i, w przypadku pozytywnej odpowiedzi, zwrot środków</li>
          </ol>

          <h2>9. Formy zwrotu</h2>
          <p>
            Zwrot środków następuje na rachunek bankowy, z którego dokonano płatności, 
            lub w formie uzgodnionej z Klientem.
          </p>

          <h2>10. Czas realizacji zwrotu</h2>
          <p>
            Po pozytywnym rozpatrzeniu wniosku, zwrot następuje w ciągu 14 dni roboczych. 
            Czas wpływu środków na konto może zależeć od banku.
          </p>

          <h2>11. Wykluczenia</h2>
          <p>Prawo do zwrotu nie przysługuje w przypadku:</p>
          <ul>
            <li>Zmiany koncepcji projektu przez Klienta po akceptacji wstępnej</li>
            <li>Opóźnień spowodowanych przez Klienta (brak feedbacku, materiałów)</li>
            <li>Rezygnacji z projektu po wykorzystaniu wszystkich rund poprawek</li>
            <li>Projektów wykonanych na specjalne zamówienie i dostosowanych do unikalnych potrzeb</li>
          </ul>

          <h2>12. Reklamacje</h2>
          <p>
            Wszelkie reklamacje dotyczące jakości usług należy zgłaszać niezwłocznie, 
            nie później niż w ciągu 14 dni od dostarczenia projektu. Reklamacje rozpatrywane 
            są indywidualnie w ciągu 14 dni roboczych.
          </p>

          <h2>13. Kontakt w sprawie zwrotów</h2>
          <p>
            W sprawach dotyczących zwrotów i reklamacji prosimy o kontakt poprzez formularz 
            kontaktowy dostępny na stronie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
