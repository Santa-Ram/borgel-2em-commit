import { motion } from "motion/react";
import { Leaf, ShieldCheck } from "lucide-react";
import dommage from "../assets/Accident corporel.png";
import expertises from "../assets/Expertise.png";
import agression from "../assets/agression.png";

export default function ReparationSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="relative bg-gray-900 z-0 py-30 h-flex sm:h-175 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="max-w-xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl leading-tight mb-6"
          >
            Réparation du préjudice corporel
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm text-white/50 mb-8">
            Le cabinet de Maître Alban BORGEL, avocat au Barreau de Marseille,
            est un cabinet d'avocats spécialistes et certifiés en réparation du
            préjudice corporel suite à un accident de la circulation, une
            agression, une erreur médicale. totalement indépendant des
            compagnies d'assurances et autres fonds d’indemnisation.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 mb-12"
          >
            <Stat icon={<Leaf />} value="55K+" label="Projects" />
            <Stat icon={<ShieldCheck />} value="99%" label="Efficiency" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl"
          >
            Avocats Spécialistes
            <br className="hidden sm:block" />
            en Droit du Dommage Corporel.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="relative grid grid-cols-2 gap-4"
        >
          <ImageBox variants={fadeUp} className="row-span-2" src={agression} />

          <ImageBox variants={fadeUp} src={expertises} />

          <ImageBox variants={fadeUp} src={dommage} />

          {/* Floating Stat */}
          <motion.div
            variants={fadeUp}
            className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-md text-sm font-medium flex items-center gap-2"
          >
            <Leaf className="w-4 h-4 text-emerald-600" />
            55K+
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

function ImageBox({
  src,
  className = "",
  variants,
}: {
  src: string;
  className?: string;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}
