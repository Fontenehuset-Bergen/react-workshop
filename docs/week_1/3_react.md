# React
React er et javascript bibliotek for å skrive brukergrensesnitt som lar oss dele opp kode i komponenter som tar inn data (props) og som beskriver hvordan grensesnittet skal se ut.
Når data endres oppdaterer React bare de delene av UI'en som faktisk trenger å endres. Dette kan virke litt som magi, men det React egentlig gjør er å påvirke noe som heter DOM.

DOM er en forkortselse for `document object model` som representerer strukturen i et html dokument. Du er kanskje kjent med elementer som `<body>`, `<div>`, eller `<p>`; dette er de forskjellige elementene i et DOM
React bruker noe som heter Virtual dom og Shadow dom til å kjapt finne ut hvilke elementer som har endret seg og kun oppdatere relevante elementer. Istede for å laste inn hele siden på nytt, blir kun de elementene som har endret seg skiftet ut.

Uten et rammeverk blir det fort tungt å holde DOM i takt med data og brukerhandlinger. React gir en forutsigbar måte å håndtere tilstand og visning på, gjenbrukbare komponenter, og en arkitektur som skalerer fra små til store apper.

## Mappe
```
my-app/
└─ src/
│  ├─ hooks/
│  │  └─ useSomething.ts
│  ├─ styles/
│  │  └─ globals.css                   
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
│  ├─ pages/                           
│  │  ├─ Home.tsx
│  │  └─ About.tsx
│  ├─ components/
│  │  ├─ ui/
│  │  │  └─ Button/
│  │  │     ├─ Button.tsx             # Komponentet
│  │  │     ├─ Button.module.css      # Css modules       (valgfritt)
│  │  │     ├─ Button.test.tsx        # Test filer        (valgfritt)
│  │  │     └─ index.ts               # Ren javascruipt   (valgfritt)
│  │  └─ layout/
│  │     ├─ Header/
│  │     │  ├─ Header.tsx
│  │     └─ Footer/
│  │        ├─ Footer.tsx
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ public/
│  └─ vite.svg
```



my-app/
src/
components/
ui/
layout/
assets/
images/
icons/
App.tsx
main.tsx
index.css
public/
vite.svg
index.html
package.json
tsconfig.json
vite.config.ts

Kort forklaring:
– src/main.tsx: starter appen og monterer rotkomponenten.
– src/App.tsx: rotkomponenten.
– src/components: gjenbrukbare komponenter (for eksempel ui/Button, layout/Header).
– src/assets: statiske ressurser som importeres i koden.
– public: filer som serveres direkte på rot (favicons, statiske bilder).

## Navnekonvensjoner
> [!NOTE]  
> Du har kanskje sett at vi bruker `.tsx` og `.ts` mye i denne dokumentasjonen, dette er typescript filer. Hvis du kun vill bruke javascript skifter du til `.jsx` og `.js`

Du står egentlig litt fritt til å velge hvilke navne konvensjon du ønsker å bruke i ditt prosjekt, men hvis du jobber sammen med andre
er det anbefalt at du følger det som er sett på det som er annerkjent standard. Valget står da mellom PascalCase og cammelCase, forskjellen gjør koden mer lesbar og verktøy/IDE med å gi riktigere forslag. 
La oss se på når vi bruker disse

- Hvis filen er et React komponent med `.tsx` så er det anbefalt å bruke PascalCase i filnavn og funksjonsnavn, f.eks: `components/MyButton.tsx` eller `function MyButton() {}`
- Hvis filen er en javascript funksjon eller variabel så forholder vi oss til cammelCase, f.eks: `utils/dates.ts` eller `function dateToString() {}`

Du har kanskje også sett av vi bytter mellom `.tsx` og `.ts` i eksempelet over. Begge filene inneholder javascript, men forskjellen er at `.tsx` også inneholder html kode. Det er viktig for Vite/React at vi bruker riktig filformat slik at de skal behandle filene riktig, dette gjelder også hvis du ønsker at programmet du skriver koden din i skal komme med riktige forslag og feilretting.

## Importering
En viktig del av React er at vi kan splitte opp kode og importere inn det vi trenger når vi skal lage et grensesnitt. Vi har forskjellige metoder for å importere filer og funksjoner avhengig hvor de eksiterer og hvilket formål de har.
Vite har noen fordeler når det kommer til å jobbe med React, den lar oss nemmelig importere filer og moduler med esmodule som ser slik ut `import MyButton from "components/MyButton.tsx"`. Vi kan også importere npm moduler på samme måte: `import { useState } from "React"`. Disse filene eksisterer i mappen som heter `node_modules`. Vi kan også hente innholdet fra andre filer, slik som css `import "styles/index.css`

For å gjøre importering litt lettere for oss kan vi også bruke noe som heter "alias" til å forenkle importering hvis prosjektet blir stort. Da trenger vi ikke å skrive hele ruten til filen hvis vi må gå fram eller tilbake ofte. Dette er litt som å ligge inn snarvei, vi ser nærmere på denne teknikken [neste uke](../week_2/1_components.md).

