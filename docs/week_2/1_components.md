# Komponenter

Vi så i forrige uke hvordan vi kan splitte opp koden vår i mindre biter og lage komponenter av den koden vi bruker flere ganger. Ved å lage gjennbrukbare komponenter bruker vi [DRY prinsippet](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (don't repeat yourself) som er en viktig del av web-utvikling og programmering gjenerelt.
Vi skal denne uken se mer på hvordan vi kan gjøre komponentene våre mer brukbar ved å dele data via imports eller props. Vi kommer også til å se hvordan vi kan iterere over arrays for å vise flere komponenter samtidig

## Importering av ressurser

Når vi lager komponenter er det ofte vi har behov for å bruke statiske eller lokale ressurser slik som bilder, ikoner eller data. Hvis komponentet bare har et formål er det ofte lettest å ha importering direkte i komponentet istedet for sende det som props. I eksempelet under har jeg laget en enkel knapp med innebygd ikon som blir hentet fra en ikon pakke som ble installert med `npm`.

```tsx
import { BadgeDollarSign } from "lucide-react";

export function BuyNowButton() {
  return (
    <button>
      <BadgeDollarSign />
      <span>Buy now</span>
    </button>
  );
}
```

Vi kan også hente inn lokale filer. I dette eksempelet henter jeg en liste med navigasjons linker som kan brukes i header for lage en liste over undersider.

```json
// /data/navigation/links.json
[
  { "label": "Hjem", "href": "/" },
  { "label": "Om oss", "href": "/" },
  { "label": "Kontakt", "href": "/" }
]
```

```tsx
// Vi henter inn navigasjons data
import navLinks from "@/data/navigation/links.json";

// Vi henter inn komponenter som skal brukes
import { SiteLogo } from "@/componenets/ui/images/SiteLogo.tsx"
import { NavBar } from "@/componenets/menu/navigation/NavBar.tsx"

export function Header() {
  return (
    <header>
      <SiteLogo>
      <NavBar links={navLinks} />
    </header>
  );
}
```

## Iterere over data

En annen fordel med å lage gjennbrukbare komponenter er at vi kan gjennta koden lett ved behov. Vi kan se i eksempelet under hvor lett `NavBar` komponentet kan lage flere linker ut fra en array av data. Her er det viktig at vi bruker typescript til å lage interfaces som forklarer hvordan data som komponentet mottar ser ut.

```tsx
interface NavBarProps {
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export function NavBar({ links }: NavBarProps) {
  return (
    <nav>
      {links.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

Her var det en del nye ting som skjedde for mange, hvis kan bryte ned det vi gjorde

- Vi bruker typescript til å forklare hva komponentet `NavBar` forventer å motta med interfacen `NavBarProps`
- `NavBarProps` sier at vi mottar et objekt med nøkkelen `links`, denne nøkkelen inneholder verdien av alle linkene som vi skal vise i form av en array.
- Vi bruker [destructuring](https://www.w3schools.com/JS//js_destructuring.asp) i argumentet istedet for en verdi; `NavBar({ links })` istedet for `NavBar(props)`
- Vi returnerer en [HTML nav tag](https://www.w3schools.com/tags/tag_nav.asp) som inneholder linkene
- Vi bruker den innebygde [javascript funksjonen .map()](https://www.w3schools.com/jsref/jsref_map.asp) til å itterere over array'en med data vi mottok i props tidligere.
- Javascript map forventer en "callback function", dette er en funksjon som kan kjøres over hvert element i array'et vi bruker.
- I eksempelet over så er vår callback function en arrow function `(element, index) => (hva som skal returneres)`,


<table width="100%">
  <tr>
    <td><a href="README.md">← Tilbake</a></td>
    <td align="right"><a href="2_props.md">Props →</a></td>
  </tr>
</table>