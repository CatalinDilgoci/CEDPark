import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site/SeoPageLayout";

export const Route = createFileRoute("/teren-industrial-craiova")({
  head: () => ({
    meta: [
      { title: "Teren industrial Craiova – platformă 65 ha cu acces DEx12 | CED Park" },
      {
        name: "description",
        content:
          "Teren industrial Craiova: platformă de 65 hectare în parcul industrial CED Park Craiova North, cu acces direct la DEx12, infrastructură completă și soluții pentru logistică, producție și depozite.",
      },
      { property: "og:title", content: "Teren industrial Craiova – platformă 65 ha cu acces DEx12" },
      {
        property: "og:description",
        content:
          "Parc industrial Craiova de 65 ha, cu logistică integrată și infrastructură existentă. Acces direct la DEx12, ideal pentru dezvoltări industriale moderne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Teren industrial Craiova – CED Park 65 ha" },
      {
        name: "twitter:description",
        content:
          "Platformă industrială Craiova: 65 ha, acces DEx12, infrastructură și logistică integrată în parcul industrial CED Park Craiova North.",
      },
    ],
  }),
  component: TerenIndustrialPage,
});

function TerenIndustrialPage() {
  return (
    <SeoPageLayout
      h1="Teren industrial Craiova – platformă de 65 hectare cu acces DEx12"
      intro="CED Park Craiova North este un parc industrial modern în Craiova, dezvoltat pe 65 de hectare, cu acces direct la autostrada DEx12 și infrastructură pregătită pentru proiecte industriale, logistice și de producție de mari dimensiuni."
      paragraphs={[
        "Cu o suprafață de 65 ha, terenul industrial Craiova din cadrul CED Park Craiova North reprezintă una dintre cele mai extinse platforme industriale din sudul României. Poziționarea în nordul orașului Craiova, în zona Almăj, asigură o conectivitate excelentă către coridoarele europene de transport, prin acces direct la DEx12, drumuri naționale și rețeaua feroviară.",
        "Parcul industrial Craiova dezvoltat aici beneficiază de infrastructură existentă: drumuri interioare, utilități extinse, energie, apă și platforme operaționale. Aceste elemente reduc semnificativ timpul și costurile de implementare pentru orice proiect de teren industrial în Craiova, fie că vorbim despre hale de producție, centre logistice sau platforme mixte industrial-retail.",
        "Logistica reprezintă unul dintre punctele forte ale locației: proximitatea față de DEx12, accesul rapid către portul Constanța, precum și legăturile feroviare fac din CED Park Craiova North un nod logistic strategic pentru companiile care operează în Craiova și în regiunea Olteniei. Ecosistemul industrial local include investitori majori precum Ford, Rompetrol Craiova și Genesis Biotech, ceea ce confirmă maturitatea zonei.",
        "Pentru companii, dezvoltatori și investitori, terenul industrial Craiova din CED Park Craiova North oferă scalabilitate, infrastructură premium și un mediu de afaceri solid – condiții ideale pentru extinderea operațiunilor industriale și logistice în Craiova.",
      ]}
      highlights={[
        { title: "65 ha platformă industrială", text: "Una dintre cele mai mari suprafețe pregătite pentru dezvoltări industriale în Craiova." },
        { title: "Acces direct DEx12", text: "Conectare imediată la autostradă și la coridoarele europene de transport." },
        { title: "Infrastructură completă", text: "Drumuri, utilități și platforme deja funcționale în parcul industrial Craiova." },
        { title: "Hub logistic regional", text: "Logistică integrată cu acces rapid către Constanța și piețele europene." },
      ]}
      benefitsTitle="Beneficii locație"
      benefits={[
        "Acces direct la autostrada DEx12 și la rețeaua de drumuri naționale din Craiova",
        "65 hectare de teren industrial Craiova, configurabile în parcele flexibile",
        "Infrastructură industrială existentă: drumuri, utilități, energie și apă",
        "Conectivitate feroviară și acces logistic rapid către portul Constanța",
        "Ecosistem industrial matur în Craiova: Ford, Rompetrol, Genesis Biotech",
        "Forță de muncă industrială calificată disponibilă în zona Craiova",
        "Parc industrial cu zonificare clară pentru producție, depozite și logistică",
        "Proximitate față de centrul Craiovei și principalele zone rezidențiale",
      ]}
      ctaTitle="Asociere, închiriere sau dezvoltare în CED Park Craiova North"
      ctaText="Discutăm deschis despre opțiunile de asociere, închiriere de suprafețe sau parteneriat pentru dezvoltarea proiectului tău industrial sau logistic în Craiova."
      primaryCtaLabel="Solicită ofertă"
      primaryCtaSection="contact"
      secondaryCtaLabel="Vezi terenul și planul"
      secondaryCtaSection="land"
      relatedLinks={[
        {
          to: "/hale-depozite-craiova",
          title: "Hale și depozite Craiova",
          description: "Spații industriale și depozite logistice pe terenul CED Park Craiova North.",
        },
        {
          to: "/parc-industrial-craiova",
          title: "Parc industrial Craiova",
          description: "Ecosistemul industrial integrat de 65 ha pentru investitori și dezvoltatori.",
        },
        {
          to: "/logistica-craiova",
          title: "Logistică Craiova",
          description: "Hub logistic strategic în sudul României, cu acces direct la DEx12.",
        },
      ]}
    />
  );
}
