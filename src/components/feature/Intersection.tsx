import { useEffect, useRef, useState, type ReactNode } from "react";

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
