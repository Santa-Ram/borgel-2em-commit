import { motion } from "motion/react";
import { Phone, Wrench, Newspaper } from "lucide-react";
import bureau from '../assets/burreauBa.png'

export default function SupportCenterSection() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      
      },
    },
  };

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bureau}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Header */}
          <motion.h1
            variants={fadeUp}
            className="text-white text-4xl sm:text-5xl font-semibold mb-6"
          >
            Support center
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 max-w-2xl mb-16"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo.
            Elit sunt amet fugiat veniam occaecat fugiat.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SupportCard
              icon={<Phone />}
              title="Sales"
              description="Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur."
              variants={fadeUp}
            />

            <SupportCard
              icon={<Wrench />}
              title="Technical Support"
              description="Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam."
              variants={fadeUp}
            />

            <SupportCard
              icon={<Newspaper />}
              title="Media Inquiries"
              description="Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit."
              variants={fadeUp}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function SupportCard({
  icon,
  title,
  description,
  variants,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-white shadow-lg hover:bg-white/10 transition"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-white/70">
        {description}
      </p>
    </motion.div>
  );
}
