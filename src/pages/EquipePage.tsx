import { useEffect } from "react";
import Section from "../components/Section";
import { equipe } from "../data/equipe";
import TeamCard from "../components/TeamCard";

export default function EquipePage() {
  useEffect(() => {
    document.title = "Notre équipe – Cabinet d'Avocats";
  }, []);

  return (
    <div>
      <Section
        subtitle="Notre équipe"
        title="Des avocats engagés aux côtés des victimes"
      >
        <p className="text-sm text-slate-600 max-w-2xl mb-6">
          Le cabinet réunit une équipe dédiée à la défense des victimes, combinant
          expertise technique et accompagnement humain.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {equipe.map((membre) => (
            <TeamCard key={membre.id} membre={membre} />
          ))}
        </div>
      </Section>
    </div>
  );
}
