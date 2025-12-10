# Hvordan kan vi gjøre state vedvarende
All state i React lever kun i minnet til den nåværende kjøringen og er knyttet til komponentinstanser i det gjeldende UI-treet. Ved en full reload blir hele treet demontert, variabler og closures forsvinner, og komponentene mountes på nytt med initial state – derfor "resettes" alt. For å bevare verdier på tvers av reloads må du flytte dem ut av flyktig minne og persistere dem et annet sted, og så re-hydrere (lese inn) verdiene når appen starter igjen.

Vanlige alternativer er å lagre små, ikke-sensitive innstillinger i `LocalStorage` / `SessionStorage`, enkle flagg/innloggingstilstand i `cookies`, og større eller delte data i en `database` via et `API`.

Vi kommer kun til å demonstrere `LocalStorage` i dette kurset

## Localstorage
Dette er den enkleste løsning hvis du bare trenger å lagre små biter med data som ikke utgir sikkerhetsproblemer.
```tsx
import { useEffect, useState } from "react";

export function UserDetails() {
  const [name, setName] = useState<string>(() => {
    try {
      // Vi leser localstorage ved første render for å sitte brukernavnet
      return localStorage.getItem("username") ?? "";
    } catch {
      // fallback hvis vi ikke klarer å lese localstorage
      return ""; 
    }
  });

  // useEffect er en React funksjon (hook) som lar deg gjøre noe hver gang en verdi endrer seg,
  // i dette tilfellet følger vi med på name og kjører setItem hver gang name oppdaterer seg
  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <label>
      Brukernavn
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}
```
I eksempelet over kan komponentet lese og sette verdier, noe som gjør at komponentet kan beholde input states. Vi skal lære mer om useEffect neste uke, men hvis du ønsker å lære mer kan du lese [her](https://react.dev/reference/react/useEffect)

## Cookies
Cookies er små nøkkel–verdi-par som nettleseren lagrer per nettside (origin/opphav), og sendes automatisk med hver HTTP-forespørsel mellom bruker og server. JavaScript kan lese/skrives cookies via document.cookie, men `httpOnly` cookies (som ofte brukes til innlogging) er ikke tilgjengelige for JS og settes kun fra server.


## Lagring i database
En database er et vedvarende lagringssystem på server-siden. I motsetning til localStorage/cookies (som lever i nettleseren din), lagres data i en DB slik at de kan deles mellom brukere og enheter, søkes i, filtreres og sikres. Du har for eksempel:
- PostgreSQL
- MySQL
- SQLite (filbasert)
- Firebase/Supabase (DB + ferdige API-er)

React kjører som regel i nettleseren og snakker med databasen via et API (HTTP/REST eller GraphQL). Når brukeren endrer noe, sender vi en forespørsel (POST/PUT/DELETE) til API-et, og oppdaterer state når svaret kommer. Siden data bor på server, overlever de refresh og kan sees på andre enheter/av andre brukere (med riktig innlogging og tilgangskontroll). 