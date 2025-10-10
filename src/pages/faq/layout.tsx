import { NavLink, Outlet } from "react-router";

export default function Layout() {
  const links = ["react", "router"];
  return (
    <main className="flex flex-row gap-4 p-2">
      <aside className="flex flex-col bg-white text-black p-2 rounded-md">
        <h1>layout</h1>
        <a href="/">navn på link </a>
        <NavLink to="/faq">faq index </NavLink>
        {links.map((href) => (
          <NavLink
            to={`/faq/${href}`}
            key={href}
            className={({ isActive }) => (isActive ? "underline" : "")}
          >{href}</NavLink>
        ))}
      </aside>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
