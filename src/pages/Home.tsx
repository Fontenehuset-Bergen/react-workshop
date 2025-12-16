import { useState, type ChangeEvent } from "react";
import { HomepageHero } from "../components/feature/Hero";
import "../assets/styles/example.css";
import { DateInput, MissionRegForm } from "../components/harald";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomepageHero />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MissionRegForm />
      <PickAFutureDate />
    </>
  );
}

function PickAFutureDate() {
  const [date, setDate] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const date = new Date(event.target.value);

    // Vi kan sjekke om date ble et gyldig date object
    const isValid = !isNaN(date.getTime());

    // Hvis det ikke er gyldig kan vi oppdatere feilmelding
    if (!isValid) {
      setErrorText("The date you picked is invalid");
      return;
    }

    // Nå vet vi at vi har en dato, så vi kan sjekke om den er gyldig
    const today = new Date();
    if (date.getTime() < today.getTime()) {
      setErrorText("The date you picked must be in the future");
      return;
    }

    // Nå vet vi at vi har en dato i framtiden
    setDate(event.target.value);

    // Rydd opp feilmeldinger
    setErrorText("");
  }
  return (
    <div>
      <DateInput value={date} onChange={handleDateChange} />
      {errorText && <p>{errorText}</p>}
    </div>
  );
}

export default App;
