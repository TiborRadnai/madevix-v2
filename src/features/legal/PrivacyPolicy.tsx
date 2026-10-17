'use client';

import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      window.close();
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-28 bg-[#FAF8F5] dark:bg-[#0A0F1D] text-[#111111] dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Bezárás / Vissza gomb */}
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222222]/60 dark:text-white/60 hover:text-[#0F62FE] dark:hover:text-[#0F62FE] transition-colors mb-10 group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span>Schließen</span>
        </button>

        {/* Header */}
        <section className="mb-16">
          <h1 className="text-xs font-mono uppercase tracking-[0.25em] text-[#0F62FE] mb-4">
            Rechtliches
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Datenschutzerklärung
          </h2>
        </section>

        {/* Content Body */}
        <div className="space-y-12 text-sm sm:text-base text-[#222222]/80 dark:text-white/80 leading-relaxed font-normal">
          
          {/* 1. Verantwortlicher */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#222222]/40 dark:text-white/40">
              1. Verantwortlicher
            </h3>
            <div className="space-y-1 font-medium text-[#111111] dark:text-white">
              <p>Madevix</p>
              <p>Inhaber: Tibor Radnai</p>
              <p>Einzelunternehmer</p>
              <p>Am Schwedenkreuz 5</p>
              <p>87534 Oberstaufen, Deutschland</p>
              <p className="pt-2">
                E-Mail:{' '}
                <a href="mailto:info@madevix.com" className="text-[#0F62FE] hover:underline">
                  info@madevix.com
                </a>
              </p>
            </div>
          </div>

          {/* 2. Allgemeine Hinweise & Pflichtinformationen */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              2. Datenschutz auf einen Blick
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
            </p>
          </div>

          {/* 3. Datenerfassung auf dieser Website */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              3. Datenerfassung auf dieser Website
            </h3>
            
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-semibold text-[#111111] dark:text-white mb-1">Hosting</h4>
                <p className="text-[#222222]/70 dark:text-white/70">
                  Diese Website wird bei einem externen Hosting-Anbieter extern gehostet. Die vom Hosting-Provider erfassten Server-Logfiles (wie IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeit) dienen der technischen Sicherstellung des Betriebs und werden im Rahmen der gesetzlichen Vorgaben verarbeitet.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#111111] dark:text-white mb-1">Kontaktformular & E-Mail-Kontakt</h4>
                <p className="text-[#222222]/70 dark:text-white/70">
                  Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Speicherdauer */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              4. Speicherdauer
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Wir speichern personenbezogene Daten nur so lange, wie es für die Erreichung der verfolgten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. handels- oder steuerrechtliche Fristen) dies vorschreiben. Nach Wegfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig gelöscht.
            </p>
          </div>

          {/* 5. Cookies */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              5. Cookies
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Diese Website verwendet technisch notwendige Cookies, um eine ordnungsgemäße Funktionalität zu gewährleisten. Sofern darüber hinaus optionale Cookies oder Analysetools eingesetzt werden, erfolgt dies ausschließlich auf Grundlage deiner ausdrücklichen Einwilligung. Du kannst deine Browser-Einstellungen so anpassen, dass du über das Setzen von Cookies informiert wirst und Cookies im Einzelfall erlauben oder generell ausschließen kannst.
            </p>
          </div>

          {/* 6. Betroffenenrechte */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              6. Deine Rechte
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70 mb-3">
              Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Einschränkung der Verarbeitung, Datenübertragbarkeit oder Löschung dieser Daten.
            </p>
            <p className="text-[#222222]/70 dark:text-white/70">
              Hierzu sowie für weitere Fragen zum Thema Datenschutz kannst du dich jederzeit unter der im Impressum angegebenen E-Mail-Adresse an uns wenden.
            </p>
          </div>

          {/* 7. Aktualität und Änderung dieser Datenschutzerklärung */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#111111] dark:text-white tracking-tight">
              7. Aktualität und Änderung dieser Datenschutzerklärung
            </h3>
            <p className="text-[#222222]/70 dark:text-white/70">
              Diese Datenschutzerklärung ist aktuell gültig und kann bei technischen Entwicklungen, neuen Web-Features oder geänderten gesetzlichen bzw. behördlichen Vorgaben angepasst werden.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}