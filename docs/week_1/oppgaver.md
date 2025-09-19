# Uke 1 - Oppgaver
Vi har fokusert på å få opp et utviklingsmiljø og sitte opp en React nettside. Vi holder oppgavene dere kan gjøre litt lett for nå slik at vi ikke introdusere for mye nytt.

## Easy
### Lag noen komponenter
Vi pleier å ligge komponenter i `src/components` mappen, men akkurat nå har vi ingen komponenter. Du kan begynne med å lage ditt første komponent der!
Et enkelt komponent kan se slikt ut, men du kan selv ligge til mer kode i dette eksempelet. Her kan du leke litt med html kunnskapen din
```tsx
export function HelloWorld() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>lorem ipsum dol eres</p>
        </div>
    )
}
```

### Ligg til styling på komponenter og elementer
Prøv å skift litt på layout, farger og størrelser. Hvis du trenger en liten påminnelse i hvordan CSS syntax ser ut kan du sjekke [w3schools](https://www.w3schools.com/Css/)
```css
body {
    margin: 0;
    background-color: #242424;
}

#root {
    width: 100%;
    min-height: 100svh;
}
```

## Medium
### Prøv å ligg til css modules
Du kan bruke enten en global css eller lage css modules filer som ligger sammen med komponentene (f.eks `MyButton.tsx` med styling i `MyButton.module.css`). I denne oppgaven kan du lage css moduler til komponentene dine. Du kan lese mer på [w3school](https://www.w3schools.com/react/react_css_modules.asp). Husk å importere riktig!
```tsx
import styles from "path to css module"

export function MyButton() {
    return <button style={{styles}}>Min knapp!</button>
}
```

### Lag et komponent som bruker en enkel state
Vi har sett på hvordan du kan bruke `useState` til å holde følge med en enkel variabel.
Prøv å lag et komponent som bruker denne funksjonaliteten. Du kan f.eks
- Telle hvor mange ganger noen har trykket på en knapp
- Lage en toggle for å vise elementer
- Starte en klokke

Hvis du har lyst til å lese mer kan du finne informasjon i [react docs ](https://react.dev/reference/react/useState)eller på [w3schools](https://www.w3schools.com/react/react_usestate.asp).

## Vanskelig (bonus oppgaver)
### Ligg til plugins i Vite config
Vi kommer til å bruke Tailwind senere i undervisningen, men kanskje du har lyst til å ligge den til nå og leke deg litt? Du kan lese hva du må gjøre [her](https://tailwindcss.com/docs/installation/using-vite).

Etterpå kan du lese om tailwind styling [her](https://tailwindcss.com/docs/styling-with-utility-classes). Når du har sett litt på mulighetene kan du prøve å oppdatere komponentene du skrev tidligere fra vanlig CSS til Tailwind.

### Lek litt med props
Vi har lagd enkle komponenter fram til nå, hvis du vill kan du prøve å ligge til props slik at komponentet ditt kan motta data der det blir brukt. Hvis du ønsker å vite mer kan du lese [react docs](https://react.dev/learn/passing-props-to-a-component) eller [w3school](https://www.w3schools.com/react/react_props.asp).

Husk at prosjektet vårt er satt opp for Typescript så du må lage interface!
```tsx
interface MyButtonProps {
    label: string
}

export function MyButton(props: MyButtonProps) {
    return <button>{props.label}</button>
}

```