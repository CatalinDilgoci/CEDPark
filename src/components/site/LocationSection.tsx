import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export function LocationSection() {
  const { t } = useLang();
  return (
    <section id="location" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeading kicker={t.location.kicker} title={t.location.title} lead={t.location.lead} />
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {t.location.points.map((p) => (
                <div
                  key={p.title}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-[var(--steel)] hover:shadow-card transition-smooth"
                >
                  <div className="font-display text-xl font-bold text-[var(--navy)] group-hover:text-[var(--steel)] transition-smooth">
                    {p.title}
                  </div>
                  <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5] lg:aspect-[4/5] border border-border bg-card">
              <iframe
                title="CED Park Craiova North — Map"
                src="https://maps.google.com/maps?q=CED%20Park%20Craiova%20North%4044.434489,23.691966&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="pointer-events-none absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                {["DN6", "DE70", "DEx12", "Railway"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--navy-deep)]/90 backdrop-blur text-white border border-white/20 shadow-card"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-xl bg-[var(--navy-deep)]/92 backdrop-blur p-4 border border-white/15">
                <div className="text-white/85 text-[10px] font-bold tracking-[0.22em] uppercase">
                  Craiova · DN6 / DE70
                </div>
                <div className="font-display text-white text-lg lg:text-xl font-bold leading-tight mt-1">
                  44.434489° N · 23.691966° E
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 lg:-right-10 hidden sm:block bg-card rounded-xl p-5 shadow-elegant border border-border max-w-[200px] z-10">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Distance</div>
              <div className="mt-1 font-display text-3xl font-bold text-[var(--navy)]">10 min</div>
              <div className="text-xs text-muted-foreground mt-0.5">Craiova City Centre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
