import type { Route } from "./+types/ContactPage"
import contacts from "@/data/contactData.json"

export async function loader({params}: Route.LoaderArgs) {
    const result = contacts.find(query => query.username.toLowerCase() == params.username.toLowerCase())

    return result
}

export default function ContactPage({ loaderData }:Route.ComponentProps) {
    // loader klarte ikke å finne denne personen
    if (!loaderData) {
        return <h1>Unable to get details for this person</h1>
    }

    // Vi kan hente ut feltene vi trenger fra loaderData
    const {firstname, lastname, username, phone, bio} = loaderData

    return <div className="flex flex-col">
        <h1>Contact page</h1>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{username}</p>
        <p>{phone}</p>       
        <p>{bio}</p>
    </div>
}