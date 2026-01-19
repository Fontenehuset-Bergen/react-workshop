# Hva er en state

State er et konsept innenfor programmering hvor vi ønsker å kunne lagre og bruke midlertidige verdier som er forventet til å endre seg over tid, men fundamentalt sett er dette bare en variabel som blir lagret. Hvis vi for eksempel ønsker å ta vare på hvor mange ganger en bruker har klikket på en knapp trenger vi følgende

```js
// Vi lagrer en variabel
let buttonClicks = 0

// Vi kan oppdatere variabelen
function addClick { buttonClicks++ }

// Vi kan lese variabelen
function readClicks { return buttonClicks }
```

I eksempelet over ser du at vi kan lagre, oppdatere og lese verdien, men for å kunne implementere en vellykket løsning for å jobbe med en state må vi skrive mye ekstra funksjonalitet for å oppdatere UI når data endrer seg.

```html
<button id="btn">Klikk meg</button>
<p id="out">0</p>

<script>
  let buttonClicks = 0;
  const out = document.getElementById("out");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    buttonClicks++;
    // Manuell synk mellom data og UI:
    out.textContent = String(buttonClicks);
  });
</script>
```

Vi sier ofte at UI er en funksjon av state, dette betyr bare state bestemmer hvordan UI skal se ut og når den skal endre seg. Du kan se for deg denne rekkefølgen

1. Initial render med start verdi
2. Brukerinteraksjon
3. Oppdater state
4. Re-render med nye verdier

## State management

Vi kan bruke forskjellige verktøy for å forenkle denne jobben for oss, disse faller i kategorien `state management` verktøy og lar deg som utvikler fokusere på å forklare hvordan UI skal se ut, ikke når den trenger å endre seg. Det er flere grunnen til at du ønsker et slikt rammeverk:

- `Konsistens`: Sikrer at alle deler av applikasjonen viser riktig og synkronisert data.
- `Skalerbarhet`: Hjelper med å håndtere kompleksitet etter hvert som applikasjonen vokser.
- `Ansvarsdeling` (Separation of Concerns): Løser opp koblingen mellom state-logikk og UI, noe som gjør kodebasen mer vedlikeholdbar og enklere å forstå.
- `Ytelsesoptimalisering`: Effektiv håndtering av state kan redusere unødvendige re-renders og forbedre ytelsen.
- `Feilsøking`: Gir verktøy og metoder for bedre sporing og debugging av endringer i state.
- `Brukeropplevelse`: Forbedrer UX ved at UI nøyaktig reflekterer gjeldende state og reagerer riktig på brukerinteraksjoner.

I eksempelet under kan vi se hvor lett vi kan lagre en state i React ved hjelp av innebygde funksjoner/verktøy.

```jsx
import { useState } from "react";

export function Counter() {
  // count er variabelen vi ønsker å lagre
  // setCount er funksjonen som oppdaterer variabelen og automatisk oppdaterer UI
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
```

I dette eksempelet trenger vi ikke å lage noen funksjoner for å oppdatere UI, dette gjør React for oss noe som frigjør oss til å fokusere på hvordan UI skal se ut, ikke hvordan den skal fungere.

## Når bør vi bruke state?

Som en tommelregel er det smart å lagre minst mulig data i states siden dette kan medføre redusert respontid og økt minnekrav til applikasjoner, men generalisert så har du følgende prinsipper:

#### Bør bruke state

- Verdier som kan endre seg (tellere, notifikasjoner)
- UI tilstand (åpene/lukkede paneler, feilmeldinger)
- Bruker inputs (input felter/form status)

#### Ikke bruk state

- Avledet data (data som kommer fra annen variabel/state)
- Konstanter (data som aldri endrer seg)
- DOM-noder (dette gjør react for deg)
