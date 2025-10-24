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
  route("about", "pages/about/Page.tsx"),
  ...prefix("faq", [
    layout("components/layout/sidebar.tsx", [
      index("pages/faq/faqIndex.tsx"),
      index("react", "pages/faq/section/react.tsx"),
      index("router", "pages/faq/sections/routes.tsx"),
    ]),
  ]),
  route("*", "not-found.tsx"),
] satisfies RouteConfig;