## Komponenter
Hvis du har skrevet html sider før har du nok sikkert opplevd at filen blir stor og uoversiktelig. Du må kanskje skrive seksjoner på nytt og på nytt, selv om de ser nesten helt identisk ut.
En av hovedfunksjonalitetene til React er at vi deler opp koden vår i funksjonelle, gjennbrukbare komponenter som beskrive hvordan et element skal se ut, uten at vi må ha innholdet klart. Istedet kan vi sende denne informasjonen som props til et komponent. 

Dette gjør også at vi kan hente informasjon fra andre steder, f.eks værvarsel via yr.no, og sende denne informasjonen til et komponent som har forhåndsoppsatt hvilke bilder og tekst som skal vises. Et komponent kan være så lett som dette:
```tsx
export function Weather({ forecast, temperature }) {
  return (
    <div>
      Todays weather is {forecast} with a temperature of {temperature}*C
    </div>
  )
}
```
Vi kan bruke dette komponentet hvor som helst, uten å måtte skrive alt på nytt. Vi sender bare den data som komponentet trenger
```tsx
import { Mytitle } from "@/components/MyButton"

export function MyPage() {
  return (
    <div>
      <h1>Forecast</h1>
      <Weather forecast="rainy" temperature="12">
    </div>
  )
}
```
React produserer da følgende html kode som vi kan kan vise på serveren vår.
```html
<div>
  <h1>Forecast</h1>
  <div>Todays weather is rainy with a temperature of 12*C</div>
</div>
```
Vi vill gå nærmere inn på hvordan komponenter fungerer [neste uke](../week_2/README.md)

## Hendelser og states
Hvis du har prøvd å skrive html hvor du ønsker å vise data som forrander seg, tenk enkel klokke eller knapp som følger med på hvor mange ganger du har trykket, så har du måtte bruke masse javascript.
React gjør dette mye enklere ved at du kan bruke states til å følge med på variabler, når disse endrer seg oppdaterer automatisk React html koden.

Vi kan se et kjapt eksempel her på hvordan denne dette komponentet følger med på hvor mange ganger en knapp har blitt trykket på ved å bruke `useState()` fra React
```jsx
import { useState } from "react"

export function IncrementButton() {
  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <p>You have clicked {clicks} times!</p>
      <button type="button" onClick={() => setClicks(clicks + 1)}>Click me!</button>
    </div>
  )
}
```
I dette eksempelet kan du se hvordan `useState` blir brukt. Det kan være litt forvirrende hva som skjer her siden vi bruker en array og har variabler som `clicks` og `setClicks`. Vi kommer til å gå igjennom på dette i [neste uke](../week_2/README.md) når vi snakker om states og senere i prosjektet når vi går innom advanced states

## Typescript
Typescript har blitt nevnt flere ganger i denne dokumentasjonen, men hva er egentlig typescript? Kort sagt så er TypeScript vanlig JavaScript + statiske typer. Du skriver vanlig JS med mulighet til å beskrive hvilken form data har (string, number, objekter etc.), og typescript kompilatoren oversetter det til vanlig JavaScript som nettleseren kan kjøre. Typene eksisterer kun i når vi skriver koden, den fjernes når vi bygger prosjektet.

### Hvorfor bør vi bruke typescript?
Typescript lar deg og programmet fange feil mens du skriver koden, slikt som; stavefeil i variabler, feile verdier i return eller manglende props i komponenter. Du kan lett finne ut hvilke verdier eller props komponenter og funksjoner trenger. I tillegg hjelper den skriveprogrammet ditt med auto-complete og definisjoner.

Vite og React kommer med full støtte for Typescript, og du kan finne typescript instillingene for dette prosjektet i filen `tsconfig.json`.

### Typescript eksempler
> [!note]
> Vi kommer til å begynne veldig enkelt med typescript, det er bare å spørre underveis hvis dere lurer på noe

Vi kan ligge til enkle types rett i variabler
```ts
let count: number = 0;
let name: string = "Ola";
let hobby: string[] = ["tur", "fotball"];
let birthDay: Date = new Date(2006, 03, 2)
let user: { age: number; name: string } = { age: 32, name: "Kari" };
```
Vi kan lage interfaces for å forklare objekter, veldig praktisk når vi bruker API'er
```ts
interface Person { 
  age: number; 
  name: string;
  hobby?: string[]; // ? kan brukes for å vise en verdi i et objekt som kan stå tomt
}

let user2: Person = { age: 32, name: "Kari" }
```

Vi kan definere funksjoner slik at vi vet hva de tar imot av argumenter, og hva vi vill få tilbake
```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Vi kan forklare props i et React komponent eller beskrive innhold i states. 
```tsx
interface HelloProps = { name: string; greeting?: string };

export function Hello({ name, greeting = "Hei" }: HelloProps) {
  const [items, setItems] = useState<string[]>([]);

  return <h2>{greeting}, {name}!</h2>;
}
```

Vi kommer til å bruke en del typescript sammen med React, men kommer til å gå gradvis igjennom dette når vi går igjennom andre emner over de neste ukene.

## Oppsumering
Vi har sett på hvordan React fungerer og noen av problemene som den løser, vi har også sett litt kjapt på funksjonalitet. I neste seksjon ser vi på hvordan vi kan style sider og komponenter med css eller tailwind.

<table width="100%">
  <tr>
    <td><a href="2_configuration.md">← Oppsett</a></td>
    <td align="right"><a href="4_styling.md">Styling →</a></td>
  </tr>
</table>
