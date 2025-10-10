import { NavLink, Outlet } from "react-router";

export default function FAQLayout() {
  const links = ["react", "router", "tailwind"];

  return (
    <main className="flex flex-row gap-4 p-2">
      <aside className="flex flex-col bg-white text-black p-2 rounded-md">
        <h1>Question</h1>
        <nav className="flex flex-col gap-2">
          <NavLink to="/faq">faq index</NavLink>
          {links.map((href) => (
            <NavLink to={`/faq/${href}`} key={href} className={({ isActive }) => (isActive ? "underline" : "")}>
              {href}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1 bg-white text-black p-2 rounded-md">
        <Outlet />
      </div>
    </main>
  );
}
