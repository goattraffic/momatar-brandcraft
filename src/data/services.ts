export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'projektowanie-logo',
    title: 'Projektowanie Logo',
    short: 'Unikalne logo, które odzwierciedla Twoją markę i wyróżnia się na rynku.',
    price: 'od 2500 PLN',
    image: 'service-logo',
    features: [
      '3-5 koncepcji projektowych',
      'Nielimitowane poprawki',
      'Wszystkie formaty plików',
      'Wytyczne dotyczące marki',
      'Pełne prawa autorskie'
    ],
    contentHtml: `
      <p>Logo to fundament Twojej tożsamości wizualnej. Tworzymy unikalne, zapadające w pamięć logo, które odzwierciedlają istotę Twojej marki i wyróżniają Cię na tle konkurencji.</p>
      
      <h2>Nasz proces projektowania</h2>
      <p>Każdy projekt logo zaczyna się od dogłębnego zrozumienia Twojej firmy, wartości i grupy docelowej. Przeprowadzamy szczegółowy brief, podczas którego poznajemy Twoją wizję, analizujemy konkurencję i definiujemy unikalne cechy Twojej marki.</p>
      
      <p>Na podstawie zebranych informacji opracowujemy 3-5 unikalnych koncepcji projektowych. Każda koncepcja jest starannie przemyślana i prezentuje inny kierunek wizualny, dając Ci możliwość wyboru rozwiązania, które najlepiej rezonuje z Twoją marką.</p>
      
      <h3>Co otrzymasz?</h3>
      <p>Po zatwierdzeniu wybranej koncepcji, dopracowujemy projekt, wprowadzając nielimitowane poprawki, aż do osiągnięcia pełnej satysfakcji. Finalne logo otrzymujesz w pełnym pakiecie formatów - AI, EPS, SVG, PNG i JPG - gotowych do użycia zarówno w druku, jak i w mediach cyfrowych.</p>
      
      <p>Dodatkowo otrzymujesz podstawowe wytyczne dotyczące marki, określające poprawne użycie logo, minimalny rozmiar, bezpieczne obszary oraz warianty kolorystyczne (pełny kolor, czarno-biały, monochromatyczny).</p>
      
      <h3>Dlaczego warto zainwestować w profesjonalne logo?</h3>
      <p>Logo to pierwsze wrażenie, jakie robi Twoja firma. Profesjonalnie zaprojektowane logo buduje zaufanie, zwiększa rozpoznawalność marki i wyróżnia Cię w zatłoczonym rynku. To inwestycja, która zwraca się wielokrotnie poprzez większą wiarygodność i profesjonalizm w oczach klientów.</p>
      
      <p>Nasze logo są projektowane z myślą o wszechstronności - działają równie dobrze na wizytówce, jak i na billboardzie, w aplikacji mobilnej i na stronie internetowej. Dbamy o każdy szczegół, aby Twoja marka wyglądała doskonale w każdym kontekście.</p>
    `
  },
  {
    slug: 'identyfikacja-wizualna',
    title: 'Identyfikacja Wizualna',
    short: 'Kompleksowy system identyfikacji wizualnej dla spójnej komunikacji marki.',
    price: 'od 8000 PLN',
    image: 'service-identity',
    features: [
      'Logo i warianty',
      'Paleta kolorów',
      'Typografia firmowa',
      'Wzory graficzne',
      'Książka znaku (brand book)'
    ],
    contentHtml: `
      <p>Identyfikacja wizualna to znacznie więcej niż tylko logo. To kompleksowy system wizualny, który definiuje, jak Twoja marka wygląda, komunikuje się i jest odbierana przez klientów w każdym punkcie kontaktu.</p>
      
      <h2>Co obejmuje pełna identyfikacja wizualna?</h2>
      <p>Nasz proces tworzenia identyfikacji wizualnej rozpoczyna się od stworzenia lub redefinicji logo wraz z jego wariantami (podstawowy, alternatywny, monochromatyczny, ikoniczny). Następnie opracowujemy kompletną paletę kolorów - kolory podstawowe, drugorzędne i uzupełniające, wraz z kodami HEX, RGB, CMYK i Pantone.</p>
      
      <h3>Typografia i wzory</h3>
      <p>Wybieramy i definiujemy typografię firmową - rodziny czcionek dla nagłówków, tekstu podstawowego i tekstów akcentowanych. Tworzymy również unikalne wzory graficzne, które można stosować jako tła, elementy dekoracyjne lub wzory wypełnienia.</p>
      
      <p>Opracowujemy zestaw ikon, ilustracji lub elementów graficznych charakterystycznych dla Twojej marki, które wzbogacają komunikację wizualną i dodają unikalnego charakteru.</p>
      
      <h3>Książka znaku (Brand Book)</h3>
      <p>Wszystkie elementy są szczegółowo udokumentowane w profesjonalnej książce znaku, która stanowi kompletny przewodnik po Twojej tożsamości wizualnej. Brand book zawiera wytyczne dotyczące prawidłowego stosowania wszystkich elementów, przykłady prawidłowego i nieprawidłowego użycia, oraz inspiracje do przyszłych zastosowań.</p>
      
      <h2>Korzyści z kompleksowej identyfikacji</h2>
      <p>Spójna identyfikacja wizualna buduje silną, rozpoznawalną markę. Sprawia, że wszystkie materiały firmowe - od wizytówek, przez strony internetowe, po kampanie reklamowe - mówią jednym głosem i tworzą spójne doświadczenie marki.</p>
      
      <p>To inwestycja, która oszczędza czas i pieniądze w przyszłości. Dzięki jasnym wytycznym, każdy kolejny projekt graficzny jest realizowany sprawniej i zachowuje spójność z całością komunikacji marki.</p>
      
      <h3>Dla kogo?</h3>
      <p>Kompletna identyfikacja wizualna jest idealna dla rozwijających się firm, które chcą profesjonalnie przedstawić swoją markę, oraz dla firm przechodzących rebranding. To must-have dla każdego, kto poważnie traktuje swoją komunikację wizualną.</p>
    `
  },
  {
    slug: 'projektowanie-opakowan',
    title: 'Projektowanie Opakowań',
    short: 'Przyciągające wzrok opakowania, które sprzedają Twój produkt.',
    price: 'od 5000 PLN',
    image: 'service-packaging',
    features: [
      'Badanie rynku',
      '2-3 koncepcje projektowe',
      'Wizualizacje 3D',
      'Przygotowanie do druku',
      'Wytyczne produkcyjne'
    ],
    contentHtml: `
      <p>Opakowanie to cichy sprzedawca Twojego produktu. Na półce sklepowej masz sekundy, aby przyciągnąć uwagę i przekonać klienta do zakupu. Tworzymy opakowania, które wyróżniają się, komunikują wartość produktu i skłaniają do działania.</p>
      
      <h2>Strategia przed projektem</h2>
      <p>Każdy projekt opakowania rozpoczynamy od badania rynku. Analizujemy konkurencję, trendy w kategorii, preferencje grupy docelowej i wymagania regulacyjne. To pozwala nam stworzyć opakowanie, które nie tylko pięknie wygląda, ale przede wszystkim skutecznie sprzedaje.</p>
      
      <h3>Proces projektowy</h3>
      <p>Opracowujemy 2-3 unikalne koncepcje projektowe, z których każda prezentuje inną strategię wizualną. Przedstawiamy je jako realistyczne wizualizacje 3D, dzięki którym możesz zobaczyć, jak opakowanie będzie wyglądało w rzeczywistości, zanim trafi do produkcji.</p>
      
      <p>Po wyborze preferowanej koncepcji, dopracowujemy każdy szczegół - od hierarchii informacji, przez dobór materiałów, po wykończenia specjalne (UV, hot stamping, tłoczenia). Dbamy o to, aby projekt był nie tylko atrakcyjny wizualnie, ale też funkcjonalny i możliwy do wyprodukowania w zakładanym budżecie.</p>
      
      <h2>Przygotowanie do produkcji</h2>
      <p>Dostarczamy kompletne pliki przygotowane do druku, zgodne ze specyfikacjami drukarni. Przygotowujemy również szczegółowe wytyczne produkcyjne, określające materiały, wykończenia, instrukcje montażu i kontrolę jakości.</p>
      
      <h3>Testowanie i optymalizacja</h3>
      <p>Na życzenie przeprowadzamy testy użyteczności opakowania - od łatwości otwarcia, przez czytelność informacji, po atrakcyjność wizualną. Możemy również zrealizować prototypy fizyczne, aby upewnić się, że wszystko działa perfekcyjnie.</p>
      
      <h3>Rodzaje opakowań</h3>
      <p>Projektujemy wszystkie rodzaje opakowań - pudełka kartonowe, etykiety, torebki, butelki, puszki, opakowania zbiorcze i wiele więcej. Niezależnie od kategorii produktu, tworzymy rozwiązania, które przyciągają wzrok i budują lojalność klientów.</p>
      
      <p>Dobre opakowanie to inwestycja, która bezpośrednio przekłada się na sprzedaż. To pierwsze fizyczne doświadczenie klienta z Twoim produktem - sprawiamy, aby było niezapomniane.</p>
    `
  },
  {
    slug: 'projektowanie-stron-www',
    title: 'Projektowanie Stron WWW',
    short: 'Nowoczesne, responsywne strony internetowe zoptymalizowane pod konwersję.',
    price: 'od 6000 PLN',
    image: 'service-digital',
    features: [
      'Projektowanie UX/UI',
      'Responsywność (mobile-first)',
      'Optymalizacja SEO',
      'Integracja z CMS',
      'Szkolenie z obsługi'
    ],
    contentHtml: `
      <p>Strona internetowa to cyfrowa wizytówka Twojej firmy, narzędzie sprzedażowe i punkt kontaktu z klientami. Tworzymy strony, które nie tylko pięknie wyglądają, ale przede wszystkim skutecznie realizują cele biznesowe.</p>
      
      <h2>Podejście zorientowane na użytkownika</h2>
      <p>Każdy projekt zaczynamy od zrozumienia potrzeb Twoich użytkowników. Mapujemy ścieżki użytkownika (user journeys), definiujemy kluczowe punkty konwersji i projektujemy doświadczenie, które prowadzi odwiedzających do pożądanych działań.</p>
      
      <h3>Projektowanie UX/UI</h3>
      <p>Najpierw tworzymy wireframe'y - szkielety strony, które definiują strukturę, hierarchię treści i podstawowe interakcje. Następnie opracowujemy szczegółowe projekty UI, które łączą Twoją identyfikację wizualną z najlepszymi praktykami projektowania interfejsów.</p>
      
      <p>Projektujemy z podejściem mobile-first, zapewniając doskonałe doświadczenie na wszystkich urządzeniach - od smartfonów, przez tablety, po duże monitory desktopowe.</p>
      
      <h2>Technologia i optymalizacja</h2>
      <p>Strony realizujemy w nowoczesnych technologiach, dbając o szybkość ładowania, bezpieczeństwo i optymalizację pod kątem wyszukiwarek (SEO). Wszystkie elementy techniczne są skonfigurowane zgodnie z najlepszymi praktykami Google - od tagów meta, przez structured data, po poprawną hierarchię nagłówków.</p>
      
      <h3>System zarządzania treścią</h3>
      <p>Integrujemy stronę z intuicyjnym systemem CMS (np. WordPress, Webflow), który pozwala Ci samodzielnie aktualizować treści, dodawać wpisy na blogu i zarządzać podstawowymi elementami strony. Przeprowadzamy również szczegółowe szkolenie z obsługi systemu.</p>
      
      <h3>Analityka i śledzenie konwersji</h3>
      <p>Konfigurujemy Google Analytics i inne narzędzia analityczne, aby móc śledzić ruch na stronie, zachowania użytkowników i konwersje. To pozwala na ciągłą optymalizację i data-driven decision making.</p>
      
      <h2>Wsparcie po wdrożeniu</h2>
      <p>Po uruchomieniu strony nie zostawiamy Cię samego. Oferujemy wsparcie techniczne, pomoc w rozwiązywaniu problemów i doradztwo w zakresie dalszego rozwoju strony.</p>
      
      <p>Dobra strona internetowa to nie koszt, to inwestycja, która pracuje dla Twojego biznesu 24/7. Tworzymy strony, które przyciągają odwiedzających, budują zaufanie i generują realne wyniki biznesowe.</p>
    `
  },
  {
    slug: 'materialy-marketingowe',
    title: 'Materiały Marketingowe',
    short: 'Profesjonalne materiały reklamowe, które wspierają Twoją sprzedaż.',
    price: 'od 3000 PLN',
    image: 'service-marketing',
    features: [
      'Wizytówki',
      'Ulotki i broszury',
      'Katalogi produktowe',
      'Banery i rollup\'y',
      'Prezentacje firmowe'
    ],
    contentHtml: `
      <p>Materiały marketingowe to narzędzia, które wspomagają Twoją sprzedaż i budują profesjonalny wizerunek firmy. Projektujemy kompletne zestawy materiałów, spójnych z Twoją identyfikacją wizualną i skutecznych w komunikacji.</p>
      
      <h2>Materiały podstawowe</h2>
      <p>Wizytówki to podstawowe narzędzie networkingowe. Projektujemy wizytówki, które zapadają w pamięć - od klasycznych rozwiązań, po kreatywne formy z nietypowymi kształtami, materiałami lub wykończeniami. Dbamy o czytelność informacji i zgodność z tożsamością marki.</p>
      
      <h3>Ulotki i broszury</h3>
      <p>Tworzymy ulotki i broszury, które przyciągają uwagę, komunikują kluczowe korzyści i skłaniają do działania. Projektujemy zarówno proste ulotki jednostronicowe, jak i wielostronicowe broszury z rozbudowanymi treściami. Każdy projekt jest przygotowany z myślą o konkretnym celu - czy to generowanie leadów, informowanie o promocji, czy prezentacja oferty.</p>
      
      <h2>Materiały sprzedażowe</h2>
      <p>Katalogi produktowe to kompleksowe narzędzia sprzedażowe. Projektujemy je w sposób uporządkowany i atrakcyjny wizualnie, z czytelną hierarchią informacji, wysokiej jakości fotografiami produktów i zachęcającymi opisami.</p>
      
      <h3>Materiały targowe</h3>
      <p>Banery, rollup'y, ścianki wystawiennicze - projektujemy wszystkie materiały potrzebne na targi i wydarzenia. Dbamy o to, aby Twoje stoisko wyróżniało się i przyciągało odwiedzających z daleka, a kluczowe informacje były czytelne i natychmiast zrozumiałe.</p>
      
      <h3>Prezentacje firmowe</h3>
      <p>Tworzymy profesjonalne prezentacje PowerPoint lub Keynote, które wspomagają Twoje wystąpienia sprzedażowe i biznesowe. Projektujemy szablony zgodne z Twoją identyfikacją wizualną, z czytelną typografią, efektownymi wizualizacjami danych i angażującymi układami slajdów.</p>
      
      <h2>Przygotowanie do produkcji</h2>
      <p>Wszystkie materiały przygotowujemy w plikach gotowych do druku, zgodnych ze specyfikacjami drukarni. Dostarczamy pliki w odpowiednich formatach (PDF, AI, INDD) z prawidłowymi spadami, profilami kolorowymi CMYK i rozdzielczością 300 DPI.</p>
      
      <h3>Doradztwo w zakresie materiałów i wykończeń</h3>
      <p>Pomagamy w wyborze odpowiednich materiałów i wykończeń - od rodzaju papieru, przez lakierowanie UV, po hot stamping czy tłoczenia. Doradzamy rozwiązania, które mieszczą się w budżecie i osiągają zamierzony efekt wizualny.</p>
      
      <p>Profesjonalne materiały marketingowe to inwestycja w wizerunek firmy. Sprawiają, że Twoja firma wygląda wiarygodnie, profesjonalnie i godnie zaufania - co bezpośrednio przekłada się na skuteczność sprzedaży.</p>
    `
  },
  {
    slug: 'strategia-brandingowa',
    title: 'Strategia Brandingowa',
    short: 'Kompleksowa strategia, która definiuje pozycjonowanie i rozwój Twojej marki.',
    price: 'od 10000 PLN',
    image: 'service-strategy',
    features: [
      'Audyt marki',
      'Analiza konkurencji',
      'Positioning i messaging',
      'Archetyp marki',
      'Roadmap rozwoju'
    ],
    contentHtml: `
      <p>Strategia brandingowa to fundament silnej marki. Zanim rozpoczniesz jakiekolwiek działania kreatywne czy marketingowe, musisz dokładnie zdefiniować, kim jesteś jako marka, do kogo mówisz i co sprawia, że jesteś wyjątkowy.</p>
      
      <h2>Kompleksowy audyt marki</h2>
      <p>Rozpoczynamy od dogłębnego audytu Twojej obecnej marki. Analizujemy wszystkie punkty kontaktu z klientami, komunikację wizualną i werbalną, obecność w mediach, opinie klientów i percepcję rynkową. Identyfikujemy mocne strony, słabości oraz niespójności w komunikacji.</p>
      
      <h3>Analiza konkurencji i rynku</h3>
      <p>Badamy Twoich bezpośrednich i pośrednich konkurentów - ich pozycjonowanie, komunikację, tożsamość wizualną i strategie marketingowe. Mapujemy krajobraz konkurencyjny, identyfikujemy luki rynkowe i możliwości wyróżnienia.</p>
      
      <p>Analizujemy również szerszy kontekst rynkowy - trendy w branży, zmieniające się potrzeby klientów, emerging opportunities i potencjalne zagrożenia.</p>
      
      <h2>Pozycjonowanie i strategia komunikacji</h2>
      <p>Na podstawie zebranych danych opracowujemy strategię pozycjonowania - definiujemy unikalną propozycję wartości (UVP), kluczowe wyróżniki i powody, dla których klienci powinni wybrać właśnie Ciebie.</p>
      
      <h3>Messaging i ton komunikacji</h3>
      <p>Tworzymy messaging framework - hierarchię kluczowych komunikatów, które konsekwentnie przekazujesz we wszystkich kanałach. Definiujemy ton komunikacji (tone of voice) - jak mówisz do swoich klientów, jakich słów używasz, jak formalny lub nieformalny jest Twój język.</p>
      
      <h3>Archetyp marki i persona</h3>
      <p>Określamy archetyp Twojej marki (np. Bohater, Mędrzec, Odkrywca) - personalność, która kieruje wszystkimi decyzjami dotyczącymi komunikacji. Tworzymy szczegółowe persony klientów - profile idealnych odbiorców z ich celami, bolączkami, zachowaniami i preferencjami.</p>
      
      <h2>Roadmap rozwoju marki</h2>
      <p>Opracowujemy szczegółowy plan działania - priorytety na najbliższe miesiące i lata, projekty do zrealizowania, kanały komunikacji do wykorzystania i KPI do monitorowania. To praktyczny przewodnik, który mówi Ci dokładnie, co robić dalej.</p>
      
      <h3>Dokumentacja strategii</h3>
      <p>Wszystko dokumentujemy w przejrzystym, praktycznym dokumencie strategii marki. To punkt odniesienia dla wszystkich przyszłych decyzji dotyczących marki - od projektów graficznych, przez kampanie marketingowe, po rozwój produktu.</p>
      
      <p>Strategia brandingowa to inwestycja, która definiuje kierunek rozwoju Twojej marki na lata. To różnica między chaotycznymi, ad-hoc działaniami a konsekwentnym budowaniem silnej, rozpoznawalnej marki, która przyciąga właściwych klientów i buduje lojalność.</p>
    `
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
