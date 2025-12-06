import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    document.title = "Contact – Cabinet d'Avocats";
    setMetaDescription(
      "Contactez notre cabinet spécialisé en dommage corporel et droit des assurances. Confiez-nous votre situation et recevez un premier avis."
    );
  }, []);

  function setMetaDescription(content: string) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  // 🔹 Fonction manquante : handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "VOTRE_SERVICE_ID",   // 🔁 à remplacer par ton service ID EmailJS
        "VOTRE_TEMPLATE_ID",  // 🔁 à remplacer par ton template ID
        formRef.current,
        "VOTRE_PUBLIC_KEY"    // 🔁 à remplacer par ta clé publique
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Bannière */}
      <section className="bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            Contact &amp; rendez-vous
          </h1>
          <p className="text-sm text-white/80 max-w-2xl">
            Expliquez-nous votre situation, nous reviendrons vers vous rapidement
            pour convenir d&apos;un rendez-vous ou d&apos;un premier échange téléphonique.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Formulaire */}
          <form
            ref={formRef}
            className="bg-white rounded-2xl p-5 border border-slate-100 space-y-4 text-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Nom complet
                </label>
                <input
                  name="user_name"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Téléphone
                </label>
                <input
                  name="user_phone"
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Objet de votre demande
                </label>
                <input
                  name="subject"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-soft"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                Votre message (type d&apos;accident, date, situation)
              </label>
              <textarea
                name="message"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs h-32 resize-none focus:outline-none focus:ring-1 focus:ring-primary-soft"
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex px-5 py-2 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-soft transition disabled:opacity-60"
            >
              {sending ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>

            {status === "success" && (
              <p className="text-[11px] text-emerald-600">
                Votre message a bien été envoyé. Nous vous répondrons dans les plus
                brefs délais.
              </p>
            )}
            {status === "error" && (
              <p className="text-[11px] text-red-600">
                Une erreur est survenue. Merci de réessayer ou de nous contacter
                directement par téléphone.
              </p>
            )}

            <p className="text-[11px] text-slate-500">
              Les informations transmises sont strictement confidentielles.
            </p>
          </form>

          {/* Coordonnées + Carte */}
          <aside className="space-y-4 text-sm">
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h2 className="text-sm font-semibold text-primary mb-3">
                Coordonnées du cabinet
              </h2>
              <p className="text-xs text-slate-600">
                Cabinet d&apos;Avocats – Dommage corporel
                <br />
                12, Rue de l&apos;Exemple
                <br />
                75000 Paris
              </p>
              <p className="text-xs text-slate-600 mt-3">
                Tél : 01 23 45 67 89
                <br />
                Email : contact@cabinet-avocats.fr
              </p>
            </div>

            <div className="bg-white rounded-2xl p-2 border border-slate-100">
              <iframe
                title="Localisation du cabinet"
                src="https://www.google.com/maps/embed?pb="
                className="w-full h-60 rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
