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

hva er async kode?
hva er et promise
hva betyr nøkkelordene async og await
kjapt om abortcontroller

## Feil håndtering og fallbacks

hvordan kan vi skrive logikken vår til å håndtere feil og feilmeldinger
hvordan kan vi bruke fallback verdier

## Javascript moduler

commonjs vs es-modules
hvordan importerer og eksporterer vi kode mellom filer

- try catch
- asyncron (promise await etc)
- import (dependencies/libraries) commonjs/ecma
- array prototypes (map, sort, filter, etc)
