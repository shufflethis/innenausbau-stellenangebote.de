// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { JobBoard } from '../components/JobBoard';
import { EmployerContent, CandidateContent } from '../components/GEOContent';
import { GeoCities } from '../components/GeoCities';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { Impressum } from '../components/Impressum';
import { ViewState } from '../types';

function Home() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return (
          <>
            <Hero setView={setCurrentView} />
            <JobBoard />
            <div className="bg-slate-50 py-8 sm:py-12">
               {/* Teaser for GEO Content to aid Homepage SEO weight */}
               <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-900">Wissenswertes für die Branche</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                     <div className="bg-white p-5 sm:p-6 rounded shadow cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('CANDIDATES')}>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-600">Für Fachkräfte</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Karrierepfade, Gehaltsentwicklungen und Tipps für die Bewerbung im Handwerk.</p>
                     </div>
                     <div className="bg-white p-5 sm:p-6 rounded shadow cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentView('EMPLOYERS')}>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">Für Unternehmen</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Strategien gegen den Fachkräftemangel und modernes Employer Branding.</p>
                     </div>
                  </div>
               </div>
            </div>
            <GeoCities />
            <FAQSection />
          </>
        );
      case 'JOBS':
        return (
            <div className="min-h-screen bg-gray-50 pt-10">
                <JobBoard />
            </div>
        );
      case 'EMPLOYERS':
        return (
            <div className="min-h-screen bg-gray-50">
                <EmployerContent />
            </div>
        );
      case 'CANDIDATES':
        return (
            <div className="min-h-screen bg-gray-50">
                <CandidateContent />
            </div>
        );
      case 'IMPRESSUM':
        return (
            <div className="min-h-screen bg-gray-50 pt-10">
                <Impressum />
            </div>
        );
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setView={setCurrentView} />
    </div>
  );
}

export default Home;