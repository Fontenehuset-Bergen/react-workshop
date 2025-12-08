import type { ReactNode } from "react";

interface StyledSectionProps {
  title: string;
  text: string;
  background: "light" | "dark";
  children: ReactNode;
}

export function StyledSection({
  background,
  children,
  text,
  title,
}: StyledSectionProps) {
  return (
    <section
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        gap: "0.5rem",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: background == "dark" ? "#1d1d1d" : "#e0e0e0",
        color: background == "light" ? "#1d1d1d" : "#e0e0e0",
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      <div
        style={{ display: "flex", flexFlow: "column nowrap", gap: "0.5rem" }}
      >
        {children}
      </div>
    </section>
  );
}
