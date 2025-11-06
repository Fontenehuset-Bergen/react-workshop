# React developer tools
Tradisjonelle nettleser-verktøy (Elements/Inspector, Console, Network) er laget for å inspisere HTML, CSS og ren JavaScript. De ser kun den ferdige DOM-strukturen – ikke hvordan Reacts komponenter, props og state henger sammen. Når du jobber i React, blir DOM-en et resultat av komponenttreet ditt. Uten innsikt i dette treet blir feilsøking fort tungvint: du ser hva som endte i DOM, men ikke hvilken komponent som lagde det, hvilke props den fikk, eller hvilken state som trigget en render.

[React Developer Tools](https://react.dev/learn/react-developer-tools) nettleser utvidelsen løser dette ved å gi deg:
- Components-fanen: Se hele komponenttreet, velg en komponent og inspiser props, state og hooks. Du ser hvilke komponenter som rendres, og kan ofte se hvorfor.
- Profiler-fanen: Mål render-tid, se hvilke komponenter som rendret under en interaksjon, og identifiser unødvendige re-renders.

## Components
Når du Vite og React kjører i utviklingsmodus (npm run dev), vil Components vise et tre der hver node er en React-komponent. Velger du en komponent, ser du detaljer i sidepanelet: props (inn-data til komponenten), state (intern tilstand), og ofte en oversikt over hooks som useState og useEffect. Prøv å endre noe i UI (klikk en knapp, skriv i et input-felt) og se hvordan verdiene oppdateres live i DevTools. Dette er den raskeste måten å verifisere at komponenten din får de dataene du tror den får.

## Profile
Profiler lar deg “spille inn” en interaksjon og så se hvilke komponenter som rendret og hvor lang tid det tok. Dette er nyttig når appen begynner å vokse og du vil forstå ytelse. I uke 1 holder det å vite at fanen finnes; vi kommer tilbake til den når dere har bygd litt mer UI.