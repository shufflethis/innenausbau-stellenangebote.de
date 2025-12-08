import React, { useState, useMemo } from 'react';
import { MOCK_JOBS } from '../constants';
import { JobCategory } from '../types';
import { MapPin, Building, Clock, Euro, CheckCircle2 } from 'lucide-react';

export const JobBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredJobs = useMemo(() => {
    if (selectedCategory === 'ALL') return MOCK_JOBS;
    return MOCK_JOBS.filter(job => job.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Aktuelle Stellenangebote</h2>
          <p className="mt-2 text-gray-600">Finden Sie den Job, der zu Ihren Fähigkeiten passt.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === 'ALL' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Alle Bereiche
          </button>
          {Object.values(JobCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-3">
                        {job.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1.5" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5" />
                        {job.type}
                      </div>
                      <div className="flex items-center font-medium text-slate-700">
                        <Euro className="h-4 w-4 mr-1.5" />
                        {job.salary}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-600 line-clamp-2">
                        {job.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                            <span key={i} className="inline-flex items-center text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200">
                                <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                                {req}
                            </span>
                        ))}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col gap-3 md:w-48 shrink-0">
                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded transition-colors">
                      Jetzt bewerben
                    </button>
                    <button className="w-full border border-gray-300 hover:border-amber-500 hover:text-amber-600 text-gray-600 font-semibold py-2 px-4 rounded transition-colors">
                      Details ansehen
                    </button>
                    <span className="text-xs text-center text-gray-400">
                        Gepostet am {new Date(job.postedDate).toLocaleDateString('de-DE')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">Keine Jobs in dieser Kategorie gefunden.</p>
                <button 
                    onClick={() => setSelectedCategory('ALL')}
                    className="mt-4 text-amber-500 font-medium hover:underline"
                >
                    Alle Kategorien anzeigen
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};