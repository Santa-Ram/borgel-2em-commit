import React from "react";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import footerCta from "../assets/justice.png";
import logoBa from "../assets/logoajours.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const clipPath =
    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

  return (
    <footer className="relative flex text-white bg-gray-900 overflow-hidden">
      {/* Desktop */}
      <div
        aria-hidden="true"
        className=" absolute -top-10 left-1/2 -translate-x-1/2 z-10 blur-3xl"
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            clipPath,
            width: 640,
            aspectRatio: "1155/678",
          }}
          className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
        />
      </div>

      <div className="w-full py-5 pt-2 pb-8">
        <div className="max-w-8xl mx-auto px-4">
          {/* Ligne haute */}
          <div className="flex py-2 mx-10 flex-row items-center mb-4 justify-between gap-3 pt-3 text-[10px] border-b text-white/60">
            <div className="flex justify-center items-center text-white text-2xl md:text-3xl font-semibold">
              <strong>BORGEL & ASSOCIÉS</strong>
            </div>
            <div className="flex justify-end gap-4 text:2xl md:text-3xl text-white items-center">
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>

          {/* Colonnes */}
          <div className="flex justify-center mx-10 mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-white/10">
            {/* Colonne 1 */}
            <div>
              <h3 className="text-md md:text-xl text-white/80 font-semibold mb-2">
                RÉPARATION DU DOMMAGE CORPOREL ET DÉFENSE DES VICTIMES
              </h3>
              <p className="text-[11px] text-white/60">
                Cabinet d'avocats, dédié à la réparation du préjudice suite à un
                accident.
              </p>
            </div>

            {/* Colonne 2 */}
            <FooterCol2 />

            {/* Colonne 3 */}
            <FooterCol3 />

            {/* Colonne 4 */}
            <FooterCol4 />
          </div>

          {/* Ligne basse */}
          <div className="flex flex-col mx-10 md:flex-row items-center border-t mt-10 justify-between gap-3 py-2 text-[11px] text-white/60">
            <p>© {year} Cabinet d'Avocats – Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/90 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white/90 transition">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------- Sous-composants ----------- */

function LinkFooter({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="hover:text-white transition">
      {label}
    </a>
  );
}

function FooterCol2() {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
        Liens rapides
      </h4>
      <ul className="space-y-2 text-xs text-white/80">
        <li>
          <LinkFooter href="/le-cabinet" label="Le cabinet" />
        </li>
        <li>
          <LinkFooter href="/notre-equipe" label="Notre équipe" />
        </li>
        <li>
          <LinkFooter
            href="/indemnisation-du-dommage-corporel"
            label="Indemnisation du dommage corporel"
          />
        </li>
        <li>
          <LinkFooter
            href="/actualites-juridiques"
            label="Actualités juridiques"
          />
        </li>
        <li>
          <LinkFooter href="/faq" label="FAQ" />
        </li>
      </ul>
    </div>
  );
}

function FooterCol3() {
  return (
    <div className="hidden 775:flex flex-col">
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
        Domaines principaux
      </h4>
      <ul className="space-y-2 text-xs text-white/80">
        <li>Accidents de la circulation</li>
        <li>Accidents médicaux</li>
        <li>Agressions & infractions</li>
        <li>Accidents du travail</li>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-2 py-1 rounded-xl bg-white/10 text-[11px] font-medium hover:bg-white/20 transition"
        >
          Voir plus
          <ArrowRight className="w-6 h-4" />
        </a>
      </ul>
    </div>
  );
}

function FooterCol4() {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
        Coordonnées
      </h4>
      <ul className="space-y-2 text-xs text-white/80 mb-4">
        <li>89, Rue Saint Jacques - 13006 Marseille</li>
        <li>Tél : 04 91 33 50 00</li>
        <li>Email : contact@borgel-avocat.fr</li>
      </ul>
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-[11px] font-medium hover:bg-white/20 transition"
      >
        Voir les informations complètes
      </a>
    </div>
  );
}
