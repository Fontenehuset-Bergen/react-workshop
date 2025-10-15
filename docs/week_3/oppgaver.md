# Oppgaver

Denne uken har vi sett på hvordan vi kan sitte opp routing med [React router](https://reactrouter.com/) og hvilken endringer som måtte til for å konvertere vårt eksisterende Vite prosjekt. For de som ønsker å lage nye prosjekter har dere muligheten til å bruke [create-react-router@latest](https://reactrouter.com/start/framework/installation) istedet for [vite@latest](https://vite.dev/guide/#scaffolding-your-first-vite-project). Med denne metoden slipper dere å konvertere prosjektet, og vill få en ny installasjon klar med routing. Hvis du ønsker å gjøre modifikasjoner kan du lese på hva vi gjorde [her](1_installing.md)

## Easy

### Modifiser layout or root.tsx

Se på hvordan [root.tsx](../../src/root.tsx) er satt opp og hvordan den ligner på [official docs](https://reactrouter.com/api/framework-conventions/root.tsx). Jeg ønsker at dere skal modifisere på koden ved å

- Forbedre design i `Layout()` funksjonen slik at nettsiden vår ser annerledes ut når du besøker nettsiden, les gjerne på [tailwindcss.com](https://tailwindcss.com/docs/styling-with-utility-classes) for å få litt inspirasjon.
- Les mer om hvordan feilmeldinger er håndtert med [ErrorBoundry](https://reactrouter.com/how-to/error-boundary) og modifiser hvordan vi viser en `404 Not found` side til brukere ved å modifisere [root.tsx](../../src/root.tsx)

### Opprett nye sider og ruter
Lag 2-3 undersider som du kan besøke ved å skrive inn url i adressefeltet, du kan bruke [official docs](https://reactrouter.com/how-to/file-route-conventions) for veiledning, men prøv å gjør sidene unik til deg ved å bruke dine egene styles og innhold.
Prøv forskjellige teknikker i [routes.ts](../../src/routes.ts), f.eks:
- ligg nested routes inni nested routes
- bruk prefix til å samle routes
- se hvordan index passer inn med eksemplene over og hvordan du når den siden i url
## Medium

### Lag en enkel dynamisk rute
Lag din egene dynamiske rute hvor du har data du jobber med, sitt opp alle sider, layout og feilmeldinger du trenger. Husk å oppdatere routes.ts! Hvis du møter på typescript problemer med sidens `+types` kan du lese mer om det [her](https://reactrouter.com/how-to/route-module-type-safety)

### Lek med loader funksjonen
[Loaders](https://reactrouter.com/start/framework/data-loading) er ansvarlig for å gjøre data tilgjengelig for sidene vi lager, disse blir sendt som props. Bruk gjerne data du opprettet i forrige oppgave, men prøv å utfør disse handlingene:
- Sjekk om data eksisterer
- Returner feilmelding hvis data ikke eksisterer

## Bonus

### Lag et nytt prosjekt
Opprett et nytt react router prosjekt med riktig installasjons kommando. Gå igjennom filene i det nye prosjektet og se om du ligger merke til forskjeller mellom ditt eksisterende prosjekt, og det nye.

Du kan gjerne kopiere over React komponenter du allerede har laget hvis du vill spare litt tid, men disse vill kanskje ikke passe rett inn i den nye siden. Oppgaven her går ut på å se hva du må gjøre for når du flytter komponenter mellom prosjekter.

### Filbasert routing
Jeg har nevnt tidligere at det er mulig å benytte en teknikk hvor vi ikke alltid trenger å modifisere `routes.ts` med rutene vi lager, istedet kan vi la react router opprette disse automatisk. 

I denne oppgaven ønsker jeg at dere bruker denne [tutoriallen](https://reactrouter.com/how-to/file-route-conventions) fra react router til å implementere denne funksjonaliteten og se på hva dere må modifisere av eksisterende kode. Her kan det være praktisk å lage en ny branch basert på din egen, eller ha et nytt prosjekt slik at du alltid kan gå tilbake hvis noe ikke fungerer.
