import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

/**
 * Her kan vi ligge til flere ruter hvis vi trenger det. Du kan lese mer her
 * https://reactrouter.com/start/framework/routing
 */

export default [
  index("pages/home.tsx"),
  route("about", "pages/about/page.tsx"),
  route("contact", "pages/contact/page.tsx"),
  ...prefix("faq", [
    layout("components/layout/sidebar.tsx", [
      index("pages/faq/faqIndex.tsx"),
      route("react", "pages/faq/sections/react.tsx"),
      route("router", "pages/faq/sections/router.tsx"),
    ]),
  ]),
  route("/.well-known/appspecific/com.chrome.devtools.json", "debug-null.tsx"),
  route("*", "./not-found.tsx"),
] satisfies RouteConfig;
