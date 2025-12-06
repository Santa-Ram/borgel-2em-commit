import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { equipe } from "../data/equipe";
import Section from "../components/Section";
import TeamCard from "../components/TeamCard";

export default function EquipeDetailPage() {
  const { slug } = useParams();
  const membre = equipe.find((m) => m.slug === slug);

  useEffect(() => {
    if (membre) {
      document.title = `${membre.nom} – Cabinet d'Avocats`;
    }
  }, [membre]);

  if (!membre) {
    return (
      <Section title="Membre introuvable">
        <p className="text-sm text-slate-600 mb-4">
          Le membre d&apos;équipe demandé n&apos;a pas été trouvé.
        </p>
        <Link
          to="/notre-equipe"
          className="text-xs text-primary-soft hover:underline"
        >
          Retour à l&apos;équipe
        </Link>
      </Section>
    );
  }

  const autresMembres = equipe.filter((m) => m.slug !== membre.slug);

  return (
    <div>
      <Section>
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-start">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-100">
            <div className="h-72 bg-bg-light">
              <img
                src={membre.photo}
                alt={membre.nom}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-primary mb-1">
                {membre.nom}
              </h1>
              <p className="text-xs text-slate-600">{membre.titre}</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-primary mb-3">
              Parcours & domaines d&apos;intervention
            </h2>
            <p className="text-sm text-slate-700 whitespace-pre-line">
              {membre.bio}
            </p>
          </div>
        </div>
      </Section>

      {autresMembres.length > 0 && (
        <Section
          title="Autres membres de l'équipe"
          subtitle="Équipe"
        >
          <div className="grid md:grid-cols-3 gap-5">
            {autresMembres.map((m) => (
              <TeamCard key={m.id} membre={m} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
