# Uke 1: Installasjon

> [!NOTE]  
> Vi kommer til å bruke linker i dokumentasjonen som tar deg videre til andre dokumentasjonsfiler, dette fungerer aller best hvis i nettleseren hvis du besøker vårt [repo](https://github.com/Fontenehuset-Bergen/react-workshop/docs). Det er også mulig å åpne linker i VS-code hvis du holder nede `ctrl` eller `alt` og trykker på linken, hvis du bruker et annet IDE må du kanskje spørre eller google for å finne denne funksjonaliteten.

Hei og velkommen til React + Vite workshop hos Fontenehuset Bergen, i dette dokumentet går vi igjennom installasjon av nødvendige programmer og oppsett av Vite for å kunne starte prosjektet.

## Hvilke programmer må jeg ha installert for å begynne?

For at du skal følge denne workshoppen anbefaler jeg følgende programmer

- [Git](https://git-scm.com/) for å laste ned denne repo koden
- [Node](https://nodejs.org/en) for å kunne kjøre javascript
- [VS-code](https://code.visualstudio.com/) for å kunne skrive kode

Du kan teste om du har disse installert ved å starte opp en terminal og lime inn følgende linjer. Hvis du får tilbake et tall som viser versjon er programmet installert og tilgjengelig for applikasjonen vår.

### Sjekk git versjon

```console
git -v
```

Eksempel resultat: git version 2.48.1.windows.1

### Sjekk node versjon

```console
node -v
```

Eksempel resultat: v22.14.0

### Sjekk npm versjon

> [!NOTE]  
> NPM er tilgjengelig hvis du valgte dette under instalasjonen av Node

```console
npm -v
```

Eksempel resultat: 11.5.2

## Hvordan blir dette repositoriet brukt?
Dette repositoriet inneholder gradvis progresjon av React prosjektet, du kan navigere deg igjennom de forskjellige øktene ved å bytte branches. Vi har valgt å gå for en enkel versjon struktur hvor økter og emner er delt opp på følgende måte slik at dere kan følge med underveis på hvordan prosjektet utvider seg.

- `main` inneholder det ferdige prosjektet i tillegg til dokumentasjon og en deployet nettside here kan besøke
- `week_<nummer>_<emne>` inneholder ferdig kode og dokumentasjon for aktuelt emnet
- `week_<nummer>_<emne>_codealong` inneholder kode fra starten av emnet hvis du heller ønsker å gjøre ting selv


## Hvordan installerer jeg React?

> [!Caution]  
> Hvis du har lastet ned dette repoet og ikke ønsker å lage et nytt prosjekt, heller bruke dette, kan du gå rett til installasjon av avhengigheter

Vi kan begynne med å besøke nettsiden for [Vite](https://vite.dev/) hvor vi finner offisielle dokumentasjonen for dette utvikler verktøyet. Hvis du trykker deg inn på [guides](https://vite.dev/guide/) så tar de deg igjennom installasjons prossessen hvor vi begynner med å kjøre følgende kommando i terminalen. I eksempelet under bruker vi npm som package manager, hvis du ønsker å bruke en annen finner du kommandoer andre kommandoer [her](https://vite.dev/guide/#scaffolding-your-first-vite-project)

> [!NOTE]  
> Husk at terminalen må kjøre fra den mappen du ønsker å installere Vite i

```console
npm create vite@latest
```

Denne kommandoen starter oppsettet av Vite hvor du får følgende valg
- navn på prosjektet (dette lager en ny mappe med navn og oppdaterer `package.json` detaljer)
- valg av front-end rammeverk (React)
- valg av variant (Typescript)

I denne workshoppen skal vi jobbe med React så dette valget er naturlig, men valg av variant er litt mer opp til deg. I undervisning velger vi varianten Typescript fordi vi ønsker den ekstra tryggheten vi får av type sikkerhet som TS gir oss. Hvis du ikke er komfortabel eller ikke ønsker Typescript kan du velge vanlig javascript. 

> [!NOTE]
> Vi kommer til å gå igjennom hvordan Typescript fungerer i undervisningen så du trenger ikke å ha kunnskap til hvordan Typescript fungerer akkurat nå, men det kommer til å bli et viktig verktøy for oss framover.

### Sørg for at dependencies er installert
Etter du har kjørt installasjons kommandoen må vi også sørge for at alle bibliotek og avhengigheter som Vite og React trenger er installert, det kan vi enkelt gjøre ved å skrive følgende kommando som henter alle nødvendige pakker fra npm
```console
npm install
```

## Hvordan starter React?
>
Etter du har gått igjennom alle installasjonsstegene kan vi starte en lokal utviklings server ved å kjøre følgende kommando som vill gjøre nettsiden tilgjengelig.
```console
npm run dev
```
Hvis du følger med i terminalen kan du se server logs for debugging, her finner du også link til din lokale webserver som du kan klikke. Normalt vill du kunne se noe som ligner på dette
```
  VITE v7.1.5  ready in 1524 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Oppsumering
Vi har gått igjennom hvordan vi skal lage et utviklingsmiljø hvor vi kan lage vår React nettside, vi har kjørt alle nødvendige kommandoer slik at prosjektet er klart til å jobbes med. Vi skal i neste emne se på hvordan Vite fungerer.

<table width="100%">
  <tr>
    <td><a href="../README.md">← Tilbake til index</a></td>
    <td align="right"><a href="2_configuration.md">Oppsett →</a></td>
  </tr>
</table>