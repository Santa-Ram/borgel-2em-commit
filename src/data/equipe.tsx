import imgBorgel from '../assets/Borgel-carré.png'

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
    photo: imgBorgel,
    bio: `Maître Jean DUPONT accompagne depuis plus de 15 ans les victimes de dommages corporels 
dans leurs démarches d'indemnisation, que ce soit à la suite d'accidents de la circulation, 
d'accidents médicaux ou d'agressions. Il intervient exclusivement aux côtés des victimes.`,
  },
  
];
