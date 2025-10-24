import { useEffect, useRef, useState } from "react";

export function FadeInSection({ children }: FadeSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      });

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
