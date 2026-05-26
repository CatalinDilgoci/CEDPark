import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export function LandSection() {
  const { t } = useLang();
  return (
    <section id="land" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker={t.land.kicker} title={t.land.title} lead={t.land.lead} align="center" />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.land.cards.map((c, i) => (
            <div
              key={c.title}
              className="relative group p-8 lg:p-10 rounded-2xl bg-gradient-subtle border border-border hover:shadow-elegant transition-smooth overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-0 group-hover:opacity-10 blur-3xl transition-smooth rounded-full" />
              <div className="relative">
                <div className="text-xs font-semibold text-[var(--steel)] tracking-[0.2em] uppercase">
                  0{i + 1}
                </div>
                <div className="mt-4 font-display text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {c.value}
                </div>
                <div className="mt-4 font-display text-xl font-semibold text-foreground">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
