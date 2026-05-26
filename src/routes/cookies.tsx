import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { CookieConsentProvider, useCookieConsent } from "@/contexts/CookieConsentContext";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Politică cookies — CED Park Craiova North" },
      {
        name: "description",
        content:
          "Politica de cookies CED Park Craiova North — cum folosim cookie-urile și consimțământul utilizatorului.",
      },
      { property: "og:title", content: "Politică cookies — CED Park Craiova North" },
      {
        property: "og:description",
        content: "Cum folosim cookie-urile pe site și cum vă puteți gestiona consimțământul.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <CookieConsentProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1 pt-32 pb-20">
            <CookiesContent />
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </LanguageProvider>
    </CookieConsentProvider>
  );
}

function CookiesContent() {
  const { lang } = useLang();
  const { consent, accept, refuse, reset } = useCookieConsent();
  const isRo = lang === "ro";

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
        {isRo ? "Politică cookies" : "Cookie Policy"}
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/85">
        {isRo ? (
          <>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Ce sunt cookie-urile?</h2>
              <p className="mt-2">
                Cookie-urile sunt fișiere text de mici dimensiuni stocate de browser pe dispozitivul
                dumneavoastră atunci când vizitați un site web. Acestea permit site-ului să rețină acțiuni
                și preferințe pe o perioadă de timp.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Ce cookie-uri folosim</h2>
              <p className="mt-2">
                Acest site folosește cookie-uri exclusiv pentru analiză prin Google Analytics (GA4),
                pentru a înțelege modul în care vizitatorii interacționează cu pagina și pentru a îmbunătăți
                experiența. Nu folosim cookie-uri de marketing sau de profilare.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Consimțământ</h2>
              <p className="mt-2">
                Cookie-urile de analiză sunt încărcate doar după ce acceptați explicit prin bannerul de
                cookies. Dacă refuzați, Google Analytics nu va fi activat.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Gestionarea preferințelor</h2>
              <p className="mt-2">
                Puteți modifica oricând opțiunea aleasă prin butonul de mai jos sau ștergând cookie-urile
                din browser.
              </p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">What are cookies?</h2>
              <p className="mt-2">
                Cookies are small text files stored by your browser on your device when you visit a
                website. They allow the site to remember actions and preferences over time.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Which cookies we use</h2>
              <p className="mt-2">
                This website uses cookies exclusively for analytics through Google Analytics (GA4) to
                understand how visitors interact with the site and improve the user experience. We do
                not use marketing or profiling cookies.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Consent</h2>
              <p className="mt-2">
                Analytics cookies are only loaded after you explicitly accept via the cookie banner.
                If you refuse, Google Analytics will not be activated.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-[var(--navy)]">Manage preferences</h2>
              <p className="mt-2">
                You can change your choice at any time using the button below or by clearing cookies
                in your browser.
              </p>
            </section>
          </>
        )}

        <div className="rounded-2xl border border-border bg-secondary/40 p-6">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--steel)] font-bold">
            {isRo ? "Preferința dvs. actuală" : "Your current preference"}
          </div>
          <div className="mt-1 font-display text-lg font-bold text-[var(--navy-deep)]">
            {consent === "accepted"
              ? isRo
                ? "Acceptat"
                : "Accepted"
              : consent === "refused"
                ? isRo
                  ? "Refuzat"
                  : "Refused"
                : isRo
                  ? "Nicio alegere salvată"
                  : "No choice saved"}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={accept}
              className="rounded-full bg-gradient-accent px-5 py-2 text-sm font-semibold text-white shadow-card hover:shadow-glow transition-smooth"
            >
              {isRo ? "Acceptă" : "Accept"}
            </button>
            <button
              onClick={refuse}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-smooth"
            >
              {isRo ? "Refuză" : "Refuse"}
            </button>
            <button
              onClick={reset}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth"
            >
              {isRo ? "Resetează" : "Reset"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
