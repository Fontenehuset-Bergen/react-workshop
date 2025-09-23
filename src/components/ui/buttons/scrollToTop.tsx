import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function scrollToTop() {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`
        group fixed right-0 bottom-0 size-16 hover:size-36
        ${isVisible ? "opacity-100" : "opacity-0"}
        bg-gradient-to-br from-orange-500 to-purple-600 hover:via-30%
        rounded-tl-full transition-all duration-300
    `}
    >
      <ArrowUpToLine className="absolute right-2 bottom-2 size-8 group-hover:size-16 opac text-orange-200 transition-all duration-500" />
    </button>
  );
}
