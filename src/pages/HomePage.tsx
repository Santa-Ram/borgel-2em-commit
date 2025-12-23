// src/pages/HomePage.tsx

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import logoBa from "../assets/logoBlanc.png";
import imgEquipeR from "../assets/imhero-ba.png";

import { Link } from "react-router-dom";
import {
  Shield,
  Scale,
  Briefcase,
  Quote,
  ChevronLeft,
  ChevronRight,
  Gavel,
  Users,
  FileText,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  BookOpen,
  Award,
  Building2,
  BadgeCheck,
} from "lucide-react";

import { expertises } from "../data/expertises";
import { lawyers } from "../data/lawyers.";
import { posts } from "../data/posts";
import { testimonials } from "../data/testimonials";

import photoCabinet from "../assets/photoCabinet.png";
import equipeHero from "../assets/imhero-ba.png";
import SectionBlog from "../components/section-article";
import { img, path } from "motion/react-client";
import ProcessSection from "../components/ProcessSection";
import ReparationSection from "../components/reparationSection";
import SupportCenterSection from "../components/SupportCenterSection";

type Direction = 1 | -1;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Slides de la carte du Hero
const heroSlides = [
  {
    id: 1,
    label: "Notre objectif :",
    badge: "Accident de la Circulation",
    quote:
      "La reconnaissance de votre droit à indemnisation. Face à un événement traumatisant et souvent...",
    line1: "Borgel & Associés – Marseille",
    line2: "Contentieux complexes · Conseil stratégique",
  },
  {
    id: 2,
    label: "Notre objectif :",
    badge: "Droit de la santé",
    quote: "Le dossier médicale, Propriété sacrée du patient en 4 étapes",
    line1: "Proximité & transparence",
    line2: "Compte-rendus réguliers · Pédagogie juridique",
  },
  {
    id: 3,
    label: "Expertise",
    badge: "20+ ans d’expérience",
    quote:
      "Nous défendons les victimes avec rigueur, combativité et une parfaite maîtrise du dommage corporel.",
    line1: "Droit du dommage corporel",
    line2: "Accidents graves · Fautes médicales",
  },
];

