import { Outlet } from "react-router";
import contacts from "@/data/contactData.json"

export default function Layout() {
    return (
        <main>
            <aside>
                {contacts.map((person) => (
                    
                ))}
            </aside>
        </main>
    )
}