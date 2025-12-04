# Uke 2 - Oppgaver

I denne ukens oppgaver skal vi sitte sammen komponenter og bruke forskjellige teknikker for å vise innholdet på siden vår. Komponentene skal følge gode mappe/navne-konvensjoner og lagres i `src/components`. For å starte på disse oppgavene lager dere en egen branch som er bassert på `week-2-assignment-start`, du kan kalle denne for `week-2-*ditt navn*` slik at det er lettere å holde styr. Når du er ferdig med oppgavene kan du levere den inn ved å sende en link til branchen til underviser på Discord.

## Easy

#### Layouts

I denne oppgaven skal du lage en header og footer seksjon som vi kan ligge til i `src/main.tsx`, disse skal ligge over og under `<App>` slik at siden vår ser bedre ut. Komponentene skal oppfylle følgende krav

- Header skal inneholde et bilde som logo og plass til en meny knapp senere, være `50px` i høyden og ta opp `100%` av skjermen horisontalt. Logo skal være plassert til venstre, mens meny skal være plassert til høyre. Komponentet ditt skal returnere innholdet inni en `<header>` tag.
- Footer skal inneholde to kolonner hvor du selv kan bestemme innhold, f.eks en liten quote eller linker, og skal skille seg ut fra innholdet i `<App>` slik at du ser med en gang at du har møtt slutten av nettsiden. Komponentet ditt skal returnere innholdet inni en `<footer>` tag.

Du må mest sannsynlig se eller endre på innholdet i `index.html`, `src/main.tsx` og `src/assets/styles/index.css` for å løse denne oppgaven på en måte slik at nettsiden ser bra ut og har en god flyt.

#### Lag ui komponenter

Vi trenger ofte å gjennbruke enkle UI elementer som knapper, lister, tekster eller linker, da er det veldig praktisk hvis vi har ferdige komponenter med styling vi kan gjennbruke. I denne oppgaven ønsker jeg at dere skal lage følgende gjennbrukbare komponenter som vi kan ta i bruk senere.

- `TextButton` dette er en `<button>` hvor vi kan sende tekst til som en prop, du trenger ikke å tenke på funksjonalitet, kun styling slik at den ser bra ut.
- `LinkButton` dette er en `<a>` hvor vi skal ta i mot følgende props: `label` og `href`. Ligg på styling slik at dette også ser ut som en knapp, f.eks border
- `Paragraph` dette er en `<p>` seksjon hvor du skal ta i mot følgende props: `text` og `textSize`. I dette komponentet skal du kunne styre størrelsen på teksten ved å sende props til `<p>` taggen sin style attribute.
- `Badge` dette skal være et span element som kan ta følgende props: `label` og `level`. level kan kun være følgende verdier: `"success" | "warning" | "info"` og bestemmer hvilken farge elementet kan være.

#### Lag et komponent for butikk produkter

I denne oppgaven skal du lage et komponent som kan motta props, du skal også selv skrive interface og ligge til styling slik at det oppfølger følgende krav

- Komponentet skal motta følgende data: `productName`, `price`, `description`, `inStock` og `imageUrl`.
- Hvert kort skal ligne på hvordan det ser ut i dette [bildet](./images/image.png)
- Bruk [condiotional rendering](https://react.dev/learn/conditional-rendering) til å kontrollere styles hvis `inStock` er false.
- Bruk komponentet til å lage to forskjellige produkter (du kan finne bilder i `public/products` mappen)

## Medium

#### Lag dataset og bruk iterasjon

I forrige oppgave så lagde du et produkt kort og brukte dette med noen manuelle verdier, i denne oppgaven skal vi bruke [iterasjon](https://react.dev/learn/rendering-lists) til å automatisk vise flere kort fra et dataset. Til dette skal vi lage et komponent vi kan bruke på siden vår som henter inn en liste med produkter, så bruker du iterasjon til å vise alle produktene på en oversiktelig måte.

- Lag et komponent som heter `ProductList` som importerer filen `src/data/products.json`, denne filen inneholder forhåndsdata du kan gi til komponentet. Du importerer json med følgende kode i toppen av filen din.

```ts
import products from "../data/products.json";

// Mengden ../../ tilsvarer hvor mange mapper du må opp for å finne filen
```

- I det nye komponentet bruker du .map til å iterere over data for å vise innholdet, husk å send riktige props og ligg til [keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- Når du har gjort dette vill du se en liste med 10 forskjellige produkt kort.
- Bruk dette komponentet i `src/pages/Home.tsx`

#### wip


## Hard

#### wip

#### wip

## Bonus

#### wip

#### wip
