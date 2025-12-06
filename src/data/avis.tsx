export type AvisClient = {
  id: number;
  nom: string;
  note: number;
  commentaire: string;
};

export const avisClients: AvisClient[] = [
  {
    id: 1,
    nom: "Sophie L.",
    note: 5,
    commentaire:
      "Un accompagnement humain et très professionnel, j'ai été soutenue à chaque étape.",
  },
  {
    id: 2,
    nom: "Marc D.",
    note: 5,
    commentaire:
      "Le cabinet a obtenu une indemnisation bien supérieure à ce que proposait l'assureur.",
  },
];
