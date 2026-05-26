import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";
import logisticsImg from "@/assets/logistics-warehouse.jpg";
import industrialImg from "@/assets/industrial-production.jpg";
import retailImg from "@/assets/retail-park.jpg";
import solarImg from "@/assets/solar-park.jpg";

export function PotentialSection() {
  const { t } = useLang();
  const images = [logisticsImg, industrialImg, retailImg, solarImg];

  return (
    <section id="potential" className="py-24 lg:py-32 bg-[var(--navy-deep)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.55_0.14_240/0.18),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker={t.potential.kicker} title={t.potential.title} lead={t.potential.lead} invert />

        <div className="mt-16 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {t.potential.items.map((it, i) => (
            <div
              key={it.title}
              className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-white/30 shadow-elegant transition-smooth min-h-[340px] flex"
            >
              <img
                src={images[i]}
                alt={it.title}
                width={1600}
                height={900}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/95 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/30" />

              <div className="relative z-10 flex flex-col justify-end p-8 lg:p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent text-white font-display text-sm font-bold shadow-glow">
                    0{i + 1}
                  </span>
                  <span
                    className="text-[11px] font-bold text-white tracking-[0.22em] uppercase"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
                  >
                    {t.potential.kicker}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  {it.title}
                </h3>
                <p
                  className="mt-3 text-sm lg:text-base text-white font-medium leading-relaxed max-w-md"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
                >
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
