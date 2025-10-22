import { useState } from 'react';

const About = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Jak długo trwa typowy projekt brandingowy?',
      answer: 'Czas realizacji zależy od zakresu projektu. Proste logo można stworzyć w 2-3 tygodnie, podczas gdy kompleksowa identyfikacja wizualna z książką znaku zajmuje zazwyczaj 6-8 tygodni. Zawsze ustalamy harmonogram dostosowany do Twoich potrzeb i terminów.'
    },
    {
      question: 'Czy mogę zobaczyć portfolio waszych prac?',
      answer: 'Oczywiście! Nasze portfolio zawiera ponad 150 zrealizowanych projektów z różnych branż. Możemy również przygotować case study podobnych projektów do tego, który planujesz. Skontaktuj się z nami, aby umówić prezentację.'
    },
    {
      question: 'Ile kosztuje stworzenie marki od podstaw?',
      answer: 'Koszt zależy od zakresu prac. Podstawowy projekt logo zaczyna się od 2500 PLN, podczas gdy kompleksowa identyfikacja wizualna z książką znaku to inwestycja od 8000 PLN. Zawsze proponujemy rozwiązania dopasowane do budżetu i celów biznesowych.'
    },
    {
      question: 'Czy oferujecie wsparcie po zakończeniu projektu?',
      answer: 'Tak! Oferujemy wsparcie w implementacji projektu oraz konsultacje w zakresie dalszego rozwoju marki. Wiele projektów ewoluuje w długoterminową współpracę, w której wspieramy klientów w kolejnych etapach rozwoju marki.'
    },
    {
      question: 'Jak wygląda proces współpracy?',
      answer: 'Zaczynamy od spotkania briefingowego, podczas którego poznajemy Twoją firmę i cele. Następnie przeprowadzamy badania i analizę, po czym prezentujemy koncepcje projektowe. Po wyborze kierunku, dopracowujemy projekt z uwzględnieniem Twoich uwag, aż do pełnej satysfakcji. Na końcu otrzymujesz wszystkie pliki źródłowe i wytyczne.'
    },
    {
      question: 'Czy pracujecie z klientami spoza Polski?',
      answer: 'Zdecydowanie tak! Mamy doświadczenie w pracy z klientami międzynarodowymi. Większość komunikacji odbywa się online, co sprawia, że współpraca jest równie sprawna niezależnie od lokalizacji.'
    }
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">O Momatar</h1>
          <div className="policy-content">
            <h2>Kim jesteśmy</h2>
            <p>
              Momatar to boutique studio brandingowe specjalizujące się w tworzeniu autentycznych, 
              zapadających w pamięć marek dla startupów, firm D2C i rosnących przedsiębiorstw. 
              Wierzymy, że dobry branding to nie tylko ładne logo - to strategiczne narzędzie, 
              które buduje zaufanie, wyróżnia Cię na rynku i przyciąga właściwych klientów.
            </p>

            <h2>Nasza filozofia</h2>
            <p>
              Każda marka ma swoją unikalną historię do opowiedzenia. Naszą misją jest odkrycie tej historii 
              i przełożenie jej na spójny, profesjonalny język wizualny, który rezonuje z Twoją grupą docelową. 
              Nie tworzymy "ładnych obrazków" - projektujemy rozwiązania, które rozwiązują realne problemy biznesowe.
            </p>

            <p>
              Pracujemy według zasady "mniej znaczy więcej". Unikamy trendów, które szybko się starzeją. 
              Zamiast tego tworzymy ponadczasowe, eleganckie rozwiązania, które będą aktualne i skuteczne 
              przez lata, nie miesiące.
            </p>

            <h2>Nasze wartości</h2>
            <ul>
              <li><strong>Autentyczność</strong> - Każda marka powinna być prawdziwa. Pomagamy Ci odkryć 
              i zakomunikować to, co sprawia, że jesteś wyjątkowy.</li>
              <li><strong>Strategiczne myślenie</strong> - Projektowanie bez strategii to tylko dekoracja. 
              Każde nasze rozwiązanie jest oparte na solidnych fundamentach strategicznych.</li>
              <li><strong>Jakość bez kompromisów</strong> - Dopracowujemy każdy szczegół. Wierzymy, że 
              diabel tkwi w detalu, a perfekcja to suma wielu małych rzeczy.</li>
              <li><strong>Partnerskie podejście</strong> - To Twoja marka. Jesteśmy Twoimi partnerami 
              w procesie tworzenia, nie tylko wykonawcami zleceń.</li>
            </ul>

            <h2>Doświadczenie i ekspertyza</h2>
            <p>
              Przez ostatnie 7 lat zrealizowaliśmy ponad 150 projektów dla klientów z różnych branż - 
              od lokalnych startupów po międzynarodowe firmy. Nasz zespół łączy doświadczenie w strategii 
              marki, projektowaniu graficznym, UX/UI i marketingu, co pozwala nam tworzyć rozwiązania, 
              które są nie tylko piękne, ale przede wszystkim skuteczne.
            </p>

            <p>
              Specjalizujemy się w pracy z firmami, które są na etapie wzrostu i potrzebują profesjonalnego 
              rebrandingu lub stworzenia marki od podstaw. Rozumiemy wyzwania, przed którymi stoją rosnące 
              firmy, i wiemy, jak branding może wspierać biznesowe cele.
            </p>

            <h2>Dla kogo pracujemy</h2>
            <p>
              Naszymi idealnymi klientami są ambitni przedsiębiorcy i wizjonerzy, którzy traktują swoją markę 
              poważnie i rozumieją wartość profesjonalnego brandingu. Pracujemy szczególnie dobrze z:
            </p>
            <ul>
              <li>Startupami przygotowującymi się do pozyskania finansowania</li>
              <li>Markami D2C wchodzącymi na rynek lub skalującymi działalność</li>
              <li>Firmami SMB przechodzącymi rebranding</li>
              <li>E-commerce szukającymi wyróżnienia w zatłoczonej niszy</li>
              <li>Profesjonalistami budującymi personal brand</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">Najczęściej zadawane pytania</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
