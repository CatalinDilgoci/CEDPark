import heroImg from "@/assets/hero-aerial.jpg";
import { useLang } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="CED Park Craiova North aerial view"
          width={1920}
          height={1080}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-1.5 mb-8 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--steel-light)]" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
              {t.hero.tag}
            </span>
          </div>

          <h1
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-balance animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.title}
          </h1>

          <p
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/95 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth"
            >
              {t.hero.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white border border-white/30 shadow-elegant transition-smooth"
            >
              {t.hero.ctaSchedule}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`https://wa.me/40740131723?text=${encodeURIComponent(t.hero.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1faa54] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition-smooth"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t.hero.whatsapp}
            </a>
          </div>

          <div
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--steel-light)]/40 bg-[var(--steel-light)]/15 backdrop-blur px-4 py-2 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--steel-light)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--steel-light)]" />
            </span>
            <span className="text-xs font-semibold text-white/95">{t.hero.scarcity}</span>
          </div>

          <div
            className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t.hero.stats.map((s) => (
              <div key={s.label} className="border-l border-white/25 pl-4 sm:pl-6">
                <div className="font-display text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/85 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
