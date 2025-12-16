# Hva er en effekt

> [!NOTE] > [React docs](https://react.dev/learn/synchronizing-with-effects) har veldig god informasjon om effekter som er verdt å lese!

I React har begrepet `Effect` en spesiell betyning, det bygger på konseptet om [side-effekter](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>) der en funksjon kan ha effekter utover det som er inkludert i argumentene eller hva den returnerer. For eksempel hvis en funksjon påvirker en variabel som ikke er et argument eller i samme scope som funksjonen, sier vi at denne endringen er en side-effekt av funksjonen.

Når vi bruker begrepet `Effect` i kontekst av React er det spesefikt side-effekten av rendering vi sikter til. Rendering er en del av prossesen React bruker for å produsere UI elementer i nettleseren, dette skal vi lese mer om i seksjonen [komponentens livssyklus](#komponentens-livssyklus) om litt.

## Hvorfor bruker vi effekter i React

I hovedsak er React bare et bilbiotek som gjør det mulig å forenkle html-koden din med komponenter og states, den har visse begrensninger når det kommer til å synkronisere/kommunisere med systemer utenfor seg selv. Dette kan være andre javascript pakker, henting av data via `fetch`, oppdatering av dom eller sitte subscriptions. Løsningen her er at vi bruker `Effects`, altså side-effekter av rendering, for å hente inn / synkronisere data til komponentet.

Dette kan virke unødvendig komplekst, men på grunn av metoden React bruker for å produsere HTML ut fra komponentene vi har skrevet så må vi separere ut `Effects` fra den normale strukturen til et komponent. React forventer at komponenter vi skriver er [rene](https://react.dev/learn/keeping-components-pure) under `render`, det vill si at samme input (props/state) gir samme JSX (HTML) resultat uansett hvor mange ganger det kjører. Hvis vi skulle hentet inn data under `render` hadde ikke alltid komponentene våre produsert den samme koden og du kunne møtt på mange andre bugs.

## Komponentens livssyklus

Når React skal produsere UI for oss i nettleseren ut i fra komponentene vi har skrevet gjør den det i 3 steg

- `Trigger` - Et komponent skal brukes for første gang, eller props/state har blitt oppdatert
- `Render` - React kaller komponentet for å finne ut hva som skal vises på skjermen.
- `Commit` - React oppdaterer DOM (HTML)

Vi kan generallisere dette og si at et komponent har følgende livssykluser
- `Mount` - Når komponentet blir lagt til på skjermen
- `Updates` - Når komponentet mottar nye props eller state. Ofte som følge av en bruker interaksjon
- `Unmounts` - Når komponentet blir fjernet fra skjermen.

Dette er bunnprinsippene for rekkefølgen React bruker for å genererer koden vi kan se på skjermen ut i fra koden til komponentet vårt, men `Effects` bør bli håndtert utenom denne flyten. `Effects` har sin egen livssyklus som skjer etter komponentets `commit` steg. `Effect` forklarer til React hvordan states og props kan synkronisere seg til et eksternt system

## Når du ikke trenger en effekter
Effekter er en rømningsvei fra React. De lar deg "gå utenfor" React og synkronisere komponentene dine med et eksternt system, som en javascript-widgets, et nettverk eller nettleserens DOM. Hvis det ikke er noe eksternt system involvert (for eksempel hvis du vil oppdatere en komponents state når noen props eller state endres), trenger du ikke en effekt. Å fjerne unødvendige effekter gjør koden enklere å forstå, raskere å kjøre og mindre utsatt for feil.

Du trenger ikke effekter for å transformere data til rendering. La oss si at du vil filtrere en liste før du viser den. Det kan være fristende å skrive en effekt som oppdaterer en state-variabel når listen endrer seg. Dette er imidlertid ineffektivt. Når du oppdaterer state, vil React først kalle komponentfunksjonene dine for å beregne hva som skal vises på skjermen. Deretter vil React `committe` disse endringene til DOM-en og oppdatere skjermen. Så vil React kjøre effektene dine. Hvis effekten også umiddelbart oppdaterer state, starter hele prosessen på nytt! For å unngå unødvendige render-pass, transformer all data på toppnivå i komponentene dine. Den koden kjøres automatisk på nytt hver gang props eller state endres.

Du trenger ikke effekter for å håndtere brukerhendelser. La oss si at du vil sende en POST-forespørsel til `/api/buy` og vise et varsel når brukeren kjøper et produkt. I `handleClick` (hendelsesbehandlerne) funksjonen for Kjøp-knappen vet du nøyaktig hva som skjedde. Når en effekt kjører, vet du derimot ikke hva brukeren gjorde (for eksempel hvilken knapp som ble klikket). Derfor håndterer man som regel brukerhendelser i de tilsvarende hendelsesbehandlerne.