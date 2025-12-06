export type MembreEquipe = {
  id: number;
  slug: string;
  nom: string;
  titre: string;
  photo: string;
  bio: string;
};

export const equipe: MembreEquipe[] = [
  {
    id: 1,
    slug: "maitre-jean-dupont",
    nom: "Maître Jean DUPONT",
    titre: "Avocat associé – Dommage corporel",
    photo: "/assets/team/jean-dupont.jpg",
    bio: `Maître Jean DUPONT accompagne depuis plus de 15 ans les victimes de dommages corporels 
dans leurs démarches d'indemnisation, que ce soit à la suite d'accidents de la circulation, 
d'accidents médicaux ou d'agressions. Il intervient exclusivement aux côtés des victimes.`,
  },
  {
    id: 2,
    slug: "maitre-claire-martin",
    nom: "Maître Claire MARTIN",
    titre: "Avocate – Droit des assurances",
    photo: "/assets/team/claire-martin.jpg",
    bio: `Maître Claire MARTIN assiste ses clients dans leurs litiges avec les compagnies d'assurance, 
tant en phase amiable que contentieuse, et les conseille dans la négociation de leurs garanties.`,
  },
  // Ajoute d’autres membres si besoin
];
