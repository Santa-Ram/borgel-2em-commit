import { useEffect } from "react";
import Section from "../components/Section";

export default function CabinetPage() {
  useEffect(() => {
    document.title = "Le cabinet – Cabinet d'Avocats";

    const description =
      "Présentation de notre cabinet spécialisé en dommage corporel. Indépendance, expertise technique et accompagnement humain des victimes.";

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

  return (
    <Section
      subtitle="Le cabinet"
      title="Un cabinet dédié à la défense des victimes"
    >
      <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700">
        <p>
          Le cabinet accompagne depuis de nombreuses années les victimes d&apos;accidents
          et d&apos;infractions dans la défense de leurs droits. Indépendance, exigence
          et transparence guident chaque étape de la relation avec nos clients.
        </p>
        <p>
          Nous intervenons sur l&apos;ensemble du territoire, en privilégiant autant que
          possible la recherche d&apos;une indemnisation rapide et complète, tout en
          préparant avec rigueur les procédures contentieuses lorsque cela s&apos;impose.
        </p>
      </div>
    </Section>
  );
}

