# Props

I React bruker vi props (properties) for å sende informasjon til et komponent, hovedintensjonen her er at å gjøre det lettere å vise data i en gjennbrukbar måte.

## Logikk

> [!NOTE]
> Det kan være smart å lese igjennom listen over `rules of react`, [link](https://react.dev/reference/rules)

Siden React komponenter har full tilgang på javascript kan vi også kjøre logikk i komponentet. Vi kan velge for eksempel å vise komponenter basert på props eller states, eller utføre datamanipulasjon. Her er det et viktig prinsipp vi må se på, komponenter bør være [idempotent](https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent)!

> Idempotens refererer til egenskapen til visse operasjoner i databehandling som kan bli brukt flere ganger uten å endre resultatet utover den første anvendelsen

```tsx
interface BusinessCardProps {
  name: string;
  title: string;
  image: string;
  isEmployeeOfTheMonth?: boolean;
}

// Vi kan bruke inline conditions
export function BusinessCard(props: BusinessCardProps) {
  return (
    <div>
      <img src={props.image} />
      <span>...</span>
      {isEmployeeOfTheMonth && <p>This guy is awesome!</p>}
    </div>
  );
}

// Vi kan bruke if else statements før return
export function GroceryShoppingList({ list, price }: SomeType) {
  if (list.length > 20) {
    return <span>too many items to show</span>;
  }

  return (
    <ul>
      {list.map((item) => (
        <li></li>
      ))}
    </ul>
  );
}

// Vi kan kjøre idempotent logikk
export function CurrencyConvert({ rate, value }: SomeType) {
  const newValue = value * rate;

  return (
    <span>
      💲{value} is 🇳🇴{newValue} when converted
    </span>
  );
}

// Vi kan kalle logikk via onClick
export function ShowWarning() {
    function handleClick() {
        window.alert("Super serious warning!")
    }

    return <button onClick={handleClick}>Show warning</button>
}
```

## Read-only

> [!NOTE]
> Du kan lese mer om hvordan komponenter bør kommunisere med hverandre [her](https://react.dev/learn/sharing-state-between-components)

Et annet viktig prinsipp er at props bør behandles som `read-only` verdier, det vill si at vi ikke manipulerer verdiene i komponentet som mottar data'en. Hvis du ser i eksempelet under så prøver vi å gi en ny verdi i et komponent som ligger inni et annet komponent med data fra det andre komponentet.

```tsx
function ParentComponent() {
  const agenda = ["Spise frokost", "Gå på tur med sjefen", "ringe til hunden"];

  return (
    <div>
      <p>What do i need to do today?</p>
      <ChildComponent todo={agenda} />
    </div>
  );
}

function ChildComponent(props: Agenda) {
  // Ikke endre på props verdier!
  props.todo.push("Handle på butikken");

  return (
    <ol>
      {props.todo.map((todo) => (
        <li>{todo}</li>
      ))}
    </ol>
  );
}
```
