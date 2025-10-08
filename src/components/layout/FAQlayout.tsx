import { Outlet } from "react-router"

export function FAQLayout() {
    return <div>
         <aside>

         </aside>
        <main>
            <h1>Answers</h1>
           <Outlet />
        </main>
    </div>
}