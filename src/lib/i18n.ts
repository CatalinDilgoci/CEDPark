export type Lang = "ro" | "en";

export const translations = {
  ro: {
    nav: {
      location: "Locație",
      land: "Teren",
      potential: "Potențial",
      proximity: "Proximitate",
      ecosystem: "Ecosistem",
      contact: "Contact",
      cta: "Contactează-ne",
    },
    hero: {
      tag: "Investiție Strategică · Craiova Nord",
      title: "Teren industrial, logistic și retail de 65 hectare",
      subtitle:
        "Acces direct la DEx12, infrastructură existentă și locație strategică la 10 minute de Craiova – o oportunitate unică de dezvoltare în sudul României.",
      cta: "Contactează-ne",
      whatsapp: "WhatsApp",
      whatsappMsg: "Salut, sunt interesat de CED Park Craiova North",
      ctaSecondary: "Descoperă proiectul",
      ctaSchedule: "Programează vizionare",
      scarcity: "Disponibilitate limitată – parcele în curs de contractare",
      stats: [
        { value: "65 ha", label: "Suprafață totală" },
        { value: "4 min", label: "Până la centura de nord a Craiovei" },
        { value: "100M €", label: "Investiție vis-à-vis" },
      ],
    },
    location: {
      kicker: "Locație",
      title: "Poziționare strategică în sudul României",
      lead: "CED Park Craiova North este situat într-un nod logistic vital, conectând DN6 / DE70 cu centura Craiova și rețeaua națională de transport.",
      seoLocal: "",
      points: [
        { title: "10 minute", desc: "Distanță până în centrul orașului Craiova" },
        { title: "4 minute", desc: "Acces la centura Craiova" },
        { title: "15 minute", desc: "Acces la Drumul Expres DEx12" },
        { title: "DN6 / DE70", desc: "Conexiune directă la rețeaua europeană" },
      ],
    },
    land: {
      kicker: "Date despre teren",
      title: "65 de hectare pregătite pentru dezvoltare",
      lead: "Un perimetru consolidat, cu infrastructură deja realizată și suprafețe extinse libere pentru proiecte de mari dimensiuni.",
      cards: [
        { value: "65 ha", title: "Suprafață totală", desc: "Perimetru unitar consolidat și parcelat" },
        { value: "50 ha", title: "Dezvoltabile", desc: "Disponibile pentru construcții noi build-to-suit" },
        { value: "15 ha", title: "Infrastructură", desc: "Hale, Depozite si drumuri deja existente" },
      ],
    },
    potential: {
      kicker: "Potențial de dezvoltare",
      title: "Patru direcții de investiție",
      lead: "O platformă versatilă, configurabilă pentru o gamă largă de utilizări industriale și comerciale.",
      items: [
        { title: "Logistică", desc: "Depozite, hub-uri de distribuție și fulfillment centers de mari dimensiuni." },
        { title: "Producție industrială", desc: "Fabrici, linii de asamblare și producție de înaltă tehnologie." },
        { title: "Retail parks & showroom", desc: "Parcuri comerciale, showroom-uri auto și centre DIY." },
        { title: "Agro-industrial", desc: "Procesare, depozitare și logistică pentru sectorul agroalimentar." },
      ],
    },
    investment: {
      kicker: "Credibilitate",
      title: "100.000.000 € investiție deja realizată vis-à-vis",
      lead: "Proiecte majore industriale și logistice sunt deja operaționale pe partea opusă a drumului, validând potențialul zonei și asigurând un ecosistem matur pentru noi investitori.",
      bullet: [
        "Infrastructură de utilități deja extinsă",
        "Furnizori și servicii locale operaționale",
        "Acces la forță de muncă calificată",
      ],
    },
    energy: {
      kicker: "Energie & Sustenabilitate",
      title: "Infrastructură energetică pregătită pentru viitor",
      lead: "Resurse energetice abundente și sustenabile, esențiale pentru operațiuni industriale moderne.",
      items: [
        { value: "3", title: "Parcuri fotovoltaice", desc: "În imediata vecinătate, asigurând energie verde regenerabilă." },
        { value: "3", title: "Stații de transformare", desc: "Capacitate energetică ridicată pentru consumatori industriali." },
        { value: "2026", title: "Infrastructură gaz", desc: "Rețea de gaze naturale planificată pentru anul 2026." },
      ],
    },
    proximity: {
      kicker: "Proximitate",
      title: "Proximitate & Locație Strategică Extinsă",
      lead: "La doar 5 minute distanță, un cluster comercial și hotelier matur consolidează atractivitatea zonei pentru investitori și forță de muncă.",
      statement:
        "O locație rar întâlnită în România — unde infrastructura industrială se întâlnește cu retailul premium, ospitalitatea și fluxul masiv de consumatori. Un context ideal pentru investiții cu randament accelerat.",
      companies: [
        { name: "Heineken", tag: "Producție & distribuție" },
        { name: "Leroy Merlin", tag: "DIY · Big Box" },
        { name: "Dedeman", tag: "DIY · Lider național" },
        { name: "Promenada Mall", tag: "NEPI Rockcastle" },
        { name: "Hotel Carul din Stele", tag: "Ospitalitate" },
      ],
    },
    ecosystem: {
      kicker: "Ecosistem industrial",
      title: "Investitori majori deja prezenți în zonă",
      lead: "CED Park Craiova North se integrează într-un ecosistem industrial puternic, cu jucători naționali și internaționali deja activi.",
      companies: [
        "Profi",
        "Penny (REWE Group)",
        "Diehl Aviation",
        "RetuRO",
        "Rompetrol Craiova",
        "Genesis Biotech Almăj",
      ],
    },
    access: {
      kicker: "Acces & Infrastructură",
      title: "Conectivitate completă",
      items: [
        { title: "DE70 / DN6", desc: "Acces direct din drumul european" },
        { title: "Centura Craiova", desc: "Aprox. 4 minute până la centură" },
        { title: "DEx12", desc: "Aprox. 15 minute până la drumul expres" },
        { title: "Cale ferată", desc: "Acces direct pentru transport feroviar" },
        { title: "Drumuri asfaltate", desc: "Rețea internă complet asfaltată" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Discutăm despre proiectul dumneavoastră",
      lead: "Echipa noastră vă stă la dispoziție pentru detalii tehnice, vizionări și negocieri personalizate.",
      people: [
        {
          name: "Constantin Dîlgoci",
          role: "Co-fondator",
          phone: "+40 740 131 723",
          emails: ["complexlegumicolnord@yahoo.com", "costidilgoci@yahoo.com"],
        },
        {
          name: "Cătălin Dîlgoci",
          role: "Co-fondator",
          phone: "+40 769 715 990",
          emails: ["catalin.dilgoci@yahoo.com"],
        },
      ],
      company: {
        label: "Companie",
        name: "SC MACHI CONT & AUDIT SRL",
        address: "Craiova, Str. Mărășești nr. 31",
        cui: "CUI: RO28834251",
        orc: "ORC: J2011001284160",
      },
      callNow: "Sună acum",
    },
    footer: {
      tagline: "Infrastructura viitorului",
      rights: "Toate drepturile rezervate.",
      legal: "Operat de SC MACHI CONT & AUDIT SRL · CUI RO28834251 · ORC J2011001284160",
      privacy: "Politică de confidențialitate",
      cookies: "Politică cookies",
    },
    cookies: {
      kicker: "Cookies & confidențialitate",
      text: "Acest site utilizează cookie-uri pentru analiză și îmbunătățirea experienței. Puteți accepta sau refuza utilizarea acestora.",
      accept: "Acceptă",
      refuse: "Refuză",
    },
    seoBlock: {
      p1: "CED Park Craiova North este una dintre cele mai importante platforme industriale din sudul României, oferind 65 de hectare pregătite pentru dezvoltări logistice, industriale și retail.",
      p2: "Proiectul beneficiază de acces direct la DEx12 și infrastructură existentă, fiind ideal pentru companii, dezvoltatori și investitori care caută o locație strategică în Craiova pentru depozite, producție sau proiecte comerciale.",
      p3: "Sunt disponibile multiple opțiuni de colaborare în funcție de nevoile proiectului.",
    },
  },
  en: {
    nav: {
      location: "Location",
      land: "Land",
      potential: "Potential",
      proximity: "Proximity",
      ecosystem: "Ecosystem",
      contact: "Contact",
      cta: "Contact us",
    },
      hero: {
      tag: "Strategic Investment · Craiova North",
      title: "65-hectare industrial, logistics & retail land",
      subtitle:
        "Direct access to DEx12, existing infrastructure and a strategic location 10 minutes from Craiova — a unique development opportunity in southern Romania.",
      cta: "Contact us",
      whatsapp: "WhatsApp",
      whatsappMsg: "Hi, I'm interested in CED Park Craiova North",
      ctaSecondary: "Discover the project",
      ctaSchedule: "Schedule a viewing",
      scarcity: "Limited availability – plots being contracted",
      stats: [
        { value: "65 ha", label: "Total surface" },
        { value: "4 min", label: "To Craiova north ring road" },
        { value: "€100M", label: "Investment across the road" },
      ],
    },
    location: {
      kicker: "Location",
      title: "Strategic positioning in southern Romania",
      lead: "CED Park Craiova North sits at a vital logistics hub, connecting DN6 / DE70 with the Craiova ring road and the national transport network.",
      seoLocal: "",
      points: [
        { title: "10 minutes", desc: "From the centre of Craiova" },
        { title: "4 minutes", desc: "To the Craiova ring road" },
        { title: "15 minutes", desc: "To the DEx12 expressway" },
        { title: "DN6 / DE70", desc: "Direct link to the European network" },
      ],
    },
    land: {
      kicker: "Land data",
      title: "65 hectares ready for development",
      lead: "A consolidated perimeter with infrastructure already in place and large open surfaces for major projects.",
      cards: [
        { value: "65 ha", title: "Total surface", desc: "Unified, consolidated and parcelled perimeter" },
        { value: "50 ha", title: "Developable", desc: "Available for new build-to-suit construction" },
        { value: "15 ha", title: "Infrastructure", desc: "Halls, warehouses and roads already in place" },
      ],
    },
    potential: {
      kicker: "Development potential",
      title: "Four investment directions",
      lead: "A versatile platform, configurable for a wide range of industrial and commercial uses.",
      items: [
        { title: "Logistics", desc: "Warehouses, distribution hubs and large-scale fulfillment centres." },
        { title: "Industrial production", desc: "Factories, assembly lines and high-tech manufacturing." },
        { title: "Retail parks & showrooms", desc: "Retail parks, automotive showrooms and DIY centres." },
        { title: "Agro-industrial", desc: "Processing, storage and logistics for the agri-food sector." },
      ],
    },
    investment: {
      kicker: "Credibility",
      title: "€100,000,000 investment already completed across the road",
      lead: "Major industrial and logistics projects are already operational on the opposite side of the road, validating the area's potential and ensuring a mature ecosystem for new investors.",
      bullet: [
        "Extensive utility infrastructure already in place",
        "Local suppliers and services operational",
        "Access to a skilled workforce",
      ],
    },
    energy: {
      kicker: "Energy & Sustainability",
      title: "Energy infrastructure ready for the future",
      lead: "Abundant, sustainable energy resources — essential for modern industrial operations.",
      items: [
        { value: "3", title: "Photovoltaic parks", desc: "In the immediate vicinity, providing green renewable energy." },
        { value: "3", title: "Transformer stations", desc: "High electrical capacity for industrial consumers." },
        { value: "2026", title: "Gas infrastructure", desc: "Natural gas network planned for 2026." },
      ],
    },
    proximity: {
      kicker: "Proximity",
      title: "Extended Strategic Location & Proximity",
      lead: "Just 5 minutes away, a mature retail and hospitality cluster boosts the area's appeal for investors and workforce alike.",
      statement:
        "A rare location in Romania — where industrial infrastructure meets premium retail, hospitality and massive consumer footfall. The ideal context for investments with accelerated returns.",
      companies: [
        { name: "Heineken", tag: "Production & distribution" },
        { name: "Leroy Merlin", tag: "DIY · Big Box" },
        { name: "Dedeman", tag: "DIY · National leader" },
        { name: "Promenada Mall", tag: "NEPI Rockcastle" },
        { name: "Hotel Carul din Stele", tag: "Hospitality" },
      ],
    },
    ecosystem: {
      kicker: "Industrial ecosystem",
      title: "Major investors already present in the area",
      lead: "CED Park Craiova North integrates into a strong industrial ecosystem with national and international players already active.",
      companies: [
        "Profi",
        "Penny (REWE Group)",
        "Diehl Aviation",
        "RetuRO",
        "Rompetrol Craiova",
        "Genesis Biotech Almăj",
      ],
    },
    access: {
      kicker: "Access & Infrastructure",
      title: "Complete connectivity",
      items: [
        { title: "DE70 / DN6", desc: "Direct access from the European route" },
        { title: "Craiova ring road", desc: "Approx. 4 minutes to the ring road" },
        { title: "DEx12", desc: "Approx. 15 minutes to the expressway" },
        { title: "Railway", desc: "Direct access for rail freight" },
        { title: "Asphalt roads", desc: "Fully asphalted internal network" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your project",
      lead: "Our team is available for technical details, site visits and tailored negotiations.",
      people: [
        {
          name: "Constantin Dîlgoci",
          role: "Co-founder",
          phone: "+40 740 131 723",
          emails: ["complexlegumicolnord@yahoo.com", "costidilgoci@yahoo.com"],
        },
        {
          name: "Cătălin Dîlgoci",
          role: "Co-founder",
          phone: "+40 769 715 990",
          emails: ["catalin.dilgoci@yahoo.com"],
        },
      ],
      company: {
        label: "Company",
        name: "SC MACHI CONT & AUDIT SRL",
        address: "Craiova, Str. Mărășești no. 31",
        cui: "VAT: RO28834251",
        orc: "Trade Reg: J2011001284160",
      },
      callNow: "Call now",
    },
    footer: {
      tagline: "Infrastructure of the future",
      rights: "All rights reserved.",
      legal: "Operated by SC MACHI CONT & AUDIT SRL · VAT RO28834251 · Trade Reg J2011001284160",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    cookies: {
      kicker: "Cookies & privacy",
      text: "This website uses cookies for analytics and improving user experience. You can accept or refuse their use.",
      accept: "Accept",
      refuse: "Refuse",
    },
    seoBlock: {
      p1: "CED Park Craiova North is one of the most important industrial platforms in southern Romania, offering 65 hectares ready for logistics, industrial and retail developments.",
      p2: "The project benefits from direct access to DEx12 and existing infrastructure, making it ideal for companies, developers and investors looking for a strategic location in Craiova for warehouses, production or commercial projects.",
      p3: "Multiple collaboration options are available depending on project needs.",
    },
  },
};

export type Translation = (typeof translations)["ro"];
