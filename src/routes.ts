import {
    index,
    layout,
    prefix,
    route,
    type RouteConfig,
} from "@react-router/dev/routes";

export default [
    index("pages/Home.tsx"),
    route("contact", "pages/contact/ContactPage.tsx"),
    route("about", "pages/about/AboutPage.tsx"),
    route("about/topic", "pages/about/topic/topic.tsx"),

    ...prefix("faq", [
        layout("pages/faq/layout.tsx", [
            index("pages/faq/FaqPage.tsx"),
            route("react", "pages/faq/answers/react.tsx"),
            route("router", "pages/faq/answers/router.tsx"),
            route("*", "pages/faq/not-found.tsx"),
        ]),
    ]),

    ...prefix("members", [
        layout("pages/members/layout.tsx", [
            index("pages/members/index.tsx"), 
            route(":userName", "pages/members/members.tsx"),
           
        ])
    ]),


    route("*", "not-found.tsx")
] satisfies RouteConfig;