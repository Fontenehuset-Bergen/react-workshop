import { type NavigationData } from "@/types/navigation";
import { NavLink } from "react-router";

export function NavBarDesktop({ links }: { links: NavigationData[] }) {
  return (
    <nav className="flex gap-4">
      {links.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          className={({ isActive }) =>
            `!text-white ${isActive ? "!text-yellow-400 !underline" : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
