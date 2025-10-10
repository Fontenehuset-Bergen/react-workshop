import type { Route } from "./+types/ContactPage"
import contacts from "@/data/contactData.json"

export async function loader({params}: Route.LoaderArgs) {
    const result = contacts.find(query => query.userName.toLowerCase() == params.userName.toLowerCase())

    return result
}

export default function ContactPage({ loaderData }: Route.ComponentProps) {
    // loader klarte ikke å finne denne personen
    if (!loaderData) {
        return <h1>Unable to get details for this person</h1>
    }

    // Vi kan hente ut feltene vi trenger fra loaderData
    const {firstName, lastName, bio,adress,age,city,phoneNumber,postNumber,userName,} = loaderData

    return <div className="flex flex-col">
        <h1>Contact page</h1>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        <p>{userName}</p>
        <p>{phoneNumber}</p>
        <p>{adress}</p>
        <p>{city}</p>
        <p>{postNumber}</p>
        <p>{bio}</p>
    </div>
}