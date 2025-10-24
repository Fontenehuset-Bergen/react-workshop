import { NavLink, Outlet } from "react-router";

export default function SidebarLayout() {
  return (
    <main>
      <aside>
        <h3></h3>
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
