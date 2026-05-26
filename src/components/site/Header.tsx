import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const hashHref = (h: string) => (isHome ? h : `/${h}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#location", label: t.nav.location },
    { href: "#land", label: t.nav.land },
    { href: "#potential", label: t.nav.potential },
    { href: "#proximity", label: t.nav.proximity },
    { href: "#ecosystem", label: t.nav.ecosystem },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-md bg-gradient-primary flex items-center justify-center shadow-card">
            <span className="text-primary-foreground font-display font-bold text-sm tracking-tight">
              CED
            </span>
          </div>
          <div className={cn("hidden sm:block leading-tight", scrolled || !isHome ? "text-foreground" : "text-white")}>
            <div className="font-display font-semibold text-sm">CED Park</div>
            <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">Craiova North</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={hashHref(l.href)}
              className={cn(
                "text-sm font-medium transition-smooth hover:text-[var(--steel)]",
                scrolled || !isHome ? "text-foreground" : "text-white/90",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div
            className={cn(
              "hidden sm:flex items-center gap-1 text-xs font-semibold rounded-full border px-1 py-1",
              scrolled ? "border-border" : "border-white/30",
            )}
          >
            {(["ro", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2.5 py-1 rounded-full transition-smooth uppercase tracking-wider",
                  lang === l
                    ? "bg-gradient-primary text-primary-foreground shadow-card"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/70 hover:text-white",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-smooth"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled || !isHome ? "text-foreground" : "text-white",
            )}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={hashHref(l.href)}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground font-medium border-b border-border/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["ro", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider",
                    lang === l ? "bg-gradient-primary text-primary-foreground" : "border border-border text-muted-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
