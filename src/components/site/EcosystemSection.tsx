import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export function EcosystemSection() {
  const { t } = useLang();
  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker={t.ecosystem.kicker} title={t.ecosystem.title} lead={t.ecosystem.lead} align="center" />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {t.ecosystem.companies.map((c) => (
            <div
              key={c}
              className="group flex items-center justify-center min-h-[120px] lg:min-h-[140px] rounded-2xl bg-card border border-border hover:border-[var(--steel)] hover:shadow-card transition-smooth p-6"
            >
              <span className="font-display text-lg lg:text-xl font-semibold text-foreground/80 group-hover:text-[var(--navy)] text-center transition-smooth">
                {c}
              </span>
            </div>
          ))}
        </div>

        {/* Access section embedded */}
        <div className="mt-24">
          <SectionHeading kicker={t.access.kicker} title={t.access.title} align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.access.items.map((it, i) => (
              <div
                key={it.title}
                className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-card hover:border-[var(--steel)] transition-smooth"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                  {i + 1}
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-foreground">{it.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
