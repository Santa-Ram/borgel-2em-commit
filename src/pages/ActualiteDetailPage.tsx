// src/pages/ActualiteDetailPage.tsx

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section";
import ActualiteCard from "../components/ActualiteCard";
import { actualites } from "../data/actualites";

export default function ActualiteDetailPage() {
  const { slug } = useParams();
  const actu = actualites.find((a) => a.slug === slug);

  // 🔹 SEO manuel
  useEffect(() => {
    if (!actu) return;

    document.title = `${actu.titre} – Actualités juridiques`;

    const description = `${actu.resume} Découvrez notre analyse juridique en matière de dommage corporel et de droit des assurances.`;
    setMetaDescription(description);
  }, [actu]);

  function setMetaDescription(content: string) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  // 🔹 Si l'actu n'existe pas → page d'erreur propre
  if (!actu) {
    return (
      <Section title="Article introuvable">
        <p className="text-sm text-slate-600 mb-4">
          L&apos;article demandé n&apos;a pas été trouvé.
        </p>
        <Link
          to="/actualites-juridiques"
          className="text-xs text-primary-soft hover:underline"
        >
          Retour aux actualités
        </Link>
      </Section>
    );
  }

  // 🔹 Articles récents (hors article courant)
  const recents = actualites.filter((a) => a.slug !== actu.slug).slice(0, 3);

  return (
    <div>
      {/* Article principal */}
      <Section>
        <article className="relative bg-w-full rounded-lg bg-gradient-to-br from-primary-soft to-primary ">
          <div className="absolute top-0 left-0 ">
            <p className="text-[11px] text-white-500 pt-4 pl-8">
              Actualités juridiques •{" "}
              {new Date(actu.date).toLocaleDateString("fr-FR")}
            </p>
            <h1 className="text-xl font-semibold text-primary pl-8">
              {actu.titre}
            </h1>
          </div>

          {/* div principal de l'article */}
          <div className="pl-8 pt-20 grid grid-flow-col grid-rows-3 gap-4">
            <div className="row-span-3 rounded-lg border-primary h-100 overflow-hidden bg-bg-light mb-6">
              <img
                src={actu.image}
                alt={actu.titre}
                className="w-full h-full object-content"
              />
            </div>

            <div className="col-span-2 mt-4 flex flex-wrap gap-2">
              {actu.motsCles.map((mot) => (
                <span
                  key={mot}
                  className="text-lg px-2 py-1 rounded-full text-bg-light underline"
                >
                  #{mot}
                </span>
              ))}
            </div>

            <div className=" col-span-2 row-span-2 prose prose-sm max-w-none text-slate-700">
              <h3 className=" text-bold text-white">Titre court</h3>
              <p className="text-text-light whitespace-pre-line">{actu.contenu}</p>
            </div>
          </div>
        </article>
      </Section>

      {/* Articles récents */}
      {recents.length > 0 && (
        <Section subtitle="Articles récents" title="À lire également">
          <div className="grid md:grid-cols-3 gap-5">
            {recents.map((a) => (
              <ActualiteCard key={a.slug} actualite={a} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
