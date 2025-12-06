import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="w-full flex justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-7xl bg-white rounded-xl shadow-md p-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Restez informé</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités juridiques,
          analyses et conseils directement dans votre boîte mail.
        </p>

        <form
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Votre adresse email"
            className="w-full md:flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
          >
            S'inscrire
          </button>
        </form>
      </motion.div>
    </section>
  );
}
