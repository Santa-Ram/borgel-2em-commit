import { faqData } from "../data/faq";

export default function FaqPage() {
  return (
    <section className="max-w-5xl px-4 mx-auto py-20">
      <h1 className="text-3xl font-semibold text-primary mb-10">
        Questions fréquentes
      </h1>

      <ul className="space-y-6">
        {faqData.map((faq, i) => (
          <li key={i} className="border-b pb-4">
            <h3 className="text-lg font-medium text-primary-soft">
              {faq.question}
            </h3>
            <p className="text-slate-700 mt-1">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
