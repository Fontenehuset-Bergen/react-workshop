# Styling i React
> [!NOTE]
> Vi kommer til å bruke tailwind i undervisningen

Vi kan velge å style React siden på flere forskjellige måter; vi kan bruke vanlig css med en svær fil, css modules for å dele opp koden og ha komponent basert styling, css preprocessors for å lage avansert styling ut fra funksjoner eller tailwind for klasse baserte styles.
Det er ikke anbefalt å blande mellom styling metoder, velg heller en og hold deg til den igjennom prosjektet

Det blir mer og mer vanlig å bruke Tailwind CSS sammen med en `global.css` hvor du kan spesifisere tailwind configs og root styles for prosjektet. Dette er løsningen vi kommer til å bruke når vi går videre i dette prosjektet. 

## Tradisjonel .css
Hvis du har kodet nettsider før med html og js har du nok møtt på css. Dette formatet definere for nettleseren hvordan html koden skal se ut og oppføre seg for brukeren. Det er fult mulig å bruke samme metode i React, men det er gjerne ikke idielt.
```css
.my-class {
  background-color: #1d1d1d;
  color: white;
}
```

```tsx
export function Button({children}) {
  return <button className="my-class">{children}</button>
}
```

## CSS Modules
Vi kan bruke vanlig .css formatering, men splitte opp filene slik at vi kun bruker styles der vi trenger de. Fordelen med denne metoden er at styles er "scooped" til komponentet de tilhører og vill ikke påvirke andre komponenter eller sider

`src/components/buttons/MyButton.module.css`
```css 
.root { padding: 0.5rem 1rem; border-radius: 0.5rem; }
.primary { background: var(--brand); color: white; }
.secondary { background: white; color: var(--brand); border: 1px solid var(--brand); }
```

`src/components/buttons/MyButton.tsx`
```tsx
import styles from "./MyButton.module.css"

// Classname
export function MyButton({ variant = "primary", children }) {
  const cls = variant === "primary" ? styles.primary : styles.secondary
  return <button className={styles.root + " " + cls}>{children}</button>
}

// Inline
export function MyButton({ children }) {
  return <button styles={styles.primary}>{children}</button>
}
```

## Tailwind
> [!NOTE]
> Tailwind har utfyllende dokumentasjon tilgjengelig på sin [nettside](https://tailwindcss.com/) og gode autocomplete support i vs-code

Tailwind er utility-first rammeverk der du skriver klasser direkte på elementene; `px-4`, `bg-slate-800`, `rounded-lg`. Du slipper å navngi klasser og hoppe mellom CSS og TSX, og får en konsistent design (spacing, farger, typografi) rett i komponenten uten å måtte definere verdier på nytt. Selv om du velger Tailwind har du fremdeles muligheten til å skrive vanlig css i `global.css` hvis du f.eks ønsker å definere all tekststørrelse en gang.

Største fordelen med å bruke tailwind er at det er veldig kjapt å ligge til styling når du skriver React kode, i dette eksempelet så sitter jeg bakgrunnsfarge, definerer størrelse og layout.
```tsx
export function MyButton() {
  return (
    <button className="flex items-center gap-2 p-2 bg-blue-300 hover:bg-blue-400">
      <Icon className="size-4" />
      <p className="font-bold">Click Me!</p>
    </button>
  )
}
```

<table width="100%">
  <tr>
    <td><a href="3_react.md">← React</a></td>
    <td align="right"><a href="../week_2/README.md">Neste emne →</a></td>
  </tr>
</table>