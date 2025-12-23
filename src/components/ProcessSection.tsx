import { motion, type Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../index.css"

export default function ProcessSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block tracking-[0.25em] uppercase mb-4 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700"
          >
            Processus d’accompagnement
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-serif text-quartio mb-4"
          >
            Un parcours clair, à vos côtés à chaque étape.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600">
            De la première prise de contact à l’indemnisation, nous structurons
            chaque phase pour vous offrir lisibilité et sécurité.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex justify-center gap-8"
        >
          <ProcessCard
            step="Step 01"
            title="Prise de contact"
            items={[
              "Understand goals",
              "Analyze requirements",
              "Set clear scope",
            ]}
            variants={fadeUp}
          />

          <ProcessCard
            step="Step 02"
            title="Analyse du dossier"
            items={["Build solutions", "Create prototypes", "Test thoroughly"]}
            variants={fadeUp}
          />

          <ProcessCard
            step="Step 03"
            title="Action & négociation"
            items={[
              "Launch smoothly",
              "Monitor performance",
              "Provide support",
            ]}
            variants={fadeUp}
          />
          <ProcessCard
            step="Step 04"
            title="Suivi & indemnisation"
            items={[
              "Launch smoothly",
              "Monitor performance",
              "Provide support",
            ]}
            variants={fadeUp}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  title,
  items,
  variants,
}: {
  step: string;
  title: string;
  items: string[];
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      className="rounded-2xl bg-white p-6 shadow-sm border border-gray-300 hover:shadow-xl transition"
    >
      <div className="mb-4 text-emerald-600 text-sm font-semibold">{step}</div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

      <ul className="space-y-3 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
