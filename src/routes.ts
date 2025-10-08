import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("contact", "pages/contact/Page.tsx"),
    route("about", "pages/about/Page.tsx")
] satisfies RouteConfig;
