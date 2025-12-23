import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  ShieldCheck,
  Target,
  Gavel,
  Users,
  ArrowRight,
  Facebook,
  Instagram,
  PhoneForwarded,
  MessageCircleQuestionMark,
  ChevronUp,
  ShieldQuestionMark,
} from "lucide-react";
import logo from "../assets/AVOCAT transparent.png";
import { span } from "motion/react-client";

type MenuKey = "indemnisation" | null;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndemnisationOpen, setMobileIndemnisationOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { duration: 0.25 } },
    exit: { x: "100%", transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* NAVBAR FLOTTANTE */}
      <header
        aria-label="Main navigation"
        className={`fixed z-[9999] w-full h-16 pointer-events-auto px-10 transition-all duration-200
         backdrop-blur-md
          ${
            scrolled
              ? "bg-gray-900 backdrop-blur-md shadow-md"
              : "bg-transparent backdrop-blur-none"
          }
        `}
      >
        {/* Contenu centré du header */}
        <div className="mx-auto">
          <div className="flex items-center h-14 justify-between px-1 lg:px-8">
            {/* Left icon (FAQ) */}
            <Link
              to="/faq"
              className="flex text-white text-sm font-medium 1100:hidden items-center gap-2 hover:text-primary-soft transition"
            >
              <ShieldQuestionMark className="w-6 h-6 object-bottom" />
            </Link>

            {/* Logo centré/gauche */}
            <Link to="/" className="flex items-center ml-2">
              <img
                src={logo}
                alt="Cabinet d'avocats"
                className="w-28 h-auto object-contain"
              />
            </Link>

            {/* Menu desktop */}
            <nav className="hidden 1100:flex items-center justify-center gap-4 flex-1">
              {/* Accueil */}
              <NavLink
                to="/"
                className="px-3 font-serif py-1 text-sm font-medium"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
                    }
                  `}
                  >
                    Accueil
                  </span>
                )}
              </NavLink>

              {/* À propos */}
              <NavLink
                to="/le-cabinet"
                className="px-3 py-1 text-sm font-serif font-medium text-slate-800 hover:text-quartio transition-colors"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
                    }
                  `}
                  >
                    À propos
                  </span>
                )}
              </NavLink>

              {/* Notre équipe */}
              <NavLink
                to="/notre-equipe"
                className="px-3 py-1 text-sm font-serif font-medium text-slate-800 hover:text-quartio transition-colors"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
                    }
                  `}
                  >
                    Notre équipe
                  </span>
                )}
              </NavLink>

              {/* Spécialisation (dropdown) */}
              <div className="relative" ref={menuRef}>
                <button
                  className="px-3 pt-1 pb-[2px] text-sm font-serif font-medium transition-colors flex items-center gap-1"
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "indemnisation" ? null : "indemnisation"
                    )
                  }
                >
                  <span
                    className={`
      inline-block relative 
      after:content-[''] after:absolute after:left-0 after:bottom-0 
      after:h-[2px] after:transition-all after:duration-300 
      ${
        activeMenu === "indemnisation"
          ? "text-white after:w-full after:bg-white"
          : "text-white hover:text-white after:w-0 after:bg-white hover:after:w-full"
      }
    `}
                  >
                    Expertises
                  </span>
                </button>

                <AnimatePresence>
                  {activeMenu === "indemnisation" && (
                    <motion.div
                      className="fixed left-0 right-0 top-15 z-40"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {/* background full width */}
                      <div className="bg-white/90 backdrop-blur-md shadow-soft rounded-b-xl border-emerald-100">
                        {/* contenu centré, 3 colonnes alignées gauche → centre → droite */}
                        {/* <div className="flex ml-10 text-primary text-xl font-bold px-4 pt-6">
                          <h2>INDEMNISATION DU DOMMAGE CORPOREL</h2>
                        </div> */}
                        <div className="max-w-8xl mx-10 px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
                          {/* colonne 1 */}
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 mb-3">
                              Indemnisation du dommage corporel
                            </h4>
                            <ul className="space-y-3 text-xs">
                              <li>
                                <Link
                                  to="/indemnisation/1"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <ShieldCheck className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Accident de la Circulation
                                    </div>
                                    <div className="text-slate-500">
                                      Conseils essentiels pour protéger vos
                                      intérêts
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/2"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Target className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Agressions et Infractions
                                    </div>
                                    <div className="text-slate-500">
                                      Comment préparer votre dossier
                                      efficacement
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/3"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Gavel className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Victimes d'Attentat
                                    </div>
                                    <div className="text-slate-500">
                                      Découvrez nos domaines de compétence
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/4"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Users className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Accident Médical
                                    </div>
                                    <div className="text-slate-500">
                                      Rencontrez nos avocats expérimentés
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/4"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Users className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Accident du Travail
                                    </div>
                                    <div className="text-slate-500">
                                      Rencontrez nos avocats expérimentés
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Colonne 2 : Présentation */}
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 mb-3">
                              Présentation
                            </h4>
                            <ul className="space-y-3 text-xs">
                              <li>
                                <Link
                                  to="/indemnisation/1"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <ShieldCheck className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Accident de la Vie Courante
                                    </div>
                                    <div className="text-slate-500">
                                      Conseils essentiels pour protéger vos
                                      intérêts
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/2"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Target className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Contentieux Droit des Assurances
                                    </div>
                                    <div className="text-slate-500">
                                      Comment préparer votre dossier
                                      efficacement
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/3"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Gavel className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Réparation du Préjudice Corporel
                                    </div>
                                    <div className="text-slate-500">
                                      Découvrez nos domaines de compétence
                                    </div>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/indemnisation/4"
                                  className="flex gap-2 group"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  <Users className="w-4 h-4 mt-[2px]" />
                                  <div>
                                    <div className="font-medium group-hover:text-primary-soft transition-colors">
                                      Médecin de Recours et Expertise Médicale
                                    </div>
                                    <div className="text-slate-500">
                                      Rencontrez nos avocats expérimentés
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Colonne 3 : Actualités */}
                          <div>
                            <h4 className="text-xs font-semibold text-slate-500 mb-3">
                              Actualités
                            </h4>
                            <div className="space-y-4">
                              <Link
                                to="/actualites/droit-et-justice"
                                className="flex gap-3 group"
                                onClick={() => setActiveMenu(null)}
                              >
                                <div className="w-32 h-20 bg-slate-200 rounded-md" />
                                <div className="text-xs">
                                  <div className="font-medium group-hover:text-primary-soft transition-colors">
                                    Droit et justice
                                  </div>
                                  <div className="text-slate-500">
                                    Les dernières évolutions juridiques
                                  </div>
                                  <span className="text-primary-soft underline text-[11px]">
                                    Lire plus
                                  </span>
                                </div>
                              </Link>

                              <Link
                                to="/actualites/cas-de-succes"
                                className="flex gap-3 group"
                                onClick={() => setActiveMenu(null)}
                              >
                                <div className="w-32 h-20 bg-slate-200 rounded-md" />
                                <div className="text-xs">
                                  <div className="font-medium group-hover:text-primary-soft transition-colors">
                                    Cas de succès
                                  </div>
                                  <div className="text-slate-500">
                                    Comment nous avons gagné vos litiges
                                  </div>
                                  <span className="text-primary-soft underline text-[11px]">
                                    Lire plus
                                  </span>
                                </div>
                              </Link>

                              <Link
                                to="/actualites-juridiques"
                                className="inline-flex items-center gap-1 text-xs mt-1 group"
                                onClick={() => setActiveMenu(null)}
                              >
                                <span>Parcourir</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-[2px] transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Actualités juridiques */}
              <NavLink
                to="/actualites-juridiques"
                className="px-3 py-1 text-sm font-serif font-medium text-slate-800 hover:text-quartio transition-colors"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
                    }
                  `}
                  >
                    Actualités juridiques
                  </span>
                )}
              </NavLink>

              {/* Nos honoraires */}
              <NavLink
                to="/honoraires"
                className="px-3 py-1 text-sm font-serif font-medium text-slate-800 hover:text-quartio transition-colors"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
                    }
                  `}
                  >
                    Nos honoraires
                  </span>
                )}
              </NavLink>
            </nav>

            {/* Right icons / contact */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/faq" className="hidden 1100:flex items-center">
                <ShieldQuestionMark className="w-6 h-6 object-bottom" />
              </Link>
              <Link to="/contact" className="flex items-center">
                <Mail className="w-6 h-6" />
              </Link>
            </div>

            {/* Mobile menu button visible on small screens */}
            <div className="flex lg:hidden items-center">
              <button
                className="inline-flex text-white items-center justify-center w-9 h-9"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[9985] bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className="fixed inset-y-0 right-0 z-[9999] w-72 max-w-full bg-white shadow-lg flex flex-col"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-slate-100">
              <span className="text-xs font-semibold text-primary">
                Navigation
              </span>
              <button
                className="text-xs text-slate-500"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 text-sm overflow-y-auto">
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="block font-serif text-black py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="border-t border-slate-100 pt-2">
                  <NavLink
                    to="/le-cabinet"
                    className="block font-serif text-black py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    À propos
                  </NavLink>
                </li>
                <li className="border-t border-slate-100 pt-2">
                  <NavLink
                    to="/notre-equipe"
                    className="block font-serif text-black py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Notre équipe
                  </NavLink>
                </li>

                <li className="border-t text-black border-slate-100 pt-2">
                  <button
                    className="w-full flex items-center font-serif justify-between py-2 text-left"
                    onClick={() => setMobileIndemnisationOpen((v) => !v)}
                  >
                    <span>Indemnisation</span>
                    <span className="text-xs">
                      {mobileIndemnisationOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileIndemnisationOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-3 space-y-1 text-xs text-slate-600"
                      >
                        <li>
                          <NavLink
                            to="/indemnisation/1"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1"
                          >
                            Naviguer le système
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/indemnisation/2"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1"
                          >
                            Stratégies gagnantes
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/indemnisation/3"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1"
                          >
                            Services
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/indemnisation/4"
                            onClick={() => setMobileOpen(false)}
                            className="block py-1"
                          >
                            Équipe
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="border-t border-slate-100 pt-2">
                  <NavLink
                    to="/actualites-juridiques"
                    className="block font-serif text-black py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Actualités juridiques
                  </NavLink>
                </li>
                <li className="border-t border-slate-100 pt-2">
                  <NavLink
                    to="/honoraires"
                    className="block font-serif text-black py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Nos honoraires
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="border-t border-slate-100 p-4">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex justify-center items-center text-black "
              >
                <div className="flex gap-8 px-4 py-2">
                  <Mail className="w-4 h-4 border" />
                  <Facebook className="w-4 h-4 border" />
                  <Instagram className="w-4 h-4 border" />
                  <PhoneForwarded className="w-4 h-4 border" />
                </div>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
