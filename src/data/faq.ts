/**
 * Pytania i odpowiedzi na stronę „Informacje praktyczne".
 *
 * `confirmed: false` = odpowiedź wymaga potwierdzenia przez właściciela —
 * wyświetla się na stronie z dopiskiem, ale NIE trafia do FAQPage JSON-LD,
 * dopóki nie zostanie potwierdzona.
 */
export interface FaqEntry {
  question: string;
  answer: string;
  confirmed: boolean;
}

export const faq: FaqEntry[] = [
  {
    question: 'Jak zarezerwować pokój?',
    answer:
      'Rezerwacje przyjmujemy telefonicznie pod numerem 516 340 545. Rezerwację potwierdza wpłata zaliczki na konto bankowe — szczegóły znajdziesz na stronie Kontakt. W tytule przelewu prosimy podać imię i nazwisko, termin pobytu oraz liczbę osób.',
    confirmed: true,
  },
  {
    question: 'Jak daleko jest plaża?',
    answer:
      'Plaża znajduje się 250 m od domu — to około 3 minuty spacerem. Port rybacki jest 80 m od nas, a nadmorski deptak 100 m.',
    confirmed: true,
  },
  {
    question: 'Czy pokoje mają własne łazienki?',
    answer:
      'Tak, każdy pokój ma własną łazienkę. W pokojach są też telewizor, czajnik i lodówka.',
    confirmed: true,
  },
  {
    question: 'Czy mogę przygotować posiłek na miejscu?',
    answer:
      'Tak — do dyspozycji gości jest wspólny aneks kuchenny z płytą indukcyjną, w sam raz na przygotowanie prostych posiłków. Naprzeciwko domu działa stołówka, a około 100 m dalej bary, smażalnie ryb i restauracje.',
    confirmed: true,
  },
  {
    question: 'Czy udostępniają Państwo parawany plażowe?',
    answer: 'Tak, parawany plażowe wypożyczamy gościom bezpłatnie.',
    confirmed: true,
  },
  {
    question: 'Jak dojechać?',
    answer:
      'Znajdziemy nas przy ul. Pomorskiej 15 w Darłówku Zachodnim (76-153). Samochodem: do Darłówka prowadzi droga z Darłowa (ok. 3 km). Najbliższa stacja kolejowa to Darłowo. Mapa dojazdu znajduje się na stronie Kontakt.',
    confirmed: true,
  },
  {
    question: 'Gdzie można zjeść w pobliżu?',
    answer:
      'Po drugiej stronie ulicy znajduje się stołówka, a w promieniu ok. 100 m — bary, smażalnie ryb, restauracje i sklepy.',
    confirmed: true,
  },
  {
    question: 'Jakie atrakcje są w okolicy?',
    answer:
      'Latarnia morska i port rybacki, rejsy repliką XVIII-wiecznego statku, park wodny, Zamek Książąt Pomorskich, gotycki kościół z XIII wieku oraz muzeum militarne ze strzelnicą w Melechowie.',
    confirmed: true,
  },
  {
    question: 'Jaka jest doba hotelowa?',
    answer:
      'Doba hotelowa trwa od godziny 14:00 w dniu przyjazdu do godziny 10:00 w dniu wyjazdu.',
    confirmed: true,
  },
  {
    question: 'Czy na miejscu jest parking?',
    answer:
      'Na ogrodzonym terenie posesji mamy 2–3 miejsca postojowe, dlatego nie możemy zagwarantować miejsca każdemu — kto się zmieści, parkuje na terenie. Pozostałe auta parkują na ulicy przed domem, a w pobliżu znajdują się także ogólnodostępne parkingi.',
    confirmed: true,
  },
];
