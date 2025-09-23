# Hooks

React har en del innebygde såkalte hooks som lar oss påvirke states, referanser og livssykluser i komponenter vi skriver. Du kan se på hooks som innebygde funksjoner fra React som vi kan bruke hvis vi ønsker ekstra funksjonalitet. Vi kommer til å focusere på `useState` og `useRef` i denne seksjonen, men det finnes [mange flere](https://react.dev/reference/react/hooks) tilgjengelig som vi vill se på senere.

## UseState

Hvis vi ønsker å ta vare på eller manipulere verdier er `useState` som oftest løsningen vi trenger. Noen eksempler hvor `useState` kan være praktisk er

- Styre synligheten på et komponent
- Manipulere tall eller andre verdier
- Manipulerer arrays eller andre data modeller.

```tsx
// Vi må huske å importere useState for å bruke den!
import { useState } from "react"

export function DropDownMenu() {
    // Vi pleier aldri å ha en enkel variabel når vi bruker useState
    const dontDoThis = useState()

    // Vi bruker destructuring til å få tilgang på to viktige variabler
    const [state, updateFunction] = useState<boolean>(false)

    // Du kan selv velge navn på hva som er inni brackets [minState, oppdaterMinState]
    // Bare husk at rekkefølgen har noe å si!
    // Første variabelen er verdien du ønsker å vise
    // Andre verdien er en funksjon som oppdaterer første verdien.

    // Vi kan kalle update funksjonen for å gi en ny state
    updateFunction(true)

    // Vi kan også ha logikk inni oppdaterings funksjonen, så lenge vår funksjon returnerer en verdi
    updateFunction(() => {
        if (2*2==4) {
            return true
        } else {
            return false
        }
    })

    return (
        <div>
            <button onClick={() => updateFunction(true)}>Open menu<button>
            {state && (
                <nav>
                    <a href="/">hjem</a>
                    <a href="/about">om oss</a>
                </nav>
            )}
        </div>
    )
}
```

Som vi ser så består `useState` egentlig bare av en verdi og en oppdaterings funksjon. Grunnen til at vi bruker `useState` istedet for en `let` variabel er fordi React må vite når den skal oppdatere innholdet på nettsiden. Når vi bruker hooks så gir oppdateringsfunksjonen også signal til React at noe har endret seg i komponentet vårt og at vi trenger å oppdaterere html koden.

Siden vi bruker typescript i prosjektet vårt har vi også muligheten til å beskrive hvordan useState skal behandle dataen vår. Vi gjør dette ved å lage en generisk type (typescript docs [link](https://www.typescriptlang.org/docs/handbook/2/generics.html)).

```tsx
import { useState } from "react";

export function SomeCoolStates() {
  // Enkel tall verdi
  const [score, setScore] = useState<number>(0);

  // En liste over hvem som scoret
  const [whoScored, setWhoScored] = useState<string[]>([]);

  // En status på kampen med forhåndsbesteme verdier
  type GameStatusType = "upcoming" | "in progress" | "finished";
  const [gameStatus, setGameStatus] = useState<GameStatusType>("upcoming");

  return ...
}
```

## UseRef

Hvis du trenger å manipulere eller referere til DOM (husk document object model er html koden vår! [link](https://www.w3schools.com/js/js_htmldom.asp)) så er useRef den letteste måten å gjøre det på. Noen eksempler på bruk av `useRef`;

- Finne ut av verdien til et input felt
- Sitte en variabel som beholder verdi mellom React renders
- Peke til en DOM tag

```tsx
import { useRef } from "react"

// Vi kan lese verdien fra et input felt
export function NameInput() {
  const inputRef = useRef(null);

 // Vi kan utføre logikk på verdien til inputRef
 function printName() {
    // useRef er egentlig et objekt med flere verdier, vi bruker som regel current
    // siden inputRef peker på et input felt kan vi hente ut verdien via value
    console.log(inputRef.current.value)
 }

  return (
    <label>
      hello {inputRef}!
    </label>
    <input ref={inputRef}/>
  );
}

// Vi kan peke til et element
export function


```

## Hva er egentlig forskjellen mellom de to?

Største forskjellen mellom `useState` og `useRef` er hvordan de utløser renders fra React. Hvis du ønsker at React skal oppdatere html koden er `useState` mer relevant, mens `useRef` er når dette ikke er ønskelig.

| Tema                       | useState                                                                 | useRef                                                                                   |
|---------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Hovedidé                  | Lagrer **tilstand** som **trigger re-render** når den endres             | Lagrer **muterbar verdi** eller **DOM-referanse** som **ikke** trigger re-render        |
| Typiske bruksområder      | Teller, åpen/lukket panel, formverdier (kontrollert), aktiv fane         | Fokusere input, lagre timer-ID, forrige verdi, tilgang til DOM-elementer                |
| Re-render ved endring     | **Ja** (via `setState`)                                                   | **Nei** (endring av `.current` rerendrer ikke)                                          |
| Vedvarende mellom renders | Ja                                                                        | Ja                                                                                       |
| API                       | `[value, setValue] = useState(init)`                                      | `ref = useRef<T>(init)` → bruk `ref.current`                                            |
| Oppdateringsmønster       | **Immutabelt**: lag ny verdi/kopi (`setItems(prev => [...prev, x])`)     | **Muterbart**: `ref.current = nyVerdi`                                                   |
| Når velge                 | Når UI skal oppdateres ved verdiendring                                  | Når du vil “huske” noe uten å oppdatere UI, eller trenger DOM-håndtak                   |
| Vanlige fallgruver        | Direkte mutasjon av objekter/arrayer (ingen endring oppdaget)            | Lagrer UI-kritiske data i ref (UI oppdateres ikke)                                      |
| TypeScript-eksempler      | `useState<number>(0)` • `useState<string[]>([])` • `useState<T|null>(null)` | `useRef<HTMLDivElement|null>(null)` • `useRef<number|null>(null)`                       |
| Samspill med DOM          | Indirekte (via render)                                                    | Direkte (fokusere, måle, spille av video, osv.) via `ref`                               |
| Performance-notat         | Re-render kan være dyrt: batcher/optimaliser ved behov                    | Ingen re-render: fint for tellere/ID-er/tidsur som ikke skal trigge visuell oppdatering |


<table width="100%">
  <tr>
    <td><a href="2_props.md">← Props</a></td>
    <td align="right"><a href="../week_3/README.md">Neste emne →</a></td>
  </tr>
</table>