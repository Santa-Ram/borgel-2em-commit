import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { indemnisationCatalogue } from "../data/catalogue";

export default function CatalogueIndemnisationPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return indemnisationCatalogue.filter((rubrique) => {
      return (
        rubrique.titre.toLowerCase().includes(term) ||
        rubrique.resume.toLowerCase().includes(term) ||
        rubrique.contenu.toLowerCase().includes(term)
      );
    });
  }, [search]);

  return (
    <Section
      subtitle="Indemnisation"
      title="Indemnisation du dommage corporel"
    >

      <p className="text-sm text-slate-600 max-w-2xl mb-4">
        Chaque situation est unique. Les rubriques ci-dessous vous permettent de
        mieux comprendre les mécanismes d&apos;indemnisation selon le type d&apos;accident
        ou d&apos;infraction.
      </p>

      <div className="mb-6">
        <input
          type="search"
          placeholder="Rechercher une rubrique (ex : accident, agression, travail...)"
          className="w-full md:max-w-md rounded-full border border-slate-200 px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-xs text-slate-500">
          Aucune rubrique ne correspond à votre recherche.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((rubrique) => (
            <article
              key={rubrique.slug}
              className="bg-white rounded-2xl p-4 border border-slate-100"
            >
              <h3 className="text-sm font-semibold text-primary mb-2">
                {rubrique.titre}
              </h3>
              <p className="text-xs text-slate-600 mb-3">{rubrique.resume}</p>
              <Link
                to={`/indemnisation/${rubrique.slug}`}
                className="text-xs font-medium text-primary-soft hover:underline"
              >
                En savoir plus
              </Link>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
