import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 bg-white my-8 rounded shadow-sm">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">Impressum</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Innenausbau Karriere GmbH<br />
            Musterstraße 123<br />
            10115 Berlin<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            Telefon: +49 (0) 30 12345678<br />
            E-Mail: kontakt@innenausbau-karriere-beispiel.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
          <p>Geschäftsführer: Max Mustermann</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: HRB 123456
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123 456 789
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Streitschlichtung</h2>
          <p className="text-sm">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
          <p className="text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
          </p>
        </section>
      </div>
    </div>
  );
};