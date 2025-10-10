import { NavLink, Outlet } from "react-router";

export default function SidebarLayout(){
    return(
        <main className="flex !flex-row">
            <aside>
                <h3></h3>
                <ul>
                    <li>
                        <NavLink to="/faq"></NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/react"></NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/router"></NavLink>
                    </li>
                </ul>
            </aside>
            <Outlet/>
        </main>
    )
}