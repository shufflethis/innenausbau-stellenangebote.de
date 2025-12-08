import { Job, JobCategory } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Vorarbeiter Trockenbau (m/w/d)',
    company: 'Müller Ausbau GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    category: JobCategory.TROCKENBAU,
    salary: '55.000€ - 65.000€ / Jahr',
    postedDate: '2023-10-15',
    description: 'Wir suchen einen erfahrenen Vorarbeiter für Großprojekte im Berliner Raum. Sie koordinieren ein Team von 5-10 Mitarbeitern und überwachen die Qualität.',
    requirements: ['Abgeschlossene Ausbildung', 'Meistertitel wünschenswert', '5 Jahre Berufserfahrung', 'Führerschein Klasse B']
  },
  {
    id: '2',
    title: 'Maler & Lackierer für Sanierung',
    company: 'Farbenfroh Wohnen',
    location: 'München',
    type: 'Vollzeit',
    category: JobCategory.MALER,
    salary: '22€ / Stunde',
    postedDate: '2023-10-18',
    description: 'Für die Renovierung von Altbauwohnungen suchen wir Fachkräfte mit Auge fürs Detail. Spachteltechniken und hochwertige Lackierungen sind Ihr Spezialgebiet.',
    requirements: ['Gesellenbrief', 'Selbstständige Arbeitsweise', 'Kundenfreundlichkeit']
  },
  {
    id: '3',
    title: 'Bauleiter Innenausbau (m/w/d)',
    company: 'ImmoConstruct AG',
    location: 'Hamburg',
    type: 'Vollzeit',
    category: JobCategory.BAULEITUNG,
    salary: '70.000€ - 85.000€ / Jahr',
    postedDate: '2023-10-20',
    description: 'Steuern Sie komplexe Ausbauprojekte von der Planung bis zur Übergabe. Sie sind der erste Ansprechpartner für Architekten und Subunternehmer.',
    requirements: ['Studium Bauingenieurwesen oder Architektur', 'Erfahrung in VOB/C', 'Verhandlungsgeschick']
  },
  {
    id: '4',
    title: 'Parkettleger / Bodenleger',
    company: 'Hanseatic Floors',
    location: 'Hamburg',
    type: 'Vollzeit',
    category: JobCategory.BODEN,
    salary: 'Nach Tarif + Zulagen',
    postedDate: '2023-10-21',
    description: 'Verlegen von hochwertigem Parkett und Designbelägen im gehobenen Privatkundenbereich.',
    requirements: ['Ausbildung zum Bodenleger', 'Erfahrung mit Parkettschleifen', 'PKW-Führerschein']
  },
  {
    id: '5',
    title: 'Trockenbauer für Akkordarbeiten',
    company: 'SpeedBuild Systems',
    location: 'Frankfurt am Main',
    type: 'Projektbasis',
    category: JobCategory.TROCKENBAU,
    salary: 'Leistungsbezogen',
    postedDate: '2023-10-22',
    description: 'Für ein großes Bürogebäude suchen wir Subunternehmer oder Angestellte für reine Wand- und Deckenmontage.',
    requirements: ['Hohe Leistungsbereitschaft', 'Eigenes Werkzeug von Vorteil', 'Teamfähigkeit']
  }
];

export const NAV_LINKS = [
  { label: 'Stellenangebote', value: 'JOBS' },
  { label: 'Für Arbeitgeber', value: 'EMPLOYERS' },
  { label: 'Für Fachkräfte', value: 'CANDIDATES' },
];