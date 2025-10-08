import { NavLink, Outlet } from "react-router";

export default function SidebarLayout() {
  return (
    <main className="flex !flex-row">
      <aside className="h-fit max-h-[80svh] w-64 sticky top-16 flex flex-col p-4 gap-4 rounded-md bg-foreground">
        <h3 className="text-center">Frequently asked questions</h3>
          <ul>
            <li>
              <NavLink to="/faq">Index</NavLink>
            </li>
            <li>
              <NavLink to="/faq/react">React</NavLink>
            </li>
            <li>
              <NavLink to="/faq/router">Router</NavLink>
            </li>
          </ul>
      </aside>
      <Outlet />
    </main>
  );
}
