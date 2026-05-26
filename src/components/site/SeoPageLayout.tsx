import { Link } from "@tanstack/react-router";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type HomeSection =
  | "top"
  | "land"
  | "potential"
  | "ecosystem"
  | "location"
  | "proximity"
  | "contact";

type SeoRoute =
  | "/teren-industrial-craiova"
  | "/hale-depozite-craiova"
  | "/parc-industrial-craiova"
  | "/logistica-craiova";

interface RelatedLink {
  to: SeoRoute;
  title: string;
  description: string;
}

interface SeoPageLayoutProps {
  h1: string;
  intro: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
  benefitsTitle?: string;
  benefits?: string[];
  /** Primary CTA – defaults to homepage contact section */
  primaryCtaLabel?: string;
  primaryCtaSection?: HomeSection;
  /** Secondary CTA – defaults to homepage land section (project details) */
  secondaryCtaLabel?: string;
  secondaryCtaSection?: HomeSection;
  /** Curated internal links to other SEO pages */
  relatedLinks?: RelatedLink[];
}

export function SeoPageLayout({
  h1,
  intro,
  paragraphs,
  highlights,
  ctaTitle,
  ctaText,
  benefitsTitle,
  benefits,
  primaryCtaLabel = "Contactează-ne",
  primaryCtaSection = "contact",
  secondaryCtaLabel = "Vezi detalii proiect",
  secondaryCtaSection = "land",
  relatedLinks,
}: SeoPageLayoutProps) {
  return (
    <CookieConsentProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
            <article className="mx-auto max-w-4xl px-6 lg:px-10">
              <header className="mb-10 lg:mb-14">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--steel)] font-semibold mb-4">
                  CED Park Craiova North
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  {h1}
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {intro}
                </p>
              </header>

              <div className="space-y-5 text-base lg:text-lg leading-relaxed text-muted-foreground">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-14 grid sm:grid-cols-2 gap-5">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-glow transition-smooth"
                  >
                    <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                      {h.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>

              {benefits && benefits.length > 0 && (
                <section className="mt-14 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-card">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {benefitsTitle ?? "Beneficii locație"}
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--steel)] flex-shrink-0" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="mt-16 rounded-3xl bg-gradient-primary p-8 lg:p-12 text-center shadow-glow">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground">
                  {ctaTitle}
                </h2>
                <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">{ctaText}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/"
                    hash={primaryCtaSection}
                    className="inline-flex items-center justify-center rounded-full bg-white text-foreground px-6 py-3 text-sm font-semibold shadow-card hover:shadow-glow transition-smooth"
                  >
                    {primaryCtaLabel}
                  </Link>
                  <Link
                    to="/"
                    hash={secondaryCtaSection}
                    className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-smooth"
                  >
                    {secondaryCtaLabel}
                  </Link>
                </div>
              </section>

              {relatedLinks && relatedLinks.length > 0 && (
                <nav aria-label="Pagini conexe" className="mt-16 pt-10 border-t border-border">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-6">
                    Continuă explorarea
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="group block rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-glow hover:border-[var(--steel)]/40 transition-smooth"
                      >
                        <div className="font-display text-base font-semibold text-foreground group-hover:text-[var(--steel)] transition-smooth">
                          {link.title}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>
                        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">
                          Vezi pagina →
                        </span>
                      </Link>
                    ))}
                  </div>
                </nav>
              )}
            </article>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </LanguageProvider>
    </CookieConsentProvider>
  );
}
