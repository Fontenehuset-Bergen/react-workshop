# Props

## Hva er props

## Hvordan blir data sent til komponentet?

## Definere props med type informasjon

## Children slot

## Default mønstre

Ofte kan det være ønskelig å la være å hele tiden sende props til et komponent, du kan istedet sitte default verdier for å unngå dette. Det finnes forskjellige teknikker du kan bruke, f.eks [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

```tsx
// Vi definerer props og bruker ? til å markere nøkkel som valgfri
interface MyProps {
  someText?: string;
}

// Du kan bruke default paramters
function MyComponent({ someText = "Default" }: MyProps) {
  return <p>{someText}</p>;
}

// Du kan bruke ternaries eller operators
function MyComponent({ someText }: MyProps) {
  return <p>{someText || "Default"}</p>;
}

// Du kan opprette variabler med defaults
function MyComponent({ someText }: MyProps) {
  const defaultText = someText ? someText : "Default";
  return <p>{defaultText}</p>;
}
```

---

<table width="100%">
  <tr>
    <td><a href="./2_static_components.md">← Statiske komponenter</a></td>
    <td align="right"><a href="./4_conditionals.md">Kondisjoner →</a></td>
  </tr>
</table>
