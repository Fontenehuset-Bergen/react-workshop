# Verktøyer vi bruker i dette prosjektet
For at vi lettere skal kunne dele kode mellom oss har vi valgt å bruke to verktøy som gjør dette lettere for oss; github og stackblitz. Sammen med disse har vi valgt å også bruke en utviklingsserver som heter Vite, denne er ansvarlig for å tildele 

## Github
GitHub er en plattform for versjonskontroll og samarbeid rundt kode. Den bygger på Git og gjør det enkelt å lagre prosjekter i skyen, se historikk over endringer, sammenligne versjoner og samarbeide via pull requests. Hele poenget er at alle kan jobbe samtidig på hver sin “gren” (branch), uten å tråkke hverandre på tærne.

GitHub gir oss trygt lagringssted for koden med full historikk, enkel feilhåndtering (du kan alltid “rulle tilbake”), og et sted å gjennomføre kodegjennomgang via pull requests. I tillegg finnes issues for oppgaver/feil, og Actions for automatiske bygg og tester – men i denne workshoppen holder vi oss mest til repo + branches + PR.

## Stackblitz
StackBlitz er en IDE i nettleseren som ligner veldig mye på vs-code fra microsoft. Du kan åpne et GitHub-repo, redigere filer, installere pakker og kjøre prosjektet – uten å sette opp noe lokalt. Det er raskt å komme i gang, og alle får likt oppsett uavhengig av egen maskin.

Den store fordelen er null friksjon: ingen lokal Node-installasjon nødvendig, ingen konfigurasjonskrig. StackBlitz har innebygd terminal, editor med TypeScript-støtte og integrasjon mot GitHub, slik at du kan gjøre commits og push direkte fra nettleseren. Du får umiddelbar forhåndsvisning av appen i en egen panel/URL.

## Vite
Når du dobbeltklikker en `index.html` og ser siden i nettleseren, er det nettleseren som henter filen via `file://`. Det fungerer fint for enkel HTML/JS, men så snart du vil bruke moderne JavaScript-funksjoner (ES-moduler med import, TypeScript, React/JSX, CSS-moduler), eller få rask oppfriskning av siden mens du koder, møter du begrensninger. Nettleseren vil for eksempel nekte å importere filer over `file://` av sikkerhetshensyn, og React/JSX krever at koden transformeres før den kan kjøres.

Vite løser dette ved å være en smart, superrask utviklingsserver. Tenk på Vite som en liten “lokal webserver + hjelper” som gjør tre viktige ting for deg: den serverer filene dine over `http://` (så import av moduler fungerer), den transformerer moderne kode (TypeScript, JSX) til vanlig JavaScript som nettleseren forstår, og den gir øyeblikkelig oppdatering av siden når du lagrer (Hot Module Replacement), uten at hele siden blinker eller mister state.

Uten en server møter vi fort på problemer som dette:
- ES-moduler (`import ... from './fil.js'`) vil ofte feile fra `file://`.
- JSX (React-syntaks) og TypeScript må kompileres før nettleseren kan kjøre det.
- Hver gang du lagrer, må du oppdatere siden manuelt—og du mister ofte midlertidig tilstand i UI.
- Relative stier og forespørsler (fetch) kan oppføre seg annerledes fra `file://` enn fra `http://`.

### Hva gjør Vite
I utvikling serverer Vite filene “som de er”, men avskjærer importene og transformerer bare det som trengs, når det trengs. Endrer du én komponent, sender Vite kun den oppdaterte modulen til nettleseren, og React-komponenten rendres på nytt uten at hele siden lastes inn på nytt. Det føles som å skrive ren JS/HTML, men med superkrefter: du kan importere moduler, bruke moderne språkfunksjoner og få rask tilbakemelding.

Når du senere kjører en produksjonsbygg, pakker Vite alt til vanlige, effektive statiske filer (minifisert JS/CSS) som du kan legge på hvilken som helst vanlig webserver. Altså: i utvikling får du en flink hjelper, i produksjon ender du opp med helt “vanlige” filer.

I et Vite-prosjekt er index.html fortsatt inngangspunktet, men du peker på en modul med type="module"—typisk src/main.jsx eller src/main.tsx. Den fila kan importere andre filer og komponenter, og Vite sørger for at alt løses riktig i nettleseren. Eksempel:
```html
<!-- index.html -->
<!doctype html>
<html>
  <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```