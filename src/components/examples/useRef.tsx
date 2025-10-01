import { useEffect, useRef, useState } from "react";

export function ExampleUseRef() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-2 right-2 bg-red-300`}
      ref={buttonRef}
      onClick={()=> {
        window.scrollTo({top: 0, behavior: "smooth"})
      }}
    >
      Go up
    </button>
  );
}
