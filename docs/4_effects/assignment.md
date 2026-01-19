# Uke 4 Effekter

Denne uken skal vi fokusere på Effekter i React, men gjøre dette via et oppgavesett hvor vi skal kode en side hvor vi bruker en API tjeneste til å vise innhold på en nettside. Her skal vi lage komponenter, bruke states og implementere Effekter. Med vilje er oppgavene ikke godt definert, her er hovedintensjonen å se hvordan dere løser oppgaven med fokus på data henting og framvisning av data i komponenter.

Oppgavene bygger videre på hverandre med mer og mer avansert funksjonalitet, til slutt vill vi ha en funksjonabel side hvor vi kan få en liste over alle pokemon fra gen 1, og klikke oss inn på en pokemon for å se mer info.

Du kan begynne med å lage din egen branch ut i fra `origin/main` og kalle den for `week-4-assignment-*ditt navn*`

## Steg 1

Lag et komponent som bruker `useEffect` til å hente inn en liste over alle pokemon fra [pokeapi](https://pokeapi.co/).
Her må du bruke riktig url i `fetch`, du kan finne denne ved å leite på nettsiden. Du kan prøve å logge ut resultatet slik at du kan se data-modellen.

## Steg 2

Formater resultatet fra `fetch` slik at du får en liste med alle pokemon navn som du lagrer i en `useState`. Bruk denne listen til å generere buttons for hver pokemon. Når du trykker på en button skal navnet til valgt pokemon lagres i en state.

# Steg 3

Lag et komponent som er ansvarlig for å vise en pokemon ut i fra navnet. Dette komponentet må motta navn som en prop, og ut i fra navnet bruke `fetch` til å hente detaljer for denne pokemonen. _Hint: Her må du lage en dynamisk url streng_

## Steg 4

Lag et en interface for hvordan data-modellen ser ut for en enkelt pokemon. Interface må inkludere følgende felter

- Id
- Name
- Sprites
- Stats
- Types

Resultatet vill ligne på dette

```ts
interface Pokemon {
  id: number;
  name: string;
  // other fields...
}
```

## Steg 5

Lag et komponent som kan motta pokemon detaljer som props (bruk `pokemon` interfacen). Bruk disse props'ene til å vise detaljene for en enkelt pokemon. Største utfordringen i denne oppgaven er hvordan du skal velge hvilke `sprite` som skal brukes i `<img />` taggen.

## Steg 6 (hard - optional)

Forbedre funksjonaliteten til komponentet som vi lagde i `stage 1` ved å implementere pagination.

Her ønsker jeg at dere begrenser antall pokemon som vises om gangen til bare 10 stykker. Resultatet blir at det kun skal være 10 knapper for å vælge en pokemon. Du må så lage to nye knapper som er ansvarlig for å generere nye lister for 10 forrige/neste pokemon. _Hint: Hvis du ser på resultatet så kan du finne next/prev i resultatet. Kanskje du kan lagre disse i en state?_

## Steg 7 (bonus - optional)

Nå som vi har en fungerende nettside som kan hente ned en liste over tilgjengelige pokemons og vise detaljer for en enkelt pokemon så skal vi nå forbedre funksjonaliteten ved å gjøre fetch logikken om til hooks.

Her skal dere konvertere hver enkelt `useEffect` i et komponent om til sin egen hook som dere kan lagre i `src/hooks`, dere kan kalle dem for `usePokemonList.ts` og `usePokemon.ts`. I disse filene skal du lagre resultatet av `fetch` i en `useState`, du skal så kunne importere disse funksjonene i filer som trenger å bruke Pokemon data'en.
