import { useEffect, useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Section from "../components/Section";
import { actualites } from "../data/actualites";
import ActualiteCard from "../components/ActualiteCard";
import heroActus from "../assets/burreauBa.png";
import NewsletterSection from "../components/NewsletterSection";

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function ActualitesPage() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState<"all" | string>("all");

  useEffect(() => {
    document.title = "Actualités juridiques – Cabinet d'Avocats";
    const description =
      "Dernières analyses juridiques, jurisprudences et réformes en matière d'indemnisation des victimes et droit des assurances.";
    setMetaDescription(description);
  }, []);

  function setMetaDescription(content: string) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  const allTags = useMemo(() => {
    const s = new Set<string>();
    actualites.forEach((a) => a.motsCles.forEach((k) => s.add(k)));
    return [...s];
  }, []);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return actualites.filter((a) => {
      const matchText =
        a.titre.toLowerCase().includes(term) ||
        a.resume.toLowerCase().includes(term) ||
        a.contenu.toLowerCase().includes(term);

      const matchTag = tag === "all" ? true : a.motsCles.includes(tag);
      return matchText && matchTag;
    });
  }, [search, tag]);

  return (
    <>
      {/* HERO DE LA PAGE ACTUALITÉS */}
      <section
        className="relative max-w-8xl h-140 m-4 rounded-xl text-white bg-center bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url('/assets/')` }}
        style={{ backgroundImage: `url(${heroActus})` }}
      >
        <div className="absolute max-w-8xl rounded-lg inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl md:py-18 mx-auto lg:py-20 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 max-w-7xl pt-60"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-3">
              Actualités juridiques
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight">
              Comprendre l&apos;évolution du droit pour mieux défendre vos
              droits.
            </h1>
            <p className="text-sm text-white/80 max-w-xl">
              Retrouvez les dernières décisions de justice, réformes et analyses
              juridiques liées à l&apos;indemnisation des victimes, au dommage
              corporel et au droit des assurances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="flex-1 pt-40 pl-50"
          >
            <div className="bg-white/10 backdrop-blur rounded-2xl p-5 justify-items-end border border-white/20 text-xs">
              <p className="text-white/80 mb-2 font-medium">
                Pourquoi suivre nos actualités ?
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Anticiper l&apos;impact des nouvelles jurisprudences.</li>
                <li>
                  • Comprendre les droits des victimes face aux assureurs.
                </li>
                <li>• Suivre les grandes réformes du dommage corporel.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="flex justify-center mx-4 border-primary bg-primary mt-5 border-y max-w-8xl h-0,5 my-"></div>

      {/* CONTENU DE LA PAGE (recherche + liste) */}
      <Section>
        {/* Barre de recherche + filtres */}
        <div className="flex flex-col w-7xl md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex justify-center items-center gap-y-4">
            <input
              type="search"
              placeholder="Rechercher une actualité (mot-clé, thème, mot du titre...)"
              className="w-full md:max-w-md rounded-full border border-slate-200 px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex justify-items-center">
              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  onClick={() => setTag("all")}
                  className={`px-3 py-1 rounded-full border ${
                    tag === "all"
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  Tous les articles
                </button>
                {allTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTag(t)}
                    className={`px-3 py-1 rounded-full border ${
                      tag === t
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Liste d'actualités */}
        {filtered.length === 0 ? (
          <p className="text-xs text-slate-500">
            tss pory lelena a
          </p>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="grid md:grid-cols-3 gap-5"
          >
            {filtered.map((actu) => (
              <ActualiteCard key={actu.slug} actualite={actu} />
            ))}
          </motion.div>
        )}
      </Section>

      {/* SECTION NEWSLETTER VIDE EN BAS */}
      <section className="flex h-50 my-10 items-center border-t border-slate-200">
        <div className="max-w-8xl drop-shadow-xl mx-auto pt-30">
          <NewsletterSection />
        </div>
      </section>
    </>
  );
}
