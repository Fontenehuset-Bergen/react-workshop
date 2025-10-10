import { NavLink, Outlet } from "react-router";
import contacts from "@/data/contactData.json";

export default function Layout() {
  return (
    <main className="flex flex-row gap-4 p-2">
      <aside className="flex flex-col flex-1 gap-2">
        {contacts.map((person) => (
          <NavLink
            to={"/contacts/" + person.userName}
            key={person.userName}
            className={({ isActive }) =>
              `flex items-center gap-2 p-4 rounded-md ${isActive ? "bg-purple-200 hover:bg-purple-300" : "bg-white hover:bg-slate-100"}`
            }
          >
            <img
              src="/vite.svg"
              alt="profile picture"
              className="h-full aspect-square"
            />
            <span className="flex flex-col justify-center gap-2">
              <span className="relative">
                <p className="absolute -top-3 text-sm text-gray-600">name</p>
                <p className="text-nowrap">
                  {person.firstName} {person.lastName}
                </p>
              </span>
              <span className="relative">
                <p className="absolute -top-3 text-sm text-gray-600">
                  username
                </p>
                <p> {person.userName}</p>
              </span>
            </span>
          </NavLink>
        ))}
      </aside>
      <Outlet />
    </main>
  );
}
