import { Link } from "@tanstack/react-router";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLang } from "@/contexts/LanguageContext";

export function CookieBanner() {
  const { consent, accept, refuse } = useCookieConsent();
  const { t, lang } = useLang();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-fade-in"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-[var(--navy-deep)]/95 backdrop-blur-xl shadow-elegant p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-start lg:items-center gap-5">
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--steel-light)] font-bold mb-1.5">
            {t.cookies.kicker}
          </div>
          <p className="text-white text-sm lg:text-[15px] leading-relaxed font-medium">
            {t.cookies.text}{" "}
            <Link
              to="/cookies"
              className="underline decoration-[var(--steel-light)] underline-offset-4 hover:text-[var(--steel-light)]"
            >
              {lang === "ro" ? "Politică cookies" : "Cookie Policy"}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 w-full lg:w-auto">
          <button
            onClick={refuse}
            className="flex-1 lg:flex-none rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-smooth"
          >
            {t.cookies.refuse}
          </button>
          <button
            onClick={accept}
            className="flex-1 lg:flex-none rounded-full bg-gradient-accent px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-glow transition-smooth"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
