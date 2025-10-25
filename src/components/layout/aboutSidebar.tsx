import { NavLink, Outlet } from "react-router";

export default function SidebarLayout() {
  return (
    <main className="flex !flex-row">
      <aside className="h-fit max-h-[80svh] w-64 sticky top-16 flex flex-col p-4 gap-4 rounded-md bg-foreground">
        <h3 className="text-center">Get to know us</h3>
          <ul>
            <li>
              <NavLink to="/about">Index</NavLink>
            </li>
            <li>
              <NavLink to="/about/story">Our story</NavLink>
            </li>
            <li>
              <NavLink to="/about/work">Our work</NavLink>
            </li>
          </ul>
      </aside>
      <Outlet />
    </main>
  );
}