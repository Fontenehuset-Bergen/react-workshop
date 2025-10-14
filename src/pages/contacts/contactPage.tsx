import type { Route } from "./+types/contactPage";
import { isRouteErrorResponse, useRouteError } from "react-router";
import contacts from "@/data/contacts/details.json";

/*
 * Loader er ansvarlig for å hente inn data og gjøre dette tilgjengelig for funksjonen 
 * som har default export, dvs; ContactPage. Typen "Route" blir generert av react router automatisk, 
 * vi må bare huske å importere den og bruke typen Route.LoaderArgs i funksjonen
 * 
 * Jeg har i tillegg lagt inn Responses som gjør at vi møter på 404 side hvis vi søker 
 * etter kontakter som ikke eksisterer.
 */
export async function loader({ params }: Route.LoaderArgs) {
  // Gjør param om til et nummer vi kan bruke
  const index = Math.abs(Number(params.id));

  // Sjekk at index faktisk er et nummer
  if (isNaN(index)) {
    throw new Response("Identifier must be a positive number", { status: 404 });
  }

  // Sjekk at index er mindre enn antall kontakter
  if (contacts.length <= index) {
    throw new Response("You don't have that many contacts, reduce the number", {
      status: 404,
    });
  }

  // Returner kontakt person
  return contacts.at(index);
}


/* 
 * For å kunne bruke data vi hentet i loader() så må vi bruke følgende samme type som i loader,
 * men istedet for Route.LoaderArgs så bruker vi Route.ComponentProps.
 * Sammen med typescript vill du da få intellisence/autocomplete på props, du kan teste
 * dette ved å holde musen over loaderData i din kode for å se props object keys
 */
export default function ContactPage({ loaderData }: Route.ComponentProps) {
  const { name, adress, phone } = loaderData!;
  return (
    <section>
      <h1 className="text-center">Kontakt detaljer</h1>
      <span>
        <p>{name}</p>
        <p>{adress}</p>
        <p>{phone}</p>
      </span>
    </section>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1 className="text-center">
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1 className="text-center">Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
