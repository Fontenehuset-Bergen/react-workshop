import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("contact", "pages/contact/Page.tsx"),
  route("about/topic", "pages/about/topic/Page.tsx"),
  ...prefix("faq", [
    index("pages/faq/Page.tsx"),
    route("react", "pages/faq/answers/react.tsx"),
  ]),
  route("*", "not-found.tsx"),
] satisfies RouteConfig;
