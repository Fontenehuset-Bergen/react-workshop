import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route(
    "/.well-known/appspecific/com.chrome.devtools.json",
    "pages/debug-null.tsx"
  ),
  route("*", "./not-found.tsx"),
] satisfies RouteConfig;
