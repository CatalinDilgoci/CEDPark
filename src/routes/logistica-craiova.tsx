import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site/SeoPageLayout";

export const Route = createFileRoute("/logistica-craiova")({
  head: () => ({
    meta: [
      { title: "Logistică Craiova – hub strategic în sudul României | CED Park" },
      {
        name: "description",
        content:
          "Logistică Craiova: hub strategic în sudul României pentru distribuție și transport, cu acces direct la DEx12. CED Park Craiova North – 65 ha, infrastructură completă, depozite și hale operaționale.",
      },
      { property: "og:title", content: "Logistică Craiova – hub strategic în sudul României" },
      {
        property: "og:description",
        content:
          "Hub logistic Craiova pentru distribuție și transport regional și internațional, cu acces direct la DEx12 și infrastructură completă pe 65 ha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Logistică Craiova – hub strategic CED Park" },
      {
        name: "twitter:description",
        content:
          "Distribuție, transport și depozitare în Craiova, cu acces DEx12 și platformă logistică integrată de 65 ha.",
      },
    ],
  }),
  component: LogisticaCraiovaPage,
});

function LogisticaCraiovaPage() {
  return (
    <SeoPageLayout
      h1="Logistică Craiova – hub strategic în sudul României"
      intro="CED Park Craiova North este un hub logistic strategic în sudul României, dedicat operațiunilor de distribuție și transport: 65 de hectare cu acces direct la DEx12, hale și depozite existente, pregătite pentru centre logistice regionale și internaționale."
      paragraphs={[
        "Logistica modernă în Craiova are nevoie de locații care combină accesul rapid la coridoarele europene de transport cu infrastructura completă pentru depozite, distribuție și manipularea mărfii. CED Park Craiova North răspunde acestor cerințe prin poziționarea în nordul Craiovei, cu legături directe la DEx12, drumuri naționale, rețele feroviare și acces facil către portul Constanța.",
        "Platforma logistică Craiova oferă spații pentru centre de distribuție, hub-uri regionale, depozite cross-dock și operațiuni 3PL. Companiile care își stabilesc operațiunile logistice în Craiova pot servi rapid piețele din sudul României și pot extinde transportul către destinații internaționale prin coridoarele rutiere europene conectate la DEx12.",
        "Infrastructura industrială existentă – drumuri interioare, utilități, hale și depozite – permite implementarea rapidă a proiectelor logistice. Operatorii de transport și distribuție beneficiază de fluxuri eficiente pentru autovehicule de mare tonaj, suprafețe largi de manevră și posibilitatea de a scala progresiv operațiunile logistice în Craiova.",
        "Alegerea CED Park Craiova North pentru logistică în Craiova înseamnă acces la un hub matur, integrat într-un ecosistem industrial puternic, cu forță de muncă disponibilă și o locație care îmbină vizibilitatea strategică cu performanța operațională în distribuție și transport.",
      ]}
      highlights={[
        { title: "Hub logistic 65 ha", text: "Platformă strategică în sudul României pentru distribuție și transport." },
        { title: "Acces direct DEx12", text: "Conectare rapidă la autostradă și la coridoarele logistice europene." },
        { title: "Depozite operaționale", text: "Hale și depozite existente, pregătite pentru centre de distribuție." },
        { title: "Scalabilitate logistică", text: "Configurări flexibile pentru 3PL, cross-dock și transport regional." },
      ]}
      benefitsTitle="Beneficii logistice"
      benefits={[
        "Acces rutier direct la DEx12, fără traversarea orașului Craiova",
        "Hub strategic pentru distribuție în sudul României și export european",
        "Conectare logistică rapidă către portul Constanța și Dunăre",
        "Hale și depozite existente pentru centre de distribuție și cross-dock",
        "Platforme de manevră și fluxuri optimizate pentru transport TIR",
        "Forță de muncă logistică disponibilă în zona Craiova",
        "Scalabilitate pe 65 ha pentru extinderea operațiunilor de transport și distribuție",
        "Vecinătate cu operatori industriali majori care generează fluxuri logistice",
      ]}
      ctaTitle="Construiește-ți hub-ul logistic în Craiova"
      ctaText="Contactează echipa CED Park Craiova North pentru o ofertă personalizată: discutăm volume, suprafețe și scenarii de colaborare pentru operațiunile tale de distribuție și transport în Craiova."
      primaryCtaLabel="Cere ofertă logistică"
      primaryCtaSection="contact"
      secondaryCtaLabel="Vezi locația și accesul"
      secondaryCtaSection="location"
      relatedLinks={[
        {
          to: "/hale-depozite-craiova",
          title: "Hale și depozite Craiova",
          description: "Spații operaționale pentru centre de distribuție, cross-dock și 3PL.",
        },
        {
          to: "/parc-industrial-craiova",
          title: "Parc industrial Craiova",
          description: "Ecosistem industrial integrat care alimentează fluxurile logistice locale.",
        },
        {
          to: "/teren-industrial-craiova",
          title: "Teren industrial Craiova",
          description: "65 ha cu acces direct la DEx12, baza platformei logistice Craiova.",
        },
      ]}
    />
  );
}
