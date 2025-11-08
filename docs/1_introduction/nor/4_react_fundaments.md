# React 
React er et bibliotek for å bygge brukergrensesnitt som komponenter. I stedet for å manuelt oppdatere DOM `(f.eks. document.querySelector(...).innerHTML = ...)`, beskriver du hvordan UI skal se ut for en gitt tilstand (state). Når data endres, sørger React for å oppdatere nettleseren riktig og effektivt. Tenk: “si hva, ikke hvordan.”

Uten React må du selv holde oversikt over hva som skal oppdateres hvor når data endrer seg. Det blir fort mange spesialtilfeller. Med React skriver du en funksjon som beskriver UI som en funksjon av data: `UI = f(state)`. Når state endrer seg, rendrer React komponenten på nytt og patcher DOM minimalt. Resultatet er mindre “lim-kode”, enklere feilsøking og mer forutsigbar oppførsel når appen vokser.

## JSX (TSX) - html som en funksjon
JSX lar deg skrive HTML-lignende kode inne i JavaScript. JSX er ikke en streng; det kompileres til vanlige funksjonskall som React forstår. Du setter inn JS-uttrykk med krøllparanteser `{ ... }`, f.eks. `{title}` eller `{items.map(...)}`. Med TypeScript bruker vi filendelsen .tsx.

Noen nyttige regler nå i starten:
- Én rot: En komponent må returnere ett rotnode-element (bruk f.eks. `<main>…</main>` eller `<>…</>`).
- Navngivning: HTML-tagger er små bokstaver (`<div>`), komponenter er PascalCase (`<Header />`).
- Attributter: Noen navn er annerledes i JSX: `className` (ikke `class`), `htmlFor` (ikke for), og `style` er et JS-objekt (f.eks. `style={{ padding: 16 }}`).
- Uttrykk i klammer: Alt som er gyldig JS-uttrykk kan stå i `{}` (variabler, funksjonskall, ternary, map osv.).

## Komponenter
En komponent er en funksjon som returnerer et stykke UI (JSX). Du kan sette sammen komponenter som Lego: små, gjenbrukbare biter som til sammen blir hele siden. Komponenter kan ta inn props (inngangsverdier) og kan ha egen state (intern tilstand).
- Props er “input” utenfra – komponenten leser dem, men endrer dem ikke.
- Komposisjon: Bygg store deler ved å sette sammen små komponenter.
- Lister: Når du rendrer lister med `array.map`, må hvert element få en stabil `key` (f.eks. en id) for at React skal oppdatere riktig.

## State
State er data som tilhører komponenten og kan endres over tid (f.eks. input-verdi, toggler, teller). Når state endres, rendrer komponenten automatisk på nytt, og React oppdaterer bare det som trengs i DOM.
- Én kilde til sannhet: La komponenten (eller et passende nivå i treet) eie state som resten trenger.
- Uavhengighet: Ikke mutér state direkte (som å `push` på samme array). Lag nye kopier med f.eks. spread (`[...arr, ny]`, `{ ...obj, endring }`) – dette gjør oppdateringer forutsigbare.
- Avledede verdier: Hvis noe kan regnes ut fra eksisterende state/props, trenger det som regel ikke egen state (det beregnes i render).

## Oppdateringer
Når en komponent rendrer, produserer den en beskrivelse av UI (JSX → elementer). React sammenligner den nye beskrivelsen med den forrige (diffing/reconciliation) og oppdaterer kun det som faktisk har endret seg i DOM. Du slipper å skrive “finn element, fjern klasse, legg inn tekst …” – React gjør det for deg.

- Keys i lister hjelper React å matche elementer mellom renderinger.
- Deklarativ tenkemåte: Du beskriver endelig resultat, ikke rekkefølgen av DOM-operasjoner.

## Eksempel side i React
En helt enkel React side, f.eks `/src/App.jsx` (uten å dykke i detaljer ennå)
```tsx
export default function App() {
  const title = 'Hei, React!';
  const items = ['En', 'To', 'Tre'];
  const showList = true;

  return (
    <main style={{ padding: 16, fontFamily: 'roboto' }}>
      <h1>{title}</h1>

      {/* Betinget visning */}
      {showList && (
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {/* Senere: vi legger på state og interaktivitet her */}
    </main>
  );
}
```
*Hva du ser her*: JSX med `{}` for variabler/uttrykk, betinget visning med `&&`, og liste-rendering med `map` + `key`. Vi bygger videre med [props](../2_components/3_props.md) først, så [state](../3_hooks/2_states.md), [hooks](../3_hooks/1_introduction.md) og [effekts](../4_effects/1_introduction.md) i over de neste ukene.