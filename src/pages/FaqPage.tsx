import React, { useState } from "react";
import { motion } from "motion/react";
import { faqData } from "../data/faq";
import type { JSX } from "react/jsx-dev-runtime";
import { div, section } from "motion/react-client";
import Newsletter from "../components/newsletter";

export default function FaqPage(): JSX.Element {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Variantes Motion locales
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <div>
      {/* hero de la page faqs */}
      <section className="h-120 bg-gray-900"></section>
      {/* Forme floue (gauche) — clip-path via style object */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="w-[550px] aspect-1097/845 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-50"
        />
      </div>

      {/* Forme floue (centre/top) */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-28 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="w-[550px] aspect-1097/845 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-40"
        />
      </div>

      <section id="faq" className="py-16 lg:py-20 bg-gray-900">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-[5vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-8"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-ba-gold-soft mb-3">
                FAQ
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
                Questions fréquemment posées.
              </h2>
              <p className="text-sm md:text-base text-white/75">
                Si vous ne trouvez pas la réponse à votre question, nous restons
                disponibles pour y répondre directement.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-3">
              {faqData.map((faq, idx) => {
                const id = idx; // on utilise l'index comme id (ou faq.id si vous en ajoutez)
                const isOpen = openFaqId === id;

                return (
                  <motion.div
                    key={id}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-white/5 shadow-soft-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${id}`}
                      id={`faq-button-${id}`}
                      className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-left"
                    >
                      <span className="text-sm sm:text-base font-medium text-white">
                        {faq.question}
                      </span>
                      <span
                        className="ml-3 text-ba-gold text-xl leading-none"
                        aria-hidden
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    <div
                      id={`faq-panel-${id}`}
                      role="region"
                      aria-labelledby={`faq-button-${id}`}
                      className={`px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-white/75 ${
                        isOpen ? "block" : "hidden"
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* newsletter */}
      <section className="h-flex ">
        <Newsletter/>
      </section>
    </div>
  );
}
