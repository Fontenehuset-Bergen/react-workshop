import { NavLink, Outlet } from "react-router";
import FAQHeader from "./header";
export default function FAQLayout() {
    const links = ["react", "router", "tailwind"]

    return (
        <main className="flex flex-col gap-4 p-2">
            <FAQHeader />
            <aside className="flex flex-col bg-pink-200 text-black p-2 rounded-md">
                <h1>Question</h1>
                <nav className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        {links.map((href) => (
                            <NavLink to={`/faq/${href}`} key={href} className={({ isActive }) => (isActive ? "underline" : "")}>
                                {href}
                            </NavLink>
                        ))}
                    </div>
                    <NavLink to="/faq" className="font-semibold">F.A.Q. Index</NavLink>
                </nav>
                <div className="bg-white text-pink-950 w-1wv p-2 m-2 rounded-md">               
            <Outlet />
            </div>
            </aside>


        </main>
    )
}