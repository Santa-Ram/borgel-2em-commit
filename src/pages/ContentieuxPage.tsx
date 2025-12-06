import { useEffect } from "react";
import Section from "../components/Section";

export default function ContentieuxPage() {
  useEffect(() => {
    document.title = "Contentieux – Cabinet d'Avocats";
  }, []);

  return (
    <Section subtitle="Contentieux" title="Contentieux à forts enjeux">
      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
        <div className="bg-white rounded-2xl p-4 border border-slate-100">
          <h3 className="text-sm font-semibold text-primary mb-2">
            Droit des assurances
          </h3>
          <p className="text-xs text-slate-600">
            Litiges relatifs aux garanties souscrites, refus de garantie,
            exclusions, nullité du contrat, contestation de l&apos;offre
            d&apos;indemnisation.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-100">
          <h3 className="text-sm font-semibold text-primary mb-2">
            Réparation du préjudice corporel
          </h3>
          <p className="text-xs text-slate-600">
            Contentieux liés à l&apos;évaluation des préjudices et au respect des
            droits des victimes devant les juridictions civiles et pénales.
          </p>
        </div>
      </div>
    </Section>
  );
}
