# Recap av nødvendig javascript kunnskaper

Før vi kan begynne med React er det en stor fordel hvis vi forstår noen viktige konsepter i javascript. I dette dokumentet skal vi se på noen av de viktigste emnene som vi kommer til å møte på i overgangen fra bare javascript til å jobbe med andre rammeverk som React, Vite, etc.

## immutable vs mutable

Konseptet handler om hvordan du oppretter variabler i javascript, vi bruker nøkkelordene `const` eller `let` til å sitte opp tekst, tall, objekter, arrays eller andre data typer.

```ts
// immutable
const myString = "kristoffer";
const myNumber = 7;

// error!
myString = "nils";

// mutable
const myArray = ["data", "skydiving", "pizza"];
const myObject = { myKey1: "Some value", myKey: 2 };

// er tillatt
myArray.push("duplo");
myObject.myKey1 = "a new value";
```

I javascript har du muligheten til å endre på disse verdiene, noe som gjør dem mutable, men i React må state behandles immutabelt. Det betyr at du ikke endrer eksisterende objekter/arrayer direkte, men lager nye kopier med endringene.
Grunnen til at vi ikke ønsker å mutere verdiene er fordi React bruker referanselikhet for å oppdage endringer slik at siden kan bli oppdatert. For å endre disse verdiene bruker vi istedet [hooks](https://react.dev/reference/react/hooks) som kan ta vare på [states](https://react.dev/learn/state-as-a-snapshot) og gi beskjed til React at siden/komponenter skal oppdateres. Vi skal se mer på dette emnet i [uke 3: hooks](../3_hooks/README.md)

## Operatører og kortsluttning

En operatør er et symbol som kombinerer eller sammenligner verdier og uttrykk. I React bruker vi ofte operatører til betinget logikk og betinget visning (rendering) i komponenter.

Du kan møte på følgende operatører når vi lager React kode

- [sammenligning](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators): `===`, `!===`, `<`, `>`, `<=`, `>=`
- [Logiske](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators): `&&` (og), `||` (eller), `!` (ikke)
- Nullish coalescing: `??` (fall tilbake kun ved null/undefined)
- Optional chaining: `?.` (trygt oppslag uten crash i objekter)
- [Ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#conditional_ternary_operator): `cond ? A : B` (betinget uttrykk i én linje)

```tsx
// her sjekker vi at verdien er den samme, isEqual variabelen vill da være true
const isEqual = 1 === 1

// Her sjekker vi at verdi B er sann og at verdi C er sann, hvis en av de er false blir også A false
const a = b && c

// Hvis B er null eller undefined så faller den tilbake på C, veldig praktisk hvis du ikke vet om noe eksisterer
const a = b ?? c

// Hvis du jobber med et objekt du ikke er sikker på inneholder et key/value pair så kan du bruke ? etter nøkkel for at programmet ikke skal returenere feil, istedet får du undefined tilbake
const myObject = { myKey: "i love pizza" }

console.log(myObject.myKey) // i love pizza
console.log(myObject.someKey) // error (kan kræsje programmet!)
console.log(myObject?.someKey) // undefined

// Kombiner if/else statements til single lines med ternary, du vill se dette ofte blir brukt i javascript og spesielt React
if {a === 1} {
    console.log("a er lik 1")
} else {
    console.log("a er ikke lik 1")
}

console.log(a === 1 ? "a er lik 1" : "a er ikke lik 1")



```

Når vi bruker logiske operatører i react komponenter til å bettinget vise innhold kalles dette kortsluttning eller short-circuiting

```tsx
function MyComponent() {
  const myNumber = 1;
  return (
    <div>
      {myNumber > 0 && (
        <p>
          Siden sammenligningen til høyre for den logiske operatøren er sann så
          vises denne teksen på siden
        </p>
      )}
    </div>
  );
}

// Du vill ofte se kombinasjoner av disse teknikkene i et React komponent
function MyProfileCard(props) {
  const myName = props?.name ?? "ikke oppgit"; // hvis props.name var undefined så vi faller tilbake til en verdi vi vet om
  const myName2 = props?.name ? props.name : "ikke oppgitt"; // gjør akkurat det samme som linjen over.

  return (
    <div>
      <p>navn: {myName}</p>
      {!props?.name && (
        <a>
          denne linken vises kun hvis props.name ikke eksisterer eller er
          null/undefined
        </a>
      )}
    </div>
  );
}
```

## Funksjoner og ternaries

Når du oppretter en funksjon har du valget mellom vanlig funksjon eller en arrow-function, forskjellene mellom dem er små og har ikke mye å si for oss i dette prosjektet (du kan lese mer [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)), men det kan være praktisk at dere forstår begge.

```tsx
// Helt vanlig funksjon
function sum(a, b) {
  return a + b;
}

// Kan også skrives annerledes
const sum2 = function (a, b) {
  return a + b;
};

// Arrow functions fungerer som en funksjon, bare skrevet annerledes
const sum3 = (a, b) => a + b;
```

fordelen med arrow-functions er at vi lett kan lage anonyme funksjoner som kan bli brukt som en [callback funksjon](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function), denne teknikken blir brukt veldig mye i React. Dette er mer avansert og vi skal se på dette i [uke 4 effekts](../4_effects/README.md)

```tsx
function MyButton() {
  function handleClick() {
    console.log("you clicked the button");
  }
  return (
    <button type="button" onClick={() => handleClick()}>
      button text
    </button>
  );
}
```

## template litterals

Template literals `` lar deg bygge strenger med interpolering (${...}) og flerlinje-tekst. I React bruker du dem ofte til className, aria-\*, tekstinnhold, URL-er og logging.

```tsx
const first = "Ada";
const last = "Lovelace";

// Alt inne i `${ ... }` er vanlig JavaScript: uttrykk, kall, ternary, osv.
const full = `${first} ${last}`;

// Flerlinje (beholder linjeskift)
const msg = `Hei ${first},
Velkommen tilbake!`;

// Hvis uttrykket er undefined/null, blir teksten "undefined"/"null" – ofte ikke ønskelig. Bruk ?? ''
const title = `${middle ?? ""}`;

// Vi bruker dette ofte i React komponenter for å sitte sammen tekst
function MyGreeting(props) {
  return <p>{`velkommen tilbake ${props?.name ?? ""}`}</p>;
}
```

## Object/array destrucuring og spread

Destructuring lar deg plukke ut verdier fra objekter og arrayer på en kort og lesbar måte. I React bruker du dette hele tiden – spesielt i props, events, hooks og når du mapper lister.

```ts
const user = { id: 1, name: "Kristoffer", role: "admin" };
const { name, role } = user;

console.log(name); // name = 'Kristoffer'
console.log(role); // role = 'admin'
```

Her er noen av grunnene vi trenger å bruke dette i React

- Mindre støy: Du henter bare feltene du trenger.
- Enklere å forholde seg til props (data) i komponenter `function MyCard({ title, children }) { ... }`
- Hooks returnerer arrayer: `const [value, setValue] = useState('')`
- Videresending av props: `const { className, ...rest } = props; <button {...rest} />`

```tsx
// Vi tar utgangspunkt i dette objektet
const post = { title: undefined };

// Vi kan gi default valuer, hvis post.title er undefined så blir den nå "Uten tittel"
const { title = "Uten tittel" } = post;

// Vi kan opprette et Alias (gi nytt navn lokalt)
const { title: heading = "Uten tittel" } = post;
console.log(title); // not found
console.log(heading); // found!

// Uten sikre defaults kan dette krasje hvis user/address er undefined
const user = { name: "Kristoffer", address: { city: "Hakkebakken" } };

const {
  name = "Ukjent",
  address: { city = "Ukjent by" } = {}, // <= default tomt objekt
} = user ?? {}; // <= default tomt objekt
```

Vi kan i tilegg gruppere sammen eller spre verdier ved å bruke `...`, dette kalles respektivt rest og spread operasjoner.

```tsx
// Vi kan bruke spread til å bruke verdiene i et object eller array
const myArray = [1, 2, 3, 4];

const myArrayCopy = [...myArray]; // her kopierer vi over alle nummerene
const myArrayExpanded = [...myArray, 5]; // vi kan bruke dette til å ligge til nye elementer, her blir verdien: 1,2,3,4,5

// du kan gjøre det samme med objekter, hvis vi bruker user eksempelet over
const myUser = { ...user };

// hvis objektet har kun en nøkkel du er interessert i kan du finne den lettere
const userSpread = { name, ...user };
console.log(name); // lett tilgang på navnet
```

// Hvis vi har spredd verdiene og skal bruke den senere må vi bruke samme ... notation for å gruppere dem tilbake

```tsx
function myFunction({ name, ...user }) {
  console.log(user); // feil!
  console.log(...user); // riktig
}
```

Vi kan kombinere destructuring/spread og rest sammen hvis vi ønsker å bruke data på forskjellige steder. Da har vi mye mer kontroll over hvor data blir sendt/brukt

```tsx
function Button({
  variant = "primary",
  className = "",
  ...resterendeVariabler
}) {
  // Ikke send `variant` – bare resten
  return (
    <button
      {...resterendeVariabler}
      className={`btn btn--${variant} ${className}`}
    />
  );
}
```

## Asyncron kode

> [!NOTE]
> mdn har en veldig god artikkel på akkurat dette [emnet](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) som jeg anbefaler å lese siden det er ganske omfattende.



I javascript har vi konseptet syncron eller asyncron kode, det vi snakker om her er rekkefølgen på når koden din blir utført. Normalt kjører javascript linje for linje nedover koden og declarerer variabler og kjører funksjoner, men med asyncron kode så kan vi si til javascript at vi ønsker at funksjoner skal kunne bli kjørt på et senere tidspunkt. Vi bruker nøkkelordene async og await når vi skal jobbe med asyncron kode.

Dere er kanskje vandt til å jobbe med `.then` hvis dere har vært bortpå fetch tidligere

```ts
// Hvis jeg kaller en funksjon som tar lang tid å utføre så venter javascript med å fortsette til funksjonen er utført
const data = funksjonSomTarTid();

// Gammel metode
const data = fetch('/api').then(r => r.json()).then(data => { /* ... */ }).catch(err => { /* ... */ });

// Hvis vi bruker en asyncron funksjon så kan javascript gjøre andre ting mens funksjonen jobber, her må vi avente med nøkkelordet await
const res = await fetch('/api')
const data = res.ok ? res.json() : {}
```

Når vi opppretter funksjoner som skal være asyncron er det viktig at vi bruker nøkkelordet `async`

```ts
// For å opprette asyncron funksjon må vi bruke nøkkelordet async
async function asyncFunksjonSomTarTid() {
  const res = await fetch("www.example.com/data");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

// Vi må bruke nøkkelordet await når vi skal hente ut brukbar data, ellers vill du få tilbake et Promise
const data = await asyncFunksjonSomTarTid()
```
Så, hva er et Promise? Et [Promise](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) representerer et fremtidig resultat med tre tilstander:
- pending    → venter
- fulfilled  → OK (returnerer data)
- rejected   → feilet (returnerer feilmeldingen)

Vi bruker `await` til å hente ut den endelige tilstanden

## Javascript moduler
I React og andre store prosjekter er det nødvendig å dele opp koden vår i mindre filer ("moduler"), hver fil kan eksportere ting (gjøre dem "offentlige") og andre filer kan importere dem for å bruke dem.
Det er to forskjellige metoder for å opnå dette, [CommonJS eller ES-Modules](https://www.w3schools.com/nodejs/nodejs_modules_esm.asp). Vi kommer bare til å forholde oss til ES-Modules metoden i React siden den er mer moderne og støtter asyncron bedre. Her bruker vi nøkkelordene `import` og `export`

### Export/Import
Vi har to hoved måter å eksportere data / funksjoner i filene våre.
```tsx
// src/components/Button.jsx
export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

// src/App.jsx
import Button from './components/Button.jsx'; // navnet "Button" kan du velge fritt siden det er en default export
```
eller
```tsx
// src/components/Button.jsx
export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

// src/App.jsx
import { Button } from './components/Button.jsx'; // navnet "Button" er satt
```
Dette er litt etter smak og behag, hvis filen din bare har et komponent du skal bruke så kan du velge å sitte default på en funksjon, husk at en fil kun kan ha en enkelt default export!
Som regel bruker jeg bare vanlig export i nesten alle komponenter

### Dependencies
Vi bruker også denne funksjonaliteten hele tiden når vi skal hente inn funksjoner og data fra rammeverkene vi bruker, her vill du se at import pathen er annerledes siden filene vi henter fra ligger i en mappe som heter `node_modules`
Når vi skal bruke funksjonalitet fra React så trenger vi bare å skrive "react" i import pathen
```ts
import { useState } from 'react'
```
Filene for React ligger tilgjengelig i `node_modules/react` etter vi har installert det