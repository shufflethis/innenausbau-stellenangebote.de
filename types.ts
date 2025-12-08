export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Projektbasis';
  category: JobCategory;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
}

export enum JobCategory {
  TROCKENBAU = 'Trockenbau',
  MALER = 'Maler & Lackierer',
  BODEN = 'Bodenleger',
  BAULEITUNG = 'Bauleitung & Planung',
  ALLROUNDER = 'Allrounder',
}

export type ViewState = 'HOME' | 'JOBS' | 'EMPLOYERS' | 'CANDIDATES' | 'IMPRESSUM';