import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";
import solarImg from "@/assets/solar-park.jpg";

export function EnergySection() {
  const { t } = useLang();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={solarImg}
          alt="Solar photovoltaic park"
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/95 via-[var(--navy-deep)]/85 to-[var(--navy-deep)]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker={t.energy.kicker} title={t.energy.title} lead={t.energy.lead} invert />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.energy.items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-md p-8 hover:bg-white/[0.13] hover:border-white/30 transition-smooth"
            >
              <div className="font-display text-5xl lg:text-6xl font-bold text-white">{it.value}</div>
              <div className="mt-4 font-display text-xl font-semibold text-white">{it.title}</div>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
