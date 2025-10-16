import { NavLink, Outlet } from "react-router";
import FAQHeader from "./header";
export default function FAQLayout() {
    const links = ["React", "Router", "Tailwind"]

    return (
        <main className="flex flex-col gap-4 p-2">
            <FAQHeader />
            <aside className="flex flex-col bg-[#e9a6d8] text-black p-2 rounded-md ml-20 mr-20 mt-5">
                <div className="pl-4 pr-4">
                    <p className="mb-2 mt-2 font-semibold text-2xl">Questions:</p>
                    <nav className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            {links.map((href) => (
                                <NavLink to={`/faq/${href}`} key={href} className={({ isActive }) => (isActive ? "font-bold " : "underline")}>
                                    {href}
                                </NavLink>
                            ))}
                            <NavLink to="/faq" className="font-semibold rounded-md mb-2 underline">Go to F.A.Q. Index</NavLink>
                        </div>
                    </nav>
                    <div className="bg-white text-pink-950 w-1wv p-2 rounded-md mt-5 pb-10">
                        <Outlet />
                    </div>

                </div>
            </aside>


        </main>
    )
}