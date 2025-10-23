# Data fetching i React

Fram til nå har vi jobbet hovedsakelig med statisk lokal data for å teste funksjonaliteten i React, vi skal nå ta steget inn i data fetching verdenen hvor vi bruker dynamisk informasjon til å vise nettsiden.
Dette emnet er ganske komplekst med mange systemer som kommuniserer mellom hverandre for at vi skal kunne motta data vi kan jobbe med. Vi rekket ikke å gå igjennom alle punktene, men for de som er interessert har jeg litt ressurser til dere

- Javascript Fetch api [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) [W3Docs](https://www.w3docs.com/learn-javascript/fetch-api.html)
- Javascript Fetch examples [Javascript tutorials](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/) [Sling (typescript)](https://www.slingacademy.com/article/using-fetch-api-with-typescript-tutorial-examples/)

## Hva er fetching

[Fetching](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) er prossen av å hente data over nett (http) via javascript og er tilgjengelig i Node som serveren vår kjører på og i de fleste nettlesere. Fetch er en såkalt [asynkron](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) funksjon som returnerer et [Promise](https://developer.mozilla.org/en-US/docs/Glossary/Promise) vi må løse ved å bruke nøkkelordet [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

```ts
export async function MyExample() {
  // Vi kaller først endepunket for å hente noe data
  const response = await fetch("https://www.example.com/api");

  // Vi kan så sjekke om vi fikk noe data tilbake
  if (!response.ok) {
    // Her kan vi håndtere hva som skal skje hvis fetch failet
  }

  // Vi må så hente ut riktig data format fra respons før vi kan bruke det
  // Her finnes det mange forskjellige typer, så les på api'en du spurte om hvilken du mottar
  const data = await response.json();
  return data;
}
```

Vi har flere [http metoder](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) vi kan bruke med fetch, som default bruker `fetch` [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET) metoden som henter data fra en server, men vi kan også bruke [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST) metoden som sender & mottar data. POST blir veldig ofte brukt til å submitte form data fra brukere til serveren. Du kan se et eksempel under, vi kommer til å jobbe med forms [neste uke](../week_5/1_forms.md)

```ts
export async function PostForm(formData: FormData) {
  // Vi kaller endepunket for å sende inn data
  const response = await fetch(, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // Vi kan så sjekke om vi fikk en feilmelding
  if (!response.ok) {
    // Her kan vi håndtere hva som skal skje hvis post failet
  }

  // Vi kan så se hvilken melding vi fikk tilbake fra serveren
  const data = await response.json();
  return data;
}
```

## Begreper vi må forstå

Her har jeg samlet en liten liste over begreper som kommer opp når vi jobber med fetching

### Async

Betyr at koden ikke stopper opp mens vi venter på at noe skal skje, i stedet fortsetter programmet å kjøre, og håndterer resultatet når det er klart.
Dette er nødvendig fordi nettverkskall ofte tar tid — vi vil ikke fryse hele nettsiden mens vi venter.

### Await

await brukes inne i en async funksjon for å si “vent til denne handlingen er ferdig før du går videre”. Det lar oss skrive asynkron kode som ser mer ut som vanlig, trinnvis logikk.

```ts
// await “pauser” funksjonen til fetch() har fått ferdig svaret, uten å blokkere resten av appen.
const res = await fetch("/api");
const data = await res.json();
```

### Promises

Et Promise er et objekt som representerer en verdi som ikke finnes enda. `fetch()` returnerer et Promise som “lover” å gi deg et resultat senere (enten fulfilled eller rejected).
Du bruker await for å hente ut verdien fra et promise

### Headers

Headers (HTTP-hoder) er ekstra informasjon som sendes med forespørselen eller svaret. Typiske headers kan være:

- `Content-Type` → forteller hvilket format vi sender eller mottar (f.eks. application/json)
- `Authorization` → brukes for tokens / innlogging
- `Accept` → spesifiserer hvilket dataformat vi ønsker fra serveren

```ts
await fetch("/api", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer <token>",
  },
});
```

### Response

Når fetch() er ferdig, får vi et Response-objekt tilbake. Dette objektet inneholder blant annet:

- `status` → HTTP-statuskode (200 OK, 404 Not Found, 500 Internal Server Error)

- `ok` → true hvis statusen er mellom 200–299

- `json()`, `text()`, `blob()` → metoder for å lese selve innholdet

```ts
const res = await fetch("/api");
if (!res.ok) throw new Error(`Feil: ${res.status}`);

const data = await res.json();
const text = await res.text();
```

### Caching

Caching betyr at nettleseren (eller serveren) lagrer tidligere forespørsler slik at de kan hentes raskere neste gang. Fetch støtter dette automatisk via HTTP-headere som Cache-Control.
Dette kommer innebygd i React Router, men vi kan tvinge fram funksjonaliteten ved å skrive `force-cache`

```ts
fetch("/api", { cache: "no-store" }); // hent alltid fersk data
fetch("/api", { cache: "force-cache" }); // bruk lagret versjon hvis mulig
```

## Hvordan er fetching forskjellig i React

```ts
import { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Laster...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

hydration
loading states
hooks

## Hvordan bruker vi fetch i React Router

I vanlig React bruker vi ofte `useEffect()` og `useState()` for å hente data. Dette fungerer, men har noen ulemper: data hentes etter at komponenten har rendret, og vi må selv håndtere loading-, error- og re-render-logikk.
React Router (fra versjon 6.4 og opp) introduserte en ny måte å hente data på — via såkalte loaders som vi har sett på tidligere i dynamiske routes. Disse funksjonene kjører før komponenten rendres, og gjør det enklere å håndtere asynkron data, feilhåndtering og caching direkte i rutene dine.

Med React Router definerer vi en loader på rutenivå. Denne kjører på serveren (ved SSR) eller i nettleseren (ved klientnavigasjon) før komponenten vises.

```ts
export async function loader() {
  const res = await fetch("https://api.example.com/users");
  if (!res.ok) throw new Response("Feil ved henting", { status: res.status });
  return res.json();
}
```

I komponenten kan vi deretter bruke useLoaderData():

```ts
import { useLoaderData } from "react-router";

export function UsersPage() {
  const users = useLoaderData() as User[];

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

Vi kan også ligge på en såkalt `AbortController` i fetch funksjonen vår for enda bedre håndtering av respons. Hvis brukerene kjapt navigerer på siden din kan det hende at flere fetch forespørsler blir sendt nesten samtidig, ved å ligge til [signal](https://developer.mozilla.org/en-US/docs/Web/API/Request/signal) i fetch objektet kan vi kontrollere om en fetch skal avsluttes tidlig.
```ts
export async function loader({ request }: { request: Request }) {
  const res = await fetch("https://api.example.com/users", {
    signal: request.signal,          // <- viktig!
  });
  if (!res.ok) throw new Response("Feil", { status: res.status });
  return res.json();
}
```

## Biblioteker som gjør fetching lettere

Når prosjektene våre blir større, kan det bli tungvint å håndtere all datahenting manuelt med `fetch()`, `useEffect()` og `useState()`.
Det finnes mange biblioteker og rammeverk som gjør fetching, caching og synkronisering enklere og mer effektivt.
Her er noen av de mest brukte:

### React Query (TanStack Query)

- Henter og cacher data automatisk
- Oppdaterer data i bakgrunnen når brukeren går tilbake til siden
- Viser “loading” og “error”-tilstand uten ekstra state-håndtering
- Har støtte for refetch, pagination, infinite scroll og mer

```ts
import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  if (isLoading) return <p>Laster...</p>;
  if (error) return <p>Kunne ikke hente brukere 😢</p>;

  return (
    <ul>
      {data.map((u: User) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

### Next.js (alternativ til React Router)

Next.js er et rammeverk bygget på React som tar fetching enda et steg videre, dette er forøvrig rammeverket vi bruker på jobben min.

- Server Components lar deg hente data direkte på serveren, uten fetch i klienten
- Automatisk caching og revalidasjon via fetch() og revalidate
- Parallelle data-kall, streaming, og ISR (Incremental Static Regeneration)
- Perfekt for apper med behov for både SEO og høy ytelse

```ts
export default async function UsersPage() {
  const res = await fetch('https://api.example.com/users', { next: { revalidate: 60 } });
  const users = await res.json();

  return (
    <ul>
      {users.map((u: User) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

<table width="100%">
  <tr>
    <td><a href="README.md">← Tilbake</a></td>
    <td align="right"><a href="2_hooks.md">Hooks →</a></td>
  </tr>
</table>
