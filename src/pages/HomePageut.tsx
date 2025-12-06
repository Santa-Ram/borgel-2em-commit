import { useEffect } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { actualites } from "../data/actualites";
import { avisClients } from "../data/avis";
import ActualiteCard from "../components/ActualiteCard";
import justiceVert from "../assets/fond-accueil.jpg";

export default function HomePage() {
  useEffect(() => {
    document.title =
      "Cabinet d'Avocats – Dommage corporel & Droit des assurances";

    const description =
      "Cabinet d'avocats spécialisé en réparation du dommage corporel, droit des assurances et contentieux. Défense exclusive des victimes.";

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
    <div>
      {/* HERO */}
      <section
        className="w-full mx-auto items-center  bg-center justify-center bg-cover h-145 "
        style={{ backgroundImage: `url(${justiceVert})`,}}
      >
        <div className=" inset-0 b-black"></div>
        <div className="w-6xl mx-auto md:py-20 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 pt-20 items-center"
          >
            <p className="text-xs tracking-[0.2em] underline text-primary-soft mb-3">
              #Réparation du dommage corporel
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary leading-tight">
              Défendre vos droits, sécuriser votre Indemnisation.
            </h1>
            <p className="text-sm text-black mb-6 max-w-xl">
              Le cabinet accompagne exclusivement les victimes dans la défense
              de leurs intérêts face aux compagnies d&apos;assurance, aux
              employeurs et aux organismes sociaux.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="#domaines-intervention"
                className="px-4 py-2 rounded-full border font-semibold border-white/60 hover:bg-white hover:text-primary transition"
              >
                Domaines d&apos;intervention
              </a>
              <a
                href="#avis-clients"
                className="px-4 py-2 rounded-full font-semibold bg-white/10 border border-white/40 hover:bg-white/20 transition"
              >
                Avis clients
              </a>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/20 shadow-soft">
              <p className="text-xs mb-3 text-white/80">
                Domaines d&apos;intervention
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Accidents de la circulation</span>
                  <span className="text-white/70">Indemnisation intégrale</span>
                </li>
                <li className="flex justify-between">
                  <span>Accidents médicaux</span>
                  <span className="text-white/70">
                    Faute &amp; aléa thérapeutique
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Agressions &amp; infractions</span>
                  <span className="text-white/70">
                    CIVI &amp; Fonds de garantie
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Accidents du travail</span>
                  <span className="text-white/70">Faute inexcusable</span>
                </li>
              </ul>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Domaines d'intervention */}
      <Section
        id="domaines-intervention"
        subtitle="Nos domaines"
        title="Indemnisation du dommage corporel & contentieux"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Indemnisation du dommage corporel",
              desc: "Accompagnement global des victimes d'accidents : circulation, travail, vie courante, agressions.",
            },
            {
              title: "Droit des assurances",
              desc: "Analyse de vos garanties, contestation d'offres insuffisantes, litiges avec les assureurs.",
            },
            {
              title: "Contentieux complexes",
              desc: "Expertise dans les dossiers techniques à forts enjeux devant les juridictions civiles et pénales.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.06)" }}
              className="bg-white rounded-2xl p-4 border border-slate-100 text-sm"
            >
              <h3 className="text-sm font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Aperçu actualités */}
      <Section
        subtitle="Actualités juridiques"
        title="Les dernières décisions & réformes commentées"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {actualites.map((actu) => (
            <ActualiteCard key={actu.slug} actualite={actu} />
          ))}
        </div>
      </Section>

      {/* Avis clients */}
      <Section
        id="avis-clients"
        subtitle="Avis clients"
        title="Ce que disent nos clients"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {avisClients.map((avis) => (
            <motion.article
              key={avis.id}
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.06)" }}
              className="bg-white rounded-2xl p-4 border border-slate-100 text-sm"
            >
              <p className="text-xs text-slate-600 mb-3">
                &ldquo;{avis.commentaire}&rdquo;
              </p>
              <p className="text-xs font-semibold text-primary mb-1">
                {avis.nom}
              </p>
              <p className="text-[11px] text-primary-soft">
                {"★".repeat(avis.note)}{" "}
                <span className="text-slate-400">
                  ({avis.note}.0 / 5, Google Reviews)
                </span>
              </p>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}
