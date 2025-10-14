# Dynamiske ruter

Vi så i forrige økt på hvordan vi kunne sitte opp routes for å ha undersider vi kan besøke på nettsiden. Vi skal nå ta dette et steg videre med å se på dynamiske ruter og hvilke fordeler det bringer oss.

Forestill deg denne casen: Du har en liste over kontakt personer som du ønsker å ha tilgjenglig på nettsiden. Du vill ha en navigasjon der du kan kanskje søke etter personer eller velge noen ut fra en liste. Du vill også vise en dedikert side for denne personen der du kan vise mer innhold.
Vi kan oppnå dette ved å bruke dynamiske ruter sammen med layout definisjon.

Hvis vi tenker praktisk på hvordan vi skal implementere dette så bør vi først finne ut av dataen vi skal bruke. Så kan vi lage sidene vi trenger for så å sitte opp rutene i `route.ts`

## Datamodellen

For dette eksempelet kan vi bruke en statisk ressurs i json format, men det er ingenting som stopper deg fra å hente data fra en api tjeneste. Vi kan bruke typescript til å definere hvordan en kontakt person skal se ut

```ts
interface Contact {
  name: string;
  phone: number;
  adress: string;
}
```

Vi kan så lage et dataset i et json array format, f.eks `src/data/contacts/details.json` med så mange kontakt personer som vi ønsker

```json
[
  {
    "name": "Ole Nordmann",
    "phone": 99224455,
    "adress": "Hakke bakken Takken 24"
  },
  {
    "name": "Kari Nordmann",
    "phone": 22445511,
    "adress": "Takken veien 45"
  }
]
```

## Planlegge side og funksjonalitet

Når vi har en oversikt over hvordan data skal se ut kan vi begynne å planlegge hvordan ruten og siden skal se ut. Vi kan begynne med å opprette filene vi trenger for senere å ligge til innholdet. Vi trenger følgende filer:

- `src/pages/contacts/layout.ts` layout fil som forklarer hvor innhold skal plasseres
- `src/pages/contacts/page.ts` index side som vises hvis ingen personer er valg
- `src/pages/contacts/person/page.ts` side som dynamisk skal vise en person ut i fra url-adresse
- `src/pages/contacts/person/sidebar.ts` vår statiske sidebar som brukes som en meny til å navigere kontakter

Vi må også redigere følgende filer:

- `src/routes.ts` for å ligge til denne dynamiske ruten og definere hvilke layout vi ønsker å bruke
- `src/data/navigation/links.json` for å ligge til en link til ruten i vår header

### Kontakt liste meny
Vi kan begynne med å lage navigasjons component for denne ruten, i `ContactsSidebar()` bruker vi kontaktlisten vi opprettet tidligere til å vise linker som brukere kan klikke på for å navigere
```tsx
import { NavLink } from "react-router";
import contactList from "@/data/contacts/details.json";

export function ContactsSidebar() {
  return (
    <aside className="flex flex-col gap-2">
      <NavLink to={"/contacts/"} className="text-center">
        <p>Tilbake</p>
      </NavLink>
      {contactList.map((contact, index) => (
        <NavLink
          key={contact.name + index}
          to={"/contacts/details/" + index}
          className="p-2 border rounded-md"
        >
          <p>{contact.name}</p>
        </NavLink>
      ))}
    </aside>
  );
}
```

### Index side
Vi kan opprette en statisk side som vises hvis du ikke har klikket en person. 
```tsx
export default function ContactIndex() {
  return (
    <section>
      <h1 className="text-center">Din adressebok</h1>
      <p>Du kan klikke en kontakt til venstre og se detaljer</p>
    </section>
  );
}
```

### Dynamisk side
Her kommer magien med dynamiske ruter i react router, vi kan bruke data loaders for å hente inn data og fylle inn siden før den vises til besøkende. Vi kan velge om datahenting skal forekomme i nettleseren hos brukeren ([client loading](https://reactrouter.com/start/framework/data-loading#client-data-loading)) eller direkte på serveren ([server loading](https://reactrouter.com/start/framework/data-loading#server-data-loading)). Etter du har valgt loading metode så kan vi hente ut informasjonen i siden ved å bruke props slik som vi så på i [uke 2](../week_2/2_props.md), og ved å bruke riktige [route types](https://reactrouter.com/how-to/route-module-type-safety) som vi importerer fra `./+types/<navn på fil>`

```tsx
import type { Route } from "./+types/contactPage";
import { isRouteErrorResponse, useRouteError } from "react-router";
import contacts from "@/data/contacts/details.json";

export async function loader({ params }: Route.LoaderArgs) {
  // Gjør param om til et nummer vi kan bruke
  const index = Math.abs(Number(params.id));

  // Sjekk at index faktisk er et nummer
  if (isNaN(index)) {
    throw new Response("Identifier must be a positive number", { status: 404 });
  }

  // Sjekk at index er mindre enn antall kontakter
  if (contacts.length <= index) {
    throw new Response("You don't have that many contacts, reduce the number", {
      status: 404,
    });
  }

  // Returner kontakt person
  return contacts.at(index);
}

export default function ContactPage({ loaderData }: Route.ComponentProps) {
  const { name, adress, phone } = loaderData!;
  return (
    <section>
      <h1 className="text-center">Kontakt detaljer</h1>
      <span>
        <p>{name}</p>
        <p>{adress}</p>
        <p>{phone}</p>
      </span>
    </section>
  );
}
```


### Layout for ruten
Vi kan nå knytte sammen alle sidene vi har laget ved å inkludere de i vårt layout som skal vises for denne ruten. Her importerer vi navigasjons menyen `ContactsSidebar()` som vi lagde tidligere og React Router sin `<Outlet />` som viser undersiden.
Hvis adressefeltet er tomt etter http://localhost:3000/contacts/ viser vi `index.tsx`, hvis vi oppgir en `id` f.eks http://localhost:3000/contacts/1 så vill ruten bruke `page.tsx`

```tsx
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <main className="flex !flex-row gap-6">
      <ContactsSidebar />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </main>
  );
}
```

## Hvordan lager vi ruten?
Vi så i forrige emne på hvordan vi lå til ruter i `routes.ts`, eneste forskjellen her er at vi bruker `:id` som et [dynamisk parameter](https://reactrouter.com/start/framework/routing#dynamic-segments). Verdien som en bruker skriver inn her `:id` blir gjort tilgjengelig for oss i siden `pages/contacts/contactPage.tsx`. Vi kan da bruke [data loader](https://reactrouter.com/start/framework/data-loading) til å hente ut informasjon.

Vi begynner med å legge til en `prefix("contacts")` for å få adressen `/contacts/` som gjør at vi kan vise kontakt index siden med adressen http://localhost:3000/contacts/
Vi kan så bruke `route("details/:id")` for å gjøre vår dynamiske tilgjengelig på http://localhost:3000/contacts/details/1

```ts
import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  // tidligere ruter...
  ...prefix("contacts", [
    layout("pages/contacts/contactLayout.tsx", [
      index("pages/contacts/contactIndex.tsx"),
      route("details/:id", "pages/contacts/contactPage.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
```


<table width="100%">
  <tr>
    <td><a href="2_routing.md">← Routing</a></td>
    <td align="right"><a href="4_middleware.md">Navigasjonslogikk →</a></td>
  </tr>
</table>
