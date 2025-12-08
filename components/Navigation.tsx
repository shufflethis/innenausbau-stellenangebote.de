import React, { useState } from 'react';
import { ViewState } from '../types';
import { NAV_LINKS } from '../constants';
import { Menu, X, Hammer } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setView('HOME')}>
            <div className="bg-amber-500 p-2 rounded-lg mr-3">
              <Hammer className="h-6 w-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">INNENAUSBAU</h1>
              <p className="text-xs text-amber-500 font-medium tracking-wider">KARRIERE PORTAL</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => setView(link.value as ViewState)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === link.value 
                    ? 'text-amber-500 bg-slate-800' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
             <button 
                onClick={() => setView('JOBS')}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-4 rounded shadow transition-transform transform hover:scale-105">
                Job finden
             </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
                onClick={() => { setView('HOME'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700"
            >
              Startseite
            </button>
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => { setView(link.value as ViewState); setIsOpen(false); }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === link.value 
                    ? 'text-amber-500 bg-slate-900' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};