# Henting av ekstern data

Når vi skal hente ekstern data i javascript prosjekter har vi mulighet til å bruke den innebygde funksjonen `fetch` ([w3](https://www.w3schools.com/js/js_api_fetch.asp)/[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)), for å kunne gjøre det samme i React må vi enten ligge det i en funksjon eller som en `Effect`.

Med `fetch()` API'en så kan du lage en forespørsel (request) som du enten gir et [request object](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) eller en `streng` som inneholder URL til hva du ønsker å hente. Her er et veldig forenklet eksempel som bruker `fetch` sammen med en url for å hente inn tilfeldige bilder av hunder som vi kan vise på nettsiden

```tsx
function MyComponent() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setImage(data.message as string);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <img src={image} />;
}
```

Alternativt kan du bruke async / await

```tsx
export function MyComponent() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    async function fetchDoggo() {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();

      if (data.status === "success") {
        setImage(data.message as string);
      }
    }

    fetchDoggo();
  }, []);

  return <img src={image} />;
}
```

## Trygge mønstre

Det er viktig at vi skriver komponenter som håndterer feil og forskjellige tilstander på en bra måte som ikke introduserer bugs, i eksempelet over kan vi se at jeg ikke har gjort følgende

- Fetch state - Signalisert at vi holder på å laste inn bilde
- No results - Hva hvis vi ikke hadde funnet noe bilde?
- Race conditions - Hvis komponentet blir updated mellom request og result kan vi få gammel data.

Vi har noen teknikker tilgjengelig for oss for å hjelpe med akkurat dette

### Conditional rendering

Vi kan begynne med å gi komponentet vårt en fallback i tilfelle vi ikke har rukket å hente et bilde ennå eller hvis vi ikke finner et bilde

```tsx
export function MyComponent() {
  // Vi kan f.eks starte med et gyldig bilde path
  const [image, setImage] = useState<string>("/images/myDoggo.png");

  useEffect(() => {
    async function fetchDoggo() {
      // Fetch logikken vår oppdaterer bare image hvis vi finner en gyldig URL
      // ...
    }

    fetchDoggo();
  }, []);

  // Eller så kan vi ha en condition i img taggen hvis strengen er tom
  return <img src={image ? image : "/images/myBackupDoggo.png"} />;
}
```

### Loading states

Vi kan lagre status på `fetch()` ved å opprette en `useState` som signaliserer om vi holder på å hente data.

```tsx
export function MyComponent() {
  // Vi kan f.eks starte med et gyldig bilde path
  const [image, setImage] = useState<string>("/images/myDoggo.png");
  const [status, setStatus] = useState<"loading" | "error" | "done">();

  useEffect(() => {
    async function fetchDoggo() {
      setStatus("loading");

      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();

      if (data.status === "success") {
        setImage(data.message as string);
        setStatus("done");
      } else {
        setStatus("error");
      }
    }

    fetchDoggo();
  }, []);

  // Hvis vi har fetchet et bilde vellykket kan vi vise det
  if (status === "done")
    return <img src={image ? image : "/images/myBackupDoggo.png"} />;

  // Ellers kan vi vise en status (veldig forenklet)
  return (
    <p>
      {status === "loading"
        ? "Image is loading"
        : "An error occoured when loading a doggo image"}
    </p>
  );
}
```

### Cleanup functions

Det er veldig enkelt å møte på race-conditions når vi bruker fetch siden dette er en asyncron operasjon som kan fort ta litt tid avhengig av nett. Vi har hovedsakelig to metoder for å løse dette, men begge bruker en cleanup funksjon for å fungere.

- Du kan bruke en variabel for å lagre state, da kan du ignorere resultater du ikke trenger
- Du kan bruke en AbortController for å kansellere `fetch` forespørsler slik at de ikke overskriver resultatet

```ts
useEffect(() => {
  // Vi oppretter en variabel
  let ignore = false;

  // Vi kaller fetch funksjonen kun hvis ignore er false, dvs at useEffect kjører for første gang
  if (!ignore) {
    async function fetchDoggo() {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();

      // Handle data
    }

    fetchDoggo();
  }

  return () => {
    // Vi sitter ignore til true for å hoppe over framtidige fetch forespørsler fram til komponentet unmounter
    ignore = true;
  };
});
```

samme eksempel, men med AbortController

```ts
useEffect(() => {
  // Vi oppretter en abort controller som kan sende et signal hvis noe skal stoppes
  const abortController = new AbortController();

  async function fetchDoggo() {
    // Vi kan ligge til abort controller i fetch funksjonen som et argument.
    const result = await fetch("https://dog.ceo/api/breeds/image/random", {
      signal: abortController.signal,
    });
    const data = await result.json();

    // Handle data
  }

  fetchDoggo();

  // Vi rydder opp funksjonen vår ved å kalle abort controlleren
  return () => abortController.abort();
});
```
