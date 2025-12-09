# Hvordan fungerer state i React
Når du skriver en komponent i React, er funksjonen din bare en oppskrift på hvordan UI skal se ut for en gitt tilstand. Selve state-verdiene lagres av React utenfor komponentfunksjonen. Hver gang komponenten rendres, får koden din et "snapshot" av state for akkurat den renderen. Dette snapshotet er stabilt mens render pågår: selv om du ber om en endring midt i funksjonen, vil ikke denne endringen påvirke den pågående renderen—den tas med i neste render.

State-endringer behandles ikke umiddelbart, men legges i en intern kø. Når den nåværende hendelsen er ferdig, bruker React køen til å beregne neste render. For å gjøre UI raskere, kan React slå sammen (batche) flere endringer før den rendrer. Det betyr at flere setState-kall ofte resulterer i én samlet re-render i stedet for mange små. Dette gir mindre "flimring" og bedre ytelse.

Når du endrer state, må React kunne forstå at noe faktisk er nytt. I praksis gjør den en blanding av referansesjekker og strukturmatching. Hvis du "muterer på stedet" (for eksempel `array.push`), kan React miste signalet om at noe har endret seg. Derfor anbefales det å lage nye objekter/arrayer når du endrer data. Dette er ikke en regel som React "tvinger" i koden din, men en konsekvens av hvordan React oppdager endringer og planlegger re-render.

Hver gang en komponent finnes flere steder i treet, har hver forekomst sin egen, separate state. En forelder og et barn har også uavhengig state. Dersom to komponenter må "se" den samme informasjonen, løfter man som regel staten opp til nærmeste felles forelder og sender data ned som props.

