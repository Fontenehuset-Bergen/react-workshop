# Oppgaver
Denne uken har vi sett på hvordan vi kan utvide funksjonaliteten i komponents med props og states. Jeg anbefaler å lage så mange nye komponenter med forskjellig funksjonalitet bare for repitisjon slik at konseptene rundt props og states føles mer naturlig.

# Easy
## Lag et komponent som mottar props
- Bruk typescript interfaces til å forklare hvordan data komponentet skal motta ser ut
- Komponentet skal returnere html kode hvor du bruker verdiene fra props
- Ligg til styling i komponentet slik at html koden ser bra ut

## Bruk conditionals i komponent
- Lag et nytt komponent med kriteriene fra forrige oppgave
- Prøv forskjellige [conditional rendering](https://react.dev/learn/conditional-rendering) teknikker. Du kan f.eks:
  - Skifte på tailwind styles med [template litteral](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  - Vise eller skjule html elementer enten if/else statements før return statement, eller inline i html kode

## Bruk iterasjon i komponentet
- Lag et komponent som mottar en array i props
- Itterer over array med den innebygde `.map()` metoden i javascript ([react tips](https://react.dev/learn/rendering-lists))

# Medium
## Lag et element som kan filtrere elementer i en array
- Bruk følgende liste over navn som prop
```ts
const names: string[] = ["Nora", "Lucas", "Emma"	,"Noa", "Olivia", "Oliver", "Sofie", "Emil", "Ella", "Jakob", "Maja", "William", "Sofia", "Theodor", "Leah", "Ludvig", "Selma", "Liam", "Ellinor"]
```
- Bruk et input felt til å søke igjennom listen om et navn eksisterer
- tips: `array.filter() `

## Lag et komponent som lar deg bruke "tabs" til å velge innhold
- Bruk useState() til å følge med hvilke tab som er aktiv
- Bruk tailwind til å style tab knappen hvis den er aktiv
- Vis forskjellig innhold i komponentet avhengig av hvilke knapp som er aktiv

# Bonus
## Lag en stoppeklokke
- Bruk `useRef` og `useEffect` til å lage en stoppeklokke komponent
- Komponentet skal fungere selv om du klikker andre steder på nettsiden

## Bruk useEffect til å ligge til event listeners
- Lag et komponent som vises hvis brukeren har scrollet på siden og forsvinner når de er på toppen av nettsiden.
- Bruk `useEffect` for å ligge til event listener
- Bruk `useState` til å håndtere visibility