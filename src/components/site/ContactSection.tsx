import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLang();
  const waMsg = encodeURIComponent(t.hero.whatsappMsg);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--navy-deep)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.14_240/0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.7_0.1_220/0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} lead={t.contact.lead} invert align="center" />

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-7 max-w-5xl mx-auto">
          {t.contact.people.map((p, idx) => {
            const phoneDigits = p.phone.replace(/\D/g, "");
            const telHref = `+${phoneDigits}`;
            return (
              <div
                key={p.name}
                className="rounded-2xl border border-white/25 bg-white/[0.09] backdrop-blur p-7 lg:p-8 hover:bg-white/[0.13] hover:border-white/40 transition-smooth flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent text-white font-display text-xs font-bold shadow-glow">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--steel-light)] font-bold">
                    {p.role}
                  </span>
                </div>
                <div className="font-display text-2xl lg:text-3xl font-bold text-white">{p.name}</div>

                <div className="mt-6 space-y-3 text-sm flex-1">
                  <a
                    href={`tel:${telHref}`}
                    className="flex items-center gap-3 text-white hover:text-[var(--steel-light)] transition-smooth font-semibold"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{p.phone}</span>
                  </a>
                  {p.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 text-white/95 hover:text-[var(--steel-light)] transition-smooth break-all"
                    >
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-medium">{email}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${telHref}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-smooth"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t.contact.callNow}
                  </a>
                  <a
                    href={`https://wa.me/${phoneDigits}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1faa54] px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition-smooth"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur p-7 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--steel-light)] font-bold">
                {t.contact.company.label}
              </div>
              <div className="mt-2 font-display text-xl font-bold text-white">{t.contact.company.name}</div>
              <div className="mt-1 text-sm text-white/85">{t.contact.company.address}</div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/80 font-medium">
              <span>{t.contact.company.cui}</span>
              <span>{t.contact.company.orc}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
