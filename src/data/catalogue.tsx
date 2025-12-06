export type RubriqueIndemnisation = {
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  casPratiques: { titre: string; description: string }[];
  infosJuridiques: string[];
};

export const indemnisationCatalogue: RubriqueIndemnisation[] = [
  {
    slug: "accident-de-la-circulation",
    titre: "Accident de la circulation",
    resume:
      "Accompagnement complet des victimes d'accidents de la route pour une indemnisation optimale.",
    contenu: `Nous assistons les victimes d'accidents de la circulation à chaque étape : 
déclaration, expertise médicale, négociation avec l'assureur et, le cas échéant, action en justice.`,
    casPratiques: [
      {
        titre: "Accident impliquant un tiers non assuré",
        description:
          "Accompagnement d'une victime heurtée par un conducteur non assuré avec intervention du Fonds de garantie.",
      },
      {
        titre: "Piéton renversé sur passage protégé",
        description:
          "Obtention d'une indemnisation intégrale du préjudice corporel, y compris pertes de revenus et préjudice moral.",
      },
    ],
    infosJuridiques: [
      "Application de la loi Badinter pour les victimes non conductrices.",
      "Prise en compte des préjudices patrimoniaux et extrapatrimoniaux selon la nomenclature Dintilhac.",
    ],
  },
  {
    slug: "agressions-et-infractions",
    titre: "Agressions et infractions",
    resume:
      "Indemnisation des victimes d'agressions physiques, violences conjugales et infractions pénales.",
    contenu: `Nous accompagnons les victimes d'infractions devant le tribunal correctionnel 
et la CIVI (Commission d'indemnisation des victimes d'infractions).`,
    casPratiques: [
      {
        titre: "Agression dans un lieu public",
        description:
          "Saisine de la CIVI pour obtenir une indemnisation malgré l'insolvabilité de l'auteur.",
      },
    ],
    infosJuridiques: [
      "Délai de prescription spécifique pour la saisine de la CIVI.",
      "Possibilité d'indemnisation par le Fonds de garantie.",
    ],
  },
  // Ajoute : victimes-d-attentat, accident-medical, accident-du-travail, accident-de-la-vie-courante, etc.
];
