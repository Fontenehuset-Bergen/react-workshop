import { useEffect, useState, useRef } from "react";

export function ExampleUseRef() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      const isScrolling = window.scrollY > 0;
      setIsVisible(isScrolling);
      
    }
   

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      ref={buttonRef}
      className={`${isVisible ? "block" : "hidden"} fixed bottom-2 right-2 bg-red-300`}
      onClick={()=> {
        window.scrollTo({top: 0, behavior: "smooth"})
      }}
    >
      Go up
    </button>
  );
}
