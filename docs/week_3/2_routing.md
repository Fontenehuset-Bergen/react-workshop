# Routing

Etter forrige seksjon skal vi nå ha en fungerende server som vi kan bygge videre på.

## Forbedring av root.tsx

> [!IMPORTANT]
> React-router leiter etter funksjoner med et spesefikt navn, her må du bruke samme funksjonsnavn som i eksempelet

Vi kan gjøre noen enkle steg i `src/root.tsx` for å gjøre koden mer brukbar. Hvis du husker tilbake til når vi startet prosjektet så brukte vi `index.html` til å levere React til brukeren, det trenger vi ikke lengre å gjøre. Nå eksisterer alle hovedfunksjonene vi trenger å deklarere i `root.tsx`. Vi har en del valg her, men for nå trenger vi kun å tenkte på Layout, Entrypoint og Feilmeldinger. Hvis du ønsker å se på andre muligheter kan du lese mer [her](https://reactrouter.com/api/framework-conventions/root.tsx).

### [App()](https://reactrouter.com/api/framework-conventions/root.tsx#summary)

Vi må definere ett inngangspunkt i appen vår med funksjonen `App`, Her kunne vi skrevet koden vår hvis vi bare trengte en enkelt side. Siden vi ønsker å ha undersider tilgjengelig bruker vi react-router komponentet [Outlet](https://reactrouter.com/api/components/Outlet) for å sende `{ children }` til layout

```tsx
import { Outlet } from "react-router";

export default function App() {
  return <Outlet />;
}
```

### [Layout()](https://reactrouter.com/api/framework-conventions/root.tsx#layout-export)

Vi kan ligge til en funksjon som heter `Layout` som er ansvarlig for å definere root layout. Her kan vi ligge til `meta` informasjon eller definere body innhold.

```tsx
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}
```

### [ErrorBoundary](https://reactrouter.com/start/framework/route-module#errorboundary)

Hvis vi ønsker å håndtere feil når brukere besøker sider som ikke eksisterer må vi sitte opp logikk som kan gi brukeren en side som inneholder feilmelding. Det er viktig at vi har en tilgjengelig i root, men vi kan også ligge til flere senere hvis du trenger spesefikke feilmeldinger for en spesefikk rute.

```tsx
import { isRouteErrorResponse } from "react-router";
import type { Route } from "./+types/root";

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
```

### Ferdig oppdatert root.tsx

Slik vill filen se ut når vi har gjort endringene over

```tsx
import "./assets/styles/global.css";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { Header } from "./components/layout/sections/header";
import { Footer } from "./components/layout/sections/footer";
import { ScrollToTopButton } from "./components/ui/buttons/scrollToTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <main className="flex-1">
        <h1 className="text-center">
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </main>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
```

## Opprett routes.ts for navigasjon
Det siste steget vi trenger å gjøre er å opprette `src/routes.ts` for å definere de forskjellige siden vi ønsker å bruke, samt hvilke filer som skal benyttes.
```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("about", "pages/about/page.tsx"),
  route("contact", "pages/contact/page.tsx"),
  // debug-null er en hjlpefil som stopper chrome developer tools info spam i logs
  route("/.well-known/appspecific/com.chrome.devtools.json", "debug-null.tsx"),
  // fount-found brukes sammen med * (wildcard) til å ta alle ruter vi ikke har definert
  route("*", "./not-found.tsx"),
] satisfies RouteConfig;
```
Vi kan nå lage noen sider vi kan bruke i `src/pages/<rutenavn>/page.tsx`. Her er en liten "om oss" side som vill være tilgjengelig når vi skriver `/contact` i adressefeltet.
```tsx
// src/pages/about/page.tsx
export default function Page() {
  return (
    <main>
      <h1>Om oss</h1>
      <p>Hei og hå!</p>
    </main>
  );
}
```


<table width="100%">
  <tr>
    <td><a href="1_installing.md">← Installasjon</a></td>
    <td align="right"><a href="3_dynamic_route.md">Dynamiske ruter →</a></td>
  </tr>
</table>
