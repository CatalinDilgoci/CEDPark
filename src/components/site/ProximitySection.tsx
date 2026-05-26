import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export function ProximitySection() {
  const { t } = useLang();
  return (
    <section id="proximity" className="py-24 lg:py-32 bg-[var(--navy-deep)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.55_0.14_240/0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.7_0.1_220/0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker={t.proximity.kicker}
          title={t.proximity.title}
          lead={t.proximity.lead}
          invert
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {t.proximity.companies.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.12] hover:border-white/30 transition-smooth"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--steel-light)]">
                  5 min
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/50 group-hover:text-white transition-smooth">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="font-display text-lg lg:text-xl font-bold text-white leading-tight">
                {c.name}
              </div>
              <div className="mt-1.5 text-xs text-white/70">{c.tag}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 lg:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur p-8 lg:p-12 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-accent text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Investment Statement
              </span>
            </div>
            <p className="font-display text-xl lg:text-2xl font-semibold text-white leading-relaxed text-balance">
              {t.proximity.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
