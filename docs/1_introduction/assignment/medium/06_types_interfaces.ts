/**
 * Mål:
 * - Opprett nødvendige types som skal til for å forklare de forskjellige data typene under.
 * - Dere kan redigere innholdet i interface/types
 */

// 1) Lag en interface som passer for både person1 og person2 (tips: bruk valgfrie felter med ? der det trengs)
interface Person 
{
  name : string,
  hobbies : Array<string>,
  joined : Date,
  age? : Number,
  isAdmin?: boolean
}

const person1: Person = {
  name: "Åge",
  age: 55,
  hobbies: ["surfing", "sailing"],
  isAdmin: true,
  joined: new Date("2001-10-20"),
};
const person2: Person = {
  name: "Mia",
  hobbies: ["reading"],
  joined: new Date(),
};

// 2) Bruk interfaces inni interfaces
interface Address {
  city : string
}

interface User {

    id : Number,
    name : string,
    address? : Address
}

const u1: User = { id: 1, name: "Ada" };
const u2: User = { id: 2, name: "Linus", address: { city: "Bergen" } };

// 3) Lag en type hvor status kun kan være: idle, laoding, success eller error
type Status = "idle" | "loading" | "success";

const webpageStatus: Status = "idle";