import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[var(--navy-deep)] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-14">
        <div className="grid md:grid-cols-2 gap-8 pb-10 mb-10 border-b border-white/10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--steel-light)] font-semibold mb-3">
              Soluții industriale Craiova
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/teren-industrial-craiova" className="text-white/85 hover:text-[var(--steel-light)] transition-smooth">Teren industrial Craiova</Link></li>
              <li><Link to="/hale-depozite-craiova" className="text-white/85 hover:text-[var(--steel-light)] transition-smooth">Hale și depozite Craiova</Link></li>
              <li><Link to="/parc-industrial-craiova" className="text-white/85 hover:text-[var(--steel-light)] transition-smooth">Parc industrial Craiova</Link></li>
              <li><Link to="/logistica-craiova" className="text-white/85 hover:text-[var(--steel-light)] transition-smooth">Logistică Craiova</Link></li>
            </ul>
          </div>
          <div className="md:text-right">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--steel-light)] font-semibold mb-3">
              Despre proiect
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-md md:ml-auto">
              CED Park Craiova North – platformă industrială și logistică integrată de 65 ha în nordul Craiovei, cu acces direct la DEx12.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-md bg-gradient-accent flex items-center justify-center shadow-glow">
              <span className="text-white font-display font-bold text-sm">CED</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white text-base">CED Park Craiova North</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--steel-light)] font-semibold mt-0.5">
                {t.footer.tagline}
              </div>
            </div>
          </div>

          <div className="text-xs text-white/70 md:text-right space-y-2">
            <div className="font-medium text-white/90">{t.footer.legal}</div>
            <div className="text-white/60">
              © {new Date().getFullYear()} CED Park Craiova · {t.footer.rights}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end pt-1">
              <Link
                to="/privacy"
                className="text-white/85 hover:text-[var(--steel-light)] transition-smooth font-medium"
              >
                {t.footer.privacy}
              </Link>
              <Link
                to="/cookies"
                className="text-white/85 hover:text-[var(--steel-light)] transition-smooth font-medium"
              >
                {t.footer.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
