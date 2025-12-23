import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="w-full flex justify-center py-5 isolate overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-7xl bg-white rounded-xl py-5 shadow-md text-center"
      >
        <div className="flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-4">
          <div className="max-w-2xl lg:max-w-7g">
            <h2 className="text-4xl font-semibold tracking-tight text-quartio">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="mt-4 text-lg text-black/70">
              Rester informé des dernières actualités et articles
              juridiques.
            </p>
            <div className="mt-6 flex max-w-3xl gap-x-1">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                name="email"
                required
                placeholder="Entrer votre adresse e-mail ici"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-l-xl border border-black/50 bg-white/5 px-3.5 py-2 text-emerald-500 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-300 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none btn-neutral rounded-r-xl border border-black/50 text-black/50 px-3.5 py-1 text-sm font-semibold shadow-xs hover:bg-emerald-500/15 hover:border-emerald-300 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
