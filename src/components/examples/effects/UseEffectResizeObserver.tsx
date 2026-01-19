import { useEffect, useRef, useState } from "react";

export function ExampleUseEffectResizeObserver() {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vi må sjekke om ref eksisterer
    if (!divRef.current) return;

    // Vi kan definere en resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];

      setSize({
        h: entry.contentRect.height,
        w: entry.contentRect.width,
      });
    });

    // Vi må knytte resize observer til vårt element
    resizeObserver.observe(divRef.current);

    // Vi må rydde opp resize observer når vi ikke skal bruke den lengre
    return () => resizeObserver.disconnect();
  }, []);
  return (
    <div ref={divRef} style={{ border: "1px solid grey" }}>
      <p>Height: {size.h}</p>
      <p>Width: {size.w}</p>
    </div>
  );
}
