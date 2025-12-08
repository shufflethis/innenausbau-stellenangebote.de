import React from 'react';
import { ViewState } from '../types';
import { Search, MapPin, Briefcase } from 'lucide-react';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Baustelle Innenausbau Hintergrund" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center sm:text-left sm:items-start">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          <span className="block">Deutschlands Netzwerk für</span>
          <span className="block text-amber-500">Profis im Innenausbau</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-3xl mb-10">
          Verbinden Sie handwerkliche Exzellenz mit den besten Projekten. Ob Trockenbau, Malerarbeiten, Bodenlegen oder Bauleitung – hier finden Sie Ihre nächste Herausforderung.
        </p>
        
        <div className="w-full max-w-3xl bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2 shadow-xl">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded border border-transparent focus-within:border-amber-500 focus-within:bg-white transition-colors">
                <Briefcase className="text-gray-400 h-5 w-5 mr-3" />
                <input 
                    type="text" 
                    placeholder="Berufsbezeichnung (z.B. Trockenbauer)" 
                    className="bg-transparent w-full outline-none text-gray-700"
                />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded border border-transparent focus-within:border-amber-500 focus-within:bg-white transition-colors">
                <MapPin className="text-gray-400 h-5 w-5 mr-3" />
                <input 
                    type="text" 
                    placeholder="Ort oder PLZ" 
                    className="bg-transparent w-full outline-none text-gray-700"
                />
            </div>
            <button 
                onClick={() => setView('JOBS')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded transition-colors flex items-center justify-center"
            >
                <Search className="h-5 w-5 mr-2" />
                Suchen
            </button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-400">
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> 500+ Neue Jobs diese Woche</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Top Arbeitgeber</span>
        </div>
      </div>
    </div>
  );
};