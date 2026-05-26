import { Zap, Cable, Gauge, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const highlights = [
  { icon: Zap, label: "Rețea modernizată", value: "20 kV" },
  { icon: Layers, label: "Posturi de transformare noi", value: "2 unități" },
  { icon: Gauge, label: "Putere extensibilă", value: "până la 650 kVA / unitate" },
  { icon: Cable, label: "Rețea subterană", value: "~7,5 km" },
  { icon: ShieldCheck, label: "Alimentare", value: "redundantă, 2 surse" },
];

export function EnergyInfrastructureSection() {
  return (
    <section
      id="energy-infrastructure"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.14_240/0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.32_0.08_250/0.06),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--steel)]">
              <span className="h-px w-8 bg-[var(--steel)]" />
              Energie & Capacitate
            </div>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-balance text-foreground">
              Infrastructură energetică strategică pentru dezvoltări industriale
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground max-w-2xl">
              <p>
                Amplasamentul beneficiază de un proiect major de modernizare a infrastructurii energetice,
                derulat de <span className="text-foreground font-medium">Distribuție Energie Oltenia</span>,
                care prevede trecerea rețelelor existente la 20 kV.
              </p>
              <p>
                Această modernizare creează un avantaj strategic pentru dezvoltări industriale și
                logistice, asigurând o capacitate energetică ridicată, stabilitate în alimentare și
                posibilitate de extindere în funcție de necesitățile viitoare ale investitorilor.
              </p>
              <p>
                În cadrul proiectului vor fi instalate două posturi de transformare noi, fiecare cu
                o putere de <span className="text-foreground font-medium">400 kVA, extensibilă până la 650 kVA</span> per
                unitate, oferind flexibilitate pentru operațiuni cu consum energetic intens.
              </p>
              <p>
                Rețeaua va include aproximativ <span className="text-foreground font-medium">7,5 km de infrastructură subterană</span>
                {" "}alimentată din două surse de 20 kV, ceea ce asigură redundanță și continuitate
                operațională.
              </p>
              <p>
                Această infrastructură poziționează proiectul ca o locație potrivită pentru
                investiții industriale moderne, unde accesul la energie devine un factor critic de
                decizie.
              </p>
              <p className="text-sm italic">
                Investiția este finanțată de Distribuție Energie Oltenia și se află în curs de
                implementare.
              </p>
            </div>

            <div className="mt-10">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-[var(--navy-deep)]/90 transition-smooth shadow-lg shadow-[var(--navy-deep)]/20"
              >
                Solicită detalii despre capacitatea energetică disponibilă
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur p-6 lg:p-8 shadow-xl shadow-[var(--navy-deep)]/5">
              <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy-deep)] text-white px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase">
                <Zap className="w-3 h-3" />
                Capacitate disponibilă
              </div>

              <div className="space-y-3 mt-2">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-xl border border-border/70 bg-background/80 p-4 hover:border-[var(--steel)]/40 hover:bg-background transition-smooth"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--navy-deep)] to-[var(--steel)] grid place-items-center text-white shadow-md">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                        {label}
                      </div>
                      <div className="mt-0.5 font-display font-bold text-lg text-foreground leading-tight">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/70 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Proiect în implementare · Distribuție Energie Oltenia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
