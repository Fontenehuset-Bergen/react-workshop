import { index, route, prefix, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("contact", "pages/contact/Page.tsx"),
    route("about", "pages/about/Page.tsx"),
    ...prefix("faq", [
        index("pages/faq/Page.tsx"),
        route("react", "pages/faq/answers/react.tsx"),
    ]),
     ...prefix("test", [
        index("pages/faq/test/Page.tsx"),
    ]),
    
    route("*","not-found.tsx")
] satisfies RouteConfig;