React dokumentasjonen har litt mer utfyllende informasjon for dette emnet tilgjengelig [her](https://react.dev/learn/state-as-a-snapshot)

## Hvordan bruker vi state i React?

I React er prinsippet at vi ikke modifiserer UI fra kode, men at vi istedet forklarer hvordan UI skal se ut basert på state. Vi har hovedsakelig to metoder for å lagre `state` i React, vi kan enten bruke [useState](https://react.dev/reference/react/useState) eller [useRef](https://react.dev/reference/react/useRef) etter hvilke behov vi har.
Forskjellen her ligger i hvordan UI skal bli oppdatert. Hvis du ønsker at endringer i state skal føre til at siden oppdaterer seg så bør du bruke `useState`. Hvis du istedet ønsker å ta vare på verdier som ikke skal forårsake UI oppdateringer selv om verdien endrer seg kan du bruke `useRef`.

```jsx
// useState vill oppdatere komponentet hvergang count endrer seg
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
```

```jsx
// useRef er litt som useState, men uten oppdaterings funksjonen
import { useRef } from "react";

export function FocusInput() {
  const inputRef = useRef < HTMLInputElement > null;

  return (
    <label>
      Name
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus input</button>
    </label>
  );
}
```

## UseState forklart

Du har kanskje ikke møtt på denne teknikken i javascript før, men her destrukturerer vi resultatet fra en funksjon som er ansvarlig for å lagre state. Hvis vi bruker koden fra eksempelet over

```tsx
const [count, setCount] = useState(0);
```

så ser vi at funksjonen `useState` tar i mot et argument for en start verdi og returnerer en array med to variabler som vi henter ut via destrukturering. Siden vi destrukturerer så har vi annledning til å gi navn på variablene. Det eneste som har noe å si her er plassen i arrayet.

1. Første elementet er variabelen (eller data) vi ønsker å bruke
2. Funksjonen som er ansvarlig for å oppdatere verdien til variabelen.

```tsx
//
const myData = useState(64);

const count = myData[0]; // har verdien 64
const setCount = myData[1]; // henter ut funksjonen

setCount(1); // Oppdaterer count til verdien 1
```

Som du kan se fra dette eksempelet så er det vi selv som er ansvarlig for å navngi variblene, men jeg anbefaler at du følger disse prinsiplene for variabel navn.

- Variabel navn skal være relatert og lett forståelig. F.eks; `clicks`, `isOpen`, `isVisible`
- Oppdateringsfunksjonen anbefaler å prefixe variabel med `set`. F.eks: `setClicks`, `setIsOpen`, `setIsVisible`

Litt av grunnen til at vi bruker `set` er fordi dette er et konsept fra [objekt orientert](https://en.wikibooks.org/wiki/Object_Oriented_Programming/Getters_and_Setters) programmering hvor du har `getters` og `setters` for å manipulere eller lese verdier

## Immutabilitet

Når vi ønsker å oppdatere state i React er det ikke selve variabelen som skal endres, men heller referansen React peker til. Dette er for at React skal forstå når den trenger å oppdatere UI, ellers kan vi ende i en situasjon hvor data blir endret uten at dette blir oppdatert i UI. Vi sier da at state er `out of sync`. Et godt eksempel på dette er følgende kode

```tsx
// Vi oppretter en state med useState
const [count, setCount] = useState(0);

// Ikke modifiser count direkte, da muterer vi verdier
count++;
count = count + 1;

// Istedet bruker vi setCount funksjonen til å oppdatere variabelen uten mutering,
// med denne teknikken vet React når den skal oppdatere på endringer
setCount(count + 1);
```

Dette er spesielt aktuelt når du jobber med objekter eller arrays. Her er det viktig at vi jobber med kopier for å unngå mutasjon eller endring på orginalen.

#### Arrays

```tsx
const [hobbies, setHobbies] = useState(["data", "programmering", "react"]);

// Hvis jeg skal fjerne "React" fra listen, så må jeg lage en kopi av hobbies og manipulere kopien
const updatedHobbies = hobbies.filter((hobby) => hobby != "react");
setHobbies(updatedHobbies);

// Ikke muter hobbies direkte, selv om du bare skal fjerne/ligge til noe
hobbies.filter((hobby) => hobby != "react");
```

#### Objects

```tsx
const [person, setPerson] = useState({
  name: "kris",
  age: 7,
  country: "norway",
});

// Hvis jeg skal modifisere person (fjerne nøkler eller oppdatere), så må vi først lage en kopi vi kan jobbe med
const updatedPerson = { ...person, age: 12 };
setPerson(updatedPerson);

// Ikke muter person direkte, selv om du bare skal fjerne/ligge til noe
person.age = 12;
```

Du kan lese mer om dette i React dokumentasjonen

- [Oppdatere arrays i state](https://react.dev/learn/updating-arrays-in-state)
- [Oppdatere objekter i state](https://react.dev/learn/updating-objects-in-state)

## Funksjonelle oppdateringer

useState `setter` funksjonen kan ta imot et funksjonskall istedet for en verdi (data), dette er spesielt bruktbart hvis vi trenger å modifisere den eksiterende verdien. Her er det viktig å huske på at funksjonen må returnere en verdi som kan bli satt. Du kan lese mer om oppdatering funksjoner [her](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state) eller om arrow funksjoner [her](https://tc39wiki.calculist.org/es6/arrow-functions/)

```tsx
const [count, setCount] = useState(0);

// Vanlig metode
setCount(count + 1);

// Med funksjonskall (her kan du også bruke forskjellige navn etter behov)
setCount((old) => old + 1);
setCount((gammelVerdi) => gammelVerdi + 1);

// PASS på hva funksjonen returnerer, dette fungerer ikke siden arrow funksjonen returnerer void
// Type '(old: number) => void' is not assignable to type '(prevState: number) => number'.
setCount((old) => {
  old + 1;
});
```

Denne teknikken blir veldig ofte brukt sammen med arrays/objekter for å unngå å måtte lage midlertidige variabler. Vi kan ta **hobby** eksempelet fra tidligere.

```tsx
const [hobbies, setHobbies] = useState(["data", "programmering", "react"]);

// Her oppretter vi en variabel for så å oppdatere state
const updatedHobbies = hobbies.filter((hobby) => hobby != "react");
setHobbies(updatedHobbies);

// Vi kan kombinere dette til en linje
setHobbies((oldHobbies) => oldHobbies.filter((hobby) => hobby != "react"));
```

## Ofte brukte eksempler i React

State behøver ikke bare å være data vi ønsker å behandle, det kan også være tilstander som: et html element sin synlighet, hvor mange søkeresultater som skal vises eller hva verdien til et input felt skal være. I denne seksjonen skal vi se på noen eksempler til hvordan `useState` blir mest brukt i praksis.

### Lister

Hvis du henter lister (arrays) fra et større dataset kan du lagre dem midlertidig i en state, du kan da bruke `.map` for å generere lister som automatisk oppaterer UI fra resultatet

```tsx
import { type User } from "/types/users"

export function UserList() {
  const [users, setUsers] = useState<User[]>([])

  async function loadMore() {
    const result = fetch(...) // Fetch some data

    if (result.users) {
      // process the result
    }

    // Update state with more users for example
    setUsers(data.users)
  }

  return (
    <div>
      <ul>
        {users.map(user=> <li key={useinterface ChildProps {
  value: string
  onChange: (e: string) => string
}

export function ChildComponent({ value, onChange }: TextInputProps) {
  return <input value={value} onChange={(e) => onChange(e.currentTarget.value)} />
}r.id}>{user.userName}</li>)}
      </ul>
      <button onClick={loadMore}>Load more users</button>
    </div>
  )
}
```

### Kontrollerte inputs
Du kan ha større kontroll på hvordan `<input>` felt fungerer i React hvis du kobler dem opp mot en state. Her kan du for eksempel kjøre logikk på innputfeltet for å vise feilmeldinger eller for å enable/disable funksjonalitet.

```tsx
export function SetUserName() {
  const [value, setValue] = useState<string>("")

  return (
    <div>
      <h3>Skriv inn nytt brukernavn</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      >
      {value.length < 6 && <p>Brukernavn må være lengre enn 6 bokstaver</p>}
    </div>
  )
}
```

### Betinget UI
Veldig ofte bruker vi states for å kontrollere tilstanden på et komponent. Det mest klassiske eksempelet er en dropdown meny som du kan skru av og på via en knapp.
```tsx
export function DropDown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button 
        onClick={() => setIsOpen(old => !old)}
      >
        {isOpen ? "close" : "open"}
      </button>
      {isOpen && (
        <ul>
          <li>valg 1</li>
          <li>valg 2</li>
          <li>valg 3</li>
        </ul>
      })
    </div>
  )
}
```

## Løfting av states
Ofte kan det være ønskelig å lagre state i et komponent mens du viser eller endrer innholdet i et annet. Vi kan kalle dette forholdet et parent/child avhengig av rekkefølgen komponentene blir brukt. Children blir importert og brukt i parent components.

```tsx
interface ChildProps {
  value: string
  onChange: (e: string) => string
}

export function ChildComponent({ value, onChange }: TextInputProps) {
  return <input value={value} onChange={(e) => onChange(e.currentTarget.value)} />
}
```

```tsx
export function ParentComponent() {
  const [name, setName] = useState("")
  return (
    <div>
      Current name: {name}
      <ChildComponent value={name} onChange={setName}>
    </div>
  )
}
```