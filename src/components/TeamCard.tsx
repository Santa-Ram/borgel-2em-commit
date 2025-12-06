import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { MembreEquipe } from "../data/equipe";

type Props = { membre: MembreEquipe };

export default function TeamCard({ membre }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.08)" }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100"
    >
      <div className="h-48 bg-bg-light overflow-hidden">
        <img
          src={membre.photo}
          alt={membre.nom}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-primary mb-1">{membre.nom}</h3>
        <p className="text-xs text-slate-600 mb-3">{membre.titre}</p>
        <Link
          to={`/equipe/${membre.slug}`}
          className="text-xs font-medium text-primary-soft hover:underline"
        >
          Voir le profil
        </Link>
      </div>
    </motion.article>
  );
}