// Variants pour la carte slider (effet carrousel léger)
const cardVariants = {
  enter: (direction: Direction) => ({
    x: direction * 40,
    opacity: 0,
    rotateY: direction * -10,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction: Direction) => ({
    x: direction * -40,
    opacity: 0,
    rotateY: direction * 10,
    scale: 0.96,
  }),
};

// Pourquoi nous choisir ?
const reasons = [
  {
    id: 1,
    title: "Expertise pointue",
    description:
      "Une forte spécialisation en dommage corporel, responsabilité médicale et contentieux complexes.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Transparence & pédagogie",
    description:
      "Une information claire à chaque étape, des décisions partagées et expliquées.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Stratégie sur mesure",
    description:
      "Chaque dossier fait l’objet d’une approche adaptée à vos enjeux humains et financiers.",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Suivi rigoureux",
    description:
      "Un reporting régulier, des délais maîtrisés et une équipe mobilisée en continu.",
    icon: <Clock className="w-5 h-5" />,
  },
];

// Processus
const processSteps = [
  {
    id: 1,
    title: "Prise de contact",
    description:
      "Premier échange pour comprendre votre situation et vos attentes.",
  },
  {
    id: 2,
    title: "Analyse du dossier",
    description:
      "Étude des pièces, consultation d’experts et définition d’une stratégie.",
  },
  {
    id: 3,
    title: "Action & négociation",
    description:
      "Négociation avec les assurances ou saisine des juridictions compétentes.",
  },
  {
    id: 4,
    title: "Suivi & indemnisation",
    description:
      "Accompagnement jusqu’à l’obtention et l’exécution de l’indemnisation.",
  },
];

// Domaines phares
const keyCases = [
  {
    id: 1,
    title: "Accidents de la route",
    description:
      "Indemnisation des victimes de collisions, accidents collectifs, piétons et deux-roues.",
  },
  {
    id: 2,
    title: "Fautes médicales",
    description:
      "Retard de diagnostic, erreur de geste, défaut d’organisation ou d’information.",
  },
  {
    id: 3,
    title: "Accidents du travail",
    description:
      "Reconnaissance de la faute inexcusable et majoration des droits à indemnisation.",
  },
  {
    id: 4,
    title: "Litiges d’assurance",
    description:
      "Refus ou limitation d’indemnisation, interprétation des garanties souscrites.",
  },
  {
    id: 5,
    title: "Contentieux d’entreprise",
    description:
      "Gestion de litiges sensibles impliquant des enjeux juridiques et réputationnels.",
  },
];

// FAQ
const faqs = [
  {
    id: 1,
    question: "Comment se déroule un premier rendez-vous ?",
    answer:
      "Le premier rendez-vous permet d’analyser votre situation, de vérifier la pertinence d’une action et d’expliquer les modalités d’intervention du cabinet.",
  },
  {
    id: 2,
    question: "Quelles sont vos modalités d’honoraires ?",
    answer:
      "Nous pratiquons des honoraires forfaitaires, au temps passé et/ou complétés par un honoraire de résultat, toujours discutés à l’avance.",
  },
  {
    id: 3,
    question: "Intervenez-vous uniquement à Marseille ?",
    answer:
      "Le cabinet intervient sur l’ensemble du territoire, avec des rendez-vous en présentiel ou en visioconférence.",
  },
];

// Chiffres clés
const stats = [
  {
    label:
      "Communément appelé accident de la voie publique, accident de la route ou accident de voiture (auto, moto, passager, piéton, cycliste, camion, tracteur, engin agricole…)",
    value: "Accident de la circulation",
  },
  {
    label:
      "Ou de dommages résultant d’une infraction (blessures involontaires ou volontaires, violences, vol avec violences, vol à main armée, agressions sexuelles…)",
    value: "Agression",
  },
  {
    label: "Aléa thérapeutique, infections nosocomiales, erreurs médicales",
    value: "Accident médical",
  },
  {
    label: "Faute inexcusable de l’employeur, responsabilité d’un tiers…",
    value: "Accident du travail",
  },
  {
    label:
      "Ou d'un accident causé par un tiers (ski, chasse, sport, accident domestique, accident ménager, chute dans un lieu public, chute dans une grande surface ou un supermarché, morsure de chien, brulures, intoxications…)",
    value: "Accident de la vie courante",
  },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);

  // Slider Hero
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const autoPlayRef = useRef<number | null>(null);
  const AUTO_PLAY_DELAY = 6000; // ms

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  // Auto-play du slider avec pause
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = window.setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, AUTO_PLAY_DELAY);

    return () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  // Pause auto quand l’onglet n’est plus visible
  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <main className="w-full text-white ">
      {/* HERO */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative isolate flex justify-center bg-gray-900 z-0 h-flex lg:h-150 overflow-hidden"
      >
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

        <div className="relative z-10 w-full max-w-6xl lg:max-w-7xl mx-auto lg:mx-5 px-[1vw] py-20 lg:pt-50 flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.25em] text-xs text-ba-gold-soft mb-4"
            >
              Avocat au barreau de Marseille
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4"
            >
              Borgel &amp; Associés
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-sm sm:text-lg lg:text-xl text-white/80 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Cabinet d&apos;avocats spécialisé en{" "}
              <span className="text-ba-gold">
                droit du dommage corporel et de la responsabilité médicale
              </span>
              , avec une expertise reconnue en contentieux complexes.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex btn items-center gap-2 rounded-full bg-emerald-500/15 text-emerald-300 px-6 py-3 text-sm sm:text-base font-semibold shadow-soft-xl hover:bg-ba-gold-soft transition"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/expertises"
                  className="inline-flex btn items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm sm:text-base font-medium text-white/80 hover:border-ba-gold hover:text-ba-gold transition"
                >
                  Découvrir nos expertises
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>20+ ans d’expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale size={16} />
                <span>Expertise reconnue</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>Accompagnement personnalisé</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full sm:max-w-md max-w-xs mx-auto lg:mx-0 transform scale-95 sm:scale-100"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div
              className="relative rounded-3xl bg-white/5 border border-white/10 p-6 pb-8 backdrop-blur shadow-soft-xl overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-label="Informations clés du cabinet"
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={heroSlides[currentSlide].id}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                    mass: 0.9,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDragStart={() => setIsPaused(true)}
                  onDragEnd={(_e, info) => {
                    setIsPaused(false);
                    if (info.offset.x < -80) {
                      setDirection(1);
                      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                    } else if (info.offset.x > 80) {
                      setDirection(-1);
                      setCurrentSlide((prev) =>
                        prev - 1 < 0 ? heroSlides.length - 1 : prev - 1
                      );
                    }
                  }}
                  style={{
                    transformOrigin: "center center",
                    perspective: 1000,
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/60">
                      {heroSlides[currentSlide].label}
                    </p>
                    <span className="text-[10px] sm:text-xs rounded-full bg-emerald-500/15 text-emerald-300 px-2 py-1">
                      {heroSlides[currentSlide].badge}
                    </span>
                  </div>

                  <p className="font-serif text-sm sm:text-lg text-white mb-4 leading-relaxed">
                    “{heroSlides[currentSlide].quote}”
                  </p>

                  <div className="text-[11px] sm:text-xs text-white/60 space-y-0.5">
                    <p>{heroSlides[currentSlide].line1}</p>
                    <p>{heroSlides[currentSlide].line2}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsPaused(true);
                      prevSlide();
                      setTimeout(() => setIsPaused(false), 2500);
                    }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-ba-gold hover:text-ba-gold transition text-xs"
                    aria-label="Slide précédent"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsPaused(true);
                      nextSlide();
                      setTimeout(() => setIsPaused(false), 2500);
                    }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-ba-gold hover:text-ba-gold transition text-xs"
                    aria-label="Slide suivant"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsPaused(true);
                        setDirection(
                          index > currentSlide ? 1 : (-1 as Direction)
                        );
                        setCurrentSlide(index);
                        setTimeout(() => setIsPaused(false), 2500);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-5 bg-ba-gold"
                          : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Aller au slide ${index + 1}`}
                      aria-current={index === currentSlide}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-8 lg:py-10 bg-ba-navy/95">
        <div className="w-full max-w-7xl mx-auto px-[3vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="text-center max-w-5xl mx-auto mb-10"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-black mb-3">
                Pourquoi nous choisir ?
              </p>
              <h2 className="font-serif text-2xl text-quartio sm:text-3xl md:text-5xl mb-3">
                Une approche exigeante, tournée vers l’humain.
              </h2>
              <p className="text-sm md:text-base text-black/75">
                Au-delà du droit, nous plaçons l’écoute, la clarté et la
                stratégie au cœur de notre accompagnement.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {reasons.map((reason) => (
                <motion.article
                  key={reason.id}
                  variants={fadeUp}
                  className="rounded-2xl bg-black/5 border border-black/10 p-5 flex flex-col gap-3 shadow-soft-xl hover:border-ba-gold/80 transition"
                >
                  <div className="inline-flex h-9 w-9 items-center text-black justify-center rounded-full bg-ba-gold/10 text-ba-gold mb-1">
                    {reason.icon}
                  </div>
                  <h3 className="font-semibold text-black text-sm sm:text-base">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70">
                    {reason.description}
                  </p>
                </motion.article>
              ))}
            </div>
            <div className="flex justify-center bg-white p-6 pt-5 md:pt-10">
              <button className="flex justify-center btn-sm font-bold items-center gap-2 btn-neutral border py-1 px-3 rounded-full text-black hover:bg-quartio hover:text-white">
                Voir Plus<span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Réparation du préjudice corporel: */}
      <section className="bg-white ">
        <ReparationSection />
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="py-6 lg:py-10 bg-white/40">
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
                  Expertises
                </p>
                <h2 className="font-serif text-quartio text-2xl sm:text-3xl md:text-4xl">
                  Nos domaines d’intervention.
                </h2>
                <p className="text-sm md:text-base text-black/65 mt-3 max-w-2xl">
                  Une expertise transversale au service des victimes, des
                  dirigeants et des entreprises confrontés à des enjeux
                  sensibles.
                </p>
              </div>
              <Link
                to="/expertises"
                className="hidden text-black sm:inline-flex text-xs rounded-full border border-black/25 px-4 py-2 hover:border-ba-gold hover:text-ba-gold transition"
              >
                Voir toutes les expertises
              </Link>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {expertises.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  custom={idx}
                  variants={fadeUp}
                  className="group rounded-2xl h-full"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <Link
                    to={`/expertises/${exp.id}`}
                    className="flex h-full flex-col rounded-2xl border border-black/30 bg-white/5 p-5 hover:border-ba-gold/10 hover:bg-white/10 transition-shadow shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-black text-lg group-hover:text-ba-gold">
                        {exp.title}
                      </h3>
                      <div className="h-8 w-8 rounded-full hover:bg-emerald-500/15 text-emerald-300 flex items-center justify-center text-[10px] text-black/80">
                        <BadgeCheck />
                      </div>
                    </div>
                    <p className="text-xs text-black/65 mb-4">
                      {exp.shortDescription}
                    </p>
                    <span className="mt-auto text-black/80 group-hover:text-ba-gold">
                      En savoir plus →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <ProcessSection />
      </section>

      

      {/* TÉMOIGNAGES */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="w-full max-w-8xl mx-auto px-[5vw] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.25em] text-ba-gold-soft mb-2">
                Témoignages
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6">
                Ce que disent nos clients.
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-8">
                Par souci de confidentialité, certains éléments sont anonymisés,
                mais ces témoignages reflètent des situations réelles.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-5">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={item.id}
                  custom={idx}
                  variants={fadeUp}
                  className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-left shadow-soft-xl"
                >
                  <Quote className="absolute -top-3 right-4 h-6 w-6 text-ba-gold/40" />
                  <p className="text-xs text-white/70 mb-4">{item.quote}</p>
                  <p className="text-[11px] text-white/50">{item.name}</p>
                  <div className="flex items-center gap-1 mt-2 text-ba-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-ba-gold" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-10">
              <button className="flex items-center btn btn-sm rounded-full gap-2">
                Voir plus<span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section id="actualites" className="py-16 lg:py-20">
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
                <p className="text-sm uppercase tracking-[0.25em] text-ba-gold-soft mb-2">
                  Actualités
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
                  Actualités & perspectives juridiques.
                </h2>
                <p className="text-sm md:text-base text-white/65 mt-3 max-w-2xl">
                  Analyses, décryptages et mises à jour réglementaires pour
                  éclairer vos décisions et anticiper les évolutions.
                </p>
              </div>
              <Link
                to="/actualites"
                className="hidden sm:inline-flex text-xs rounded-full border border-white/25 px-4 py-2 hover:bg-emerald-500/30 hover:text-ba-gold transition"
              >
                Voir toutes les actualités
              </Link>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {latestPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  custom={idx}
                  variants={fadeUp}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-soft-xl"
                >
                  <Link
                    to={`/actualites/${post.id}`}
                    className="flex flex-col h-full"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={
                          post.image ||
                          "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        }
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 text-[10px] rounded-full bg-black/70 px-3 py-1 text-white/70">
                        {new Date(post.date).toLocaleDateString("fr-FR")}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-ba-gold-soft">
                        {post.category}
                      </p>
                      <h3 className="font-serif text-base line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-white/65 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto pt-3 text-xs text-ba-gold/80">
                        Lire l’article →
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTENAIRES / RÉSEAU */}
      <section className="flex justify-center py-6 lg:py-16 bg-indigo-50 m-6 shadow-xl/20 rounded-3xl">
        <div className="w-full max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="text-center lg:text-left max-w-lg"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-quartio mb-3">
                Réseau & reconnaissance
              </p>
              <h2 className="font-serif text-xl text-black sm:text-2xl lg:text-3xl mb-3">
                Un cabinet reconnu dans l’écosystème juridique.
              </h2>
              <p className="text-sm sm:text-base text-black/75">
                Borgel &amp; Associés travaille en lien avec des associations de
                victimes, des institutions médicales et des acteurs spécialisés
                du secteur.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto text-center text-[11px] text-white/90"
            >
              <div className="rounded-xl bg-gray-900/40 border border-white/10 px-4 py-3 flex flex-col items-center gap-1">
                <Award className="w-4 h-4 text-ba-gold mb-1" />
                <span>Barreau de Marseille</span>
              </div>
              <div className="rounded-xl bg-gray-900/40 border border-white/10 px-4 py-3 flex flex-col items-center gap-1">
                <Building2 className="w-4 h-4 text-ba-gold mb-1" />
                <span>Institutions médicales</span>
              </div>
              <div className="rounded-xl bg-gray-900/40 border border-white/10 px-4 py-3 flex flex-col items-center gap-1">
                <Users className="w-4 h-4 text-ba-gold mb-1" />
                <span>Associations de victimes</span>
              </div>
              <div className="rounded-xl bg-gray-900/40 border border-white/10 px-4 py-3 flex flex-col items-center gap-1">
                <Briefcase className="w-4 h-4 text-ba-gold mb-1" />
                <span>Partenaires assurances</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
