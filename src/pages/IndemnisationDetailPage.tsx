import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section";
import { indemnisationCatalogue } from "../data/catalogue";

export default function IndemnisationDetailPage() {
  const { slug } = useParams();
  const rubrique = indemnisationCatalogue.find((r) => r.slug === slug);

  useEffect(() => {
    if (rubrique) {
      document.title = `${rubrique.titre} – Indemnisation du dommage corporel`;
    }
  }, [rubrique]);

  if (!rubrique) {
    return (
      <Section title="Rubrique introuvable">
        <p className="text-sm text-slate-600 mb-4">
          La rubrique demandée n&apos;a pas été trouvée.
        </p>
        <Link
          to="/indemnisation-du-dommage-corporel"
          className="text-xs text-primary-soft hover:underline"
        >
          Retour aux rubriques
        </Link>
      </Section>
    );
  }

  return (
    <div>
      <Section
        subtitle="Indemnisation du dommage corporel"
        title={rubrique.titre}
      >
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div>
            <h2 className="text-sm font-semibold text-primary mb-3">
              Comprendre votre indemnisation
            </h2>
            <p className="text-sm text-slate-700 whitespace-pre-line mb-6">
              {rubrique.contenu}
            </p>

            <h3 className="text-sm font-semibold text-primary mb-2">
              Cas pratiques
            </h3>
            <ul className="space-y-2 mb-6 text-sm text-slate-700">
              {rubrique.casPratiques.map((cas) => (
                <li key={cas.titre}>
                  <p className="font-medium text-xs text-primary-soft mb-1">
                    {cas.titre}
                  </p>
                  <p className="text-xs text-slate-600">{cas.description}</p>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-primary mb-2">
              Points juridiques essentiels
            </h3>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 mb-6">
              {rubrique.infosJuridiques.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>

          <aside className="bg-white rounded-2xl p-4 border border-slate-100 text-sm">
            <h3 className="text-sm font-semibold text-primary mb-3">
              Parler de votre situation
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Un premier échange permet d&apos;évaluer vos droits à indemnisation et
              les démarches à entreprendre.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-4 py-2 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-soft transition"
            >
              Prendre contact avec le cabinet
            </Link>
          </aside>
        </div>
      </Section>
    </div>
  );
}
