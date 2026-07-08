/**
 * Jedno źródło prawdy dla danych firmy (NAP), nawigacji i konfiguracji.
 * Zmiany adresu/telefonu/konta wprowadzaj wyłącznie tutaj.
 */
export const site = {
  name: 'Morze u Nas',
  tagline: 'Pokoje gościnne w Darłówku',
  url: 'https://darlowko-wczasy.pl',
  phoneDisplay: '516 340 545',
  phoneHref: 'tel:+48516340545',
  phoneIntl: '+48516340545',
  email: 'pomorska15@gmail.com',
  address: {
    street: 'ul. Pomorska 15',
    locality: 'Darłówko Zachodnie',
    zip: '76-153',
    country: 'PL',
  },
  geo: { lat: 54.4360546, lng: 16.3811035 },
  /** Sygnaturowe odległości — główny atut lokalizacji. */
  distances: [
    { value: 80, unit: 'm', label: 'do portu rybackiego' },
    { value: 100, unit: 'm', label: 'do deptaka' },
    { value: 250, unit: 'm', label: 'do plaży' },
  ],
  bank: {
    name: 'mBank',
    account: '88 1140 2004 0000 3102 7722 5021',
    owner: 'Henryk Skonieczny',
    transferTitle:
      'W tytule przelewu prosimy podać: imię i nazwisko, termin pobytu oraz liczbę osób.',
  },
  mapUrl:
    'https://www.google.com/maps/place/Morze+u+Nas+Pokoje+Dar%C5%82%C3%B3wko',
  ga4Id: 'G-XCNCXP4RJP',
} as const;

export const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/oferta.html', label: 'Oferta' },
  { href: '/galeria.html', label: 'Galeria' },
  { href: '/informacje-praktyczne.html', label: 'Informacje praktyczne' },
  { href: '/kontakt.html', label: 'Kontakt' },
] as const;
