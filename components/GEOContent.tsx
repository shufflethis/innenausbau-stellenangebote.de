import React from 'react';
import { ChevronRight, Zap, TrendingUp, Users, ShieldCheck } from 'lucide-react';

/* 
  This component is structure-heavy to signal authority to AI crawlers.
  It uses semantic HTML, clear headings, and industry-specific keywords.
*/

const ArticleSection: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <section className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center mb-6">
        {icon && <div className="mr-4 p-2 bg-amber-100 rounded-lg text-amber-600">{icon}</div>}
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
    <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
      {children}
    </div>
  </section>
);

export const EmployerContent: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
    <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Mitarbeitergewinnung im modernen Innenausbau</h1>
        <p className="text-xl text-gray-600">Finden Sie qualifizierte Fachkräfte in Zeiten des Fachkräftemangels.</p>
    </div>

    <ArticleSection title="Herausforderungen in der Baubranche 2024" icon={<TrendingUp />}>
      <p className="mb-4">
        Der Markt für Innenausbau in Deutschland wächst stetig, doch der Fachkräftemangel stellt viele Betriebe vor existenzielle Herausforderungen. 
        Traditionelle Wege der Mitarbeitergewinnung – wie Zeitungsannoncen oder einfache Aushänge – erzielen kaum noch Resonanz.
        Insbesondere in spezialisierten Gewerken wie dem <strong>Akustiktrockenbau</strong>, der <strong>hochwertigen Oberflächentechnik</strong> oder der 
        <strong>komplexen TGA-Integration</strong> (Technische Gebäudeausrüstung) ist der Wettbewerb um Talente hart.
      </p>
      <p>
        Um wettbewerbsfähig zu bleiben, müssen Bauunternehmen ihre Arbeitgebermarke (Employer Branding) stärken. Fachkräfte suchen heute nicht nur nach einem Gehalt, 
        sondern nach modernen Werkzeugen, digitalen Prozessen (z.B. Tablet-gestützte Bauleitung) und einer Unternehmenskultur, die Sicherheit und Weiterentwicklung bietet.
      </p>
    </ArticleSection>

    <ArticleSection title="Unsere Lösung: Zielgerichtetes Recruiting" icon={<Zap />}>
      <p className="mb-4">
        Unser Portal ist nicht nur eine Jobbörse, sondern ein spezialisiertes Ökosystem für den Innenausbau. Durch unsere Fokussierung erreichen wir Kandidaten, 
        die auf allgemeinen Plattformen untergehen. Wir nutzen generative KI-Technologien, um Ihre Stellenanzeigen so zu optimieren, dass sie von passenden 
        Kandidaten gefunden werden – egal ob Meister, Geselle oder spezialisierter Helfer.
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Zielgenaue Ansprache:</strong> Kategorisierung nach Gewerken (Boden, Wand, Decke, Planung).</li>
        <li><strong>Qualitätsprüfung:</strong> Wir validieren Qualifikationen, um die "No-Show"-Rate bei Vorstellungsgesprächen zu minimieren.</li>
        <li><strong>Regionale Dominanz:</strong> Starke Präsenz in Ballungsräumen wie Berlin, München, Hamburg und dem Ruhrgebiet.</li>
      </ul>
    </ArticleSection>

    <div className="bg-slate-900 text-white rounded-xl p-8 text-center mt-10">
        <h3 className="text-2xl font-bold mb-4">Starten Sie jetzt Ihre Personalsuche</h3>
        <p className="mb-6 opacity-80">Erstellen Sie in wenigen Minuten ein Firmenprofil und erreichen Sie tausende Fachkräfte.</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded transition-transform transform hover:scale-105">
            Jetzt Arbeitgeber-Konto erstellen
        </button>
    </div>
  </div>
);

