# Effekter og states

Effekter kan bli brukt sammen med states for å utvide funksjonaliteten til et komponent. Her er noen eksempler dere kan se på.

## useState

Hvis du bare trenger å oppdatere en state, f.eks du skal hente noe data fra localStorage kan du gjøre det via useEffect og useState

```tsx
import { useEffect, useState } from "react";

function MyComponent() {
  const [name, setName] = useState<string>(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      return storedName;
    } else {
      return "";
    }
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <div>
      <p>Hei {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
```

## useRef

Useref er en praktisk løsning når du trenger å ha en referanse til en verdi eller dom element som ikke trenger å forårsake re-renders selv om verdien endrer seg. Hvis vi f.eks ønsker å gi en EventListener til et element kan vi gjøre det ganske lett med `useRef`

```tsx
function MyComponent() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    function myFunction() {
      // Do something
    }

    divRef.current.addEventListener("scroll", myFunction);
    return () => divRef.current.removeEventListener("scroll", myFunction);
  }, []);

  return <div ref={divRef}>...</div>;
}
```

Det samme gjelder også hvis du trenger å bruke timers

```tsx
function MyComponent() {
  // Use state for å oppdatere sekunder
  const [time, setTime] = useState<number>(Date.now());

  // Vi bruker ref til å holde styr på vår timer
  const intervalRef = useRef<number>(null);
  const startRef = useRef<number>(Date.now());

  // Vi kan regne ut tidsbruk til en variabel
  const duration = (time - startRef.current) / 1000;

  // Vi bruker useEffect til å starte en intervall
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>{duration.toFixed(0)} sekunder siden komponentet ble mountet</div>
  );
}
```

Et klassisk eksempel er hvis du trenger å følge med på et element sin størrelse, her kan vi bruke useEffect og useRef til å gi et element en ResizeObserver

```tsx
export function MyComponent() {
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
```
