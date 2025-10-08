import { Outlet } from "react-router";

export default function FAQPage() {
  return (
    <main>
      <h1>Frequently asked questions</h1>
      <ul>
        <li>What is react?</li>
        <Outlet />
      </ul>
    </main>
  );
}
