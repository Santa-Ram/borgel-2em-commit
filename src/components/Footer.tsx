// src/components/Footer.tsx
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import footerCta from "../assets/justice.png"; // remplace par ton image
import logoBa from "../assets/logoajours.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex h-85 mt-24 bg-primary text-white">
      {/* ====== ZONE FOOTER VERTE ====== */}
      <div className="bg-primary py-5 pt-2 pb-8">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex flex-col py-2 mx-10 md:flex-row items-center mb-4 justify-between gap-3 pt-3 text-[11px] border-b text-white/60">
            <div className="flex justify-center items-center text-3xl font-semibold ">
              <p className="text-white">
                <strong>BORGEL & ASSOCIÉS</strong>
              </p>
            </div>
            <div className="flex justify-end gap-4 items-center">
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>

          {/* colonnes principales */}
          <div className="flex justify-center mx-10 mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-white/10">
            {/* Colonne 1 : identité */}
            <div>
              <h3 className="text-xl text-white/80 font-semibold mb-2">
                RÉPARATION DU DOMMAGE CORPOREL ET DÉFENSE DES VICTIMES
              </h3>

              <p className="text-[11px] text-white/60">
                Cabinet d'avocats, dédié à la réparation du préjudice suite à un
                accident.
              </p>
            </div>

            {/* Colonne 2 : liens rapides */}
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

            {/* Colonne 3 : domaines */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
                Domaines principaux
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li>Accidents de la circulation</li>
                <li>Accidents médicaux</li>
                <li>Agressions &amp; infractions</li>
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

            {/* Colonne 4 : contact */}
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
          </div>

          {/* Barre du bas */}
          <div className="flex flex-col mx-10 md:flex-row items-center border-t mt-10 justify-between gap-3 py-2 text-[11px] text-white/60">
            <p>© {year} Cabinet d&apos;Avocats – Tous droits réservés.</p>
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

/** petit composant utilitaire pour les liens du footer */
function LinkFooter({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="hover:text-white transition">
      {label}
    </a>
  );
}
