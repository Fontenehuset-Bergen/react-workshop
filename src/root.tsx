import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "src/assets/styles/index.css"
import { Header } from "./components/layout/sections/header";
import { Footer } from "./components/layout/sections/footer";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <div className="page-content">
                    {children}
                </div>

                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />
}