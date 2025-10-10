import { NavLink, Outlet } from "react-router";
import members from "@/data/memberData.json";

export default function Layout() {
    return (
        <main className="flex flex-row gap-6 w-160">
            <aside className="flex flex-col flex-1 gap-4 mt-30">
                {members.map((person) => (
                    <NavLink
                        to={"/members/" + person.userName}
                        key={person.userName}
                        className={({ isActive }) =>
                            `flex items-center gap-2 p-2 rounded-md 
                        ${isActive ? "bg-pink-500 hover:bg-pink-700 text-white" : "bg-pink-200 hover:bg-pink-300 text-black "}`
                        }>
                        <img src={person.profilePicture} className="w-22 aspect-auto h-20 rounded-md" />
                        <span className="flex flex-col justify-center gap-2">
                            <span className="relative">
                                <p className="text-sm text-gray-700 underline">Name:</p>
                                <p className="text-nowrap">
                                    {person.firstName} {person.lastName}
                                </p>
                            </span>
                            <span className="relative flex flex-col">
                                <p className="text-sm text-gray-700 underline">
                                    Username:
                                </p>
                                <p>{person.userName}</p>
                            </span>
                        </span>
                    </NavLink>
                ))}
            </aside>
            <div className="flex-2">
                <Outlet /> 
            </div>
        </main>
    );
}