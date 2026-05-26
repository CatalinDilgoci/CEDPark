import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site/SeoPageLayout";

export const Route = createFileRoute("/parc-industrial-craiova")({
  head: () => ({
    meta: [
      { title: "Parc industrial Craiova – ecosistem pentru investiții și dezvoltare | CED Park" },
      {
        name: "description",
        content:
          "Parc industrial Craiova: ecosistem pentru investitori, infrastructură completă și acces rutier direct la DEx12. CED Park Craiova North – 65 ha pentru dezvoltări industriale și logistice.",
      },
      { property: "og:title", content: "Parc industrial Craiova – ecosistem pentru investiții și dezvoltare" },
      {
        property: "og:description",
        content:
          "Parc industrial Craiova de 65 ha pentru investitori și dezvoltatori, cu infrastructură completă și acces rutier rapid la DEx12.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Parc industrial Craiova – CED Park" },
      {
        name: "twitter:description",
        content:
          "Ecosistem industrial Craiova pentru investiții și dezvoltare: 65 ha, infrastructură integrată și acces rutier direct la DEx12.",
      },
    ],
  }),
  component: ParcIndustrialPage,
});

function ParcIndustrialPage() {
  return (
    <SeoPageLayout
      h1="Parc industrial Craiova – ecosistem pentru investiții și dezvoltare"
      intro="CED Park Craiova North este un parc industrial dezvoltat strategic în nordul Craiovei, pe 65 de hectare, cu infrastructură completă și acces rutier direct la DEx12 – un ecosistem matur, gândit pentru investitori și dezvoltatori care urmăresc proiecte industriale de anvergură."
      paragraphs={[
        "Parcul industrial Craiova North este construit ca o platformă integrată pentru investitori care vizează o locație premium în sudul României. Suprafața extinsă permite coexistența mai multor tipuri de activități – producție, asamblare, depozitare, logistică și servicii industriale – într-un cadru profesional, cu zonificare clară și planificare urbanistică pregătită pentru dezvoltări rapide.",
        "Infrastructura parcului industrial Craiova este unul dintre principalele atuuri pentru investitori: drumuri interioare, utilități extinse, energie, apă și platforme operaționale deja funcționale. La acestea se adaugă accesul rutier direct la autostrada DEx12, conexiunile cu drumurile naționale și legăturile feroviare, care fac din locație un nod logistic relevant pentru fluxurile industriale europene.",
        "Ecosistemul industrial din jurul Craiovei – Ford, Rompetrol Craiova, Genesis Biotech și alți operatori majori – confirmă maturitatea zonei și creează un mediu favorabil pentru investiții noi. Pentru fonduri, dezvoltatori și companii industriale, CED Park Craiova North oferă scalabilitate, infrastructură premium și un cadru solid pentru creștere pe termen lung.",
      ]}
      highlights={[
        { title: "Ecosistem pentru investitori", text: "Mediu industrial matur, cu operatori majori și forță de muncă calificată în Craiova." },
        { title: "Infrastructură integrată", text: "Drumuri, utilități, energie, apă și platforme deja operaționale în parc." },
        { title: "Acces rutier DEx12", text: "Conectare directă la autostradă și la coridoarele europene de transport." },
        { title: "65 ha scalabili", text: "Suprafață configurabilă pentru proiecte industriale și logistice de mari dimensiuni." },
      ]}
      benefitsTitle="Beneficii pentru investitori"
      benefits={[
        "Acces rutier direct la autostrada DEx12, fără traversarea Craiovei",
        "Infrastructură industrială completă, pregătită pentru implementare rapidă",
        "Zonificare clară pentru producție, logistică, depozite și servicii industriale",
        "Vecinătate cu investitori strategici activi în parcul industrial Craiova",
        "Forță de muncă industrială calificată disponibilă în zona Craiova",
        "Scalabilitate pe 65 ha pentru extinderi etapizate ale investiției",
      ]}
      ctaTitle="Asociere și dezvoltare în parcul industrial Craiova North"
      ctaText="Discutăm modele de asociere strategică și scenarii de dezvoltare pentru investiția ta în parcul industrial CED Park Craiova North."
      primaryCtaLabel="Discută cu echipa"
      primaryCtaSection="contact"
      secondaryCtaLabel="Vezi ecosistemul"
      secondaryCtaSection="ecosystem"
      relatedLinks={[
        {
          to: "/teren-industrial-craiova",
          title: "Teren industrial Craiova",
          description: "65 ha de teren industrial cu acces direct la DEx12 și infrastructură completă.",
        },
        {
          to: "/hale-depozite-craiova",
          title: "Hale și depozite Craiova",
          description: "Spații industriale și depozite operaționale în parcul industrial Craiova.",
        },
        {
          to: "/logistica-craiova",
          title: "Logistică Craiova",
          description: "Hub logistic strategic în sudul României, integrat în parcul industrial.",
        },
      ]}
    />
  );
}
