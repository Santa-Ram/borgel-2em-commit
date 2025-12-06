import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Actualite } from "../data/actualites";

type Props = { actualite: Actualite };

export default function ActualiteCard({ actualite }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden border border-primary-soft flex flex-col"
    >
      <div className="h-40 bg-bg-light overflow-hidden">
        <img
          src={actualite.image}
          alt={actualite.titre}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[11px] text-slate-500 mb-1">
          {new Date(actualite.date).toLocaleDateString("fr-FR")}
        </p>
        <h3 className="text-sm font-semibold text-primary mb-2 line-clamp-2">
          {actualite.titre}
        </h3>
        <p className="text-xs text-slate-600 mb-3 line-clamp-3">
          {actualite.resume}
        </p>
        <Link
          to={`/actualites/${actualite.slug}`}
          className="mt-auto text-xs font-medium text-primary-soft hover:underline"
        >
          Lire l&apos;article
        </Link>
      </div>
    </motion.article>
  );
}
