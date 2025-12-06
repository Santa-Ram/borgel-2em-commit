
import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Section from "../components/Section";
import { actualites } from "../data/actualites";
import { avisClients } from "../data/avis";
import ActualiteCard from "../components/ActualiteCard";
import imHero from "../assets/imhero-ba.png";
import { ArrowRight } from "lucide-react";
import logoBa from "../assets/logo-ba.png";

const heroTxtVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }, // évite `ease: "easeOut"` si TS râle
  },
  exit: { opacity: 0, x: -12, transition: { duration: 0.35 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.25 } },
};

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
    // voici mon div principal
    <div className="w-full">
      {/* ito indray ny sect 1 */}
      <section className="m-4 bg-transparent">
        <div className="mx-auto max-w-8xl">
          <div className="relative rounded-2xl overflow-hidden h-165">
            <div className="absolute inset-0 z-0">
              <img
                src={imHero}
                alt="background justice"
                className="w-full h-full object-cover block filter brightness-50"
              />
            </div>

            <div className="absolute inset-0 z-10 bg-black/20" />

            <div className="flex justify-center items-center justify-between gap-4 z-20">
              <motion.div
                initial="hidden"
                animate="show"
                variants={heroTxtVariants}
                className=""
              >
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/6 to-white/3 backdrop-blur-md border border-white/8 p-2 rounded-full">
                  <div className="text-sm text-slate-200 pl-2 underline font-semibold">
                    #Indemnisation du dommage corporel
                  </div>
                  <div className="ml-4 flex gap-2">
                    <button className="px-3 py-2 rounded-full bg-emerald-400 text-black text-xs font-semibold">
                      Comprendre
                    </button>
                    <button className="px-3 py-2 flex rounded-full bg-white/10 text-white text-xs">
                      Lire l'Article{" "}
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.aside
                initial="hidden"
                animate="show"
                variants={cardVariants}
                className=""
              >
                <div className="flex">
                  <div className="bg-gradient-to-b w-120 h-50 from-white/6 to-white/3 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
                    <div className="text-kely font-semibold text-slate-200">
                      RESULTS DRIVEN
                    </div>
                    <h3 className="mt-1 text-white text-lg font-bold">
                      OPTIMISER
                    </h3>
                    <p className="mt-1 text-slate-200 text-sm">
                      L’indemnisation de votre préjudice corporel.
                    </p>

                    <div className="mt-15 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-400 grid place-items-center text-black font-bold">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* ito indray ny sect 2 */}
      <section className="relative isolate h-120 rounded-xl mx-4 overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-90"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="flex flex-col justify-center gap-y-5 items-center mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img src={logoBa} alt="Logo du cabinet" className="w-60 h-18" /> */}
          <h1 className="font-bold text-white text-xl">
            RÉPARATION DU DOMMAGE CORPOREL ET DÉFENSE DES VICTIMES
          </h1>
          <figure className="gap-y-5 flex flex-col">
            <blockquote className="text-center text-lg font-semibold text-white ">
              <p>
                “Le cabinet de Maître Alban BORGEL, avocat au Barreau de
                Marseille, est un cabinet d'avocats dédié à la réparation du
                préjudice corporel suite à un accident de la circulation, une
                agression, une erreur médicale. totalement indépendant des
                compagnies d'assurances et autres fonds d’indemnisation.”
              </p>
            </blockquote>
            <figcaption className="">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle r="1" cx="1" cy="1" />
                </svg>
                <div className="text-gray-400">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="flex h-120  bg-black/50">
        <div className="flex justify-center ">
          <div className="flex justify-center items-center justify-between">
            <h1 className="text-white font-extrabold underline text-3xl">
              NOS DOMAINES D'EXPERTISE
            </h1>
            <p className="text-center">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis laboriosam amet adipisci quae facilis dolorum
              delectus nisi officiis corrupti earum, exercitationem quas dolores
              unde veniam ipsum possimus, officia ea quam sapiente quis
              necessitatibus. Esse cumque praesentium vitae voluptatibus id sed
              repellat rem magnam placeat ducimus animi vel eaque tempora
              laborum necessitatibus, quibusdam, soluta tempore quam repellendus
              quas, iusto voluptate ipsa numquam nemo? Voluptate, nam.
              Laudantium, odio nesciunt? Sequi obcaecati quisquam aut expedita
              labore, quae tempora doloribus, impedit est voluptates eligendi
              nisi vitae natus eaque vel molestias voluptatum necessitatibus
              earum, ea consectetur. Molestiae quam voluptate, et quisquam
              cupiditate eos! Soluta, deleniti.
            </p>
          </div>
        </div>
      </section>

      {/* sect 3 */}
      <section className="h-120 m-4 rounded-xl bg-blue-500"></section>
      {/* sect 4 */}
      <section className="h-120 m-4 rounded-xl bg-cyan-500"></section>
      {/* sect 5 */}
      <section className="h-120 m-4 rounded-xl bg-pink-500"></section>
      {/* sect 6 */}
      <section className="h-120 m-4 rounded-xl bg-sky-500/50"></section>
    </div>
  );
}
