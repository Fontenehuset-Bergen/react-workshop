import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  label: string;
  children: ReactNode;
}

export function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      className="assignment-section"
      style={{ display: "flex", flexFlow: "column nowrap", gap: "0.5rem" }}
    >
      <h3>{label}</h3>
      {children}
    </section>
  );
}
