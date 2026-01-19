# Vanlige feil ved bruk av state i React

Her er en samling av de feilene jeg har observert mest i mitt arbeid med React states

## Feil initialisering av useState

Mange gjør tung beregning i initial-verdien,leser props én gang og forventer at state oppdateres automatisk når props endres eller lar argumentet stå tomt. Bruk lazy initializer for dyre startverdier, og husk at state ikke “følger” props etter mount (da må du synke eksplisitt).

```tsx
// ❌ Variabel har ingen start verdi
const [resultat, oppdater] = useState();

// ❌ Funksjonen blir oppdatert på hver render
const [resultat, oppdater] = useState(veldigTreigFunksjon());

// ✅ Funksjonen kjører en gang
const [resultat, oppdater] = useState(() => veldigTreigFunksjon());
```

## Glemmer forrige state

Når ny verdi avhenger av forrige, må du bruke funksjonell oppdatering. Ellers kan du miste oppdateringer når React batcher flere kall i samme pulje.

```tsx
const [count, setCount] = useState(0);

// ❌ Disse blir kanskje slått sammen, resultatet blir ikke alltid 2 som forventet
setCount(count + 1);
setCount(count + 1);

// ✅ Når vi bruker funksjon vill alltid den nyeste verdien bli brukt som source
setCount((c) => c + 1);
setCount((c) => c + 1);
```

## Ignorerer immutabilitet

Å mutere objekter/arrayer direkte gjør at React ikke ser endringen (samme referanse). Lag nye kopier ved oppdatering.

```tsx
// ❌ Mutation
todos.push(newTodo);
setTodos(todos);

// ✅ Immutable update
setTodos((prev) => [...prev, newTodo]);
```

## Feiltolker asynkrone/batchede oppdateringer

setState oppdaterer ikke umiddelbart; React køer og batcher endringer. Les den nye verdien i neste render, ikke rett etter setState-kallet.

```tsx
const [count, setCount] = useState(0);

function increment() {
  setCount((old) => old + 1);
  console.log(count); // fremdeles 0
}
```

## Unnlater å bruke optional chaining

Forsøk på å lese dype felt kan krasje når mellomledd er null/undefined. Bruk ?. og gjerne ?? for trygg fallback.

```tsx
// ❌ kan kræsje
const name = user.profile.name;

// ✅ trygt
const name = user?.profile?.name ?? "Guest";
```

## Oppdatering av ett felt i objekt-state

useState merger ikke objekter for deg. Når du setter et objekt, må du bevare de andre feltene selv.

```js
const [user, setUser] = useState({ name: "Ole"; age: 5 });

// ❌ user mister feltet "age" og innerholder kun "name"
setUser({ name: "Ada" });

// ✅ vi lager en kopi av user og bruker destrukturering til å overskrive navnet
setUser(prev => ({ ...prev, name: "Ada" }));
```

## Håndtere flere input-felt i skjemaer

For mange useState-kroker blir fort tungvint; samle gjerne feltene i ett objekt med en generell onChange. Pass på immutabilitet.

```tsx
// ❌ Ikke opprett unødvendige states hvis de kan kombineres
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

// ✅ Samle dem sammen
const [formData, setFormData] = useState({ name: "", email: "", message: "" });

// Hvis du bare skal oppdatere et felt kan du bruke destrukturering
setFormData((data) => ({ ...data, message: "funker jo bra!" }));
```

## Legger ting i state som ikke bør forårsake UI-update

Timer-ID, DOM-noder, siste måling osv. hører som regel hjemme i `useRef`, ikke i `useState`

```tsx
// ❌ Forårsaker ui oppdaterring hvert sekund
const [time, setTime] = useState(0);

function start() {
  window.setInterval(() => setTime((t) => t + 1), 1000);
}

// ✅ Oppdaterer ikke UI selv om tallet øker hvert sekund
const timerId = useRef<number | null>(null);

function start() {
  timerId.current = window.setInterval(tick, 1000);
}
```

## Hvordan bruker jeg state riktig da?

Når du skriver en komponent som holder på state, må du ta valg om hvor mange state-variabler du trenger og hvilken form (struktur) dataene bør ha. Selv om det er mulig å skrive korrekt kode med en mindre optimal statestruktur, finnes det noen prinsipper som kan hjelpe deg å gjøre bedre valg:

- **Grupper relatert state** - Hvis du alltid oppdaterer to eller flere state-variabler samtidig, vurder å slå dem sammen til én state-variabel.
- **Unngå motstrid i state** - Når state er strukturert slik at flere deler kan motsi hverandre, øker sjansen for feil. Prøv å unngå dette.
- **Unngå redundant state** - Hvis du kan beregne en verdi ut fra komponentens props eller eksisterende state under rendering, bør du ikke lagre den som egen state.
- **Unngå duplisering i state** - Når de samme dataene ligger i flere state-variabler, eller gjentas i nestede objekter, blir det vanskelig å holde dem synkronisert. Reduser duplisering når du kan.
- **Unngå dypt nøstet state** - Dypt hierarkisk state er tungvint å oppdatere. Når det er mulig, foretrekk en flatere struktur.
