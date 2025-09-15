# Uke 1: Oppsett

Siden vi har en fungerende installasjon av Vite er det på tide at vi ser nærmere på hvordan dette egentlig fungerer og leker litt med mulighetene vi har

## Hva er Vite og hvorfor trenger vi det

Vite er et moderne bygg- og utviklingsverktøy for webapplikasjoner. Det bruker ESM (import/export/async) istedet for CJS (require/sync) i nettleseren, og esbuild (Go-basert) til å forhåndsbundle avhengigheter. For produksjon bygger Vite med Rollup, som gir tre-shaking, kode-splitting og optimaliserte assets. Dette er mer vanlig kjent som en bundler som pakker sammen data slik at det er mer effekt å besøke nettsiden.

Vi velger Vite til React fordi det gir raskest mulig flyt i utviklingen; serveren starter nær øyeblikkelig, og hot module reload oppdaterer kun det som endres, slik at du ser resultatet med en gang. Oppsettet er minimalt og gir deg et ferdig React+TypeScript-prosjekt uten tung konfigurasjon, samtidig som utvikleropplevelsen er svært god med React Refresh, tydelige feilmeldinger og enkel håndtering av miljøvariabler via import.meta.env.

I produksjon bygger Vite med Rollup, som gir effektiv tree-shaking, kode-splitting og optimalisering av CSS og assets, noe som resulterer i raske, små leveranser. Vite har også et rikt plugin-økosystem som gjør det enkelt å legge til Tailwind, PWA-støtte, SVG-håndtering eller analyseverktøy med få linjer i `vite.config`. Det er fleksibelt nok til å støtte alt fra enkle SPA-er til bibliotek-modus og integreres fint med React Router, Vitest/RTL og CI. Kort sagt: Vite minimerer friksjon og maksimerer tempoet fra første commit til produksjon.

## Hva gjør de forskjellige filene Vite lagde?

Hvis vi tar basis i en ny installasjon med React og Typescript ville du fått en mappestruktur som ligner på dette

```
my-app/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  │  └─ react.svg
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
```
Du lurer kanskje på hva de forskjellige filene gjør
- `vite.config.js` er ansvarlig for å lagre instillinger for prosjektet, hvis du trenger å ligge til eller endre funksjonaliter i Vite gjør du det her.
- `package.json` Her definerer vi hvordan Node skal kjøre prosjektet og hvilke avhengigheter prosjektet trenger.
- `index.html` er den første og "eneste" html filen i prosjektet, vi brukker denne filen for å ligge ved javascript koden for prosjektet.
- `src/main.tsx` er selve inngangspunket i appen vår og funger som root element hvor all koden vår vill bli lagt til
- `*.jsx/tsx` denne utvidelsen blir brukt i React komponenter og signaliserer bare at du kan bruke html i tillegg til js/ts

## Hvordan kan vi endre på Vite oppsettet?

Hovedsakelig finner du alle instillinger filen `vite.config.ts` som ligger i root av prosjektet. Vite har god [dokumentasjon](https://vite.dev/config/) for instillinger i denne filen, og guides på hva du må gjøre hvis du skal f.eks ligge til plugins eller skifte på port

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000
  }
});
```

<table width="100%">
  <tr>
    <td><a href="1_installation.md">← Installasjon</a></td>
    <td align="right"><a href="3_react.md">React →</a></td>
  </tr>
</table>
