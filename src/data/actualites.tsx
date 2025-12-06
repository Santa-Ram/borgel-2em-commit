import bSeul from "../assets/BSEUL.png";
import unBlanc from "../assets/unblanc.png";
import borDouble from "../assets/bordouble.png";
import albanActu from "../assets/albanactu.png";
import actuNoir from "../assets/actunoir.png";
import actuInsta from "../assets/actuisnta.png";

export type Actualite = {
  slug: string;
  titre: string;
  image: string;
  date: string;
  resume: string;
  contenu: string;
  motsCles: string[];
};

export const actualites: Actualite[] = [
  {
    slug: "nouvelle-jurisprudence-dommage-corporel-2025",
    titre: "Nouvelle jurisprudence en matière de dommage corporel (2025)",
    image: bSeul,
    date: "2025-12-02",
    resume: "test kely ataonay sy ra marco ty zala a",
    contenu: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Dans un arrêt récent, la Cour de cassation est venue préciser les conditions 
d'indemnisation des pertes de gains professionnels futurs. Cette décision renforce la protection 
des victimes en imposant aux assureurs une analyse plus fine des trajectoires professionnelles.`,
    motsCles: ["vody", "préjudice économique", "jurisprudence"],
  },
  {
    slug: "nouvelle-jurisprudence-dommage-corporel-2025",
    titre: "Nouvelle jurisprudence en matière de dommage corporel (2025)",
    image: bSeul,
    date: "2025-10-15",
    resume:
      "La Cour de cassation précise les critères d'indemnisation des préjudices économiques futurs.",
    contenu: `Dans un arrêt récent, la Cour de cassation est venue préciser les conditions 
d'indemnisation des pertes de gains professionnels futurs. Cette décision renforce la protection 
des victimes en imposant aux assureurs une analyse plus fine des trajectoires professionnelles.`,
    motsCles: ["dommage corporel", "préjudice économique", "jurisprudence"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: unBlanc,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: borDouble,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: actuNoir,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: actuInsta,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: albanActu,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: unBlanc,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: unBlanc,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  {
    slug: "reforme-assurances-indemnisation-victimes",
    titre: "Réforme des assurances et droits des victimes",
    image: unBlanc,
    date: "2025-09-30",
    resume:
      "Une réforme majeure impacte les relations entre assureurs et victimes d'accidents.",
    contenu: `La nouvelle réforme revoit certains délais de prescription et encadre davantage 
les pratiques des compagnies d'assurance lors des offres d'indemnisation.`,
    motsCles: ["assurances", "réforme", "victimes"],
  },
  // Ajoute d’autres actualités
];
