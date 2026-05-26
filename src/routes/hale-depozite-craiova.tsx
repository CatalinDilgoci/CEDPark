import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site/SeoPageLayout";

export const Route = createFileRoute("/hale-depozite-craiova")({
  head: () => ({
    meta: [
      { title: "Hale și depozite Craiova – oportunități logistice și industriale | CED Park" },
      {
        name: "description",
        content:
          "Hale și depozite Craiova: oportunități logistice și industriale în CED Park Craiova North. 65 ha, acces DEx12, infrastructură completă pentru depozite, producție și distribuție.",
      },
      { property: "og:title", content: "Hale și depozite Craiova – oportunități logistice și industriale" },
      {
        property: "og:description",
        content:
          "Depozite Craiova și hale industriale moderne, cu logistică integrată și acces direct la DEx12, în parcul industrial CED Park Craiova North.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Hale și depozite Craiova – CED Park" },
      {
        name: "twitter:description",
        content:
          "Oportunități logistice și industriale în Craiova: hale moderne, depozite și platformă de 65 ha cu acces DEx12.",
      },
    ],
  }),
  component: HaleDepoziteCraiovaPage,
});

function HaleDepoziteCraiovaPage() {
  return (
    <SeoPageLayout
      h1="Hale și depozite Craiova – oportunități logistice și industriale"
      intro="CED Park Craiova North dezvoltă hale industriale și depozite logistice în Craiova pe o platformă de 65 de hectare, cu acces direct la DEx12 și infrastructură completă, gândită pentru operațiuni moderne de depozitare, producție și distribuție."
      paragraphs={[
        "Halele industriale și depozitele Craiova din cadrul CED Park Craiova North răspund cerințelor operaționale ale companiilor de producție, logistică și distribuție. Construcțiile sunt proiectate pentru fluxuri eficiente, cu deschideri largi, înălțimi utile generoase, rampe pentru autovehicule de mare tonaj și platforme de manevră dimensionate corespunzător.",
        "Pentru operatorii care caută depozite Craiova bine poziționate, locația din nordul orașului oferă acces direct la DEx12, conectare la rețeaua de drumuri naționale și legături rapide cu porturile dunărene și coridoarele europene de transport. Această poziționare reduce timpii de tranzit și costurile de logistică către principalele piețe din România și Balcani.",
        "Infrastructura industrială deja existentă – hale, depozite, drumuri interioare și utilități – permite startul rapid al activității, fără investiții majore în lucrări preliminare. Companiile pot opta pentru spații existente sau pentru dezvoltări build-to-suit, adaptate proceselor specifice de producție, depozitare sau cross-docking în Craiova.",
        "Alegerea CED Park Craiova North pentru hale și depozite în Craiova înseamnă integrare într-un ecosistem industrial matur, cu acces la forță de muncă calificată, furnizori locali și vecinătate cu investitori majori activi în zona Almăj. Întregul cadru susține dezvoltarea unor operațiuni logistice și industriale competitive pe termen lung.",
      ]}
      highlights={[
        { title: "Hale industriale moderne", text: "Construcții cu deschideri largi, înălțimi utile mari și acces optim pentru TIR." },
        { title: "Depozite Craiova", text: "Spații de depozitare ideale pentru distribuție regională, națională și export." },
        { title: "Build-to-suit", text: "Hale și depozite configurate la specificațiile tehnice ale fiecărui operator." },
        { title: "Logistică integrată", text: "Acces direct DEx12, drumuri interioare și platforme de manevră dimensionate." },
      ]}
      benefitsTitle="Beneficii locație"
      benefits={[
        "Acces direct la autostrada DEx12 din Craiova, fără traversarea orașului",
        "65 ha disponibili pentru hale industriale și depozite Craiova de mari dimensiuni",
        "Infrastructură existentă: drumuri interioare, utilități, energie și apă",
        "Posibilitate de dezvoltare build-to-suit pentru depozite și hale dedicate",
        "Conectivitate logistică rapidă către portul Constanța și piețele europene",
        "Vecinătate cu operatori industriali majori din Craiova: Ford, Rompetrol, Genesis Biotech",
        "Forță de muncă industrială și logistică calificată în zona Craiova",
        "Zonificare clară pentru producție, depozitare, cross-docking și distribuție",
      ]}
      ctaTitle="Contact, parteneriat sau închiriere de hale și depozite în Craiova"
      ctaText="Spune-ne suprafața, specificațiile și modelul de colaborare preferat – contact direct, parteneriat strategic sau închiriere – iar echipa CED Park Craiova North revine cu o propunere personalizată."
      primaryCtaLabel="Cere o propunere"
      primaryCtaSection="contact"
      secondaryCtaLabel="Vezi infrastructura"
      secondaryCtaSection="potential"
      relatedLinks={[
        {
          to: "/logistica-craiova",
          title: "Logistică Craiova",
          description: "Hub logistic strategic pentru distribuție, transport și operațiuni 3PL.",
        },
        {
          to: "/teren-industrial-craiova",
          title: "Teren industrial Craiova",
          description: "Platforma de 65 ha pe care se dezvoltă halele și depozitele Craiova.",
        },
        {
          to: "/parc-industrial-craiova",
          title: "Parc industrial Craiova",
          description: "Ecosistem industrial matur, cu investitori majori activi în zona Almăj.",
        },
      ]}
    />
  );
}
