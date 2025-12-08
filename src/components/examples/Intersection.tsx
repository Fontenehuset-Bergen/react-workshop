import { useEffect, useRef, useState, type ReactNode } from "react";
/**
 * Dette er et eksempel som Harald etterspurte hvor vi kan bruke intersection observer
 * til å se om et element er synlig på skjermen. Vi kan bruke denne teknikken til å
 * ligge til eller fjerne classes ut i fra hvor vi er på nettsiden. Du kan f.eks fade inn
 * elementer når de blir synlig eller ligge på transitions slik at de får animasjoner.
 */
export function FadeSection({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisisble] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisisble(entry.isIntersecting));
    });

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) return observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${isVisible ? "fade-section-visible" : ""} fade-section`}
    >
      {children}
    </section>
  );
}
