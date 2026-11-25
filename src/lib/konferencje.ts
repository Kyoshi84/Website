import dane from '../data/konferencje.json';

export type Wydarzenie = (typeof dane.wydarzenia)[number];

export const aktualizacja: string = dane.aktualizacja;

export const MIESIACE = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];
export const MIES_DOP = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];

/** Dzisiejsza data w Polsce (RRRR-MM-DD), żeby „dziś” nie zależało od strefy serwera budującego stronę. */
export function dzisiaj(): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
}

export function zakres(od: string, doDnia: string): string {
  const [ry, rm, rd] = od.split('-').map(Number);
  const [ky, km, kd] = doDnia.split('-').map(Number);
  if (od === doDnia) return `${rd} ${MIES_DOP[rm - 1]}`;
  if (rm === km && ry === ky) return `${rd}–${kd} ${MIES_DOP[rm - 1]}`;
  return `${rd} ${MIES_DOP[rm - 1]} – ${kd} ${MIES_DOP[km - 1]}`;
}

export function dzienMies(iso: string): string {
  const [, m, d] = iso.split('-').map(Number);
  return `${d} ${MIES_DOP[m - 1]}`;
}

/** Nadchodzące wydarzenia (opcjonalnie przefiltrowane), od najbliższego. */
export function nadchodzace(filtr?: (e: Wydarzenie) => boolean): Wydarzenie[] {
  const dzis = dzisiaj();
  return dane.wydarzenia
    .filter((e) => e.do >= dzis && (!filtr || filtr(e)))
    .sort((a, b) => a.od.localeCompare(b.od) || a.nazwa.localeCompare(b.nazwa));
}

export function odmianaWydarzen(n: number): string {
  if (n === 1) return 'wydarzenie';
  const r10 = n % 10, r100 = n % 100;
  return r10 >= 2 && r10 <= 4 && (r100 < 12 || r100 > 14) ? 'wydarzenia' : 'wydarzeń';
}

export interface StronaKalendarza {
  /** Fragment adresu pod /konferencje/ ('' = strona główna kalendarza). */
  slug: string;
  /** Krótka etykieta do linków „Zobacz też”. */
  etykieta: string;
  /** Tytuł w <title> (dopisek „— Jan Mejor” dodaje layout, jeśli się mieści). */
  title: string;
  description: string;
  h1: string;
  filtr?: (e: Wydarzenie) => boolean;
  wstep: string[];
}

export const STRONY: Record<string, StronaKalendarza> = {
  index: {
    slug: '',
    etykieta: 'Wszystkie',
    title: 'Kalendarz konferencji AI i iGaming 2026–2027',
    description: 'Konferencje i targi AI, data science i iGaming w Polsce i na świecie: daty, miejsca, terminy CFP i plik .ics do kalendarza.',
    h1: 'Kalendarz konferencji: AI i iGaming',
    wstep: [
      'Jedno miejsce na wszystkie wydarzenia, które śledzę: targi iGaming i loterii oraz konferencje o AI, danych i nowych technologiach. Daty biorę ze stron organizatorów albo z otwartych baz i agregatorów — przy każdym wydarzeniu widać skąd. Przed rezerwacją lotu i tak kliknij w link organizatora.',
    ],
  },
  ai: {
    slug: 'ai',
    etykieta: 'AI i technologie',
    title: 'Konferencje AI 2026–2027: kalendarz i CFP',
    description: 'Kalendarz konferencji o sztucznej inteligencji, danych i technologiach: daty, miasta, terminy call for papers, wydarzenia w Polsce i na świecie.',
    h1: 'Konferencje o sztucznej inteligencji, danych i technologiach',
    filtr: (e) => e.branza === 'ai-tech',
    wstep: [
      'Zestawienie konferencji o AI, uczeniu maszynowym, danych i nowych technologiach, które śledzę na potrzeby Raportów AI. Obok dużych światowych konferencji naukowych są tu wydarzenia biznesowe i polskie.',
      'Interesuje Cię tylko to, co blisko? Włącz filtr „W Polsce”. Planujesz wystąpienie? Włącz „Otwarty nabór prelegentów (CFP)”.',
    ],
  },
  igaming: {
    slug: 'igaming',
    etykieta: 'iGaming i loterie',
    title: 'Konferencje iGaming i hazardowe 2026–2027',
    description: 'Kalendarz targów i konferencji iGaming, zakładów sportowych, kasyn i loterii: daty, miejsca i organizatorzy, z plikiem .ics do kalendarza.',
    h1: 'Targi i konferencje iGaming, zakładów i loterii',
    filtr: (e) => e.branza === 'gaming',
    wstep: [
      'Kalendarz targów i konferencji branży gamingowej: iGaming, kasyna, zakłady sportowe, loterie i regulacje. Śledzę je na potrzeby Raportów Gaming.',
      'Daty biorę ze stron organizatorów albo z agregatorów, a przy każdej pozycji widać, skąd pochodzi.',
    ],
  },
  polska: {
    slug: 'polska',
    etykieta: 'W Polsce',
    title: 'Konferencje w Polsce 2026–2027: AI i iGaming',
    description: 'Konferencje i wydarzenia branżowe w Polsce: AI, dane, technologie i iGaming. Daty, miejsca, linki do rejestracji i plik .ics do kalendarza.',
    h1: 'Konferencje w Polsce: AI, dane i iGaming',
    filtr: (e) => e.kraj === 'Polska',
    wstep: [
      'Wydarzenia organizowane w Polsce: konferencje o AI i technologiach oraz wydarzenia branży gamingowej. Lista jest krótsza niż światowa, ale to ją najłatwiej zmieścić w kalendarzu: bez lotów i zmiany strefy czasowej.',
    ],
  },
  '2027': {
    slug: '2027',
    etykieta: '2027',
    title: 'Konferencje 2027: AI, data science i iGaming',
    description: 'Konferencje i targi zaplanowane na 2027 rok: sztuczna inteligencja, dane, technologie i iGaming. Daty, miasta, terminy CFP i plik .ics.',
    h1: 'Konferencje w 2027 roku: AI, dane i iGaming',
    filtr: (e) => e.od.startsWith('2027'),
    wstep: [
      'Wydarzenia zaplanowane na 2027 rok. Część organizatorów dopiero ogłasza terminy, więc lista na bieżąco się uzupełnia — warto tu wracać przed planowaniem wyjazdów i budżetu na konferencje.',
    ],
  },
};

export const KOLEJNOSC = ['index', 'ai', 'igaming', 'polska', '2027'] as const;

export function hrefStrony(klucz: string): string {
  const s = STRONY[klucz];
  return s.slug ? `/konferencje/${s.slug}/` : '/konferencje/';
}
