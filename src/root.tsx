import "./assets/styles/index.css"
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { HeaderLayout } from "./components/layout/Headers";
import { FooterLayout } from "./components/layout/Footer";

export function Layout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeaderLayout />
        {children}
        <FooterLayout />
        <ScrollRestoration />
         <Scripts />
      </body>
    </html>
  );
}

export default function App() {
    return <h1>hello world</h1>
}