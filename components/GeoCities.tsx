import React from 'react';
import { MapPin } from 'lucide-react';

const CITIES = [
  { name: 'Berlin', label: 'Innenausbau Jobs Berlin' },
  { name: 'Hamburg', label: 'Innenausbau Jobs Hamburg' },
  { name: 'München', label: 'Innenausbau Jobs München' },
  { name: 'Köln', label: 'Innenausbau Jobs Köln' },
  { name: 'Frankfurt am Main', label: 'Innenausbau Jobs Frankfurt' },
  { name: 'Stuttgart', label: 'Innenausbau Jobs Stuttgart' },
  { name: 'Düsseldorf', label: 'Innenausbau Jobs Düsseldorf' },
  { name: 'Leipzig', label: 'Innenausbau Jobs Leipzig' },
  { name: 'Dortmund', label: 'Innenausbau Jobs Dortmund' },
  { name: 'Essen', label: 'Innenausbau Jobs Essen' },
  { name: 'Bremen', label: 'Innenausbau Jobs Bremen' },
  { name: 'Dresden', label: 'Innenausbau Jobs Dresden' },
  { name: 'Hannover', label: 'Innenausbau Jobs Hannover' },
  { name: 'Nürnberg', label: 'Innenausbau Jobs Nürnberg' },
  { name: 'Duisburg', label: 'Innenausbau Jobs Duisburg' },
  { name: 'Bochum', label: 'Innenausbau Jobs Bochum' },
  { name: 'Wuppertal', label: 'Innenausbau Jobs Wuppertal' },
  { name: 'Bielefeld', label: 'Innenausbau Jobs Bielefeld' },
  { name: 'Bonn', label: 'Innenausbau Jobs Bonn' },
  { name: 'Mannheim', label: 'Innenausbau Jobs Mannheim' },
  { name: 'Augsburg', label: 'Innenausbau Jobs Augsburg' },
  { name: 'Karlsruhe', label: 'Innenausbau Jobs Karlsruhe' },
  { name: 'Wiesbaden', label: 'Innenausbau Jobs Wiesbaden' },
  { name: 'Münster', label: 'Innenausbau Jobs Münster' },
  { name: 'Freiburg', label: 'Innenausbau Jobs Freiburg' },
  { name: 'Rostock', label: 'Innenausbau Jobs Rostock' },
  { name: 'Erfurt', label: 'Innenausbau Jobs Erfurt' },
  { name: 'Mainz', label: 'Innenausbau Jobs Mainz' },
  { name: 'Kiel', label: 'Innenausbau Jobs Kiel' },
  { name: 'Potsdam', label: 'Innenausbau Jobs Potsdam' },
];

export const GeoCities: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Innenausbau Stellenangebote nach Stadt
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Finden Sie Innenausbau-Jobs in Ihrer Region. Wir listen Stellenangebote für Trockenbauer, Maler, Bodenleger und Bauleiter in allen deutschen Großstädten.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 hover:bg-amber-50 hover:border-amber-300 border border-slate-200 rounded-lg transition-colors cursor-pointer group"
            >
              <MapPin className="h-4 w-4 text-slate-400 group-hover:text-amber-500 flex-shrink-0" />
              <span className="text-sm text-slate-700 group-hover:text-amber-700 truncate">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
