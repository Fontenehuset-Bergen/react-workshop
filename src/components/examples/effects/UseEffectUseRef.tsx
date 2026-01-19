import { useEffect, useRef, useState } from "react";

export function ExampleUseEffectUseRef() {
  // Use state for å oppdatere sekunder
  const [time, setTime] = useState(Date.now());

  // Vi bruker ref til å holde styr på vår timer
  const intervalRef = useRef<number>(null);
  const startRef = useRef(Date.now());

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
