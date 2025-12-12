import { useState } from "react";

// Dette komponentet inneholder 4 feil, klarer du å finne alle?
export function SpotTheError({ title = "Spot the errors"}: {title: string;}) {
  const [counter, setCounter] = useState<number>(0);
  const [person, setPerson] = useState({
    name: "Ole Gunnar",
    address: "Små gaten 6",
    age: 18,
  });

  function handleUpdatePerson() {
    // Her skal vi oppdatere personen med ny alder
    setPerson(old => ({...old, age: 27}))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1>{title}</h1>
      <p>
        Hvis du kan se dette komponentet på nettsiden og trykke på alle knappene
        så vet du at du har funnet alle feilene.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <p>Fungerer teller? {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p>Kan du se alle detaljer for personen?</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
          }}
        >
          <span>Navn: {person.name}</span>
          <span>Adresse: {person.address}</span>
          <span>Alder: {person.age}</span>
        </div>
        <p>
          Selv etter du har trykket{" "}
          <span
            onClick={handleUpdatePerson}
            style={{ cursor: "pointer", color: "purple" }}
          >
            her?
          </span>
        </p>
      </div>
    </div>
  );
}
