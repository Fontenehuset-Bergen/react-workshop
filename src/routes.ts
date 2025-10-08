import { index, route, prefix, layout, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("contact", "pages/contact/Page.tsx"),
    route("about", "pages/about/Page.tsx"),
    ...prefix("faq", [
        layout("faq/layout.tsx"), [
        index("pages/faq/Page.tsx"),
        route("react", "pages/faq/answers/react")
    ]]),
    
    route("*","not-found.tsx")
] satisfies RouteConfig;
