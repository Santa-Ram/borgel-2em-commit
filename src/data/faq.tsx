export type FAQItem = {
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    question: "Comment se déroule une demande d'indemnisation ?",
    answer:
      "Nous analysons votre dossier, évaluons vos droits, et engageons les démarches auprès des organismes compétents.",
  },
  {
    question: "Quels sont les délais d'indemnisation ?",
    answer:
      "Les délais varient selon la gravité, l'organisme et la complexité du dossier, en général entre 6 mois et 2 ans.",
  },
  {
    question: "Puis-je contester une proposition d’indemnisation ?",
    answer:
      "Oui, nous pouvons vous accompagner dans une contestation et négocier ou saisir la justice.",
  },
];
