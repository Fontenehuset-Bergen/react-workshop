import { type RefObject } from "react";

interface MoveToProps {
  /** a referance to an html element from a useRef */
  elementRef: RefObject<HTMLElement | null>;
}

export function MoveTo({ elementRef }: MoveToProps) {
  function handleClick() {
    if (!elementRef.current) return;

    elementRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <button type="button" onClick={handleClick}>
      Move
    </button>
  );
}
