import type { ImageMetadata } from 'astro';

import dom1 from '../assets/photos/dom/dom-morze-u-nas-1.jpg';
import dom2 from '../assets/photos/dom/dom-morze-u-nas-2.jpg';
import dom3 from '../assets/photos/dom/dom-morze-u-nas-3.jpg';
import domFront from '../assets/photos/dom/dom-od-frontu.jpg';

import pokoj1Wejscie from '../assets/photos/pokoje/pokoj-1-wejscie.jpg';
import pokoj1a from '../assets/photos/pokoje/pokoj-1-a.jpg';
import pokoj1b from '../assets/photos/pokoje/pokoj-1-b.jpg';
import pokoj3 from '../assets/photos/pokoje/pokoj-3.jpg';
import pokoj3Wejscie from '../assets/photos/pokoje/pokoj-3-wejscie.jpg';
import pokoj4 from '../assets/photos/pokoje/pokoj-4.jpg';
import pokoj6 from '../assets/photos/pokoje/pokoj-6.jpg';
import pokoj7 from '../assets/photos/pokoje/pokoj-7.jpg';
import pokoj8 from '../assets/photos/pokoje/pokoj-8.jpg';
import pokoj9 from '../assets/photos/pokoje/pokoj-9.jpg';
import pokoj10a from '../assets/photos/pokoje/pokoj-10-a.jpg';
import pokoj10b from '../assets/photos/pokoje/pokoj-10-b.jpg';
import pokoj11 from '../assets/photos/pokoje/pokoj-11.jpg';
import aneksKuchenny from '../assets/photos/pokoje/aneks-kuchenny.jpg';
import wejscieNaPietro from '../assets/photos/pokoje/wejscie-na-pietro.jpg';

import kacikGrillowy from '../assets/photos/okolica/kacik-grillowy.jpg';
import nadbrzeze from '../assets/photos/okolica/nadbrzeze-darlowko.jpg';
import plazaBrzeg from '../assets/photos/okolica/plaza-brzeg-morza.jpg';
import morzeSztorm from '../assets/photos/okolica/morze-sztorm.jpg';
import portDarlowko from '../assets/photos/okolica/port-w-darlowku.jpg';
import plazaDarlowko from '../assets/photos/okolica/plaza-w-darlowku.jpg';
import zachodSlonca from '../assets/photos/okolica/zachod-slonca-darlowko.jpg';
import regaty1 from '../assets/photos/okolica/regaty-darlowko-1.jpg';
import regaty2 from '../assets/photos/okolica/regaty-darlowko-2.jpg';
import dolinaCharlotty from '../assets/photos/okolica/dolina-charlotty.jpg';
import muzeumMelechow from '../assets/photos/okolica/muzeum-melechow.jpg';

export interface GalleryPhoto {
  src: ImageMetadata;
  alt: string;
}

/** Pokoje i części wspólne. */
export const roomPhotos: GalleryPhoto[] = [
  { src: pokoj1Wejscie, alt: 'Wejście do pokoju nr 1' },
  { src: pokoj1a, alt: 'Pokój nr 1 — łóżka i okno' },
  { src: pokoj1b, alt: 'Pokój nr 1' },
  { src: pokoj3, alt: 'Pokój nr 3' },
  { src: pokoj3Wejscie, alt: 'Wejście do pokoju nr 3' },
  { src: pokoj4, alt: 'Pokój nr 4' },
  { src: pokoj6, alt: 'Pokój nr 6' },
  { src: pokoj7, alt: 'Pokój nr 7' },
  { src: pokoj8, alt: 'Pokój nr 8' },
  { src: pokoj9, alt: 'Pokój nr 9' },
  { src: pokoj10a, alt: 'Pokój nr 10' },
  { src: pokoj10b, alt: 'Pokój nr 10 — drugie ujęcie' },
  { src: pokoj11, alt: 'Pokój nr 11' },
  { src: aneksKuchenny, alt: 'Aneks kuchenny do dyspozycji gości' },
  { src: wejscieNaPietro, alt: 'Wejście na piętro' },
];

/** Dom i posesja. */
export const housePhotos: GalleryPhoto[] = [
  { src: dom1, alt: 'Dom Morze u Nas — podjazd i ogród' },
  { src: dom2, alt: 'Dom Morze u Nas — widok z zewnątrz' },
  { src: dom3, alt: 'Dom Morze u Nas — balkony' },
  { src: domFront, alt: 'Dom od frontu' },
  { src: kacikGrillowy, alt: 'Kącik grillowy dla gości' },
];

/** Darłówko i okolica. */
export const surroundingPhotos: GalleryPhoto[] = [
  { src: plazaDarlowko, alt: 'Plaża w Darłówku' },
  { src: plazaBrzeg, alt: 'Brzeg morza — plaże Darłowa' },
  { src: portDarlowko, alt: 'Port rybacki w Darłówku' },
  { src: nadbrzeze, alt: 'Nadbrzeże w Darłówku' },
  { src: zachodSlonca, alt: 'Zachód słońca nad morzem w Darłówku' },
  { src: morzeSztorm, alt: 'Morze w czasie sztormu' },
  { src: regaty1, alt: 'Regaty w Darłówku' },
  { src: regaty2, alt: 'Regaty w Darłówku — łodzie w porcie' },
  { src: dolinaCharlotty, alt: 'Dolina Charlotty' },
  { src: muzeumMelechow, alt: 'Muzeum militarne w Melechowie' },
];

/** Skrót na stronę oferty — reprezentatywne wnętrza. */
export const offerRoomStrip: GalleryPhoto[] = [
  roomPhotos[1],
  roomPhotos[3],
  roomPhotos[5],
  roomPhotos[7],
  roomPhotos[9],
  roomPhotos[13],
];

/** Zajawka galerii na stronie głównej. */
export const homeTeaser: GalleryPhoto[] = [
  roomPhotos[1],
  housePhotos[0],
  surroundingPhotos[0],
  surroundingPhotos[4],
];
