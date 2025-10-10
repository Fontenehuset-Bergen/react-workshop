import {
  index,
  route,
  layout,
  prefix,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("contact", "pages/contact/Page.tsx"),
  route("about", "pages/about/Page.tsx"),
  ...prefix("faq", [
    layout("pages/faq/layout.tsx", [
      index("pages/faq/Page.tsx"),
      route("react", "pages/faq/answers/react.tsx"),
      route("router", "pages/faq/answers/router.tsx")
    ]),
  ]),
  route("*", "not-found.tsx"),
] satisfies RouteConfig;