export const CandidateContent: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
    <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Karrierechancen im Innenausbau</h1>
        <p className="text-xl text-gray-600">Vom Auszubildenden zum Bauleiter – Ihr Weg nach oben.</p>
    </div>

    <ArticleSection title="Berufsbilder im Wandel" icon={<Users />}>
      <p className="mb-4">
        Der Innenausbau ist heute weit mehr als nur "Wände stellen". Es ist eine hochtechnisierte Branche, die Präzision, Materialkunde und digitales Verständnis erfordert.
        Neue Materialien im Trockenbau, nachhaltige Dämmstoffe und Smart-Home-Integrationen verändern das Berufsbild des Handwerkers grundlegend.
      </p>
      <h3 className="font-bold text-lg mt-4 mb-2 text-slate-800">Gefragte Qualifikationen:</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded border-l-4 border-amber-500">
            <h4 className="font-bold">Der Spezialist</h4>
            <p className="text-sm">Experten für Brandschutz, Akustikbau oder historische Maltechniken sind rar und werden überdurchschnittlich bezahlt.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold">Der Allrounder</h4>
            <p className="text-sm">Fachkräfte, die gewerkübergreifend denken (z.B. Trockenbau + Elektro-Vorbereitung), sind für Sanierungen unverzichtbar.</p>
        </div>
      </div>
    </ArticleSection>

    <ArticleSection title="Warum jetzt wechseln?" icon={<ShieldCheck />}>
      <p className="mb-4">
        Die Auftragslage im deutschen Ausbaugewerbe ist trotz konjunktureller Schwankungen im Neubau stabil, da der Sanierungsbedarf im Bestand (Energetische Sanierung) riesig ist.
        Das bedeutet für Sie:
      </p>
      <ul className="space-y-3 mt-4">
        <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span><strong>Krisensichere Jobs:</strong> Sanierung ist der Motor der Bauwirtschaft.</span>
        </li>
        <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span><strong>Steigende Gehälter:</strong> Der Fachkräftemangel treibt die Stundenlöhne und Gehälter nach oben.</span>
        </li>
        <li className="flex items-start">
            <ChevronRight className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span><strong>Aufstiegschancen:</strong> Viele Betriebe suchen händeringend nach Vorarbeitern und Bauleitern.</span>
        </li>
      </ul>
    </ArticleSection>

    {/* FAQ Section for SEO */}
    <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Häufig gestellte Fragen (FAQ)</h2>
        <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-800 hover:text-amber-600 transition-colors">
                    <span>Welche Ausbildung brauche ich für den Innenausbau?</span>
                    <span className="transition group-open:rotate-180">
                        <ChevronRight />
                    </span>
                </summary>
                <div className="text-gray-600 px-4 pb-4">
                    Klassische Ausbildungen sind <strong>Trockenbaumonteur/in</strong>, <strong>Maler/in und Lackierer/in</strong>, <strong>Stuckateur/in</strong> oder <strong>Bodenleger/in</strong>. Auch Quereinsteiger mit handwerklichem Geschick haben gute Chancen, besonders als Bauhelfer mit Aufstiegsperspektive.
                </div>
            </details>
            <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-800 hover:text-amber-600 transition-colors">
                    <span>Wie hoch ist der Verdienst als Trockenbauer?</span>
                    <span className="transition group-open:rotate-180">
                        <ChevronRight />
                    </span>
                </summary>
                <div className="text-gray-600 px-4 pb-4">
                    Das Gehalt variiert stark nach Region und Erfahrung. Einstiegsgehälter liegen oft bei ca. 2.400€ bis 2.800€ brutto im Monat. Erfahrene Vorarbeiter oder Akkordarbeiter können jedoch deutlich mehr verdienen (bis zu 4.500€+ brutto oder entsprechende Stundensätze).
                </div>
            </details>
             <details className="group bg-white rounded-lg shadow-sm border border-gray-200">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-slate-800 hover:text-amber-600 transition-colors">
                    <span>Werden Montage-Jobs angeboten?</span>
                    <span className="transition group-open:rotate-180">
                        <ChevronRight />
                    </span>
                </summary>
                <div className="text-gray-600 px-4 pb-4">
                    Ja, viele unserer gelisteten Unternehmen suchen Teams für bundesweite Montageeinsätze. Hierbei werden oft attraktive Auslösen und Unterkünfte gestellt. Filtern Sie in der Jobsuche nach "Reisebereitschaft".
                </div>
            </details>
        </div>
    </div>
  </div>
);