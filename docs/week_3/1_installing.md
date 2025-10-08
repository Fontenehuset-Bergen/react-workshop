# React Router Oppsett

I prosjektet vårt nå har vi det som kalles en SPA (Single page application), hvor vi har i utgangspunktet en side tilgjengelig og deler den opp i seksjoner for innhold. Vi kan lure nettleseren til å behandle undersider i url via javascript, men dette kommer med en del begrensninger. For å utvide funksjonaliteten på nettsiden vår trenger vi å ligge til en router for å kunne dele nettsiden opp i undersider som kan ha sitt eget innhold.

React router gjør det lettere for oss å opprette router og logikk relatert til navigasjon i react prosjekter og kommer med [3 forskjellige varianter](https://reactrouter.com/start/modes) etter behov; Framework-, Data- og Declarative- mode.
Måten vi sitter opp routes og behandler data er litt forskjellig mellom hver mode, men vi kommer til å forholde oss til [Framework mode](https://reactrouter.com/start/modes#framework).

## Installasjon

> [!NOTE]
> Denne seksjonen er tilpasset for et eksisterende vite + react prosjekt, hvis du heller ønsker å lage et nytt prosjekt for å garantere installasjon kan du følle disse [instruksjonene](https://reactrouter.com/start/framework/installation) og gå til neste [seksjon](./2_routing.md).

Siden vi har et eksisterende prosjekt så ønsker vi å ligge react router dependencies vi kommer til å bruke. Siden vi baserer undervisning på Framework må vi gjøre litt ekstra for å få developer støtte i vs-code.

Du kan kjøre følgende kommando for å installere nødvendige dependencies

```console
npm install react-router @react-router/node @react-router/serve isbot
```

Etterpå kan vi installere nødvendige developer dependencies

```console
npm install -D @react-router/dev @types/node tailwindcss @tailwindcss/vite vite-tsconfig-paths
```

Vi må også huske å oppdatere `scripts` seksjonen i `package.json` slik at vi kjører de riktige kommandoene. Som dere sikkert ser så har vi byttet ut `vite` kommandoene med `react-router` spesefikke kommandoer. Det er fordi `react-router` tar over ansvaret for å sende riktig informasjon til `vite` og ikke omvendt.

```json
{
  "scripts": {
    "build": "react-router build",
    "dev": "react-router dev",
    "start": "react-router-serve ./build/server/index.js",
    "typecheck": "react-router typegen && tsc"
  }
}
```

> [!note] Her er ferdig utfylt `package.json` du kan sammenligne med.

<details>
<summary>package.json</summary>
Hvis du møter på noen problemer kan du bytte ut innholdet i din `package.json` fil med følgende kode. Du kan da lett installere riktige dependencies ved først å slette `node_modules` folderen og så kjøre `npm install`

```json
{
  "name": "react-workshop",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "react-router build",
    "dev": "react-router dev",
    "start": "react-router-serve ./build/server/index.js",
    "typecheck": "react-router typegen && tsc"
  },
  "dependencies": {
    "@react-router/node": "^7.9.3",
    "@react-router/serve": "^7.9.3",
    "@tailwindcss/vite": "^4.1.13",
    "isbot": "^5",
    "lucide-react": "^0.543.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.3",
    "tailwindcss": "^4.1.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@react-router/dev": "^7.9.3",
    "@types/node": "^24.7.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "tailwindcss": "^4.1.13",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.39.1",
    "vite": "^7.1.2",
    "vite-tsconfig-paths": "^5.1.4"
  }
}
```

</details>

## Nødvendige endringer for å ta i bruk routing

Vi kan nå begynne med å konfigurere react router slik at den vill fungere med vårt eksisterende prosjekt. Rekkefølgen er ikke så viktig, men det er viktig at all stegene blir gjennomført.

### typescript konfigurasjon

Du kan trygt slette: `tsconfig.app.json` og `tsconfig.node.json`, etterpå åpner du `tsconfig.json` og erstatter alt innholdet med følgende kode:

```json
{
  "include": [
    "**/*",
    "**/.server/**/*",
    "**/.client/**/*",
    ".react-router/types/**/*"
  ],
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "types": ["node", "vite/client"],
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "rootDirs": [".", "./.react-router/types"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "~/*": ["./app/*"]
    },
    "esModuleInterop": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```

### Vite plugins

For at vite skal vite (hehe) at vi bruker react-router må vi inkludere den som en plugin i `vite.config.ts`

```ts
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
  },
});
```

### React router config

Vi må også gi noen basis parametere for vår nye router, lag en fil som heter: `react-router.config.ts` og lim inn følgende kode

```ts
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: true,
} satisfies Config;
```

### Routes oppsett
For at react router skal fungere må vi også opprette en `routes.ts` som vill inneholde informasjon om ruter vi kommer til å bruke senere, akkurat nå kan vi lage skelettet for denne filen uten å ligge inn noen routes.
```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // her kommer alle rutene våre senere
] satisfies RouteConfig;
```

### Opprett entry-point med root.tsx

Før vi installerte react-router var `index.html` inngangspunktet i appen vår. Det var her inkluderte react funksjonaliteten slik at brukeren kunne se nettsiden vår. React-router fungerer litt annerledes og vi trenger nå å opprette en ny fil som kan ta i mot forespørsler. Begynn med å lage en fil som heter `root.tsx` inni `src` mappen. (`src/root.tsx`)

```tsx
export default function App() {
  return <h1>Hello!</h1>;
}
```

Dette er alt vi nå trenger for å vise innhold, men vi kan gjøre bedre! Vi begynner med å ligge til en funksjon som må hete: `Layout` som tar over ansvaret fra `index.html` til å definere `<head>`, `<body>` og base layout vi ønsker å bruke. Når vi bytter router i url vill index filene vi definererer senere bli sendt inn i den seksjonen.

```tsx
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Start serveren

Vi skal nå ha et minimalt eksempel klart til å kjøre. Hvis alt har gått riktig kan du starte serveren ved å kjøre følgende kommando

```console
npm run dev
```

Hvis du ser en hvit side med teksten `Hello!` er du klar til å gå til [neste seksjon](./2_routing.md)!

<table width="100%">
  <tr>
    <td><a href="README.md">← Tilbake</a></td>
    <td align="right"><a href="2_routing.md">Routing →</a></td>
  </tr>
</table>
