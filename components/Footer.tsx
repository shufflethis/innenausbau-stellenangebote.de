import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
    setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">Innenausbau Karriere</h3>
          <p className="mb-4 max-w-sm text-sm">
            Die erste Adresse für Fachkräfte und Unternehmen im deutschen Ausbaugewerbe. Wir bringen Qualität und Bedarf zusammen – effizient, digital, menschlich.
          </p>
          <div className="flex space-x-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 cursor-pointer transition-colors">in</div>
            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 cursor-pointer transition-colors">fb</div>
            <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 cursor-pointer transition-colors">ig</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Für Bewerber</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setView('JOBS')} className="hover:text-amber-500 transition-colors">Stellenmarkt</button></li>
            <li><button onClick={() => setView('CANDIDATES')} className="hover:text-amber-500 transition-colors">Karriere-Tipps</button></li>
            <li><span className="text-gray-500 cursor-not-allowed">Gehaltsvergleich (Bald)</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setView('IMPRESSUM')} className="hover:text-amber-500 transition-colors">Impressum</button></li>
            <li><button onClick={() => setView('IMPRESSUM')} className="hover:text-amber-500 transition-colors">Datenschutz</button></li>
            <li><button onClick={() => setView('IMPRESSUM')} className="hover:text-amber-500 transition-colors">AGB</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Innenausbau Karriere Portal. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};