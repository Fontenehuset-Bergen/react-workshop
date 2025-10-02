import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeSectionProps {
  children: ReactNode;
}

export function FadeInSection({ children }: FadeSectionProps) {
  // Vi oppretter nødvendige states for å kontrollere komponentet
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Vi lager en intersection observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      });

      // Vi knytter obsever til seksjons elementet via ref
      observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) return observer.unobserve(sectionRef.current);
      };
    }
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-1000 ease-in`}
    >
      {children}
    </section>
  );
}
