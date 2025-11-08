# Typescript
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) (forkortet som TS) er bare vanlig javascript, men med data typer inkludert. Du skriver vanlig javascript i filene dine, men ligger til ekstra type informasjon som forklarer hva du forventer at variabler og funksjoner skal jobbe med.
All type informasjon som vi ligger til via Typescript blir gjort om til vanlig javascript når koden vår skal kjøre, så Typescript eksisterer kun når du utvikler koden din for at du skal finne feil lettere. Vi sier at "typescript kompilerer til vanlig js" slik at nettleseren og serveren kan forstå koden vår.

Hvofor skal vi så bry oss om Typescript hvis det bare blir om til Javascript da?
- Vi får færre bugs i koden vår
- Editoren skriker ut hvis du bruker feile types
- Vi får bedre autocomplete og suggestions
- Du ser med en gang hva funksjoner forventer av argumenter og returnerer
- Tryggere når du skal endre på eksisterende kode
- Types forlarer deg selv

## Grunnleggende types
[Primitive verdier](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
```ts
let n: number = 42;
let s: string = 'hei';
let ok: boolean = true;
let maybe: null | undefined; // kan være null eller undefined
```
[Arrays og objekter](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
```ts
let names: string[] = ['Ada', 'Linus'];
let nums: Array<number> = [1, 2, 3];  // alternativ syntaks

type Person = {
  id: number;
  name: string;
  email?: string;   // ? = valgfelt
  readonly role: 'user' | 'admin'; // kan ikke endres etterpå
};

const p: Person = { id: 1, name: 'Ada', role: 'admin' };
```
Du trenger ikke skrive type hver gang. TS gjetter seg ofte fram (type inference).
```ts
const count = 0;     // infer: number
const users = [];    // infer: any[] (tomt array → gi hint!)
const users2: Person[] = []; // bedre
```

## Funksjoner
[Parametere og returverdi](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)
```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string = 'venn'): string => `Hei, ${name}!`;
```

Valgfrie og rest-parametere
```ts
function log(message: string, level?: 'info' | 'warn' | 'error') { /* ... */ }
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
```

[void og never](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined)
```ts
function notify(msg: string): void { console.log(msg); }    // returnerer ingenting
function fail(msg: string): never { throw new Error(msg); } // avslutter alltid
```

Du kan havne i situasjoner hvor en type kan enten være A eller B, her kan vi bruke tegnet `|` som betyr [union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
```ts
type ID = number | string;

function load(id: ID) {
  if (typeof id === 'string') {
    // her vet TS at id er string
    return fetch(`/user/${id.toLowerCase()}`);
  }
  // her vet TS at id er number
  return fetch(`/user/${id}`);
}
```

## Interfaces og types
Når du trenger mer omfattende type informasjon for data har du muligheten til å declarere interfaces eller types som forklarer innholdet, for det meste gjør det det samme
```ts
type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// Det er også mulig å blande metodene
const bird3: BirdInterface = bird1;
```
du kan også utvide hvis du trenger å ligge til mer data
```ts
type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };
```

Du kan følge med dette eksempelet videre [i sandkassen til typescriptlang.org](https://www.typescriptlang.org/play/#code/PTAEBUAsFMCdtAQ3qALgdwPagLaIJYB2ammANgM4mgAm0AxmcgqjKBZIgA4KYBmSQgCgQoTACMAVg1QAuUEVRw+ietCqJCNNAE8eSMvkQV1AOhHALEGDqQoAbnFsV8OfE1gAaQdr6ZYaGw4mBSooPSYOMHE9MbqVqphrAgUiDjQ5kKoeggAQviwNOA5oAC8oADeQqCg6EQA5hTyAEwA3EIAvu1CisqqeQU0AJKESrAqapXVtQ1NoG2dQkIRhKGg4oMAjPL5hcX65RUzhI0toF3LmKthG4XNO4MjYxMIh8en8+fdorkMiACuJggOQAyvRYPguGF8Bp2KhYP96Kh-rBEGRdPoKDpQtAcJ4rPhUAByKhcEIucRkFjYXqwNwAD0C0AKoEB1MwmRWa1uNAAzA9Ck8+pNyjzNt8wFBoLZxJhWOx-lwybAwtB6UotA0xMkArSXhotBizFZ9gg0UYTFQaNhWDDQPYjApRnATEj8FcjRRvOhIO5oATneN+lROI4kKAANbSrCFTLZfQAeXQ6LehEwSJRhDR8nh-wQHVAADJQLsijl2vGEAAlCREMqVUBpjOwLNkeQqSj5oslx6Bl7dPX9UAABWgqnTEdAao1NCopdNUxqETImBRfH+bbQCOg7RqfEM6nbaJM7Q6PT7Q4Awr76FHiNPoFo573nkOqkvyKvxhuj53d6B93wQ8AOPHdFiEKkwkwZN5CTFMGzqE45mabwm2RFtsy3PMvgg6AwnoG873ka98FvR96yORCPhQ8JPzXH8QM7bxAOAjsgQuE1ODCVJ8Bob0EHgCIokfbQdFXVkgUHNQqEwRwAkrBJDDiChTFAEEeHofA+FItEyB0bxxD+NlQDE-4ZjIdF6jw9Y8LGKdYFgfwrHSChUislTQCGARTNASBZLgMQ5KZADyBXKj7Mc2AvRM8TYmEUQTAQPz0GBHgwQhKFwk0UAuEch06DQF0As0bRghQPx6DZGhnPUNz1FqGBiBjCMtTqeUpPqwwo1AEiyMITJoPggjSLvdphr6+tBolUAE0IBA8EkfxaC0vg4EfSZDIwaByMrAwLXq+wqA6igEhQVhEGhC9pLsXgeGIEqjT25SbvCFcTBocxRCgO10k0KgfLiqd1REwQnVfDbbDoRhkC1QkEnYBgrm0VBXAyJYOtAABpQkNUXHKUSi+RZXIMdCFPdGroQbHUFx99aJXFF5FCCETnJqwRmCuUYACWIgUQR64rTG4EAIzQrO0VdUBcAr+AJKXaAYDwLvdfqll24dFS4WxDmmZd-CZ+EGlPbp1c17W8dQTBsXkQh-hwQzYGNpZRAAEWgO6aC1D1TICepMGPbxbStFa1sISYIg3bRDKQKwyRcFGwyW-m5vqZXHFUgAJaDoCCvwAi4f5KVIvSgbj6BqtEStosJElw02uzYgs6g8G65IcFBjrMlEWbeAEZIbLWeAKC-a684R5kTgMdF+GC8urKsXn6uQVdDSr+0jsp6Kg7hVRJ388YwqsVh4EQbQ7X5v3MG0LgmEmS2d5VWRnbASAaa4JoQFCXf9-3aDTCE4AABHPMoQVYUGALyAA7M0XkUDeQAFZgBV3BJCVAABaY6aDDpoKrsAeBzQABsAAOZopCAAMABifBxDSHNDIUIIAA) 