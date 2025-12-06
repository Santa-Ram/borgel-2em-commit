import type { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {(title || subtitle) && (
          <header className="mb-8">
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.18em] text-primary-soft mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
