import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politică de confidențialitate — CED Park Craiova North" },
      {
        name: "description",
        content:
          "Politica de confidențialitate CED Park Craiova North — cum prelucrăm datele și drepturile dumneavoastră GDPR.",
      },
      { property: "og:title", content: "Politică de confidențialitate — CED Park Craiova North" },
      {
        property: "og:description",
        content: "Cum prelucrăm datele și drepturile dumneavoastră GDPR.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <CookieConsentProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1 pt-32 pb-20">
            <PrivacyContent />
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </LanguageProvider>
    </CookieConsentProvider>
  );
}

function PrivacyContent() {
  const { lang } = useLang();
  const isRo = lang === "ro";

  const sections = isRo
    ? [
        {
          title: "1. Operatorul datelor",
          body: (
            <>
              <p>Dîlgoci Constantin</p>
              <p>SC MACHI CONT &amp; AUDIT SRL</p>
              <p>Craiova, Str. Mărășești nr. 31</p>
              <p>CUI: RO28834251</p>
              <p>ORC: J2011001284160</p>
            </>
          ),
        },
        {
          title: "2. Ce date colectăm",
          body: (
            <p>
              Acest site NU colectează automat date personale. Datele pot fi transmise voluntar prin
              telefon, email sau WhatsApp.
            </p>
          ),
        },
        { title: "3. Scopul", body: <p>Răspuns la solicitări și comunicare directă.</p> },
        {
          title: "4. Stocare",
          body: <p>Nu există baze de date dedicate. Datele pot rămâne în email/telefon.</p>,
        },
        {
          title: "5. Drepturi GDPR",
          body: <p>Acces, rectificare, ștergere, restricționare, opoziție.</p>,
        },
        {
          title: "6. Cookie-uri",
          body: (
            <p>
              Acest site folosește cookie-uri doar pentru analiză prin Google Analytics, cu
              consimțământul utilizatorului.
            </p>
          ),
        },
        {
          title: "7. Contact",
          body: (
            <>
              <p>complexlegumicolnord@yahoo.com</p>
              <p>catalin.dilgoci@yahoo.com</p>
            </>
          ),
        },
      ]
    : [
        {
          title: "1. Data Controller",
          body: (
            <>
              <p>Constantin Dîlgoci</p>
              <p>SC MACHI CONT &amp; AUDIT SRL</p>
              <p>Craiova, Romania</p>
            </>
          ),
        },
        {
          title: "2. Data Collection",
          body: (
            <p>
              This website does NOT automatically collect personal data. Data may be provided
              voluntarily via phone, email, or WhatsApp.
            </p>
          ),
        },
        { title: "3. Purpose", body: <p>Responding to inquiries and communication.</p> },
        { title: "4. Storage", body: <p>No dedicated database is used.</p> },
        {
          title: "5. GDPR Rights",
          body: <p>Access, rectification, deletion, restriction, objection.</p>,
        },
        {
          title: "6. Cookies",
          body: (
            <p>
              This website uses cookies only for analytics (Google Analytics), with user consent.
            </p>
          ),
        },
        {
          title: "7. Contact",
          body: (
            <>
              <p>complexlegumicolnord@yahoo.com</p>
              <p>catalin.dilgoci@yahoo.com</p>
            </>
          ),
        },
      ];

  return (
    <article className="mx-auto max-w-3xl px-6 lg:px-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[var(--steel)] mb-6"
      >
        ← {isRo ? "Înapoi" : "Back"}
      </Link>
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--steel)] font-bold">
        {isRo ? "Legal" : "Legal"}
      </div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold text-[var(--navy-deep)]">
        {isRo ? "Politică de confidențialitate" : "Privacy Policy"}
      </h1>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-xl font-bold text-[var(--navy)]">{s.title}</h2>
            <div className="mt-2 text-[15px] leading-relaxed text-foreground/85 space-y-1">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
