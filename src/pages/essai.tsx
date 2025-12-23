import React from "react";

const Essai = () => {
  return (
    <div>
      {/* PRÉSENTATION DU CABINET + specialisation CLÉS */}
      {/* <section className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-20">
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
        <div className="w-full max-w-7xl mx-auto px-[1vw] text-center grid gap-16 md:grid-cols-[1.1fr,minmax(0,0.9fr)] items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="flex justify-center font-serif font-bold text-2xl sm:text-3xl md:text-5xl mb-8 text-center text-white"
            >
              Spécialisation en Droit du Dommage Corporel
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="flex lg:justify-center font-serif text-sm md:text-base text-white/70 mb-4 text-center "
            >
              Le cabinet de Maître Alban BORGEL est un cabinet d'avocats, dédié
              à la réparation du préjudice corporel, totalement indépendant des
              compagnies d'assurances et autres fonds d’indemnisation. Nous
              assurons essentiellement la défense des victimes d'un préjudice
              corporel à la suite : d’un Accident de la circulation, communément
              appelé accident de la voie publique, accident de la route ou
              accident de voiture (auto, moto, passager, piéton, cycliste,
              camion, tracteur, engin agricole…) d’une Agression ou de dommages
              résultant d’une infraction (blessures involontaires ou
              volontaires, violences, vol avec violences, vol à main armée,
              agressions sexuelles…) d’un Accident médical (aléa thérapeutique,
              infections nosocomiales, erreurs médicales), d’un Accident du
              travail (faute inexcusable de l’employeur, responsabilité d’un
              tiers…), d’un Accident de la vie courante ou d'un accident causé
              par un tiers (ski, chasse, sport, accident domestique, accident
              ménager, chute dans un lieu public, chute dans une grande surface
              ou un supermarché, morsure de chien, brulures, intoxications…)
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="flex lg:justify-center font-bold underline text-sky-400 text-xl md:text-base text-black/60 mb-8 mt-10 text-center "
            >
              #Nous assurons essentiellement la défense des victimes d'un
              préjudice corporel à la suite :
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 ">
              {stats.map((item, idx) => (
                <motion.div
                  key={item.label}
                  custom={idx}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-quartio/5 px-4 py-4 "
                >
                  <p className="rounded-full bg-sky-400/15 text-sky-400 text-sm py-1 font-semibold">
                    {item.value}
                  </p>
                  <p className="text-xs py-3 text-white/60">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              variants={fadeUp}
              className="flex justify-center font-bold text-white text-xl md:text-base mb-8 mt-10 text-center "
            >
              <button className="flex justify-center font-bold items-center gap-3 btn-neutral border py-1 px-3 rounded-full text-white hover:bg-sky-400/15 hover:text-sky-400">
                {""}
                Voir plus <span aria-hidden="true">&rarr;</span>
              </button>
            </motion.p>
          </motion.div>
        </div>
      </section> */}

      {/* PROCESSUS D’ACCOMPAGNEMENT */}
      {/* <section className="py-5 bg-ba-navy/95">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-[5vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-black mb-3">
                Processus d’accompagnement
              </p>
              <h2 className="font-serif text-quartio text-2xl sm:text-3xl md:text-4xl mb-3">
                Un parcours clair, à vos côtés à chaque étape.
              </h2>
              <p className="text-sm md:text-base text-black/75">
                De la première prise de contact à l’indemnisation, nous
                structurons chaque phase pour vous offrir lisibilité et
                sécurité.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.id}
                  variants={fadeUp}
                  className="rounded-2xl bg-white/5 border border-emerald-500 p-5 flex flex-col gap-3 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ba-gold text-black text-xs font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-black text-sm sm:text-base">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-black/70">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* DOMAINES PHARES */}
      {/* <section className="py-16 lg:py-20 bg-quartio">
              <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-[5vw]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 mb-8"
                  >
                    <div className="text-center lg:text-left max-w-2xl">
                      <p className="text-sm uppercase tracking-[0.25em] text-ba-gold-soft mb-3">
                        Domaines phares
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
                        Quelques exemples de situations que nous traitons.
                      </h2>
                      <p className="text-sm md:text-base text-white/75">
                        Nous intervenons dans des dossiers marqués par une forte
                        dimension humaine, médicale, économique ou réputationnelle.
                      </p>
                    </div>
                  </motion.div>
      
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {keyCases.map((item) => (
                      <motion.article
                        key={item.id}
                        variants={fadeUp}
                        className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-3 hover:border-ba-gold/80 hover:-translate-y-1.5 transition shadow-soft-xl"
                      >
                        <div className="flex items-center gap-2 text-ba-gold mb-1 text-xs font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Cas d’intervention</span>
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/70">
                          {item.description}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section> */}

      {/* CONTACT / CTA */}
      {/* <section id="contact" className="py-16 lg:py-20 bg-black/50">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-[5vw] grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-ba-gold-soft mb-2 text-center lg:text-left">
                Contact
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-center lg:text-left">
                Parlez-nous de votre situation.
              </h2>
              <p className="text-sm md:text-base text-white/70 mb-6 text-center lg:text-left">
                Expliquez-nous votre contexte, vos attentes et vos contraintes.
                Nous revenons vers vous rapidement pour envisager la meilleure
                stratégie.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ba-gold/15 text-ba-gold mx-auto sm:mx-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-center sm:text-left text-sm">
                  <p className="font-medium">Téléphone</p>
                  <p className="text-white/70">+33 (0)4 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ba-gold/15 text-ba-gold mx-auto sm:mx-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-center sm:text-left text-sm">
                  <p className="font-medium">Email</p>
                  <p className="text-white/70">contact@borgel-associes.fr</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ba-gold/15 text-ba-gold mx-auto sm:mx-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-center sm:text-left text-sm">
                  <p className="font-medium">Cabinet</p>
                  <p className="text-white/70">
                    Marseille — Adresse à préciser
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ba-gold px-6 py-3 text-sm sm:text-base font-semibold text-ba-navy shadow-soft-xl hover:bg-ba-gold-soft transition"
              >
                Envoyer une demande
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm sm:text-base font-medium text-white/80 hover:border-ba-gold hover:text-ba-gold transition">
                Voir les disponibilités
                <Clock className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[280px] lg:h-full rounded-2xl overflow-hidden border border-white/10 bg-black/50"
          >
            <iframe
              title="Cabinet Borgel & Associés"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb="
            />
          </motion.div>
        </div>
      </section> */}

      {/* <section id="equipe" className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto px-[5vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="mb-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-4"
            >
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.25em] text-black mb-2">
                  L’équipe
                </p>
                <h2 className="font-serif text-quartio text-2xl sm:text-3xl md:text-4xl">
                  Des avocats engagés à vos côtés.
                </h2>
                <p className="text-sm md:text-base text-black/65 mt-3 max-w-2xl">
                  Une équipe complémentaire, disponible et mobilisée, pour
                  porter votre dossier avec rigueur et humanité.
                </p>
              </div>
              <Link
                to="/equipe"
                className="hidden sm:inline-flex text-xs rounded-full border border-emerald-300 px-4 py-2 bg-emerald-500/15 text-emerald-300 transition"
              >
                Voir toute l’équipe
              </Link>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {lawyers.map((lawyer, idx) => (
                <motion.div
                  key={lawyer.slug}
                  custom={idx}
                  variants={fadeUp}
                  className="h-full"
                >
                  <Link
                    to={`/avocats/${lawyer.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-ba-gold/70 transition flex flex-col h-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      <img
                        src={
                          lawyer.image ||
                          "https://images.pexels.com/photos/5668516/pexels-photo-5668516.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        }
                        alt={lawyer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <p className="text-xs text-white/70">{lawyer.role}</p>
                        <p className="font-serif text-lg">{lawyer.name}</p>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <p className="text-xs text-white/60">
                        {lawyer.speciality}
                      </p>
                      <p className="text-xs text-white/50">
                        {lawyer.experience}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-3">
                        {lawyer.badges?.map((badge: string) => (
                          <span
                            key={badge}
                            className="text-[10px] rounded-full border border-white/15 px-2 py-1 text-white/60"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ÉQUIPE */}
      {/* <section className="">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 sm:py-4 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r="512"
                cx="512"
                cy="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Des avocats engagés à vos côtés.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Une équipe complémentaire, disponible et mobilisée, pour porter
                votre dossier avec rigueur et humanité.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/contact"
                  className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {" "}
                  Prendre contact
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                width="1824"
                height="1080"
                src={imgEquipeR}
                alt="App screenshot"
                className="absolute top-0 left-0 w-228 max-w-none rounded-md border border-gray-900 bg-white/5 ring-1 ring-white/10 opacity-50"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Essai;
