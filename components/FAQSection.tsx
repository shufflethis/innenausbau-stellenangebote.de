import React from 'react';
import { ChevronRight } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'Was versteht man unter Innenausbau?',
    a: 'Der Innenausbau umfasst alle Arbeiten, die nach dem Rohbau im Inneren eines Gebäudes stattfinden. Dazu gehören Trockenbau, Bodenbelagsarbeiten, Malerarbeiten, Stuckateurarbeiten, Fliesenlegen, Schreinerarbeiten sowie die Installation von Decken- und Wandsystemen. Auch der Einbau von Türen, Fenstern und Treppen zählt zum Innenausbau.'
  },
  {
    q: 'Welche Berufe gibt es im Innenausbau?',
    a: 'Typische Berufe im Innenausbau sind Trockenbaumonteur/in, Maler/in und Lackierer/in, Stuckateur/in, Bodenleger/in, Tischler/in, Schreiner/in, Holzmechaniker/in, Fliesen-, Platten- und Mosaikleger/in sowie Bauleiter/in im Innenausbau. Auch Ausbaufacharbeiter/in ist ein anerkannter Ausbildungsberuf.'
  },
  {
    q: 'Wie viel verdient man im Innenausbau?',
    a: 'Die Gehälter variieren je nach Beruf, Region und Erfahrung. Einstiegsgehälter liegen in der Regel bei 2.400 bis 2.800 Euro brutto monatlich. Erfahrene Fachkräfte und Vorarbeiter können 3.200 bis 4.500 Euro und mehr verdienen. Bauleiter im Innenausbau erzielen Gehälter von 4.000 bis 6.000 Euro brutto.'
  },
  {
    q: 'Welche Ausbildung brauche ich für den Innenausbau?',
    a: 'Klassische Ausbildungen sind Trockenbaumonteur/in (3 Jahre), Ausbaufacharbeiter/in (2 Jahre), Maler/in und Lackierer/in (3 Jahre), Stuckateur/in (3 Jahre) oder Bodenleger/in (3 Jahre). Auch Quereinsteiger mit handwerklichem Geschick haben gute Chancen, insbesondere als Bauhelfer mit Aufstiegsperspektive.'
  },
  {
    q: 'Ist der Innenausbau ein zukunftssicherer Beruf?',
    a: 'Ja. Die Nachfrage nach Fachkräften im Innenausbau ist hoch und wird durch den enormen Sanierungsbedarf im Bestand (energetische Sanierung, Modernisierung) weiter steigen. Der Fachkräftemangel sorgt zusätzlich für sichere Beschäftigung und steigende Gehälter in der Branche.'
  },
  {
    q: 'Was ist der Unterschied zwischen Innenausbau und Trockenbau?',
    a: 'Trockenbau ist ein Teilbereich des Innenausbaus. Während der Innenausbau alle Gewerke im Gebäudeinneren umfasst (Boden, Wand, Decke, Türen, Malerarbeiten etc.), bezieht sich der Trockenbau speziell auf den Bau von Wänden, Decken und Verkleidungen ohne wasserhaltige Baustoffe – hauptsächlich mit Gipskartonplatten und Metallprofilen.'
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Häufig gestellte Fragen zum Innenausbau
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Alles Wissenswerte über Karriere und Berufe im Innenausbau.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group bg-white rounded-lg shadow-sm border border-gray-200">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-800 hover:text-amber-600 transition-colors">
                <span className="pr-4 text-sm sm:text-base">{item.q}</span>
                <span className="transition group-open:rotate-90 flex-shrink-0">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </summary>
              <div className="text-gray-600 px-4 pb-4 text-sm sm:text-base leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Karriere-Info */}
        <div className="mt-10 sm:mt-14 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Karriere im Innenausbau</h2>
            <p className="text-slate-300 text-sm mt-1">Berufsbild, Perspektiven und Einstiegsmöglichkeiten</p>
          </div>
          <div className="p-5 sm:p-8 space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              Der <strong>Innenausbau</strong> zählt zu den vielseitigsten und krisensichersten Bereichen im deutschen Handwerk. Ob Neubau oder Sanierung – ohne qualifizierte Fachkräfte für Trockenbau, Bodenbelagsarbeiten, Malerarbeiten und Schreinerarbeiten geht in der Baubranche nichts.
            </p>
            <p>
              <strong>Einstiegsmöglichkeiten</strong> bestehen über klassische Ausbildungsberufe (Trockenbaumonteur, Maler, Stuckateur, Bodenleger, Tischler) oder als Quereinsteiger im Bereich Bauhelfer. Viele Unternehmen bieten interne Weiterbildungen an, die den Aufstieg zum Vorarbeiter, Polier oder Bauleiter ermöglichen.
            </p>
            <p>
              <strong>Die Gehälter im Innenausbau</strong> sind in den letzten Jahren deutlich gestiegen. Durch den anhaltenden Fachkräftemangel haben qualifizierte Handwerker eine starke Verhandlungsposition. Besonders gefragt sind Spezialisten für Brandschutz, Akustikbau und energetische Sanierung.
            </p>
            <p>
              <strong>Zukunftsaussichten:</strong> Der Sanierungsbedarf im Gebäudebestand ist enorm. Die Bundesregierung fördert energetische Sanierungen, was die Nachfrage nach Innenausbau-Fachkräften weiter erhöht. Digitale Werkzeuge wie BIM (Building Information Modeling) und Tablet-gestützte Bauleitung verändern zudem die Arbeitsweise und machen den Beruf moderner und attraktiver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
