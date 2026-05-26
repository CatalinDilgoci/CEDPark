import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";
import industrialImg from "@/assets/industrial-production.jpg";

export function InvestmentSection() {
  const { t } = useLang();
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[5/4]">
              <img
                src={industrialImg}
                alt="Major industrial investment"
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 lg:-left-10 bg-gradient-primary text-primary-foreground rounded-2xl p-6 lg:p-8 shadow-elegant max-w-[280px]">
              <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight">100M €</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80">
                Already invested
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading kicker={t.investment.kicker} title={t.investment.title} lead={t.investment.lead} />
            <ul className="mt-8 space-y-4">
              {t.investment.bullet.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-accent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base text-foreground/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
